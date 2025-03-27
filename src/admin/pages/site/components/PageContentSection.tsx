import Editor from '@/admin/components/common/editor/Editor';
import TextItem from '@/common/components/ui/textItem/TextItem';
import { GoDotFill } from 'react-icons/go';

interface PageContentSectionProps {
  value: string;
  setValue: (value: string) => void;
}

const PageContentSection = ({ value, setValue }: PageContentSectionProps) => {
  return (
    <div className='mb-6 flex h-[50vh] select-none'>
      <div className='flex w-40 min-w-[100px] items-center'>
        <TextItem label='내용' size='big' icon={<GoDotFill />} />
      </div>
      <div className='h-full flex-1'>
        <Editor value={value} onChange={setValue} className='h-full' />
      </div>
    </div>
  );
};

export default PageContentSection;
