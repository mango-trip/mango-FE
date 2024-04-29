import { _axiosApi } from '@api/_axiosApi';
import { ApiErrorResponse } from '@type/api';
import { GetParams } from '@type/reactQuery';
import {
  SearchCityQueryParams,
  SearchCityResponseWithCursor,
} from './city.type';

export const getCitiesWithCursorApi = (
  params?: GetParams<SearchCityQueryParams>,
): Promise<SearchCityResponseWithCursor> => {
  return _axiosApi
    .get(`/front/api/v1/city`, {
      params,
    })
    .then((res) => res.data);
};
