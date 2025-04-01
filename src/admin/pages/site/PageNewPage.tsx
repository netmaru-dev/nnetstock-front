import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageForm from './components/PageForm';
import { useUserStore } from '@/admin/stores/userStore';
import { useModalStore } from '@/admin/stores/modalStore';
import { removeHtmlTags } from '@/common/utils/convertString';
import { useSavePage } from '@/admin/hooks/queries/useSiteQueries';

const PageNewPage = () => {
  const navigate = useNavigate();
  const { openModal } = useModalStore();
  const { userId } = useUserStore();
  /* useState */
  const [pageTitle, setPageTitle] = useState<string>('');
  const [englishId, setEnglishId] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  /* useMutation */
  const savePage = useSavePage();

  /* 입력값 검증 */
  const validateFields = (pageTitle: string, englishId: string, contents: string) => {
    const validationFields = [
      { value: pageTitle, message: '페이지 제목을 입력해주세요.' },
      { value: englishId, message: '영문 아이디를 입력해주세요.' },
      { value: removeHtmlTags(contents), message: '페이지 내용을 입력해주세요.' },
    ];
    for (const field of validationFields) {
      if (!field.value.trim()) {
        openModal('안내', field.message);
        return false;
      }
    }
    return true;
  };

  /* 저장 핸들러 */
  const handleSave = () => {
    if (!validateFields(pageTitle, englishId, contents)) {
      return;
    }
    savePage.mutate(
      {
        pageId: englishId,
        title: pageTitle,
        contents: contents,
        userId: userId,
      },
      {
        onSuccess: response => {
          if (response === 'success') {
            openModal('안내', '페이지 생성이 완료되었습니다.');
            navigate('/admin/site/page-manage');
          } else if (response === 'fail') {
            openModal('안내', '페이지 생성 실패했습니다.\n개발팀에게 문의해주세요.');
          } else if (response === 'exist') {
            openModal('안내', '이미 존재하는 페이지입니다.\n아이디를 변경해주세요.');
          }
        },
        onError: () => {
          openModal('안내', '페이지 생성 실패했습니다.\n개발팀에게 문의해주세요.');
        },
      }
    );
  };

  return (
    <PageForm
      mode='new'
      pageTitle={pageTitle}
      setPageTitle={setPageTitle}
      englishId={englishId}
      setEnglishId={setEnglishId}
      contents={contents}
      setContents={setContents}
      handleSave={handleSave}
      handleCancel={() => navigate(-1)}
    />
  );
};

export default PageNewPage;
