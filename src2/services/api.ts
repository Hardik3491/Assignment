import axios, { AxiosError, AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';

const BASE_URL = 'https://api.escuelajs.co/api/v1';

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosRetry(apiClient, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: error => {
    return axiosRetry.isNetworkOrIdempotentRequestError(error);
  },
});

export default apiClient;
