// BookForm.test.js
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookForm from './BookForm';
import { useBooks } from '../context/BookContext';

// Mocking useBooks context hook
jest.mock('../context/BookContext', () => ({
  useBooks: jest.fn(),
}));

describe('BookForm', () => {
  const addBookMock = jest.fn();
  const editBookMock = jest.fn();
  const onSaveMock = jest.fn();

  beforeEach(() => {
    useBooks.mockReturnValue({ addBook: addBookMock, editBook: editBookMock });
  });

  // Test 1: Memastikan form dirender dengan benar
  test('renders form with inputs', () => {
    render(<BookForm onSave={onSaveMock} />);
    
    // Mengecek elemen input dan select ada di dalam form
    expect(screen.getByPlaceholderText(/Judul Buku/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Penulis Buku/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText(/Tambah Buku/i)).toBeInTheDocument();
  });

  // Test 2: Memastikan form diisi dengan data buku yang sudah ada saat edit
  test('renders form with existing book data for editing', () => {
    const selectedBook = {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      status: 'Dimiliki',
    };
    
    render(<BookForm selectedBook={selectedBook} onSave={onSaveMock} />);
    
    // Mengecek apakah input sudah terisi dengan data buku yang ada
    expect(screen.getByDisplayValue('The Great Gatsby')).toBeInTheDocument();
    expect(screen.getByDisplayValue('F. Scott Fitzgerald')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Dimiliki')).toBeInTheDocument();
  });

  // Test 3: Memastikan addBook dipanggil dengan benar saat menambah buku
  test('calls addBook when adding a new book', async () => {
    render(<BookForm onSave={onSaveMock} />);

    // Simulasikan input
    fireEvent.change(screen.getByPlaceholderText(/Judul Buku/i), { target: { value: 'New Book' } });
    fireEvent.change(screen.getByPlaceholderText(/Penulis Buku/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Dibeli' } });

    // Simulasikan submit form
    fireEvent.click(screen.getByText(/Tambah Buku/i));

    // Pastikan addBook dipanggil dengan data yang benar
    await waitFor(() => {
      expect(addBookMock).toHaveBeenCalledWith({
        id: expect.any(Number), // ID seharusnya berupa number, tetapi kami tidak peduli nilai pastinya
        title: 'New Book',
        author: 'John Doe',
        status: 'Dibeli',
      });
    });

    // Memastikan form direset setelah submit
    expect(screen.getByPlaceholderText(/Judul Buku/i).value).toBe('');
    expect(screen.getByPlaceholderText(/Penulis Buku/i).value).toBe('');
    expect(screen.getByRole('combobox').value).toBe('');
  });

  // Test 4: Memastikan editBook dipanggil dengan benar saat mengedit buku
  test('calls editBook when editing an existing book', async () => {
    const selectedBook = {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      status: 'Dimiliki',
    };
    
    render(<BookForm selectedBook={selectedBook} onSave={onSaveMock} />);

    // Simulasikan perubahan input
    fireEvent.change(screen.getByPlaceholderText(/Judul Buku/i), { target: { value: 'Updated Book' } });
    fireEvent.change(screen.getByPlaceholderText(/Penulis Buku/i), { target: { value: 'Updated Author' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Sedang Dibaca' } });

    // Simulasikan submit form
    fireEvent.click(screen.getByText(/Simpan Perubahan/i));

    // Pastikan editBook dipanggil dengan data yang benar
    await waitFor(() => {
      expect(editBookMock).toHaveBeenCalledWith(1, {
        title: 'Updated Book',
        author: 'Updated Author',
        status: 'Sedang Dibaca',
      });
    });
  });

  // Test 5: Memastikan onSave dipanggil setelah form disubmit
  test('calls onSave after form is submitted', async () => {
    render(<BookForm onSave={onSaveMock} />);

    // Simulasikan input dan submit form
    fireEvent.change(screen.getByPlaceholderText(/Judul Buku/i), { target: { value: 'Test Book' } });
    fireEvent.change(screen.getByPlaceholderText(/Penulis Buku/i), { target: { value: 'Test Author' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Dimiliki' } });

    fireEvent.click(screen.getByText(/Tambah Buku/i));

    // Pastikan onSave dipanggil setelah submit
    await waitFor(() => {
      expect(onSaveMock).toHaveBeenCalled();
    });
  });
});
