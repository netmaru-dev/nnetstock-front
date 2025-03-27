import clsx from 'clsx';

interface LabelProps {
  htmlFor: string;
  text: string;
  icon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const Label = ({ htmlFor, text, icon, size = 'medium' }: LabelProps) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={clsx('flex select-none items-center gap-3 font-medium', {
          'text-16': size === 'small',
          'text-18': size === 'medium',
          'text-20': size === 'large',
        })}
      >
        {icon}
        {text}
      </label>
    </>
  );
};

export default Label;
