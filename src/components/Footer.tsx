import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col about">
            <div className="footer-logo">
              <span style={{color: 'var(--white)'}}>Koko</span>
              <span style={{color: 'var(--koko-red)'}}>Edu</span>
            </div>
            <p className="footer-desc">
              {t(
                'KokoEdu Vietnam - Đồng hành cùng bạn trên con đường chinh phục giấc mơ du học Hàn Quốc với công nghệ đào tạo hiện đại nhất.',
                'KokoEdu Vietnam - Accompanying you on the path to conquer your Korean study abroad dream with the most modern training technology.'
              )}
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">FB</a>
              <a href="#" className="social-icon">YT</a>
              <a href="#" className="social-icon">IG</a>
            </div>
          </div>

          <div className="footer-col links">
            <h3>{t('Về chúng tôi', 'About Us')}</h3>
            <ul>
              <li><a href="#">{t('Giới thiệu', 'Introduction')}</a></li>
              <li><a href="#">{t('Tại sao chọn KokoEdu?', 'Why Choose KokoEdu?')}</a></li>
              <li><a href="#">{t('Đội ngũ giáo viên', 'Our Teachers')}</a></li>
              <li><a href="#">{t('Đối tác', 'Partners')}</a></li>
            </ul>
          </div>

          <div className="footer-col links">
            <h3>{t('Dịch vụ', 'Services')}</h3>
            <ul>
              <li><a href="#">{t('Du học tiếng D4-1', 'Language Study D4-1')}</a></li>
              <li><a href="#">{t('Du học nghề D4-6', 'Vocational Study D4-6')}</a></li>
              <li><a href="#">{t('Luyện thi TOPIK', 'TOPIK Preparation')}</a></li>
              <li><a href="#">{t('Tư vấn Visa', 'Visa Consulting')}</a></li>
            </ul>
          </div>

          <div className="footer-col contact">
            <h3>{t('Liên hệ', 'Contact')}</h3>
            <ul className="contact-list">
              <li><Phone size={18} className="red-icon" /> <span>010-5885-5868</span></li>
              <li><Mail size={18} className="red-icon" /> <span>info@kokoedu.net</span></li>
              <li><MapPin size={18} className="red-icon" /> <span>{t('Quận 7, TP. Hồ Chí Minh', 'District 7, HCMC')}</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 KokoEdu Vietnam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
