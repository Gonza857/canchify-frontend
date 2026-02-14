import {apiClient} from "@/src/lib/api-client";
import {RegisteredUsersQtyResponse} from "@/src/features/usuario/types/usuario.inteface";

export const UsuarioClient = {
    getRegisteredUsersQty: async () => {
        // EN ESTE CASO HARDCODEO LA RESPUESTA
        // const {data} = await apiClient.get<RegisteredUsersQtyResponse>('/usuarios/qty');
        // return data.qty
        return 2;

    }
}



