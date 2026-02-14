export const env = {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
    isDev: process.env.NODE_ENV === 'development', // sabe el entorno según el comando ejecutado en terminal
    currentDev: process.env.NEXT_PUBLIC_ENVIRONMENT || "default"
};