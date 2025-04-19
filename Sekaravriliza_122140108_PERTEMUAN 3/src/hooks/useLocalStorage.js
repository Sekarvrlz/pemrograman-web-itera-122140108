// useLocalStorage.js
import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const storedValue = (() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  })();

  const [value, setValue] = useState(storedValue);

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};
