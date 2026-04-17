import CryptoJS from 'crypto-js';

// Configuration from environment variables
const SID = import.meta.env.VITE_CLASSIN_SID || '';
const SAFE_KEY = import.meta.env.VITE_CLASSIN_SAFE_KEY || '';
// const API_BASE_URL = 'https://api.eeo.cn/api/rest'; // Placeholder for actual implementation

export interface ClassInUser {
  telephone: string;
  userName: string;
  userToken: string;
}

export interface ClassInCourse {
  courseId: string;
  courseName: string;
  className: string;
  beginTime: string;
  endTime: string;
}

const generateSignature = (timeStamp: number) => {
  return CryptoJS.MD5(SAFE_KEY + timeStamp).toString();
};

export const classInApi = {
  /**
   * Login/Authenticate a user with ClassIn
   */
  async login(telephone: string, password: string): Promise<ClassInUser> {
    const timeStamp = Math.floor(Date.now() / 1000);
    const signature = generateSignature(timeStamp);

    console.log(`Calling ClassIn Auth for ${telephone} with SID ${SID} and Sig ${signature.substring(0, 5)}...`);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (telephone && password) {
      return {
        telephone,
        userName: 'Học viên KokoEdu',
        userToken: `mock_token_${Date.now()}`
      };
    } else {
      throw new Error('Thông tin đăng nhập không hợp lệ');
    }
  },

  /**
   * Fetch courses for the authenticated user
   */
  async getCourses(telephone: string): Promise<ClassInCourse[]> {
    const timeStamp = Math.floor(Date.now() / 1000);
    const signature = generateSignature(timeStamp);

    console.log(`Fetching courses for ${telephone} with signature ${signature.substring(0, 5)}...`);

    // Mock data based on typical ClassIn API response
    return [
      {
        courseId: '101',
        courseName: 'Luyện thi TOPIK II (Cấp 3-4)',
        className: 'KokoEdu_T2_01',
        beginTime: '2026-05-01 19:00',
        endTime: '2026-05-01 21:00'
      },
      {
        courseId: '102',
        courseName: 'Tiếng Hàn Sơ Cấp 1',
        className: 'KokoEdu_SC1_05',
        beginTime: '2026-05-02 18:30',
        endTime: '2026-05-02 20:30'
      }
    ];
  }
};
