// api/axiosInstance.ts

import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const refreshAccessToken = async (): Promise<{ accessToken: string; refreshToken: string }> => {
  const response = await axios.post('/api/v1/auth/refresh', {
    refreshToken: localStorage.getItem('refreshToken'),
  });
  console.log(response.data);
  return response.data;
};

const instance = axios.create({
  baseURL: 'https://api.shoot-manage.com', 
  headers: { "Content-type": "application/json" }, 
});

let isInterceptorAdded = false;

if (!isInterceptorAdded) {
  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
      try {
        console.log("요청 인터셉터");
        const accessToken = localStorage.getItem('accessToken');
        console.log('Access token in request interceptor:', accessToken);
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      } catch (error) {
        console.error('Error getting access token from localStorage:', error);
      }
      return config;
    },
    (error: AxiosError) => {
      console.error('Request interceptor error:', error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      return response;
    },
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & { _retryCount?: number };
  
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 500) &&
        !originalRequest._retryCount
      ) {
        originalRequest._retryCount = originalRequest._retryCount || 0;
        
        if (originalRequest._retryCount < 2) {
          originalRequest._retryCount += 1;
          console.log('Attempting to refresh token...');
  
          try {
            const newTokens = await refreshAccessToken();
            localStorage.setItem('accessToken', newTokens.accessToken);
            localStorage.setItem('refreshToken', newTokens.refreshToken);
  
            console.log('New tokens saved to localStorage');
  
            originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
  
            return instance(originalRequest);
          } catch (e) {
            console.error('Token refresh failed:', e);
            return Promise.reject(e);
          }
        } else {
          return Promise.reject(error);
        }
      }
  
      return Promise.reject(error);
    }
  );
  
  isInterceptorAdded = true;
}

export default instance;
