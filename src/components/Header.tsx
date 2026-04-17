import React, { useState } from 'react';
import { Menu, X, Globe, User, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const toggleLang = () => {
    setLang(lang === 'VN' ? 'EN' : 'VN');
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-koko">Koko</span>
          <span className="logo-edu">Edu</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>{t('Trang chủ', 'Home')}</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>{t('Về chúng tôi', 'About Us')}</Link></li>
            <li><Link to="/courses" onClick={() => setIsMenuOpen(false)}>{t('Khóa học', 'Courses')}</Link></li>
            <li><Link to="/news" onClick={() => setIsMenuOpen(false)}>{t('Tin tức', 'News')}</Link></li>
            
            {/* Các nút này chỉ hiện trong menu Mobile khi mở ra */}
            <div className="mobile-actions-wrapper">
              <button className="mobile-action-btn" onClick={toggleLang}>
                <Globe size={20} /> {lang === 'VN' ? 'English' : 'Tiếng Việt'}
              </button>
              <button className="mobile-action-btn" onClick={toggleTheme}>
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                {theme === 'dark' ? t('Giao diện sáng', 'Light Mode') : t('Giao diện tối', 'Dark Mode')}
              </button>
            </div>
          </ul>
        </nav>

        <div className="header-actions">
          {/* Các nút icon trên máy tính - Ẩn trên Mobile */}
          <button className="theme-toggle hide-mobile" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="lang-toggle hide-mobile" onClick={toggleLang}>
            <Globe size={18} />
            <span className="lang-text">{lang}</span>
          </button>
          
          <Link to="/login" className="login-btn">
            <User size={18} />
            <span className="hide-mobile">{t('Đăng nhập', 'Login')}</span>
          </Link>
          
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
