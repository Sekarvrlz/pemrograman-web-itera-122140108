from abc import ABC, abstractmethod
import os
import time

# Fungsi untuk membersihkan layar
def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

# Abstract class
class LibraryItem(ABC):
    def __init__(self, id, title):
        self._id = id
        self._title = title

    @property
    def title(self):
        return self._title

    @abstractmethod
    def display_info(self):
        pass

# Subclass Book
class Book(LibraryItem):
    def __init__(self, id, title, author):
        super().__init__(id, title)
        self._author = author

    def display_info(self):
        print(f"📘 [BOOK] ID: {self._id} | Title: {self._title} | Author: {self._author}")

# Subclass Magazine
class Magazine(LibraryItem):
    def __init__(self, id, title, issue):
        super().__init__(id, title)
        self._issue = issue

    def display_info(self):
        print(f"📰 [MAGAZINE] ID: {self._id} | Title: {self._title} | Issue: {self._issue}")

# Class Library untuk mengelola item
class Library:
    def __init__(self):
        self.__items = []

    def add_item(self, item):
        self.__items.append(item)
        print(f"\n✅ Item '{item.title}' berhasil ditambahkan!")

    def display_all_items(self):
        print("\n📚 DAFTAR ITEM PERPUSTAKAAN")
        print("="*40)
        if not self.__items:
            print("⚠️  Perpustakaan masih kosong.")
        else:
            for item in self.__items:
                item.display_info()
        print("="*40)

    def search_item(self, keyword):
        print(f"\n🔍 HASIL PENCARIAN UNTUK: '{keyword}'")
        print("="*40)
        found = False
        for item in self.__items:
            if keyword.lower() in item._id.lower() or keyword.lower() in item._title.lower():
                item.display_info()
                found = True
        if not found:
            print("❌ Item tidak ditemukan.")
        print("="*40)

# ----------------------
# Main Program (CLI)
# ----------------------
def main():
    library = Library()

    while True:
        clear()
        print("📖" + "="*10 + " SISTEM PERPUSTAKAAN " + "="*10)
        print("1️⃣  Tambah Item")
        print("2️⃣  Tampilkan Semua Item")
        print("3️⃣  Cari Item")
        print("4️⃣  Keluar")
        print("="*40)
        choice = input("🔰 Pilih menu (1️⃣  / 2️⃣  / 3️⃣  / 4️⃣  ) : ")

        if choice == "1":
            clear()
            print("➕ TAMBAH ITEM")
            item_type = input("📦 Jenis item (book/magazine): ").strip().lower()
            id = input("🆔 Masukkan ID: ").strip()
            title = input("📄 Masukkan Judul: ").strip()
            if item_type == "book":
                author = input("✍️  Masukkan Nama Pengarang: ").strip()
                book = Book(id, title, author)
                library.add_item(book)
            elif item_type == "magazine":
                issue = input("🗓️  Masukkan Edisi Majalah: ").strip()
                magazine = Magazine(id, title, issue)
                library.add_item(magazine)
            else:
                print("❗ Jenis item tidak dikenali.")
            input("\n🔁 Tekan Enter untuk kembali ke menu...")

        elif choice == "2":
            clear()
            library.display_all_items()
            input("\n🔁 Tekan Enter untuk kembali ke menu...")

        elif choice == "3":
            clear()
            keyword = input("🔎 Masukkan ID atau Judul yang dicari: ").strip()
            library.search_item(keyword)
            input("\n🔁 Tekan Enter untuk kembali ke menu...")

        elif choice == "4":
            clear()
            print("👋 Terima kasih telah menggunakan sistem perpustakaan.")
            time.sleep(1)
            break

        else:
            print("❌ Pilihan tidak valid. Coba lagi.")
            time.sleep(1)

if __name__ == "__main__":
    main()
