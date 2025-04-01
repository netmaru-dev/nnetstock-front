export type SitePageTableType = {
  no: number;
  // 페이지명
  title: string;
  // 최근 수정일
  lastDate: string;
  // 상태
  status: string;
  // 아이디
  pageId: string;
};

export type UserTableType = {
  // 번호
  id: number;
  // 이름
  name: string;
  // 아이디
  userId: string;
  // 이메일
  email: string;
  // 등급
  grade: string;
  // 작가여부
  author: boolean;
  // 가입일
  joinDate: string;
  // 최근 로그인
  lastLogin: string;
};
