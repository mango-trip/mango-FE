import { AxiosError } from 'axios';
import {
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

export type UseQueryResultType<TData> = UseQueryResult<TData, AxiosError>;

export type UseMutationResultType<TData, TVariable = void> = UseMutationResult<
  TData,
  AxiosError,
  TVariable
>;

export type UseQueryOptionType<TData> = Omit<
  UseQueryOptions<TData, AxiosError, TData, QueryKey>,
  | 'refetchInterval'
  | 'refetchOnWindowFocus'
  | 'refetchOnReconnect'
  | 'refetchOnMount'
  | 'useErrorBoundary'
>;
export type UseMutationOptionType<TData, TVariable = void> = UseMutationOptions<
  TData,
  AxiosError,
  TVariable
>;

export type GetParams<TQuery = unknown, TID = number | string> = {
  id?: TID;
  queries?: TQuery;
};

export type PostParams<TVariable = undefined, TID = number | string> = {
  id?: TID;
  variable?: TVariable;
};

export type PutParams<
  TVariable = undefined,
  TID = number | string,
> = PostParams<TVariable, TID>;

export type PatchParams<
  TVariable = undefined,
  TID = number | string,
> = PostParams<TVariable, TID>;

export type DeleteParams<TID = number | string> = { id?: TID };
