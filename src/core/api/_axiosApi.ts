import { createAxios, createAxiosInterceptor } from './interceptor';

export const _axiosApi = createAxios(process.env.NEXT_PUBLIC_API_URL || '');
createAxiosInterceptor(_axiosApi);
