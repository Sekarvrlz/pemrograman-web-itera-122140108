import React from 'react';
import { useBooks } from '../context/BookContext';


const BookFilter = ({ setFilter }) => {
  return (
    <div className="filter-section">
      <input
        type="text"
        placeholder="Cari Buku"
        onChange={(e) => setFilter(e.target.value)}
      />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">Semua Status</option>
        <option value="Dimiliki">Dimiliki</option>
        <option value="Sedang Dibaca">Sedang Dibaca</option>
        <option value="Beli">Dibeli</option>
      </select>
    </div>
  );
};

export default BookFilter;
