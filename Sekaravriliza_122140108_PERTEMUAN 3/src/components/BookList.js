import React from 'react';
import { useBooks } from '../context/BookContext';

const BookList = ({ book, onDelete }) => {
  const { title, author, status, id } = book;

  return (
    <li>
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>Status: {status}</p>
      </div>
      <button onClick={() => onDelete(id)}>Hapus</button>
    </li>
  );
};

export default BookList;
