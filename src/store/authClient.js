import axios from 'axios';

const authClient = axios.create({
  baseURL: 'http://192.168.38.177/cvubackendv2/api/cvn',
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Añadir token a cada petición
authClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    const tokenType = localStorage.getItem('token_type') || 'Bearer';
    if (token) {
      config.headers.Authorization = `${tokenType} ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default authClient;