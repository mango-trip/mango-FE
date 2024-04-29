import { ApiErrorResponse } from '@type/api';
import { FileType } from '@modules/file/file.type';

export type Plan = {
  id: number;
  title: string;
  planCityList: string[];
  tripStartDate: string;
  tripEndDate: string;
  totalAmount: number;
  fileList: FileType[];
  content: string;
};

export type CreatePlanRequest = Pick<
  Plan,
  'title' | 'tripStartDate' | 'tripEndDate' | 'totalAmount' | 'content'
> & {
  cityIdList: number[];
  fileIdList: number[];
};

export type CreatePlanResponse = {} | ApiErrorResponse;
