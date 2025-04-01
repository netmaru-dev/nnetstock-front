// 페이지 데이터
export interface Page {
  // 번호
  no: number;
  // 아이디
  id: string;
  // 제목
  title: string;
  // 상태
  status: number;
  // 날짜 시간
  dateTime: string;
  // 마지막 수정일
  lastDate: string;
}

// 페이지 상세 데이터
export interface PageDetail {
  // 번호
  no: number;
  // 페이지 아이디
  pageId: string;
  // 페이지 내용
  contents: string;
  // 버전
  version: string;
  // 날짜 시간
  datetime: string;
  // 조회수
  reading: string;
  // 첨부파일
  attachment: string;
  // 제목
  pageTitle: string;
  // 마지막 수정일
  lastDate: string;
  // 상태
  status: number;
}

// 페이지 목록 조회 res
export type GetPagesResponse = Page[];

// 페이지 상태 변경 req
export interface UpdatePageStatusRequest {
  pageId: string;
  status: number;
}

// 페이지 버전 리스트 조회 res
export type GetPageVersionResponse = PageDetail[];

// 페이지 상세 조회 req
export interface GetPageDetailRequest {
  pageId: string;
  version: string;
}

// 페이지 상세 조회 res
export interface GetPageDetailResponse {
  // 번호
  no: number;
  // 페이지 아이디
  pageId: string;
  // TODO API userId 로 통일
  // 사용자 아이디
  id: string;
  // 내용
  contents: string;
  // 버전
  version: string;
  // 날짜 시간
  datetime: string;
  // 조회수
  reading: string;
  // 첨부파일
  attachment: string;
  // 제목
  pageTitle: string;
}

// 페이지 생성 req
export interface CreatePageRequest {
  // 아이디
  pageId: string;
  // 제목
  title: string;
  // 페이지 내용
  contents: string;
  // 유저 아이디
  userId: string;
}

// 페이지 수정 req
export interface UpdatePageRequest {
  // 페이지 아이디
  pageId: string;
  // TODO API userId 로 통일
  // 사용자 아이디
  id: string;
  // 페이지 내용
  contents: string;
  // 현재 버전
  version: number;
}
