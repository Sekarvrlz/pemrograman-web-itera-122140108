import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react';
import { BookProvider, useBookContext } from '../context/BookContext';
import useBookStats from './useBookStats';

const wrapper = ({ children }) => <BookProvider>{children}</BookProvider>;

describe('useBookStats', () => {
  test('initial stats are zero', () => {
    const { result } = renderHook(() => useBookStats(), { wrapper });

    expect(result.current.total).toBe(0);
    expect(result.current.milik).toBe(0);
    expect(result.current.baca).toBe(0);
    expect(result.current.beli).toBe(0);
  });

  test('updates stats when books are added', () => {
    const { result: contextResult } = renderHook(() => useBookContext(), { wrapper });

    act(() => {
      contextResult.current.addBook({ id: 1, title: 'Book 1', status: 'milik' });
      contextResult.current.addBook({ id: 2, title: 'Book 2', status: 'baca' });
      contextResult.current.addBook({ id: 3, title: 'Book 3', status: 'beli' });
    });

    const { result: statsResult } = renderHook(() => useBookStats(), { wrapper });

    expect(statsResult.current.total).toBe(3);
    expect(statsResult.current.milik).toBe(1);
    expect(statsResult.current.baca).toBe(1);
    expect(statsResult.current.beli).toBe(1);
  });
});
