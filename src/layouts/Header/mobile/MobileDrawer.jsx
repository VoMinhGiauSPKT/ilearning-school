import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Search, ChevronDown } from 'lucide-react';
import Button from '@/components/common/Button/Button';
import './_mobileDrawer.scss';

export default function MobileDrawer({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  navLinks = [],
}) {
  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div className="mobile-drawer-overlay" onClick={onClose}>
      <div
        className="mobile-drawer-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header: Title & Close Button */}
        <div className="drawer-header">
          <span className="drawer-title">Menu</span>
          <Button
            variant="text"
            shape="square"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close menu"
            icon={<X size={24} />}
          />
        </div>

        {/* Mobile Search */}
        <div className="drawer-search">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Tìm kiếm khoá học..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Navigation Links */}
        <nav className="drawer-nav">
          <ul className="drawer-nav-list">
            {navLinks.map((link, idx) => (
              <li key={idx} className="drawer-nav-item">
                <a
                  href={link.href}
                  className={`drawer-nav-link ${link.active ? 'active' : ''}`}
                  onClick={onClose}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && <ChevronDown size={18} className="dropdown-arrow" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Group: Log In & SIGN */}
        <div className="drawer-auth-group">
          <Button
            href="#"
            variant="outline"
            shape="square"
            className="drawer-login-link"
            onClick={onClose}
          >
            Log In
          </Button>
          <Button
            variant="primary"
            shape="square"
            className="drawer-sign-btn"
            onClick={onClose}
          >
            SIGN
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
