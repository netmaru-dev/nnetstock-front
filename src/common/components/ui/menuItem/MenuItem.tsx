import clsx from 'clsx';

interface MenuItemProps {
  /** 사이즈 */
  size: 'small' | 'medium' | 'large';
  /** 내용 */
  label: string;
  /** 활성화 여부 */
  isActive?: boolean;
  /** 클릭 이벤트 */
  onClick?: () => void;
}

const MenuItem = ({ size = 'medium', label, isActive = false, onClick }: MenuItemProps) => {
  return (
    <li
      className={clsx(
        'font-medium',
        {
          'text-14': size === 'small',
          'text-16': size === 'medium',
          'text-18': size === 'large',
        },
        'cursor-pointer',
        'hover:text-primary',
        isActive ? 'text-primary' : 'text-white'
      )}
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export default MenuItem;
