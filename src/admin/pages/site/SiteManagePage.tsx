import Editor from '@/admin/components/common/editor/Editor';
import TextItem from '@/common/components/ui/textItem/TextItem';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const SiteManagePage = () => {
  const [value, setValue] = useState<string>('');

  return (
    <div className='flex flex-col gap-10'>
      <TextItem size='title' label='사이트 관리' />
      <div>
        <TextItem size='sub-title' label='사이트명' className='mb-2 block text-text_black' />
        <div className='flex gap-5'>
          <Input className='w-[500px]' size='lg' />
          <Button size='lg' className=''>
            저장
          </Button>
        </div>
      </div>
      <div className='relative h-[50vh]'>
        <TextItem size='sub-title' label='푸터내용' className='mb-2 block text-text_black' />
        <Editor value={value} onChange={setValue} className='h-full' />
        <Button size='lg' className='absolute -bottom-40 right-0'>
          저장
        </Button>
      </div>
    </div>
  );
};

export default SiteManagePage;
