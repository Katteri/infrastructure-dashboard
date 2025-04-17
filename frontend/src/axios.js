import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:23456/api/',
});

async function getGroups() {
  const response = await instance.get('groups');
  return response.data;
}

async function getMetrics() {
  const response = await instance.get('metrics');
  return response.data;
}

export { getGroups, getMetrics };
