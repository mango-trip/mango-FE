import { useQuery } from 'react-query';
import { ApiErrorResponse } from '@type/api';
import {
  GetParams,
  UseQueryOptionType,
  UseQueryResultType,
} from '@type/reactQuery';
import { Plan } from '@modules/plan/plan.type';
import { getPlanDetailApi } from '@modules/plan/plan.api';

type UseGetPlanReturnType = {
  GetPlan: UseQueryResultType<Plan | ApiErrorResponse>;
};

type UseGetPlanProps = {
  params?: GetParams;
  options?: UseQueryOptionType<Plan | ApiErrorResponse>;
};

export const useGetPlan = (props?: UseGetPlanProps): UseGetPlanReturnType => {
  const GetPlan = useQuery(
    ['getPlanApi'],
    () => getPlanDetailApi(props?.params),
    {
      ...props?.options,
    },
  );

  return { GetPlan };
};
