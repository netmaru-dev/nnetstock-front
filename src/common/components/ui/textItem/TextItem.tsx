import clsx from 'clsx';

interface TextItemProps {
  /** 텍스트 사이즈 */
  size: 'small' | 'medium' | 'large' | 'title';
  /** 텍스트 내용 */
  label: string;
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** 선택 상태 활성화 여부 */
  isActive?: boolean;
  /** hover 활성화 여부 */
  isHover?: boolean;
  /** 포인터 활성화여부 */
  isPointer?: boolean;
  /** 클래스 네임 */
  className?: string;
}

const TextItem = ({
  size = 'medium',
  label,
  onClick,
  isActive = false,
  isHover = false,
  isPointer = false,
  className,
}: TextItemProps) => {
  return (
    <span
      className={clsx(
        'font-medium',
        {
          'text-14': size === 'small',
          'text-16': size === 'medium',
          'text-18': size === 'large',
          'text-28 font-extrabold': size === 'title',
        },
        isPointer && 'cursor-pointer',
        isHover && 'hover:text-main',
        isActive ? 'text-main' : 'text-text dark:text-white',
        className
      )}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default TextItem;
