import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const figmaInstance = axios.create({
  baseURL: 'https://api.shoot-manage.com', 
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

let isInterceptorAdded = false;

if (!isInterceptorAdded) {
    figmaInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
      try {
        console.log("figma 요청 인터셉터");
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

  figmaInstance.interceptors.response.use(
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
            const response = await axios.post('/api/v1/auth/refresh', {
              accessToken: localStorage.getItem('accessToken')
            });

            const newTokens = response.data;
            localStorage.setItem('accessToken', newTokens.accessToken);
  
            console.log('New access token saved to localStorage');
  
            originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
  
            return figmaInstance(originalRequest);
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

export default figmaInstance;