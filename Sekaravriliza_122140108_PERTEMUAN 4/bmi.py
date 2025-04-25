# bmi_calculator.py
def hitung_bmi():
    # Input untuk berat badan dan tinggi badan
    berat = float(input("Masukkan berat badan (kg): "))
    tinggi = float(input("Masukkan tinggi badan (m): "))
    
    # Menghitung BMI
    bmi = berat / (tinggi ** 2)
    
    # Menampilkan hasil perhitungan BMI
    print(f"\nBMI Anda adalah: {bmi:.2f}")
    
    # Menentukan kategori BMI
    if bmi < 18.5:
        print("Kategori: Berat badan kurang")
    elif bmi < 25:
        print("Kategori: Berat badan normal")
    elif bmi < 30:
        print("Kategori: Berat badan berlebih")
    else:
        print("Kategori: Obesitas")

if __name__ == "__main__":
    hitung_bmi()
