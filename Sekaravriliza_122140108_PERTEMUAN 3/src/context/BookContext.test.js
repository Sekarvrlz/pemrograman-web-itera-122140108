// BookContext.test.js
import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BookProvider, useBooks } from './BookContext';

// Komponen untuk mengakses context di dalam test
const TestComponent = () => {
  const { books, addBook, deleteBook, editBook } = useBooks();

  return (
    <div>
      <button onClick={() => addBook({ id: 1, title: 'Book 1', author: 'Author 1', status: 'Dimiliki' })}>
        Add Book
      </button>
      <button onClick={() => deleteBook(1)}>Delete Book</button>
      <button onClick={() => editBook(1, { title: 'Updated Book' })}>Edit Book</button>
      
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author} ({book.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

describe('BookContext', () => {
  // Test 1: Memastikan fungsi addBook menambahkan buku ke dalam state
  test('addBook adds a new book to the state', () => {
    render(
      <BookProvider>
        <TestComponent />
      </BookProvider>
    );

    // Simulasikan klik untuk menambah buku
    fireEvent.click(screen.getByText(/Add Book/i));

    // Pastikan buku ditambahkan ke dalam daftar
    expect(screen.getByText('Book 1 - Author 1 (Dimiliki)')).toBeInTheDocument();
  });

  // Test 2: Memastikan fungsi deleteBook menghapus buku dari state
  test('deleteBook removes a book from the state', () => {
    render(
      <BookProvider>
        <TestComponent />
      </BookProvider>
    );

    // Menambahkan buku terlebih dahulu
    fireEvent.click(screen.getByText(/Add Book/i));

    // Pastikan buku ada di daftar
    expect(screen.getByText('Book 1 - Author 1 (Dimiliki)')).toBeInTheDocument();

    // Simulasikan klik untuk menghapus buku
    fireEvent.click(screen.getByText(/Delete Book/i));

    // Pastikan buku sudah tidak ada di daftar
    expect(screen.queryByText('Book 1 - Author 1 (Dimiliki)')).toBeNull();
  });

  // Test 3: Memastikan fungsi editBook mengubah data buku
  test('editBook updates a book in the state', () => {
    render(
      <BookProvider>
        <TestComponent />
      </BookProvider>
    );

    // Menambahkan buku terlebih dahulu
    fireEvent.click(screen.getByText(/Add Book/i));

    // Pastikan buku ada di daftar
    expect(screen.getByText('Book 1 - Author 1 (Dimiliki)')).toBeInTheDocument();

    // Simulasikan klik untuk mengedit buku
    fireEvent.click(screen.getByText(/Edit Book/i));

    // Pastikan data buku telah diperbarui
    expect(screen.getByText('Updated Book - Author 1 (Dimiliki)')).toBeInTheDocument();
  });
});
