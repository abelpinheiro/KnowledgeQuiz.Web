//import axios from "axios";

/*const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Adiciona o token JWT automaticamente se existir
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;*/

export async function fetchData() {
  // Retorna algo mockado só para teste
  return Promise.resolve({ data: 'mock data' });
}