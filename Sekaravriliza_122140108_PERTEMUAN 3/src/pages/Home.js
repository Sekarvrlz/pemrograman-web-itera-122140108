// src/pages/Home.js
import React, { useState } from 'react';
import { useBooks } from '../context/BookContext';
import BookForm from '../components/BookForm';
import BookFilter from '../components/BookFilter'; // <-- Tambahin ini

const Home = () => {
  const { books, deleteBook } = useBooks();
  const [statusFilter, setStatusFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const filteredBooks = books.filter((book) => {
    const matchesStatus = statusFilter
      ? book.status.toLowerCase().includes(statusFilter.toLowerCase())
      : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleEditClick = (book) => {
    setSelectedBook(book);
  };

  const handleFormClose = () => {
    setSelectedBook(null);
  };

  return (
    <div className="page">
      <h2 className="page-title">Daftar Buku</h2>
      <BookForm selectedBook={selectedBook} onSave={handleFormClose} />

      {/* Gunakan BookFilter di sini */}
      <BookFilter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Tabel Buku */}
      <div className="table-container">
        <table className="book-table">
          <thead>
            <tr>
              <th>Judul</th>
              <th>Penulis</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.status}</td>
                  <td>
                    <button onClick={() => handleEditClick(book)} className="btn-edit">Edit</button>
                    <button onClick={() => deleteBook(book.id)} className="btn-delete">Hapus</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Tidak ada buku yang ditemukan</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
