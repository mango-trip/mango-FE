import { _axios } from '@api/_axios';
import { ApiErrorResponse } from '@type/api';
import { GetParams } from '@type/reactQuery';
import {
  SearchCityQueryParams,
  SearchCityResponseWithCursor,
} from './city.type';

export const getCitiesWithCursorApi = (
  params?: GetParams<SearchCityQueryParams>,
): Promise<SearchCityResponseWithCursor | ApiErrorResponse> => {
  return _axios
    .get(`/front/api/v1/city`, {
      params,
    })
    .then((res) => res.data);
};
