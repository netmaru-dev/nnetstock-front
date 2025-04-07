/** 페이징 */
export const PAGE_NUM = 1;
export const PAGE_SIZE = 10;

/** 상태 */
export const STATUS = {
  INACTIVE: '0',
  ACTIVE: '1',
};

export const STATUS_LABEL = {
  [STATUS.INACTIVE]: '사용안함',
  [STATUS.ACTIVE]: '사용함',
};

/** 회원 등급 */
export const MEMBER_GRADE = {
  INACTIVE: '1',
  NORMAL: '2',
  CREATOR: '3',
  EMPLOYEE: '9',
  ADMIN: '10',
};

export const MEMBER_GRADE_LABEL = {
  [MEMBER_GRADE.INACTIVE]: '사용 중지 회원',
  [MEMBER_GRADE.NORMAL]: '일반 회원',
  [MEMBER_GRADE.CREATOR]: '작가 회원',
  [MEMBER_GRADE.EMPLOYEE]: 'netmaru 임직원',
  [MEMBER_GRADE.ADMIN]: '관리자',
};

/** 권한 */
export const AUTHORITY = {
  ALL: '1',
  USER: '2',
  ADMIN: '3',
} as const;

export type AuthorityType = (typeof AUTHORITY)[keyof typeof AUTHORITY];

export const AUTHORITY_OPTIONS = [
  { value: AUTHORITY.ALL, label: '누구나' },
  { value: AUTHORITY.USER, label: '모든 회원' },
  { value: AUTHORITY.ADMIN, label: '관리자' },
] as const;
