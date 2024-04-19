import { API_ERROR } from '@constants/api.constant';

export type DefaultCursorQueryParams = {
  cursor?: string;
  size?: number;
};

export type ApiErrorType = keyof typeof API_ERROR;

export type ApiErrorResponse = {
  error: ApiErrorType;
  description: string;
};

export type ResponseWithCursor<TData> = {
  cursor: string;
  content: TData;
};
