// BookFilter.test.js
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from './BookFilter';

describe('BookFilter', () => {

  // Test 1: Render input dan select dengan benar
  test('renders input and select elements correctly', () => {
    render(<BookFilter setFilter={() => {}} />);
    
    // Mengecek apakah input dan select ada di dalam komponen
    const inputElement = screen.getByPlaceholderText(/Cari Buku/i);
    const selectElement = screen.getByRole('combobox');
    
    expect(inputElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
  });

  // Test 2: Memastikan setFilter dipanggil dengan benar ketika input berubah
  test('calls setFilter with correct value when input changes', () => {
    const setFilterMock = jest.fn();
    render(<BookFilter setFilter={setFilterMock} />);
    
    // Simulasikan perubahan pada input
    fireEvent.change(screen.getByPlaceholderText(/Cari Buku/i), {
      target: { value: 'Harry Potter' }
    });

    // Memastikan setFilter dipanggil dengan nilai yang benar
    expect(setFilterMock).toHaveBeenCalledWith('Harry Potter');
  });

  // Test 3: Memastikan setFilter dipanggil dengan benar ketika select berubah
  test('calls setFilter with correct value when select changes', () => {
    const setFilterMock = jest.fn();
    render(<BookFilter setFilter={setFilterMock} />);
    
    // Simulasikan perubahan pada select
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'Dimiliki' }
    });

    // Memastikan setFilter dipanggil dengan nilai yang benar
    expect(setFilterMock).toHaveBeenCalledWith('Dimiliki');
  });

  // Test 4: Memastikan select memiliki opsi yang benar
  test('renders correct options in select', () => {
    render(<BookFilter setFilter={() => {}} />);
    
    // Mengecek opsi yang ada di dalam select
    const options = screen.getAllByRole('option');
    expect(options[0].textContent).toBe('Semua Status');
    expect(options[1].textContent).toBe('Dimiliki');
    expect(options[2].textContent).toBe('Sedang Dibaca');
    expect(options[3].textContent).toBe('Dibeli');
  });
});
