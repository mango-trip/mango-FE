import { createAxios, createAxiosAuthInterceptor } from './interceptor';

export const _axiosAuthApi = createAxios(process.env.NEXT_PUBLIC_API_URL || '');
createAxiosAuthInterceptor(_axiosAuthApi);
