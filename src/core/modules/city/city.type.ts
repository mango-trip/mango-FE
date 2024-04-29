import { DefaultCursorQueryParams, ResponseWithCursor } from '@type/api';

export type SearchCityQueryParams = {
  keyword?: string;
} & DefaultCursorQueryParams;

export type SearchCityResponse = {
  cityId: number;
  cityName: string;
  countryName: string;
};

export type SearchCityResponseWithCursor = ResponseWithCursor<
  SearchCityResponse[]
>;
