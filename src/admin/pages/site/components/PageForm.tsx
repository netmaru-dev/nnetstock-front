import ButtonContainer from '@/common/components/ui/button/ButtonContainer';
import ArrowRight from '@/common/components/ui/icons/ArrowRight';
import TitleTextItem from '@/common/components/ui/textItem/TitleTextItem';
import PageFormSection from './PageFormSection';
import PageContentSection from './PageContentSection';

interface PageFormProps {
  mode: 'edit' | 'new';
  pageTitle: string;
  setPageTitle: (value: string) => void;
  englishId: string;
  setEnglishId: (value: string) => void;
  value: string;
  setValue: (value: string) => void;
  version?: string;
  setVersion?: (value: string) => void;
  versionOptions?: { value: string; label: string }[];
  onSave: () => void;
  onCancel: () => void;
}

const PageForm = ({
  mode,
  pageTitle,
  setPageTitle,
  englishId,
  setEnglishId,
  value,
  setValue,
  version,
  setVersion,
  versionOptions,
  onSave,
  onCancel,
}: PageFormProps) => {
  return (
    <div className='flex flex-col gap-16'>
      <TitleTextItem
        label={
          <>
            페이지 관리
            <span className='mx-1 inline-block'>
              <ArrowRight />
            </span>
            {mode === 'edit' ? '내용 수정' : '새 페이지'}
          </>
        }
        className='flex items-center'
      />
      <div className='flex flex-col gap-4'>
        <PageFormSection
          mode={mode}
          pageTitle={pageTitle}
          setPageTitle={setPageTitle}
          englishId={englishId}
          setEnglishId={setEnglishId}
          version={version}
          setVersion={setVersion}
          versionOptions={versionOptions}
        />
        <PageContentSection value={value} setValue={setValue} />
        <ButtonContainer onSave={onSave} onCancel={onCancel} />
      </div>
    </div>
  );
};

export default PageForm;
