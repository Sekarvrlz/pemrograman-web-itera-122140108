import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// Komponen pembungkus untuk mengakses hook dalam test
const LocalStorageTestComponent = ({ storageKey, initialValue }) => {
  const [value, setValue] = useLocalStorage(storageKey, initialValue);

  return (
    <div>
      <div>Stored Value: {value}</div>
      <button onClick={() => setValue('new value')}>Set New Value</button>
    </div>
  );
};

describe('useLocalStorage', () => {
  beforeEach(() => {
    // Reset mock localStorage
    jest.spyOn(Storage.prototype, 'getItem');
    jest.spyOn(Storage.prototype, 'setItem');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('returns initial value if no value is stored', () => {
    localStorage.getItem.mockReturnValue(null);

    render(<LocalStorageTestComponent storageKey="myKey" initialValue="default value" />);
    expect(screen.getByText('Stored Value: default value')).toBeInTheDocument();
  });

  test('retrieves value from localStorage if it exists', () => {
    localStorage.getItem.mockReturnValue(JSON.stringify('stored value'));

    render(<LocalStorageTestComponent storageKey="myKey" initialValue="default value" />);
    expect(screen.getByText('Stored Value: stored value')).toBeInTheDocument();
  });

  test('updates localStorage when setValue is called', () => {
    localStorage.getItem.mockReturnValue(null);

    render(<LocalStorageTestComponent storageKey="myKey" initialValue="default value" />);
    fireEvent.click(screen.getByText('Set New Value'));

    expect(localStorage.setItem).toHaveBeenCalledWith('myKey', JSON.stringify('new value'));
  });
});
