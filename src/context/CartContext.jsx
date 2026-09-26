import { createContext } from 'react';
import { useCartManager } from './cart/useCartManager';

export const CartContext = createContext(null);

/**
 * CartProvider: Chỉ làm nhiệm vụ phân phối dữ liệu (Dependency Injection)
 * Toàn bộ logic nghiệp vụ đã được tách ra các module chuyên biệt:
 * - utils/currency.js: Tiện ích tiền tệ
 * - hooks/useLocalStorage.js: Đồng bộ LocalStorage
 * - context/cart/cartReducer.js: Pure Reducer
 * - context/cart/useCartManager.js: Hook quản lý nghiệp vụ
 */
export function CartProvider({ children }) {
  const cartManager = useCartManager();
  return <CartContext.Provider value={cartManager}>{children}</CartContext.Provider>;
}

export default CartContext;
