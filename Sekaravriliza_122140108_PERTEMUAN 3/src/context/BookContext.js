// src/context/BookContext.js
import React, { createContext, useContext, useState } from 'react';

const BookContext = createContext();

export const useBooks = () => {
  return useContext(BookContext);
};

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // Fungsi untuk menambah buku
  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  // Fungsi untuk menghapus buku
  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  // Fungsi untuk mengedit buku
  const editBook = (id, updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, ...updatedBook } : book
      )
    );
  };
  
  return (
    <BookContext.Provider value={{ books, addBook, deleteBook, editBook }}>
      {children}
    </BookContext.Provider>
  );
};
