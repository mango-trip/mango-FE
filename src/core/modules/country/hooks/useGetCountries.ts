import { useQuery } from 'react-query';
import {
  GetParams,
  UseQueryOptionType,
  UseQueryResultType,
} from '@type/reactQuery';
import { ApiErrorResponse } from '@type/api';
import {
  SearchCountryQueryParams,
  SearchCountryResponseWithCursor,
} from '@modules/country/country.type';
import { getCountriesWithCursorApi } from '@modules/country/country.api';

type UseGetCountriesWithCursorReturnType = {
  GetCountriesWithCursor: UseQueryResultType<
    SearchCountryResponseWithCursor | ApiErrorResponse
  >;
};

type UseGetCountriesWithCursorProps = {
  params?: GetParams<SearchCountryQueryParams>;
  options?: UseQueryOptionType<
    SearchCountryResponseWithCursor | ApiErrorResponse
  >;
};

export const useGetCountriesWithCursor = (
  props?: UseGetCountriesWithCursorProps,
): UseGetCountriesWithCursorReturnType => {
  const GetCountriesWithCursor = useQuery(
    ['getCountriesWithCursorApi'],
    () => getCountriesWithCursorApi(props?.params),
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

  return { GetCountriesWithCursor };
};
