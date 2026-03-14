import apiClient from './api';
import { Product, Category, ProductFilters } from './types';

export const productApi = {
  // Get all products with optional filtering
  getProducts: async (filters?: ProductFilters): Promise<Product[]> => {
    const { data } = await apiClient.get<Product[]>('/products', {
      params: filters,
    });
    return data;
  },

  // Get single product
  getProductById: async (id: number): Promise<Product> => {
    const { data } = await apiClient.get<Product>(`/products/${id}`);
    return data;
  },

  // Get all categories
  getCategories: async (): Promise<Category[]> => {
    const { data } = await apiClient.get<Category[]>('/categories');
    return data;
  },
};
