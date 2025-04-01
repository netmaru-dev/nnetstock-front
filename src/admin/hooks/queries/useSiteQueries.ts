import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { siteService } from '@/admin/services/site/siteService';
import {
  UpdatePageRequest,
  UpdatePageStatusRequest,
  GetPageVersionResponse,
  GetPageDetailResponse,
  GetPageDetailRequest,
  CreatePageRequest,
} from '@/admin/types/apis/siteApiType';

// 페이지 목록 조회
export const usePages = () => {
  return useQuery({
    queryKey: ['pages'],
    queryFn: () => {
      return siteService.getPages();
    },
  });
};

// 페이지 버전리스트 조회
export const usePageVersions = (pageId: string) => {
  return useQuery<GetPageVersionResponse>({
    queryKey: ['pageVersions', pageId],
    queryFn: async () => {
      return siteService.getPageVersions(pageId);
    },
    enabled: !!pageId,
  });
};

// 페이지 버전별 상세 조회
export const usePageVersionDetail = (data: GetPageDetailRequest) => {
  return useQuery<GetPageDetailResponse>({
    queryKey: ['pageDetail', data],
    queryFn: async () => {
      return siteService.getPageDetail(data);
    },
    enabled: !!data.version,
  });
};

// 페이지 상태 변경
export const useUpdatePageStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdatePageStatusRequest) => {
      return siteService.updatePageStatus(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pages'] });
    },
    onError: error => {
      console.error('페이지 상태 변경 중 오류가 발생했습니다:', error);
    },
  });
};

// 페이지 수정
export const useUpdatePage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdatePageRequest) => {
      return siteService.updatePage(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pages'] });
    },
    onError: error => {
      console.error('페이지 수정 중 오류가 발생했습니다:', error);
    },
  });
};

// 페이지 저장
export const useSavePage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreatePageRequest) => {
      return siteService.createPage(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pages'] });
    },
    onError: error => {
      console.error('페이지 생성 중 오류가 발생했습니다:', error);
    },
  });
};
