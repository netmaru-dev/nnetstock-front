const useAuth = (): boolean => {
  const token = localStorage.getItem('accessToken');
  return !!token; // 토큰이 있으면 로그인 상태
};

export default useAuth;
