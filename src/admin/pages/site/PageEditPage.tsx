import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageForm from './components/PageForm';
import {
  usePageVersionDetail,
  usePageVersions,
  useUpdatePage,
} from '@/admin/hooks/queries/useSiteQueries';
import Loading from '@/common/components/ui/loading/Loading';
import { useUserStore } from '@/admin/stores/userStore';
import { useModalStore } from '@/admin/stores/modalStore';

const PageEditPage = () => {
  const navigate = useNavigate();
  const { openModal } = useModalStore();
  const { userId } = useUserStore();
  const { pageId } = useParams();
  /* useState */
  const [pageTitle, setPageTitle] = useState<string>('');
  const [englishId, setEnglishId] = useState<string>('');
  const [version, setVersion] = useState<string>('');
  const [latestVersion, setLatestVersion] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const [versionOptions, setVersionOptions] = useState<{ value: string; label: string }[]>([]);
  /* useQuery */
  const { data: pageVersions, isLoading } = usePageVersions(pageId!);
  const { data: pageDetail } = usePageVersionDetail({ pageId: pageId!, version: version });
  /* useMutation */
  const updatePage = useUpdatePage();

  // 버전 옵션 생성
  useEffect(() => {
    if (pageVersions) {
      if (pageVersions.length > 0) {
        const options = pageVersions.map(v => ({
          value: v.version,
          label: v.version,
        }));
        setVersionOptions(options);
        setLatestVersion(pageVersions[0].version);
        setVersion(latestVersion);
      }
    }
  }, [pageVersions, latestVersion]);

  // version이 변경될 때마다 pageDetail 업데이트
  useEffect(() => {
    if (version && pageDetail) {
      setPageTitle(pageDetail.pageTitle);
      setContents(pageDetail.contents);
      setEnglishId(pageDetail.pageId);
    }
  }, [version, pageDetail]);

  // 저장 핸들러
  const handleSave = () => {
    updatePage.mutate(
      {
        pageId: pageId!,
        id: userId,
        contents,
        version: Number(latestVersion) + 0.1,
      },
      {
        onError: () => {
          openModal('안내', '페이지 수정 중 오류가 발생했습니다.');
        },
        onSuccess: () => {
          openModal('안내', '페이지 수정이 완료되었습니다.');
          navigate(-1);
        },
      }
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageForm
      mode='edit'
      pageTitle={pageTitle}
      setPageTitle={setPageTitle}
      englishId={englishId}
      setEnglishId={setEnglishId}
      version={version}
      setVersion={setVersion}
      contents={contents}
      setContents={setContents}
      versionOptions={versionOptions}
      handleSave={handleSave}
      handleCancel={() => navigate(-1)}
    />
  );
};

export default PageEditPage;
