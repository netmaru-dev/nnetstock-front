interface AccountInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const AccountInfoItem = ({ icon, label, value }: AccountInfoItemProps) => {
  return (
    <div className='flex items-center gap-2'>
      {icon}
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default AccountInfoItem;
