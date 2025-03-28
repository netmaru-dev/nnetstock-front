import clsx from 'clsx';

interface TextItemProps {
  /** 텍스트 사이즈 */
  size?: 'small' | 'medium' | 'large' | 'big';
  /** 텍스트 내용 (컴포넌트도 가능)*/
  label: React.ReactNode;
  /** 클릭 이벤트 */
  handleClick?: () => void;
  /** 선택 상태 활성화 여부 */
  isActive?: boolean;
  /** hover 활성화 여부 */
  isHover?: boolean;
  /** 포인터 활성화여부 */
  isPointer?: boolean;
  /** 클래스 네임 */
  className?: string;
  /** 아이콘 */
  icon?: React.ReactNode;
}

const TextItem = ({
  size = 'medium',
  label,
  handleClick,
  isActive = false,
  isHover = false,
  isPointer = false,
  className,
  icon,
}: TextItemProps) => {
  return (
    <span
      className={clsx(
        'font-medium',
        {
          'text-14': size === 'small',
          'text-16': size === 'medium',
          'text-18': size === 'large',
          'text-20': size === 'big',
        },
        icon && 'flex items-center gap-3',
        isPointer && 'cursor-pointer',
        isHover && 'hover:text-main',
        isActive ? 'text-main' : 'text-text dark:text-white',
        className
      )}
      onClick={handleClick}
    >
      {icon}
      {label}
    </span>
  );
};

export default TextItem;
