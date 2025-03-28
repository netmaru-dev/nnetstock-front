import Spinner from '@/common/assets/images/spinner.gif';

const Loading = () => {
  return (
    <div className='z-999 absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center'>
      <img src={Spinner} alt='로딩중' width='5%' />
      {/* <p className='select-none text-text_light1'>잠시만 기다려 주세요</p> */}
    </div>
  );
};

export default Loading;
