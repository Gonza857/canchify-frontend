"use client"

import {useUsuarioQty} from "@/src/features/usuario/hooks/useUsuario";
import Link from "next/link";

export default function UsuarioHome() {
    const quantity = useUsuarioQty();

    return (
        <>
            <h1>Usuarios registrados: {quantity.data}</h1>
            <Link href={"/"}>
                Volver a inicio
            </Link>
        </>
    )
}