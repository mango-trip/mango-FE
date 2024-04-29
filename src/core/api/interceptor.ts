import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

export const createAxios = (url: string) => {
  return axios.create({
    baseURL: url,
  });
};

export const createAxiosInterceptor = (_axiosInstance: AxiosInstance) => {
  _axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      return {
        ...config,
        headers: {
          ...config.headers,
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      } as InternalAxiosRequestConfig;
    },
  );
};

export const createAxiosAuthInterceptor = (_axiosInstance: AxiosInstance) => {
  _axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      return {
        ...config,
        headers: {
          ...config.headers,
          Accept: '*/*',
          'Content-Type': 'application/json',
          //TODO cookie
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzE0Mzk3OTIwLCJleHAiOjE3MTQ0MDg3MjB9.ZddzrWo741syeVDsl01vQ5o2zUK_4h4t74VZx8AfBDk',
        },
      } as InternalAxiosRequestConfig;
    },
  );
};
