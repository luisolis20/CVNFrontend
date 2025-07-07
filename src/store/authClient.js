import axios from 'axios';

const authClient = axios.create({
  baseURL: 'http://vinculacionconlasociedad.utelvt.edu.ec/cvubackendv2/api/cvn',
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Añadir token a cada petición
authClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token_cvn');
    const tokenType = localStorage.getItem('token_type_cvn') || 'Bearer';
    if (token) {
      config.headers.Authorization = `${tokenType} ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default authClient;