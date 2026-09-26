import Button from '@/components/common/Button/Button';

export default function CartFooter({
  totalCount,
  formattedTotalAmount,
  onCheckout,
  onClear,
}) {
  return (
    <div className="cart-footer">
      <div className="cart-subtotal-row">
        <span className="subtotal-label">Tổng cộng ({totalCount} khoá học):</span>
        <span className="subtotal-amount">{formattedTotalAmount}</span>
      </div>

      <div className="cart-checkout-actions">
        {/* Nút Thanh toán tái sử dụng Button variant="primary" */}
        <Button
          variant="primary"
          shape="rounded"
          className="checkout-btn"
          onClick={onCheckout}
        >
          Tiến hành thanh toán
        </Button>

        {/* Nút Xoá tất cả tái sử dụng Button variant="text" */}
        <Button
          variant="text"
          size="sm"
          className="clear-cart-btn"
          onClick={onClear}
        >
          Xoá tất cả
        </Button>
      </div>
    </div>
  );
}
