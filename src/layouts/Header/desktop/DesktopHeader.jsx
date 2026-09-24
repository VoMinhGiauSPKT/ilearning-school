import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { navLinks } from '@/data/homeData';
import logoSvg from '@/assets/logo/logo.svg';
import Button from '@/components/common/Button/Button';
import './_desktopHeader.scss';

export default function DesktopHeader() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="desktop-site-header">
      <div className="header-container">
        {/* Left: Brand Logo & Search Box */}
        <div className="header-left">
          <a href="#" className="brand-logo">
            <img src={logoSvg} alt="iLearning School Logo" className="brand-logo-img" />
            <div className="logo-text">
              <span className="logo-main">iLearning</span>
              <span className="logo-sub">School</span>
            </div>
          </a>

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

        {/* Right: Desktop Navigation, Divider, Log In, SIGN */}
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

          <span className="header-divider" aria-hidden="true" />

          <div className="header-auth-group">
            <a href="#" className="login-link">
              Log In
            </a>
            <Button variant="outline" shape="square" className="sign-btn">
              SIGN
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
