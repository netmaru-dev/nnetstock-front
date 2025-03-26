type UserRole = 'user' | 'admin' | 'creator' | null;

const useUserRole = (): UserRole => {
  const storedRole = localStorage.getItem('userRole');

  if (!storedRole) return null;

  if (storedRole === 'admin' || storedRole === 'user' || storedRole === 'creator') {
    return storedRole;
  }

  return null; // 유효하지 않은 값일 경우
};

export default useUserRole;
