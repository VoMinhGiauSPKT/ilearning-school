import { Trash2, Plus, Minus } from 'lucide-react';
import Button from '@/components/common/Button/Button';

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  if (!item) return null;

  return (
    <li className="cart-item">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="cart-item-thumbnail"
      />

      <div className="cart-item-info">
        <h4 className="cart-item-title">{item.title}</h4>
        <div className="cart-item-price">{item.price}</div>

        <div className="cart-item-actions">
          {/* Bộ điều khiển số lượng: [-] qty [+] */}
          <div className="qty-control">
            <button
              type="button"
              className="qty-btn"
              onClick={() => onDecrease(item.id)}
              aria-label="Giảm số lượng"
              title="Giảm số lượng"
            >
              <Minus size={14} />
            </button>

            <span className="qty-value">{item.quantity}</span>

            <button
              type="button"
              className="qty-btn"
              onClick={() => onIncrease(item.id)}
              aria-label="Tăng số lượng"
              title="Tăng số lượng"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Tái sử dụng Button component cho nút Xoá */}
          <Button
            variant="text"
            size="sm"
            className="remove-item-btn"
            onClick={() => onRemove(item.id)}
            icon={<Trash2 size={16} />}
            iconPosition="left"
            aria-label={`Xoá ${item.title} khỏi giỏ`}
            title="Xoá khoá học này"
          >
            Xoá
          </Button>
        </div>
      </div>
    </li>
  );
}
