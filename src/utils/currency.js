/**
 * Chuyển đổi chuỗi định dạng tiền tệ hoặc số thành giá trị số nguyên.
 * Ví dụ: '7,500,000 đ' -> 7500000
 * @param {string|number} priceStr
 * @returns {number}
 */
export const parsePrice = (priceStr) => {
  if (typeof priceStr === 'number') return priceStr;
  return Number(String(priceStr || '').replace(/[^0-9]/g, '')) || 0;
};

/**
 * Định dạng số nguyên thành chuỗi tiền tệ tiếng Việt (VND).
 * Ví dụ: 7500000 -> '7,500,000 đ'
 * @param {number} amount
 * @returns {string}
 */
export const formatPrice = (amount) => {
  return (amount || 0).toLocaleString('vi-VN') + ' đ';
};
