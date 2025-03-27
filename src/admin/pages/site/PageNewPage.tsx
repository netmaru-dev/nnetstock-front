import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageForm from '@/admin/pages/site/components/PageForm';

const PageNewPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>('');
  const [pageTitle, setPageTitle] = useState<string>('');
  const [englishId, setEnglishId] = useState<string>('');

  return (
    <PageForm
      mode='new'
      pageTitle={pageTitle}
      setPageTitle={setPageTitle}
      englishId={englishId}
      setEnglishId={setEnglishId}
      value={value}
      setValue={setValue}
      onSave={() => {
        // TODO: API 호출하여 새 페이지 생성
        navigate('/admin/site/page-manage');
      }}
      onCancel={() => navigate(-1)}
    />
  );
};

export default PageNewPage;
