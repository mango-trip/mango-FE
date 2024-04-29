import { GetParams, PostParams } from '@type/reactQuery';
import { _axiosApi } from '@api/_axiosApi';
import {
  CreatePlanRequest,
  CreatePlanResponse,
  Plan,
} from '@modules/plan/plan.type';
import { _axiosAuthApi } from '@api/_axiosAuthApi';

export const getPlanDetailApi = (params?: GetParams): Promise<Plan> => {
  return _axiosApi
    .get(`/front/api/v1/plan/${params?.id}`, {
      params,
    })
    .then((res) => res.data);
};

export const createPlanApi = (
  params: PostParams<CreatePlanRequest>,
): Promise<CreatePlanResponse> => {
  return _axiosAuthApi
    .post(`/front/api/v1/plan`, params.variable)
    .then((res) => res.data);
};
