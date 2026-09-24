import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { navLinks } from '../../data/homeData';
import logoSvg from '../../assets/logo/logo.svg';
import './_header.scss';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

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
            <button className="sign-btn">
              SIGN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
