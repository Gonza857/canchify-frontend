import axios from 'axios';
import {env} from "@/src/lib/config";

// Creamos la instancia
export const apiClient = axios.create({
    // Usamos la variable de entorno que definimos para tu puerto (8083, 8080, etc.)
    baseURL: env.apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para inyectar el Token (opcional, pero lo vas a necesitar para Canchify)
apiClient.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});