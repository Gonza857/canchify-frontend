import {env} from "@/src/lib/config";

export default function UsuarioPage () {
    return (
        <>
            <h1>Usuario page</h1>
            <ul>
                <li>Perfil seleccionado ENV: {env.currentDev}</li>
                <li>URL Api: {env.apiUrl}</li>
                <li>Modo: {env.isDev ? 'Desarrollo' : 'Producción'}</li>
            </ul>
        </>
    )
};