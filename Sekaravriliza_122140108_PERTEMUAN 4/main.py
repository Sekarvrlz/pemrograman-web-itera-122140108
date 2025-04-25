# main.py
import math_operations
from math_operations import celsius_to_fahrenheit, celsius_to_kelvin
from bmi import hitung_bmi

def jalankan_perhitungan():
    while True:
        print("\n=== Menu Perhitungan ===")
        print("1. Hitung BMI")
        print("2. Hitung Geometri")
        print("3. Konversi Suhu")
        pilihan = input("Pilih opsi (1/2/3): ")

        if pilihan == '1':
            # Menghitung BMI
            hitung_bmi()
        
        elif pilihan == '2':
            # Perhitungan geometri
            print("=== Geometri ===")
            sisi = float(input("Masukkan panjang sisi persegi: "))
            print("Luas persegi:", math_operations.luas_persegi(sisi))
            print("Keliling persegi:", math_operations.keliling_persegi(sisi))

            p = float(input("Masukkan panjang persegi panjang: "))
            l = float(input("Masukkan lebar persegi panjang: "))
            print("Luas persegi panjang:", math_operations.luas_persegi_panjang(p, l))
            print("Keliling persegi panjang:", math_operations.keliling_persegi_panjang(p, l))

            r = float(input("Masukkan jari-jari lingkaran: "))
            print("Luas lingkaran:", math_operations.luas_lingkaran(r))
            print("Keliling lingkaran:", math_operations.keliling_lingkaran(r))

        elif pilihan == '3':
            # Konversi suhu
            print("\n=== Konversi Suhu ===")
            celsius = float(input("Masukkan suhu dalam Celsius: "))
            print(f"{celsius}°C ke Fahrenheit:", celsius_to_fahrenheit(celsius))
            print(f"{celsius}°C ke Kelvin:", celsius_to_kelvin(celsius))

        else:
            print("Pilihan tidak valid. Silakan pilih opsi yang benar.")

        # Menanyakan kepada pengguna apakah ingin mengulang
        ulang = input("\nApakah Anda ingin menghitung lagi? (y/n): ").lower()
        if ulang != 'y':
            print("Terima kasih telah menggunakan program ini!")
            break

if __name__ == "__main__":
    jalankan_perhitungan()
