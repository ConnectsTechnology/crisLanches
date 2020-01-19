import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.json-generator.com/api/json/get/bTNpsCmzyq?indent=2',
});

export default api;