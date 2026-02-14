import {UsuarioClient} from "@/src/features/usuario/services/usuario.client";

export const UsuarioService = {
    getRegisteredUsersQty: async () => {
        return await UsuarioClient.getRegisteredUsersQty()
    }
}