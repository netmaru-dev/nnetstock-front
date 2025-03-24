import clsx from 'clsx';

interface TextItemProps {
  /** 텍스트 사이즈 */
  size: 'small' | 'medium' | 'large';
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
          'text-sm': size === 'small',
          'text-base': size === 'medium',
          'text-lg': size === 'large',
        },
        isPointer && 'cursor-pointer',
        isHover && 'hover:text-primary',
        isActive ? 'text-primary' : 'text-text dark:text-white',
        className
      )}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default TextItem;
