// src/lib/query-provider.tsx
'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {useState} from 'react';

export default function QueryProvider({children}: { children: React.ReactNode }) {
    // Creamos el cliente dentro de un estado para que sea persistente
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5, // Los datos se consideran "viejos" tras 5 min
                retry: 1, // Reintentar una vez si falla la petición
                refetchOnWindowFocus: false, // No recargar cada vez que cambias de pestaña
            },
        },
    }));

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}