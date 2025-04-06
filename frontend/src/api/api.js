import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const fetchGroups = async () => {
  try {
    const response = await api.get('/groups');
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении групп:', error);
    throw error;
  }
};

export const fetchMetrics = async () => {
  try {
    const response = await api.get('/metrics');
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении метрик:', error);
    throw error;
  }
};

export default api;
