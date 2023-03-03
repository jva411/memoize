type DependencyList = ReadonlyArray<string | number | boolean>;
export default function useMemoized<T>(fun: () => T, deps: DependencyList): T;
export {};
