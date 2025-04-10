TugaSin adalah aplikasi dashboard tugas mahasiswa berbasis web yang membantu pengguna untuk mencatat, mengelola, dan mengingatkan deadline tugas perkuliahan secara efisien. Dibuat menggunakan React dan menampilkan antarmuka yang responsif serta interaktif.

Fitur Utama
1. Tambah Tugas Baru: Isi judul, pilih mata kuliah, dan atur deadline tugas.
2. Pencarian Tugas: Cari tugas berdasarkan judul atau mata kuliah.
3. Sorting Deadline: Urutkan daftar tugas berdasarkan deadline secara naik/turun.
4. Pengingat Otomatis: Reminder berbentuk alert saat deadline tugas sudah dekat (kurang dari 1 menit).
5. Penyimpanan Lokal: Semua tugas disimpan secara otomatis di localStorage.
6. Hapus Tugas: Fitur untuk menghapus tugas dari daftar.

Screenshot Aplikasi
![alt text](<src/assets/screenshot tugas .png>)

Link Versel : (<https://tugasin-six.vercel.app/>)

Form Tambah Tugas
![alt text](<src/assets/sreenshot tugas..png>)

Fitur-Fitur Modern ES6+ yang Diimplementasikan
Berikut adalah daftar fitur ES6+ yang digunakan dalam kode:

1. Fitur ES6+	Deskripsi Penggunaan
let & const	Untuk deklarasi variabel yang bersifat block-scoped.
2. Arrow Function =>	Untuk menuliskan fungsi secara ringkas dan jelas.
3. Template Literals ` `	Untuk membuat teks dinamis, contohnya saat menampilkan tahun dan alert reminder.
4. Destructuring	Mengambil properti dari objek dan array, seperti useState, props.
5. Spread Operator ...	Digunakan untuk menyalin dan menambahkan tugas ke array tasks.
6. Optional Chaining ?.	Untuk menghindari error saat mengakses properti yang mungkin undefined.
7. Array.prototype.map & filter & sort	Digunakan untuk menampilkan daftar tugas, mencari, dan mengurutkan data.
8. useEffect & useState	Hook dari React untuk mengatur state dan efek samping (ES6 Modules & React Hooks).
9. Ternary Operator ? :	Digunakan untuk conditional rendering, misalnya untuk toggle sort dan validasi.
10. Default Parameters	Seperti pada useState(() => ...) untuk inisialisasi dari localStorage.
11. setTimeout() dengan closure	Untuk penjadwalan reminder berdasarkan perhitungan deadline.