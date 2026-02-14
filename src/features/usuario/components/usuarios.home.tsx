"use client"

import {useUsuarioQty} from "@/src/features/usuario/hooks/useUsuario";

export default function UsuarioHome() {
    const quantity = useUsuarioQty();

    return (
        <h1>Usuarios registrados: {quantity.data}</h1>
    )
}