# nilai_mahasiswa.py
def hitung_nilai_mahasiswa():
    mahasiswa = []
    jumlah = int(input("Masukkan jumlah mahasiswa: "))
    for i in range(jumlah):
        print(f"\nMahasiswa ke-{i+1}")
        nama = input("Nama: ")
        nim = input("NIM: ")
        uts = float(input("Nilai UTS: "))
        uas = float(input("Nilai UAS: "))
        tugas = float(input("Nilai Tugas: "))
        mahasiswa.append({
            "nama": nama,
            "nim": nim,
            "nilai_uts": uts,
            "nilai_uas": uas,
            "nilai_tugas": tugas
        })

    for m in mahasiswa:
        akhir = 0.3 * m["nilai_uts"] + 0.4 * m["nilai_uas"] + 0.3 * m["nilai_tugas"]
        m["nilai_akhir"] = akhir
        if akhir >= 80:
            m["grade"] = "A"
        elif akhir >= 70:
            m["grade"] = "B"
        elif akhir >= 60:
            m["grade"] = "C"
        elif akhir >= 50:
            m["grade"] = "D"
        else:
            m["grade"] = "E"

    print("\nData Mahasiswa:")
    print("{:<10} {:<8} {:<6} {:<6} {:<6} {:<13} {:<6}".format(
        "Nama", "NIM", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"
    ))
    for m in mahasiswa:
        print("{:<10} {:<8} {:<6} {:<6} {:<6} {:<13.2f} {:<6}".format(
            m["nama"], m["nim"], m["nilai_uts"], m["nilai_uas"], m["nilai_tugas"], m["nilai_akhir"], m["grade"]
        ))

    tertinggi = max(mahasiswa, key=lambda m: m["nilai_akhir"])
    terendah = min(mahasiswa, key=lambda m: m["nilai_akhir"])
    print(f"\nTertinggi: {tertinggi['nama']} ({tertinggi['nilai_akhir']:.2f})")
    print(f"Terendah: {terendah['nama']} ({terendah['nilai_akhir']:.2f})")

if __name__ == "__main__":
    hitung_nilai_mahasiswa()
