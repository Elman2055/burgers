export const parseParams = <T extends Object,>(searchParams: URLSearchParams): T => {
    return Object.fromEntries(searchParams) as unknown as T;
};