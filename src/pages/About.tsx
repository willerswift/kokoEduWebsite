import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Target, Users, Award, Globe, Rocket } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  useScrollReveal();
  const { t } = useLanguage();

  return (
    <div className="about-page">
      {/* 1. HERO ABOUT */}
      <section className="about-hero">
        <div className="container">
          <div className="reveal">
            <div className="section-tag">{t('Về Koko Education Network', 'About Koko Education Network')}</div>
            <h1 className="hero-title">{t('Kiến tạo tương lai', 'Shaping the Future')} <br/> {t('từ nền tảng', 'from a')} <span>{t('Vững chắc', 'Solid Base')}</span></h1>
            <p className="hero-lead" style={{maxWidth: '700px', margin: '0 auto 40px'}}>
              {t(
                'KokoEdu không chỉ là một đơn vị đào tạo, chúng tôi là người đồng hành tận tâm, kết nối khát vọng của học sinh Việt Nam với tinh hoa giáo dục Hàn Quốc.',
                'KokoEdu is not just a training unit, we are a dedicated companion, connecting the aspirations of Vietnamese students with the essence of Korean education.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUES */}
      <section className="section bg-light-dark">
        <div className="container">
          <div className="values-grid">
            <div className="value-card reveal">
              <div className="v-icon"><ShieldCheck size={32} /></div>
              <h3>{t('Uy tín tuyệt đối', 'Absolute Prestige')}</h3>
              <p>{t('Hợp tác trực tiếp với hơn 100 trường Đại học hàng đầu tại Hàn Quốc, đảm bảo lộ trình minh bạch.', 'Partnering directly with over 100 top universities in Korea, ensuring a transparent path.')}</p>
            </div>
            <div className="value-card reveal">
              <div className="v-icon"><Rocket size={32} /></div>
              <h3>{t('Công nghệ tiên phong', 'Pioneering Tech')}</h3>
              <p>{t('Ứng dụng ClassIn và hệ thống quản lý học tập hiện đại, giúp tối ưu 200% hiệu quả tiếp thu.', 'Applying ClassIn and modern learning management systems, optimizing learning efficiency by 200%.')}</p>
            </div>
            <div className="value-card reveal">
              <div className="v-icon"><Users size={32} /></div>
              <h3>{t('Tận tâm đồng hành', 'Dedicated Support')}</h3>
              <p>{t('Đội ngũ chuyên gia sẵn sàng hỗ trợ 24/7 từ khâu hồ sơ đến khi bạn ổn định cuộc sống tại Hàn.', 'Experts ready to support 24/7 from the application phase until you settle in Korea.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROMO CONTENT */}
      <section className="section">
        <div className="container">
          <div className="about-promo-grid reveal">
            <div className="promo-visual">
              <div className="experience-badge">
                <span className="exp-num">10+</span>
                <span className="exp-text">{t('Năm kinh nghiệm', 'Years Exp')}</span>
              </div>
              <div className="glow-circle"></div>
            </div>
            <div className="promo-content">
              <h2 className="title-sm">{t('Tại sao hàng ngàn học viên', 'Why Thousands of Students')} <br/> {t('chọn', 'Choose')} <span style={{color: 'var(--koko-red)'}}>KokoEdu?</span></h2>
              <p className="p-desc">
                {t(
                  'Chúng tôi hiểu rằng mỗi bộ hồ sơ du học là một câu chuyện, mỗi buổi học là một viên gạch xây nên ước mơ. Tại KokoEdu, tiếng Hàn không còn là rào cản, mà là chìa khóa mở ra cơ hội nghề nghiệp tại các tập đoàn lớn.',
                  'We understand that each study abroad application is a story, each class a brick building a dream. At KokoEdu, Korean is no longer a barrier, but a key to career opportunities at major corporations.'
                )}
              </p>
              <div className="feature-list">
                <div className="f-item">
                  <Target className="red-icon" size={20} />
                  <span>{t('Lộ trình luyện thi TOPIK cam kết đầu ra bằng văn bản.', 'TOPIK exam preparation with written commitment.')}</span>
                </div>
                <div className="f-item">
                  <Award className="red-icon" size={20} />
                  <span>{t('Tỷ lệ đậu Visa luôn duy trì ở mức trên 98%.', 'Visa success rate always maintained above 98%.')}</span>
                </div>
                <div className="f-item">
                  <Globe className="red-icon" size={20} />
                  <span>{t('Mạng lưới cộng đồng du học sinh Koko rộng khắp Hàn Quốc.', 'Koko student community network throughout Korea.')}</span>
                </div>
              </div>
              <a href="#" className="btn-primary" style={{marginTop: '40px'}}>{t('Trở thành một phần của Koko ngay', 'Join Koko Today')}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
