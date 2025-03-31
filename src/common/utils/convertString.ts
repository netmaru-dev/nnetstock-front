/**
 * 영문자와 하이픈만 허용하고 소문자로 변환
 * @param value 입력값
 * @returns 변환된 문자열
 */
export const convertOnlyEnglish = (value: string): string => {
  return value.replace(/[^a-zA-Z-]/g, '').toLowerCase();
};

/**
 * HTML 태그와 꺽쇠 괄호 제거
 * @param value 입력값
 * @returns 변환된 문자열
 */
export const convertOnlyText = (value: string): string => {
  return value.replace(/[<>]/g, '');
};

/**
 * HTML 태그 제거
 * @param value 입력값
 * @returns 변환된 문자열
 */
export const removeHtmlTags = (value: string): string => {
  return value.replace(/<[^>]*>/g, '');
};
