export const env = {
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    isDev: process.env.NODE_ENV === 'development', // sabe el entorno según el comando ejecutado en terminal
    currentDev: process.env.NEXT_PUBLIC_ENVIRONMENT
};