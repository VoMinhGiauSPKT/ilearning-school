import { useState, useCallback } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { cartReducer, CART_ACTIONS } from './cartReducer';
import { parsePrice, formatPrice } from '@/utils/currency';
import defaultThumbnail from '@/assets/CourseCard/reactlogoartwork.png';

const STORAGE_KEY = 'ilearning_cart_items';

/**
 * Custom hook quản lý toàn bộ nghiệp vụ giỏ hàng (Cart Business Logic).
 * Kết hợp useLocalStorage, cartReducer và quản lý đóng/mở Drawer.
 * 
 * @returns {Object} Dữ liệu giỏ hàng, tổng tiền và các hàm điều khiển
 */
export function useCartManager() {
  // 1. Quản lý danh sách món có đồng bộ LocalStorage tự động
  const [cartItems, setCartItems] = useLocalStorage(STORAGE_KEY, []);

  // 2. Quản lý trạng thái đóng/mở Drawer
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Helper hàm dispatch để áp dụng pure reducer lên cartItems
  const dispatch = useCallback(
    (action) => {
      setCartItems((prevItems) => cartReducer(prevItems, action));
    },
    [setCartItems]
  );

  // 3. Derived State: Tự động tính toán khi cartItems thay đổi
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.numericPrice || 0) * item.quantity,
    0
  );
  const formattedTotalAmount = formatPrice(totalAmount);

  // 4. Các hành động (Actions)
  const addToCart = useCallback(
    (course) => {
      if (!course || !course.id) return;

      const numericPrice = parsePrice(course.price);
      const normalizedItem = {
        id: course.id,
        title: course.title,
        price: course.price || formatPrice(numericPrice),
        numericPrice,
        thumbnail: course.thumbnail || defaultThumbnail,
      };

      dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: normalizedItem });
      setIsCartOpen(true); // Tự động mở drawer phản hồi trực quan
    },
    [dispatch]
  );

  const removeFromCart = useCallback(
    (courseId) => {
      dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: { id: courseId } });
    },
    [dispatch]
  );

  const updateQuantity = useCallback(
    (courseId, delta) => {
      dispatch({ type: CART_ACTIONS.UPDATE_QTY, payload: { id: courseId, delta } });
    },
    [dispatch]
  );

  const increaseQuantity = useCallback(
    (courseId) => updateQuantity(courseId, 1),
    [updateQuantity]
  );

  const decreaseQuantity = useCallback(
    (courseId) => updateQuantity(courseId, -1),
    [updateQuantity]
  );

  const clearCart = useCallback(() => {
    dispatch({ type: CART_ACTIONS.CLEAR });
  }, [dispatch]);

  const toggleCart = useCallback(() => setIsCartOpen((prev) => !prev), []);
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  return {
    cartItems,
    isCartOpen,
    totalCount,
    totalAmount,
    formattedTotalAmount,
    addToCart,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
  };
}

export default useCartManager;
