import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, PlayCircle, Loader2, LogOut } from 'lucide-react';
import { classInApi } from '../api/classin';
import type { ClassInCourse, ClassInUser } from '../api/classin';
import './Courses.css';

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<ClassInCourse[]>([]);
  const [user, setUser] = useState<ClassInUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('koko_user');
    if (!storedUser) {
      navigate('/login');
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

    const fetchCourses = async () => {
      try {
        const data = await classInApi.getCourses(parsedUser.telephone);
        setCourses(data);
      } catch (err) {
        console.error('Failed to fetch courses', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('koko_user');
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="loading-state">
        <Loader2 className="spinner" size={40} />
        <p>Đang tải danh sách khóa học ClassIn...</p>
      </div>
    );
  }

  return (
    <div className="courses-page container">
      <div className="courses-header">
        <div>
          <h1>Khóa học của tôi</h1>
          <p>Chào mừng {user?.userName}, hãy bắt đầu buổi học hôm nay!</p>
        </div>
        <button className="btn btn-outline" onClick={handleLogout}>
          <LogOut size={18} /> Đăng xuất
        </button>
      </div>

      <div className="courses-grid-portal">
        {courses.map((course) => (
          <div key={course.courseId} className="course-portal-card">
            <div className="course-card-content">
              <span className="course-tag">Live Class</span>
              <h3>{course.courseName}</h3>
              <p className="class-name">{course.className}</p>
              
              <div className="course-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{course.beginTime.split(' ')[0]}</span>
                </div>
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{course.beginTime.split(' ')[1]} - {course.endTime.split(' ')[1]}</span>
                </div>
              </div>
            </div>
            <div className="course-card-actions">
              <button className="btn btn-primary btn-full">
                <PlayCircle size={20} /> Vào lớp học
              </button>
            </div>
          </div>
        ))}

        {courses.length === 0 && (
          <div className="empty-state">
            <p>Bạn chưa đăng ký khóa học nào trên ClassIn.</p>
            <button className="btn btn-primary" onClick={() => navigate('/')}>Khám phá khóa học</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
