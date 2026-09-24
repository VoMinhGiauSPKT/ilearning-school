import { useState } from 'react';
import { Search, ChevronDown, Menu } from 'lucide-react';
import { navLinks } from '../../data/homeData';
import logoSvg from '../../assets/logo/logo.svg';
import Button from '../../components/common/Button/Button';
import MobileDrawer from './components/MobileDrawer';
import './_header.scss';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Left Side: Logo & Search Box */}
        <div className="header-left">
          {/* Brand Logo */}
          <a href="#" className="brand-logo">
            <img src={logoSvg} alt="iLearning School Logo" className="brand-logo-img" />
            <div className="logo-text">
              <span className="logo-main">iLearning</span>
              <span className="logo-sub">School</span>
            </div>
          </a>

          {/* Search Bar */}
          <div className="header-search">
            <Search size={22} className="search-icon" />
            <input
              type="text"
              placeholder="Tìm kiếm khoá học, bài viết, video..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Right Side: Desktop Navigation, Divider, Log In, SIGN */}
        <div className="header-right">
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link, idx) => (
                <li key={idx} className="nav-item">
                  <a href={link.href} className="nav-link">
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={16} className="dropdown-arrow" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Divider line */}
          <span className="header-divider" aria-hidden="true" />

          {/* Auth: Log In & SIGN button */}
          <div className="header-auth-group">
            <a href="#" className="login-link">
              Log In
            </a>
            <Button variant="outline" shape="square" className="sign-btn">
              SIGN
            </Button>
          </div>
        </div>

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
