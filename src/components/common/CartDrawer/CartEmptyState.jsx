import { ShoppingBag, ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button/Button';

export default function CartEmptyState({ onExplore }) {
  return (
    <div className="cart-empty-state">
      <div className="empty-icon-wrap">
        <ShoppingBag size={48} />
      </div>
      <h3 className="empty-title">Giỏ hàng trống</h3>
      <p className="empty-desc">
        Bạn chưa thêm khoá học nào vào giỏ hàng. Hãy khám phá các khoá học thực tế tại iLearning!
      </p>
      <Button
        variant="primary"
        shape="rounded"
        className="explore-courses-btn"
        onClick={onExplore}
        icon={<ArrowRight size={18} />}
      >
        Khám phá khoá học
      </Button>
    </div>
  );
}
