import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {UsuarioService} from "@/src/features/usuario/services/usuario.service";
import {prefetchData} from "@/src/lib/prefetcher-helper";
import {USUARIO_KEYS} from "@/src/features/usuario/types/usuario.keys";
import UsuarioHome from "@/src/features/usuario/components/usuarios.home";

export default async function UsuarioPage () {
    const query = await prefetchData([USUARIO_KEYS.qty], UsuarioService.getRegisteredUsersQty)

    return (
        <HydrationBoundary state={dehydrate(query)}>
            <UsuarioHome/>
        </HydrationBoundary>
    )
};