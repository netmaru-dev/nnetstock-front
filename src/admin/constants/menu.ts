export const MENU_ITEMS = [
  { path: 'home', label: '홈' },
  { path: 'stock', label: '스톡 관리' },
  { path: 'sales', label: '판매 현황' },
  { path: 'account', label: '정산 관리' },
  { path: 'member', label: '회원 관리' },
  { path: 'board', label: '게시판' },
  { path: 'site', label: '사이트 관리' },
];

export const SIDE_MENU_ITEMS: Record<string, { path: string; label: string }[]> = {
  home: [{ path: 'home', label: '대시보드' }],
  stock: [
    { path: 'upload', label: '업로드' },
    { path: 'pending', label: '판매대기' },
    { path: 'review', label: '심사중' },
    { path: 'ready', label: '판매준비' },
    { path: 'selling', label: '판매중' },
    { path: 'stopped', label: '판매중지' },
  ],
  sales: [
    { path: 'manage', label: '판매 관리' },
    { path: 'ranking', label: '판매 순위' },
  ],
  account: [{ path: 'list', label: '정산 내역' }],
  member: [{ path: 'list', label: '회원 관리' }],
  board: [
    { path: 'board-manage', label: '게시판 관리' },
    { path: 'post-manage', label: '게시글 관리' },
  ],
  site: [{ path: 'page-manage', label: '페이지 관리' }],
};
