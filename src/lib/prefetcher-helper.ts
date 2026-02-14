import {QueryKey} from "@tanstack/query-core";
import {QueryClient} from "@tanstack/react-query";

/**
 * Ejecuta el prefetch en el servidor y retorna el queryClient listo para deshidratar.
 */
export const prefetchData = async <T>(
    queryKey: QueryKey,
    fetchFn: () => Promise<T>
) => {
    const queryClient = new QueryClient(); // Instancia fresca por request
    await queryClient.prefetchQuery({
        queryKey,
        queryFn: fetchFn,
    });
    return queryClient;
};