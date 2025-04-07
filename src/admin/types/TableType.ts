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

export type AccountTableType = {
  // 번호
  id: number;
  // 이름
  name: string;
  // 아이디
  userId: string;
  // 정산 예정일
  accountDate: string;
  // 정산 금액
  account: number;
  // 상태
  status: string;
};

export type BoardTableType = {
  // 번호
  no: number;
  // 게시판명
  title: string;
  // 게시판 ID
  boardId: string;
  // 작성 권한
  writeAccess: string;
  // 읽기 권한
  readAccess: string;
  // 상태
  status: string;
};
