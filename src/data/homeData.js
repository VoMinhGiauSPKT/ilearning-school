export const navLinks = [
  { label: 'Trang chủ', href: '#' },
  { label: 'Khoá học', href: '#', hasDropdown: true },
  { label: 'Góc học viên', href: '#' },
  { label: 'Giới thiệu', href: '#' },
  { label: 'Blog', href: '#' },
];

export const curriculumStages = [
  {
    id: 1,
    title: 'GIAI ĐOẠN HỌC 1: Chuẩn bị nền tảng',
    sessions: '5 buổi',
    lessons: [
      'Môn 1: Kiến trúc máy tính & Hệ điều hành cơ bản',
      'Môn 2: Nhập môn lập trình với tư duy thuật toán',
    ],
  },
  {
    id: 2,
    title: 'GIAI ĐOẠN HỌC 2: Chuyên môn sâu - Hướng chuyên sâu 1: Lập trình viên java',
    sessions: '5 buổi',
    lessons: [
      'Môn 3: Lập trình hướng đối tượng',
      'Môn 4: Cấu trúc dữ liệu và giải thuật',
      'Môn 5: Các hệ cơ sở dữ liệu',
      'Môn 6: Phát triển ứng dụng web',
      'Môn 7 (không bắt buộc): Lập trình di động',
    ],
  },
  {
    id: 3,
    title: 'GIAI ĐOẠN HỌC 2: Chuyên môn sâu - Hướng chuyên sâu 2: Lập trình viên web fullstack',
    sessions: '5 buổi',
    lessons: [
      'Môn 8: Phát triển ứng dụng Web Frontend với ReactJS',
      'Môn 9: Xây dựng RESTful API và GraphQL với NodeJS',
      'Môn 10: Quản lý State nâng cao với Redux Toolkit',
      'Môn 11: Đồ án Fullstack Web kết thúc giai đoạn',
    ],
  },
  {
    id: 4,
    title: 'GIAI ĐOẠN HỌC 2: Chuyên môn sâu - Hướng chuyên sâu 2: Lập trình viên web fullstack',
    sessions: '5 buổi',
    lessons: [
      'Môn 12: Kiến trúc Microservices & Docker container',
      'Môn 13: CI/CD Pipeline & Triển khai đám mây AWS',
      'Môn 14: Tối ưu hiệu năng, bảo mật và phỏng vấn doanh nghiệp',
    ],
  },
];

export const coursesList = [
  {
    id: 'course-1',
    title: 'Khoá học ReactJS – Xây dựng chức năng Github với GraphQL',
    price: '7,500,000 đ',
    benefits: [
      'Lazy loading – code splitting – Memoization trong ReactJS',
      'Tìm hiểu GraphQL và so sánh với REST',
      'Sử dụng ApolloLink như Middleware',
      'So sánh Cách Apollo quản lý cache vs Redux quản lý Cache',
      'Unit test & Integration test',
    ],
    curriculumStages,
  },
  {
    id: 'course-2',
    title: 'Khoá học ReactJS – Xây dựng chức năng Github với GraphQL',
    price: '7,500,000 đ',
    benefits: [
      'Lazy loading – code splitting – Memoization trong ReactJS',
      'Tìm hiểu GraphQL và so sánh với REST',
      'Sử dụng ApolloLink như Middleware',
      'So sánh Cách Apollo quản lý cache vs Redux quản lý Cache',
      'Unit test & Integration test',
    ],
    curriculumStages,
  },
  {
    id: 'course-3',
    title: 'Khoá học ReactJS – Xây dựng chức năng Github với GraphQL',
    price: '7,500,000 đ',
    benefits: [
      'Lazy loading – code splitting – Memoization trong ReactJS',
      'Tìm hiểu GraphQL và so sánh với REST',
      'Sử dụng ApolloLink như Middleware',
      'So sánh Cách Apollo quản lý cache vs Redux quản lý Cache',
      'Unit test & Integration test',
    ],
    curriculumStages,
  },
];

export const testimonials = [
  {
    id: 1,
    quote: 'Khóa học có lộ trình rõ ràng, a Việt và các bạn Mentor rất nhiệt tình , luôn support ngay lập tức trong buổi học cũng như là ngoài buổi để giải quyết vấn đề của học viên. Kiến thức Mentor sâu rộng nên hầu hết đều trả lời được thắc mắc học viên',
    author: 'Hiếu Hồ',
    batch: 'HO CHI MINH CITY',
  },
  {
    id: 2,
    quote: 'Khóa học có lộ trình rõ ràng, a Việt và các bạn Mentor rất nhiệt tình , luôn support ngay lập tức trong buổi học cũng như là ngoài buổi để giải quyết vấn đề của học viên. Kiến thức Mentor sâu rộng nên hầu hết đều trả lời được thắc mắc học viên',
    author: 'Hiếu Hồ',
    batch: 'HO CHI MINH CITY',
  },
  {
    id: 3,
    quote: 'Khóa học có lộ trình rõ ràng, a Việt và các bạn Mentor rất nhiệt tình , luôn support ngay lập tức trong buổi học cũng như là ngoài buổi để giải quyết vấn đề của học viên. Kiến thức Mentor sâu rộng nên hầu hết đều trả lời được thắc mắc học viên',
    author: 'Hiếu Hồ',
    batch: 'HO CHI MINH CITY',
  },
];

export const instructorsList = [
  {
    id: 1,
    name: 'Tâm Huỳnh',
    role: 'Founder & CEO',
    quotePara1: 'Mình đến với ngành từ những năm 2007, đến nay có thể tạm cho là hơn 13 năm rồi. Với việc "chạy" dự án, mentor cho rất nhiều nơi, mình tin rằng có thể cung cấp cho các bạn một cách toàn vẹn về bức tranh tổng thể của ngành lập trình. Quan trọng nhất vẫn là xây dựng những chiếc app và hệ thống có hiệu năng cao, tạo được giá trị cho người dùng cũng như doanh nghiệp của bạn.',
    quotePara2: 'Bên cạnh đó, là một Software / Solution Architect, mình tự tin có thể giúp bạn hiểu rõ việc xây dựng kiến trúc cho ứng dụng lớn, mang lại hiệu quả cao cho team.',
  },
  {
    id: 2,
    name: 'Hiếu Hồ',
    role: 'Giảng Viên Fronend',
    quotePara1: 'Mình đến với ngành từ những năm 2007, đến nay có thể tạm cho là hơn 13 năm rồi. Với việc "chạy" dự án, mentor cho rất nhiều nơi, mình tin rằng có thể cung cấp cho các bạn một cách toàn vẹn về bức tranh tổng thể của ngành lập trình. Quan trọng nhất vẫn là xây dựng những chiếc app và hệ thống có hiệu năng cao, tạo được giá trị cho người dùng cũng như doanh nghiệp của bạn.',
    quotePara2: 'Bên cạnh đó, là một Software / Solution Architect, mình tự tin có thể giúp bạn hiểu rõ việc xây dựng kiến trúc cho ứng dụng lớn, mang lại hiệu quả cao cho team.',
  },
  {
    id: 3,
    name: 'Quân Bùi',
    role: 'Giảng Viên IOS',
    quotePara1: 'Mình đến với ngành từ những năm 2007, đến nay có thể tạm cho là hơn 13 năm rồi. Với việc "chạy" dự án, mentor cho rất nhiều nơi, mình tin rằng có thể cung cấp cho các bạn một cách toàn vẹn về bức tranh tổng thể của ngành lập trình. Quan trọng nhất vẫn là xây dựng những chiếc app và hệ thống có hiệu năng cao, tạo được giá trị cho người dùng cũng như doanh nghiệp của bạn.',
    quotePara2: 'Bên cạnh đó, là một Software / Solution Architect, mình tự tin có thể giúp bạn hiểu rõ việc xây dựng kiến trúc cho ứng dụng lớn, mang lại hiệu quả cao cho team.',
  },
];

