import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageForm from './components/PageForm';

const PageEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [value, setValue] = useState<string>('');
  const [pageTitle, setPageTitle] = useState<string>('');
  const [englishId, setEnglishId] = useState<string>('');
  const [version, setVersion] = useState<string>('1.0');

  const versionOptions = [
    { value: '1.0', label: '1.0' },
    { value: '1.1', label: '1.1' },
    { value: '1.2', label: '1.2' },
    { value: '2.0', label: '2.0' },
  ];

  useEffect(() => {
    // TODO: API 호출하여 페이지 데이터 가져오기
    // 임시 데이터 설정
    setPageTitle('라이선스 소개');
    setEnglishId('license');
    setValue('<p>라이선스 소개 내용</p>');
  }, [id]);

  return (
    <PageForm
      mode='edit'
      pageTitle={pageTitle}
      setPageTitle={setPageTitle}
      englishId={englishId}
      setEnglishId={setEnglishId}
      version={version}
      setVersion={setVersion}
      value={value}
      setValue={setValue}
      versionOptions={versionOptions}
      handleSave={() => {
        // TODO: API 호출하여 페이지 수정
        navigate('/admin/site/page-manage');
      }}
      handleCancel={() => navigate(-1)}
    />
  );
};

export default PageEditPage;
