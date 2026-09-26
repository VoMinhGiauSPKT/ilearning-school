export const CART_ACTIONS = {
  ADD_ITEM: 'CART/ADD_ITEM',
  REMOVE_ITEM: 'CART/REMOVE_ITEM',
  UPDATE_QTY: 'CART/UPDATE_QTY',
  CLEAR: 'CART/CLEAR',
};

/**
 * Pure Reducer xử lý các thao tác mảng giỏ hàng (Immutable).
 * Dễ dàng viết Unit Test độc lập mà không cần môi trường React.
 * 
 * @param {Array} items - Danh sách món hàng hiện tại
 * @param {Object} action - Action chứa type và payload
 * @returns {Array} Danh sách món hàng mới
 */
export function cartReducer(items = [], action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const newItem = action.payload;
      if (!newItem || !newItem.id) return items;

      const existingIndex = items.findIndex((item) => item.id === newItem.id);

      if (existingIndex > -1) {
        // Đã có trong giỏ -> tăng số lượng lên 1
        return items.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Chưa có trong giỏ -> thêm mới với quantity = 1
      return [...items, { ...newItem, quantity: 1 }];
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      const { id } = action.payload;
      return items.filter((item) => item.id !== id);
    }

    case CART_ACTIONS.UPDATE_QTY: {
      const { id, delta } = action.payload;
      return items
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + delta;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean); // Tự động loại bỏ món nếu newQuantity <= 0
    }

    case CART_ACTIONS.CLEAR:
      return [];

    default:
      return items;
  }
}
