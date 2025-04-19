// src/components/BookForm.js
import React, { useState, useEffect } from 'react';
import { useBooks } from '../context/BookContext';

const BookForm = ({ selectedBook = null, onSave }) => {
  const { addBook, editBook } = useBooks();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('');

  // Menangani jika buku sedang diedit
  useEffect(() => {
    if (selectedBook) {
      setTitle(selectedBook.title);
      setAuthor(selectedBook.author);
      setStatus(selectedBook.status);
    }
  }, [selectedBook]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedBook) {
      // Jika sedang mengedit buku, perbarui buku
      editBook(selectedBook.id, { title, author, status });
    } else {
      // Jika menambahkan buku baru
      addBook({ id: Date.now(), title, author, status });
    }

    // Reset form setelah submit
    setTitle('');
    setAuthor('');
    setStatus('');

    if (onSave) {
      onSave(); // Fungsi untuk menutup form setelah simpan
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Judul Buku"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Penulis Buku"
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)} required>
        <option value="">Pilih Status</option>
        <option value="Dimiliki">Dimiliki</option>
        <option value="Sedang Dibaca">Sedang Dibaca</option>
        <option value="Dibeli">Dibeli</option>
      </select>
      <button type="submit">{selectedBook ? 'Simpan Perubahan' : 'Tambah Buku'}</button>
    </form>
  );
};

export default BookForm;
