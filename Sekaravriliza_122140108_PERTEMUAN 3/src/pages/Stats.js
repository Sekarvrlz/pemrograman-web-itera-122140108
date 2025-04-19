import React from 'react';
import { useBooks } from '../context/BookContext';

const Stats = () => {
  const { books } = useBooks();

  const totalBooks = books.length;
  const booksRead = books.filter((book) => book.status === 'Sedang Dibaca').length;
  const booksToBuy = books.filter((book) => book.status === 'Dibeli').length;

  return (
    <div className="page">
      <h1>📊 Statistik Buku</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h2>Total Buku</h2>
          <p>{totalBooks}</p>
        </div>
        <div className="stat-card">
          <h2>Buku Yang Sedang Dibaca</h2>
          <p>{booksRead}</p>
        </div>
        <div className="stat-card">
          <h2>Buku Yang Dibeli</h2>
          <p>{booksToBuy}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
