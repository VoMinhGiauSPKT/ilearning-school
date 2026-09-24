import { useState } from 'react';
import { Menu } from 'lucide-react';
import { navLinks } from '@/data/homeData';
import logoSvg from '@/assets/logo/logo.svg';
import Button from '@/components/common/Button/Button';
import MobileDrawer from './MobileDrawer';
import './_mobileHeader.scss';

export default function MobileHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="mobile-site-header">
      <div className="mobile-header-container">
        {/* Brand Logo */}
        <a href="#" className="mobile-brand-logo">
          <img src={logoSvg} alt="iLearning School Logo" className="mobile-brand-logo-img" />
          <div className="mobile-logo-text">
            <span className="mobile-logo-main">iLearning</span>
            <span className="mobile-logo-sub">School</span>
          </div>
        </a>

        {/* Mobile Actions: "Liên hệ tư vấn" + Hamburger Menu */}
        <div className="mobile-header-actions">
          <Button variant="primary" shape="square" className="mobile-consult-btn">
            Liên hệ tư vấn
          </Button>
          <Button
            variant="primary"
            shape="square"
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            icon={<Menu size={22} color="#FFFFFF" strokeWidth={2.5} />}
          />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        navLinks={navLinks}
      />
    </header>
  );
}
