import Header from '../Header/Header';
import CartDrawer from '@/components/common/CartDrawer/CartDrawer';
import './_mainLayout.scss';

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">{children}</main>
      <CartDrawer />
    </div>
  );
}
