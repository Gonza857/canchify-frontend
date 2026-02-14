export const USUARIO_KEYS = {
    all: ['usuarios'] as const,
    qty: ['usuarios', 'qty'] as const,
    detail: (id: string) => ['usuarios', 'detail', id] as const,
};