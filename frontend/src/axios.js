import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:234567',
});

async function getGroups() {

}

async function getMetrics() {

}

export { getGroups, getMetrics };
