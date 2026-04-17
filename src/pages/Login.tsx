import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, Lock, Loader2, ArrowLeft, ChevronRight } from 'lucide-react';
import { classInApi } from '../api/classin';
import { useLanguage } from '../context/LanguageContext';
import './Login.css';

const Login: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const user = await classInApi.login(phone, password);
      localStorage.setItem('koko_user', JSON.stringify(user));
      navigate('/courses');
    } catch (err: any) {
      setError(err.message || t('Số điện thoại hoặc mật khẩu không chính xác.', 'Incorrect phone number or password.'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* LEFT VISUAL SIDE */}
      <div className="login-visual">
        <div className="visual-content">
          <div className="section-tag" style={{background: 'rgba(255,255,255,0.1)', color: '#fff', marginBottom: '40px'}}>
            Premium Education
          </div>
          <h1>{t('Nền tảng học tập', 'Modern Learning')} <br/> {t('hiện đại cùng ClassIn', 'Platform with ClassIn')}</h1>
          <p>
            {t(
              'Trải nghiệm không gian lớp học tương tác cao, quản lý lộ trình học tập và kho tài liệu tiếng Hàn chuyên sâu ngay trên thiết bị của bạn.',
              'Experience a highly interactive classroom space, manage your learning path and in-depth Korean materials right on your device.'
            )}
          </p>
          <div style={{marginTop: '60px', display: 'flex', gap: '40px'}}>
            <div>
              <span style={{fontSize: '32px', fontWeight: '800', display: 'block'}}>10k+</span>
              <span style={{fontSize: '12px', opacity: '0.6', textTransform: 'uppercase', fontWeight: '700'}}>{t('Học viên tin dùng', 'Active Students')}</span>
            </div>
            <div>
              <span style={{fontSize: '32px', fontWeight: '800', display: 'block'}}>4.9/5</span>
              <span style={{fontSize: '12px', opacity: '0.6', textTransform: 'uppercase', fontWeight: '700'}}>{t('Đánh giá hài lòng', 'Satisfied Reviews')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT FORM SIDE */}
      <div className="login-side">
        <div className="login-card-fancy">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} /> {t('Quay lại trang chủ', 'Back to Home')}
          </Link>

          <div className="login-intro">
            <h2>{t('Chào mừng trở lại!', 'Welcome Back!')}</h2>
            <p>{t('Vui lòng đăng nhập tài khoản ClassIn của bạn.', 'Please login to your ClassIn account.')}</p>
          </div>

          <form className="login-form-fancy" onSubmit={handleLogin}>
            {error && <div className="error-badge">{error}</div>}

            <div className="input-field">
              <label>{t('Số điện thoại / Email', 'Phone / Email')}</label>
              <div className="input-box">
                <Phone size={20} />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0123 456 789"
                  required
                />
              </div>
            </div>

            <div className="input-field">
              <label>{t('Mật khẩu', 'Password')}</label>
              <div className="input-box">
                <Lock size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-login" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="spinner" size={20} /> {t('Đang xác thực...', 'Authenticating...')}
                </>
              ) : (
                <>
                  {t('Đăng nhập ngay', 'Login Now')} <ChevronRight size={20} />
                </>
              )}
            </button>
          </form>

          <div className="login-options">
            <p style={{color: 'var(--text-muted)'}}>
              {t('Chưa có tài khoản?', "Don't have an account?")} <Link to="#" style={{color: 'var(--koko-red)'}}>{t('Đăng ký', 'Register')}</Link>
            </p>
            <Link to="#">{t('Quên mật khẩu?', 'Forgot password?')}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
