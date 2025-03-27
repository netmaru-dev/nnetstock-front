import clsx from 'clsx';

interface TitleTextItemProps {
  label: React.ReactNode;
  size?: 'title' | 'sub-title';
  className?: string;
}

const TitleTextItem = ({ label, size = 'title', className }: TitleTextItemProps) => {
  return (
    <span
      className={clsx(
        'font-medium',
        {
          'text-28 font-bold': size === 'title',
          'text-22 font-semibold': size === 'sub-title',
        },
        className
      )}
    >
      {label}
    </span>
  );
};

export default TitleTextItem;
