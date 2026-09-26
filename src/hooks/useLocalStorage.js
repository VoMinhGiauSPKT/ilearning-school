import { useState, useEffect } from 'react';

/**
 * Custom hook quản lý state có đồng bộ tự động với LocalStorage.
 * Tái sử dụng được cho bất kỳ tính năng nào (Cart, DarkMode, User Profile...).
 * 
 * @template T
 * @param {string} key - Tên key trong localStorage
 * @param {T | (() => T)} initialValue - Giá trị mặc định ban đầu
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>]}
 */
export function useLocalStorage(key, initialValue) {
  // 1. Đọc dữ liệu ban đầu từ localStorage (chỉ chạy 1 lần khi khởi tạo)
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        return JSON.parse(item);
      }
      return typeof initialValue === 'function' ? initialValue() : initialValue;
    } catch (error) {
      console.warn(`Lỗi khi đọc key "${key}" từ localStorage:`, error);
      return typeof initialValue === 'function' ? initialValue() : initialValue;
    }
  });

  // 2. Tự động lưu vào localStorage mỗi khi storedValue thay đổi
  useEffect(() => {
    try {
      if (storedValue !== undefined) {
        localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.warn(`Lỗi khi ghi key "${key}" vào localStorage:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
