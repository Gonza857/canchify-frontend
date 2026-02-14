import {useQuery} from "@tanstack/react-query";
import {AuthService} from "@/src/features/usuario/services/auth.service";

// Petición para componentes CLIENT
export const useLogin = () => {
    return useQuery({
        queryKey: ['login'], // Key para el caché
        queryFn: AuthService.login, // Llama a tu objeto estático
    });
};