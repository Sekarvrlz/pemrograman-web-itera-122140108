// BookList.test.js
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import BookList from './BookList';

describe('BookList', () => {

  // Test 1: Render buku dengan benar
  test('renders book details correctly', () => {
    const book = { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'Read' };
    render(<BookList book={book} onDelete={() => {}} />);

    // Mengecek apakah semua informasi buku tampil dengan benar
    expect(screen.getByText(/The Great Gatsby/i)).toBeInTheDocument();
    expect(screen.getByText(/F. Scott Fitzgerald/i)).toBeInTheDocument();
    expect(screen.getByText(/Status: Read/i)).toBeInTheDocument();
  });

  // Test 2: Memastikan tombol "Hapus" memanggil fungsi onDelete dengan ID buku yang benar
  test('calls onDelete with correct id when delete button is clicked', () => {
    const book = { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'Read' };
    const onDeleteMock = jest.fn();
    render(<BookList book={book} onDelete={onDeleteMock} />);

    // Klik tombol "Hapus"
    fireEvent.click(screen.getByText(/Hapus/i));

    // Memastikan onDelete dipanggil dengan ID buku yang benar
    expect(onDeleteMock).toHaveBeenCalledWith(1);
  });

});
