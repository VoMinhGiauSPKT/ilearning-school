import { X, ShoppingBag } from 'lucide-react';
import useCart from '@/hooks/useCart';
import useModalBehavior from '@/hooks/useModalBehavior';
import Button from '@/components/common/Button/Button';
import CartItem from './CartItem';
import CartEmptyState from './CartEmptyState';
import CartFooter from './CartFooter';
import './_cartDrawer.scss';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    totalCount,
    formattedTotalAmount,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    closeCart,
  } = useCart();

  // Tái sử dụng custom hook khóa scroll & bắt phím ESC
  useModalBehavior({ isOpen: isCartOpen, onClose: closeCart });

  if (!isCartOpen) return null;

  const handleExploreCourses = () => {
    closeCart();
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    alert(`Chức năng thanh toán cho đơn hàng ${formattedTotalAmount} đang được phát triển!`);
  };

  return (
    <div className="cart-drawer-overlay">
      {/* Backdrop mờ phía sau */}
      <div className="cart-backdrop" onClick={closeCart} aria-hidden="true" />

      {/* Panel trượt từ bên phải sang */}
      <aside className="cart-panel" role="dialog" aria-modal="true" aria-label="Giỏ hàng">
        {/* Header Giỏ hàng */}
        <div className="cart-header">
          <div className="cart-header-title-wrap">
            <ShoppingBag size={22} className="cart-header-icon" />
            <h2 className="cart-title">Giỏ hàng của bạn</h2>
            {totalCount > 0 && <span className="cart-count-badge">{totalCount}</span>}
          </div>

          {/* Tái sử dụng Button component cho nút đóng */}
          <Button
            variant="text"
            shape="square"
            size="sm"
            className="cart-close-btn"
            onClick={closeCart}
            aria-label="Đóng giỏ hàng"
            icon={<X size={20} />}
          />
        </div>

        {/* Nội dung danh sách món (hoặc trạng thái trống) */}
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <CartEmptyState onExplore={handleExploreCourses} />
          ) : (
            <ul className="cart-items-list">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </ul>
          )}
        </div>

        {/* Footer: Tổng tiền & Nút thanh toán */}
        {cartItems.length > 0 && (
          <CartFooter
            totalCount={totalCount}
            formattedTotalAmount={formattedTotalAmount}
            onCheckout={handleCheckout}
            onClear={clearCart}
          />
        )}
      </aside>
    </div>
  );
}
