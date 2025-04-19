Manajemen Buku Pribadi
Aplikasi Manajemen Buku Pribadi adalah sebuah aplikasi berbasis React yang dirancang untuk membantu pengguna dalam mengelola koleksi buku milik pribadi. Dengan tampilan yang sederhana namun fungsional, pengguna dapat mencatat buku yang mereka miliki, memfilter berdasarkan status, serta menambahkan atau menghapus data buku sesuai kebutuhan. Aplikasi ini sangat cocok digunakan oleh pelajar, mahasiswa, atau siapa pun yang gemar membaca dan ingin menjaga catatan bacaan mereka tetap rapi dan terorganisir.

Cara Instalasi dan Menjalankan Aplikasi
1. buka crome lalu salin link berikut (<https://book-binder.vercel.app/>)

Cuplikan Antarmuka Aplikasi
Berikut adalah tampilan dari beberapa bagian utama aplikasi:

🔹 Halaman Beranda
    ![alt text](<public/antarmuka home 1.png>)
🔹 Tabel buku
    ![alt text](<public/antarmuka home 2.png>)
🔹 Halaman Statistik untuk melihat total buku dan berapa buku yang sedang di baca dan buku yang di beli
    ![alt text](<public/antarmuka statistik .png>)

Fitur React yang Digunakan
Aplikasi ini dibangun dengan berbagai fitur modern dari React, antara lain:

    1. React Hooks
    Digunakan useState dan useEffect untuk mengelola state lokal dan efek samping. Selain itu, terdapat custom hooks seperti useLocalStorage untuk menyimpan data di local storage, dan useBookStats untuk menghitung statistik buku.

    2. React Context API
    Digunakan untuk membuat BookContext, sehingga state terkait buku dapat diakses dan dimodifikasi dari berbagai komponen tanpa perlu prop drilling.

    3. React Router
    Untuk navigasi antar halaman dalam aplikasi, digunakan react-router-dom dengan komponen seperti BrowserRouter, Routes, dan Route.

    4. Component-based Structure
    Seluruh fitur aplikasi dipisahkan menjadi komponen yang terstruktur seperti BookList, BookForm, BookFilter, dan lain-lain agar mudah dalam pengembangan dan pemeliharaan.

Pengujian Aplikasi
Untuk memastikan fungsionalitas berjalan dengan baik, aplikasi ini dilengkapi dengan unit test menggunakan Jest dan React Testing Library. Beberapa bagian penting yang diuji meliputi hooks (useLocalStorage, useBookStats), serta komponen seperti BookForm ,BookList,dan BookFilter.
