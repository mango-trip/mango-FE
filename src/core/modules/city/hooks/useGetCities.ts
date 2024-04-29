import { useQuery } from 'react-query';
import {
  SearchCityQueryParams,
  SearchCityResponseWithCursor,
} from '@modules/city/city.type';
import {
  GetParams,
  UseQueryOptionType,
  UseQueryResultType,
} from '@type/reactQuery';
import { ApiErrorResponse } from '@type/api';
import { getCitiesWithCursorApi } from '@modules/city/city.api';

type UseGetCitiesWithCursorReturnType = {
  cities?: SearchCityResponseWithCursor;
  getCitiesWithCursor: UseQueryResultType<SearchCityResponseWithCursor>;
};

type UseGetCitiesWithCursorProps = {
  params?: GetParams<SearchCityQueryParams>;
  options?: UseQueryOptionType<SearchCityResponseWithCursor>;
};

export const useGetCitiesWithCursor = (
  props?: UseGetCitiesWithCursorProps,
): UseGetCitiesWithCursorReturnType => {
  const getCitiesWithCursor = useQuery(
    ['getCitiesWithCursorApi', props?.params],
    () => getCitiesWithCursorApi(props?.params),
    {
      ...props?.options,
      onSuccess: (data) => {
        props?.options?.onSuccess && props.options.onSuccess(data);
      },
      onError: (err) => {
        props?.options?.onError && props.options.onError(err);
      },
    },
  );

  return { cities: getCitiesWithCursor.data, getCitiesWithCursor };
};
