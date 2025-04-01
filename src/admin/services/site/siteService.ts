import { axiosInstance } from '../axiosInstance';
import {
  CreatePageRequest,
  GetPageDetailRequest,
  GetPageDetailResponse,
  GetPagesResponse,
  GetPageVersionResponse,
  Page,
  UpdatePageRequest,
  UpdatePageStatusRequest,
} from '@/admin/types/apis/siteApiType';

export const siteService = {
  // 페이지 목록 조회
  getPages: async () => {
    const response = await axiosInstance.post<GetPagesResponse>('', {
      mode: 'pageList',
    });

    return response.data;
  },

  // 페이지 상태 변경
  updatePageStatus: async (data: UpdatePageStatusRequest) => {
    const response = await axiosInstance.patch<Page>('', {
      mode: 'pageStatus',
      ...data,
    });
    return response.data;
  },

  // 새 페이지 생성
  createPage: async (data: CreatePageRequest) => {
    const response = await axiosInstance.post('', {
      mode: 'pageAdd',
      ...data,
    });
    return response.data;
  },

  // 페이지 버전 리스트 조회
  getPageVersions: async (pageId: string) => {
    const response = await axiosInstance.post<GetPageVersionResponse>('', {
      mode: 'pageVersion',
      pageId,
    });
    return response.data;
  },

  // 페이지 상세 조회
  getPageDetail: async (data: GetPageDetailRequest) => {
    const response = await axiosInstance.post<GetPageDetailResponse>('', {
      mode: 'pageDetail',
      ...data,
    });
    return response.data;
  },

  // 페이지 수정
  updatePage: async (data: UpdatePageRequest): Promise<Page> => {
    const response = await axiosInstance.put('', {
      mode: 'pageModify',
      ...data,
    });
    return response.data;
  },
};
