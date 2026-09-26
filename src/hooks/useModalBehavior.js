import { useEffect } from 'react';

/**
 * Custom hook quản lý hành vi chuẩn của Modal / Drawer / Dialog:
 * 1. Khóa scroll của body khi modal đang mở (tránh cuộn trang nền).
 * 2. Lắng nghe phím Escape (ESC) để đóng modal.
 * 
 * Tái sử dụng được cho mọi Modal, Drawer, Popup trong toàn ứng dụng.
 * 
 * @param {Object} options
 * @param {boolean} options.isOpen - Trạng thái modal đang mở hay đóng
 * @param {Function} options.onClose - Hàm gọi khi người dùng muốn đóng (nhấn ESC)
 */
export function useModalBehavior({ isOpen, onClose }) {
  // 1. Khóa scroll của body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 2. Lắng nghe phím Escape
  useEffect(() => {
    if (!isOpen || typeof onClose !== 'function') return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);
}

export default useModalBehavior;
