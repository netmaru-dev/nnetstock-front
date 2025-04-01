import Editor from '@/admin/components/common/editor/Editor';
import TextItem from '@/common/components/ui/textItem/TextItem';
import { GoDotFill } from 'react-icons/go';

interface PageContentSectionProps {
  contents: string;
  setContents: (value: string) => void;
}

const PageContentSection = ({ contents, setContents }: PageContentSectionProps) => {
  return (
    <div className='mb-6 flex h-[50vh] select-none'>
      <div className='flex w-40 min-w-[100px] items-center'>
        <TextItem label='내용' size='big' icon={<GoDotFill />} />
      </div>
      <div className='flex-1 h-full'>
        <Editor value={contents} onChange={setContents} className='h-full' />
      </div>
    </div>
  );
};

export default PageContentSection;
