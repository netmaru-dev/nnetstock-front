import clsx from 'clsx';

interface MenuItemProps {
  /** 사이즈 */
  size: 'small' | 'medium' | 'large';
  /** 내용 */
  label: string;
  /** 활성화 여부 */
  isActive?: boolean;
  /** 클릭 이벤트 */
  handleClick?: () => void;
}

const MenuItem = ({ size = 'medium', label, isActive = false, handleClick }: MenuItemProps) => {
  return (
    <li
      className={clsx(
        'font-medium',
        {
          'text-16': size === 'small',
          'text-18': size === 'medium',
          'text-20': size === 'large',
        },
        'cursor-pointer',
        'hover:text-main',
        isActive ? 'text-main' : 'text-white'
      )}
      onClick={handleClick}
    >
      {label}
    </li>
  );
};

export default MenuItem;
