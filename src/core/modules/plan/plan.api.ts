import { GetParams, PostParams } from '@type/reactQuery';
import { _axios } from '@api/_axios';
import {
  CreatePlanRequest,
  CreatePlanResponse,
  Plan,
} from '@modules/plan/plan.type';

export const getPlanDetailApi = (params?: GetParams): Promise<Plan> => {
  return _axios
    .get(`/front/api/v1/plan/${params?.id}`, {
      params,
    })
    .then((res) => res.data);
};

export const createPlanApi = (
  params: PostParams<CreatePlanRequest>,
): Promise<CreatePlanResponse> => {
  return _axios
    .post(`/front/api/v1/plan`, params.variable)
    .then((res) => res.data);
};
