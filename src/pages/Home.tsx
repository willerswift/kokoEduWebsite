import React, { useState, useRef } from 'react';
import { 
  Clock, CreditCard, RefreshCw, ShieldCheck,
  Video, UserCheck, PlayCircle,
  Play, Volume2, Search, Pin
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import koreaImg from '../assets/korea.png';
import './Home.css';

const Home: React.FC = () => {
  useScrollReveal();
  const { t } = useLanguage();
  const [activeStepTab, setActiveStepTab] = useState<'meet' | 'video'>('meet');
  const stepsRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: 'meet' | 'video') => {
    setActiveStepTab(tab);
    
    // Sử dụng setTimeout để đảm bảo nội dung tab mới đã được render trước khi cuộn
    setTimeout(() => {
      if (window.innerWidth < 1000 && stepsRef.current) {
        const headerOffset = 100; // Khoảng cách trừ hao cho Header
        const elementPosition = stepsRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50); // Một khoảng trễ nhỏ cực kỳ quan trọng để trình duyệt cập nhật layout
  };

  return (
    <div className="home-page">
      {/* 1. HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content reveal">
            <div className="section-tag">{t('Koko Education Network', 'Koko Education Network')}</div>
            <h1 className="hero-title">
              {t('Chinh phục', 'Conquer')} <span>{t('Hàn Quốc', 'Korea')}</span> <br/>
              {t('Khởi đầu tương lai', 'Start Your Future')}
            </h1>
            <p className="hero-lead">
              {t(
                'Đơn vị đào tạo tiếng Hàn & tư vấn du học hàng đầu. Chúng tôi cam kết lộ trình học bài bản và kết quả thực tế.',
                'Leading Korean training & study abroad consulting unit. We commit to a structured learning path and practical results.'
              )}
            </p>
            <div className="hero-btns">
              <a href="#" className="btn-primary">{t('Bắt đầu ngay', 'Start Now')}</a>
              <a href="#" className="btn-ghost">{t('Tìm hiểu thêm', 'Learn More')}</a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <img src={koreaImg} alt="KokoEdu" className="main-image" />
          </div>
        </div>
      </section>

      {/* 2. STATS */}
      <section className="stats-bar">
        <div className="container stats-flex">
          <div className="stat-item reveal">
            <span className="stat-n">100+</span>
            <span className="stat-l">{t('Trường đối tác', 'Partners')}</span>
          </div>
          <div className="stat-item reveal">
            <span className="stat-n">98%</span>
            <span className="stat-l">{t('Tỷ lệ đậu Visa', 'Visa Success')}</span>
          </div>
          <div className="stat-item reveal">
            <span className="stat-n">10+</span>
            <span className="stat-l">{t('Năm kinh nghiệm', 'Years Exp')}</span>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US PROMO */}
      <section id="about" className="section reveal">
        <div className="container about-container-box">
          <div className="rules-grid">
            <div className="about-text-content">
              <div className="section-tag">{t('Về KokoEdu', 'About KokoEdu')}</div>
              <h2 className="about-title">{t('Hơn cả một Trung tâm,', 'More Than a Center,')} <br/> {t('Chúng tôi là', 'We are')} <span style={{color: 'var(--koko-red)'}}>{t('Gia đình', 'Family')}</span></h2>
              <p className="about-lead">
                {t(
                  'Tại KokoEdu, chúng tôi tin rằng du học không chỉ là thay đổi một ngôi trường, mà là kiến tạo một tương lai mới. Với hơn 10 năm kinh nghiệm, chúng tôi tự hào là đơn vị tiên phong ứng dụng công nghệ giáo dục hiện đại vào đào tạo tiếng Hàn.',
                  'At KokoEdu, we believe that studying abroad is not just about changing schools, but about creating a new future. With over 10 years of experience, we are proud to be pioneers in applying modern educational technology to Korean language training.'
                )}
              </p>
              <div className="mission-vision-grid">
                <div className="mv-item">
                  <h4>{t('Sứ mệnh', 'Mission')}</h4>
                  <p>{t('Xây dựng cầu nối vững chắc giúp học sinh Việt Nam tiếp cận tinh hoa giáo dục Hàn Quốc.', 'Building a solid bridge to help Vietnamese students access the essence of Korean education.')}</p>
                </div>
                <div className="mv-item">
                  <h4>{t('Tầm nhìn', 'Vision')}</h4>
                  <p>{t('Trở thành biểu tượng của sự uy tín và tận tâm trong lĩnh vực du học quốc tế.', 'Becoming a symbol of prestige and dedication in the field of international study abroad.')}</p>
                </div>
              </div>
            </div>
            <div className="fancy-card why-koko-card">
              <h3 className="card-title-red">{t('Vì sao chọn Koko?', 'Why Choose Koko?')}</h3>
              <ul className="rules-list">
                <li>{t('Lộ trình cá nhân hóa cho từng trình độ.', 'Personalized learning paths for each level.')}</li>
                <li>{t('Đội ngũ giáo viên bản ngữ & chuyên gia giàu kinh nghiệm.', 'Native teachers & experienced experts.')}</li>
                <li>{t('Hệ thống ClassIn & LMS hỗ trợ học tập 24/7.', 'ClassIn & LMS support 24/7.')}</li>
                <li>{t('Cam kết hỗ trợ học viên từ lúc nộp hồ sơ đến khi sang Hàn.', 'Commitment to support students from application to arrival in Korea.')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RULES SECTION */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-tag">{t('Quy định chung', 'General Rules')}</div>
            <h2 className="title">{t('Nội quy & Cam kết', 'Rules & Commitment')}</h2>
          </div>

          <div className="rules-grid">
            <div className="fancy-card reveal">
              <h3 className="card-title-icon">
                <ShieldCheck className="red-icon" /> {t('Nội quy khóa học', 'Course Rules')}
              </h3>
              <ul className="rules-list">
                <li>{t('Học viên cần đọc kỹ nội quy lớp trước khi vào học.', 'Students must read class rules carefully before starting.')}</li>
                <li>{t('Tham gia lớp học nghĩa là bạn ĐÃ ĐỒNG Ý với tất cả quy định.', 'Joining class means you AGREE to all regulations.')}</li>
                <li>{t('Bản nội quy được gửi và ghim công khai trong nhóm lớp.', 'Rules are sent and pinned publicly in class groups.')}</li>
                <li>{t('Trung tâm cam kết đầu ra TOPIK 3/5. Nếu không đỗ sẽ được DẠY LẠI MIỄN PHÍ.', 'The center commits to TOPIK 3/5 output. If failed, RE-TEACHING IS FREE.')}</li>
              </ul>
            </div>

            <div className="commitment-stack reveal">
              <div className="c-item-fancy">
                <div className="c-icon-wrap"><Clock size={24} /></div>
                <div className="c-text">
                  <h4>{t('Vào học đúng giờ', 'Be on time')}</h4>
                  <p>{t('Đảm bảo chất lượng dạy và học tốt nhất.', 'Ensure the best teaching and learning quality.')}</p>
                </div>
              </div>
              <div className="c-item-fancy">
                <div className="c-icon-wrap"><CreditCard size={24} /></div>
                <div className="c-text">
                  <h4>{t('Chính sách hoàn phí', 'Refund Policy')}</h4>
                  <p>{t('Không hoàn phí trong trường hợp nghỉ ngang.', 'No refund in case of dropping out.')}</p>
                </div>
              </div>
              <div className="c-item-fancy">
                <div className="c-icon-wrap"><RefreshCw size={24} /></div>
                <div className="c-text">
                  <h4>{t('Bảo lưu khóa học', 'Course Deferral')}</h4>
                  <p>{t('Hỗ trợ bảo lưu tối đa lên đến 6 tháng.', 'Support deferral up to 6 months.')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GUIDE SECTION */}
      <section className="section" ref={stepsRef}>
        <div className="container">
          <div className="section-head reveal">
            <div className="section-tag">{t('Hướng dẫn học tập', 'Study Guide')}</div>
            <h2 className="title">{t('Chuẩn bị & Tham gia', 'Preparation & Joining')}</h2>
          </div>

          <div className="step-tabs-fancy">
            <button 
              className={`tab-btn ${activeStepTab === 'meet' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleTabChange('meet');
              }}
            >
              {t('Học qua Google Meet', 'Learn via Google Meet')}
            </button>
            <button 
              className={`tab-btn ${activeStepTab === 'video' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleTabChange('video');
              }}
            >
              {t('Cách xem lại video', 'How to rewatch video')}
            </button>
          </div>

          <div className="steps-wrapper reveal">
            {activeStepTab === 'meet' ? (
              <div className="steps-grid-fancy">
                <div className="step-card-premium">
                  <div className="step-idx">1</div>
                  <div className="step-img-box">
                    <div className="ui-mockup ui-phone">
                      <div style={{display: 'flex', justifyContent: 'space-between', opacity: 0.5}}><Search size={10} /><div style={{width: 20, height: 4, background: '#fff', borderRadius: 2}}></div></div>
                      <div className="ui-app-store">
                        <Video size={16} color="var(--koko-red)" />
                        <div style={{textAlign: 'left'}}><div style={{width: 30, height: 4, background: '#fff', marginBottom: 2}}></div><div style={{width: 20, height: 3, background: 'rgba(255,255,255,0.4)'}}></div></div>
                        <div style={{marginLeft: 'auto', width: 24, height: 10, background: '#2563eb', borderRadius: 4}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="step-title">{t('Tải ứng dụng Google Meet về máy.', 'Download Google Meet app.')}</p>
                </div>
                <div className="step-card-premium">
                  <div className="step-idx">2</div>
                  <div className="step-img-box">
                    <div className="ui-mockup ui-phone">
                      <div style={{textAlign: 'center', marginTop: 10}}><UserCheck size={20} color="var(--koko-red)" /></div>
                      <div className="ui-login-form">
                        <div className="ui-input"></div>
                        <div className="ui-input"></div>
                        <div className="ui-btn-red"></div>
                      </div>
                    </div>
                  </div>
                  <p className="step-title">{t('Đăng nhập tài khoản Email cá nhân.', 'Login to your personal Email.')}</p>
                </div>
                <div className="step-card-premium">
                  <div className="step-idx">3</div>
                  <div className="step-img-box">
                    <div className="ui-mockup ui-phone">
                      <div style={{height: 10, background: '#2563eb', margin: '-10px -6px 10px', display: 'flex', alignItems: 'center', padding: '0 10px'}}><div style={{width: 20, height: 4, background: '#fff'}}></div></div>
                      <div className="ui-chat-bubble">{t('Tham gia lớp học:', 'Join class:')} <br/> http://meet.google.com/xyz</div>
                    </div>
                  </div>
                  <p className="step-title">{t('Vào nhóm lớp nhấn link nhắc hẹn.', 'Click appointment link in class group.')}</p>
                </div>
                <div className="step-card-premium">
                  <div className="step-idx">4</div>
                  <div className="step-img-box">
                    <div className="ui-mockup">
                      <div className="ui-meet-grid">
                        <div className="ui-user"></div>
                        <div className="ui-user"></div>
                        <div className="ui-user"></div>
                        <div className="ui-user" style={{background: 'var(--koko-red)'}}></div>
                      </div>
                      <div className="ui-meet-controls">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="pill"></div>
                      </div>
                    </div>
                  </div>
                  <p className="step-title">{t('Nhấn \'Tham gia\' để vào lớp học.', 'Click \'Join\' to start the class.')}</p>
                </div>
              </div>
            ) : (
              <div className="steps-grid-fancy">
                <div className="step-card-premium">
                  <div className="step-idx">1</div>
                  <div className="step-img-box">
                    <div className="ui-mockup ui-phone">
                      <div style={{height: 10, background: '#2563eb', margin: '-10px -6px 10px', display: 'flex', alignItems: 'center', padding: '0 10px'}}><div style={{width: 20, height: 4, background: '#fff'}}></div></div>
                      <div style={{background: 'rgba(255,255,255,0.05)', padding: 4, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 4}}>
                        <Pin size={8} color="var(--koko-red)" />
                        <div style={{width: 30, height: 3, background: '#fff'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="step-title">{t('Vào phần tin nhắn ghim nhóm lớp.', 'Go to pinned messages in class group.')}</p>
                </div>
                <div className="step-card-premium">
                  <div className="step-idx">2</div>
                  <div className="step-img-box">
                    <div className="ui-mockup ui-phone">
                      <div style={{marginTop: 10}} className="ui-chat-bubble">
                        {t('Video buổi học ngày 17/04:', 'Class video April 17:')} <br/>
                        <div style={{marginTop: 4, background: 'rgba(0,0,0,0.2)', height: 20, borderRadius: 4, display: 'grid', placeItems: 'center'}}><PlayCircle size={12} /></div>
                      </div>
                    </div>
                  </div>
                  <p className="step-title">{t('Chọn tin nhắn có link video.', 'Select message with video link.')}</p>
                </div>
                <div className="step-card-premium">
                  <div className="step-idx">3</div>
                  <div className="step-img-box">
                    <div className="ui-mockup">
                      <div className="ui-list-mockup">
                        <div className="list-item"></div>
                        <div className="list-item"></div>
                        <div className="list-item"></div>
                      </div>
                    </div>
                  </div>
                  <p className="step-title">{t('Nhấn vào link dẫn tới danh sách.', 'Click link to view the list.')}</p>
                </div>
                <div className="step-card-premium">
                  <div className="step-idx">4</div>
                  <div className="step-img-box">
                    <div className="ui-mockup">
                      <div className="ui-video-player">
                        <div className="spinner"></div>
                        <div className="ui-controls">
                          <Play size={8} fill="white" />
                          <div className="ui-progress"></div>
                          <Volume2 size={8} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="step-title">{t('Chờ 2-5 phút để video tải hoàn tất.', 'Wait 2-5 mins for video to load.')}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. SUPPORT CTA */}
      <section className="section">
        <div className="container">
          <div className="bg-navy-premium reveal">
            <div className="support-grid">
              <div className="support-info">
                <div className="section-tag" style={{background: 'var(--koko-red-light)', color: 'var(--koko-red)'}}>{t('Hỗ trợ 24/7', '24/7 Support')}</div>
                <h2 className="support-title">{t('Bạn cần giúp đỡ?', 'Need Any Help?')}</h2>
                <div className="support-btns">
                  <a href="#" className="btn-primary">{t('Liên hệ ngay', 'Contact Now')}</a>
                  <a href="#" className="btn-ghost">{t('Nhắn tin Zalo', 'Zalo Chat')}</a>
                </div>
              </div>
              <div className="phone-card-premium">
                <span className="phone-label">{t('Hotline chính thức', 'Official Hotline')}</span>
                <span className="phone-number">010-5885-5868</span>
                <p className="phone-note">{t('Hỗ trợ học viên từ 10:00 - 16:00', 'Student support from 10:00 - 16:00')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
