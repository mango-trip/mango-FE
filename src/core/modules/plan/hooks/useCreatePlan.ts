import { useMutation } from 'react-query';
import { ApiErrorResponse } from '@type/api';
import {
  PostParams,
  UseMutationResultType,
  UseQueryOptionType,
} from '@type/reactQuery';
import { CreatePlanRequest, CreatePlanResponse } from '@modules/plan/plan.type';
import { AxiosError } from 'axios';
import { createPlanApi } from '@modules/plan/plan.api';

type UseCreatePlanReturnType = {
  createPlan: UseMutationResultType<
    CreatePlanResponse,
    PostParams<CreatePlanRequest>
  >;
};

type UseCreatePlanProps = {
  options?: UseQueryOptionType<CreatePlanResponse>;
};

export const useCreatePlan = (
  props?: UseCreatePlanProps,
): UseCreatePlanReturnType => {
  const createPlan = useMutation<
    CreatePlanResponse,
    AxiosError<ApiErrorResponse>,
    PostParams<CreatePlanRequest>
  >((params) => createPlanApi(params), {
    ...props?.options,
  });

  return { createPlan };
};
