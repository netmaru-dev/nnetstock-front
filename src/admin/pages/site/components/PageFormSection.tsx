import InputWithLabel from '@/common/components/ui/input/inputWithLabel/InputWithLabel';
import TextItem from '@/common/components/ui/textItem/TextItem';
import SelectBox from '@/common/components/ui/select/SelectBox';
import { GoDotFill } from 'react-icons/go';

interface PageFormSectionProps {
  mode: 'edit' | 'new';
  pageTitle: string;
  setPageTitle: (value: string) => void;
  englishId: string;
  setEnglishId: (value: string) => void;
  version?: string;
  setVersion?: (value: string) => void;
  versionOptions?: { value: string; label: string }[];
}

const PageFormSection = ({
  mode,
  pageTitle,
  setPageTitle,
  englishId,
  setEnglishId,
  version,
  setVersion,
  versionOptions,
}: PageFormSectionProps) => {
  return (
    <div className='flex w-full max-w-2xl flex-col'>
      <InputWithLabel
        label='페이지 제목'
        id='page-title'
        placeholder='제목을 입력하세요.'
        value={pageTitle}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPageTitle(e.target.value)}
      />
      <InputWithLabel
        label='영문 아이디'
        id='english-id'
        placeholder='입력하신 영문 아이디가 해당 페이지의 주소가 됩니다.'
        value={englishId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEnglishId(e.target.value)}
      />
      {mode === 'edit' && version && setVersion && versionOptions && (
        <div className='flex w-full flex-col'>
          <div className='flex h-10 items-center'>
            <div className='flex w-40 min-w-[100px] items-start'>
              <TextItem label='버전' size='big' icon={<GoDotFill />} />
            </div>
            <div className='flex-1'>
              <SelectBox
                value={version}
                handleValueChange={setVersion}
                options={versionOptions}
                placeholder='버전 선택'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageFormSection;
