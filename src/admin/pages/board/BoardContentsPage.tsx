import TitleTextItem from '@/common/components/ui/textItem/TitleTextItem';

const BoardContentsPage = () => {
  return (
    <div className='flex flex-col gap-10'>
      <TitleTextItem label='게시글 관리' />
      <div className='flex flex-col gap-5'></div>
    </div>
  );
};

export default BoardContentsPage;
