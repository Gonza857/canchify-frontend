import {useQuery} from "@tanstack/react-query";
import {UsuarioService} from "@/src/features/usuario/services/usuario.service";
import {USUARIO_KEYS} from "@/src/features/usuario/types/usuario.keys";

export const useUsuarioQty = () => {
    return useQuery({
        queryKey: USUARIO_KEYS.qty,
        queryFn: UsuarioService.getRegisteredUsersQty,
        staleTime: 1000 * 60 * 5 // 5 minutos de caché
    });
};