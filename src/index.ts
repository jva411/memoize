import { useMemo } from 'react'

type DependencyList = ReadonlyArray<string | number | boolean>

function memoize<T>() {
  const cache = new Map()

  const cachedFunction = (fun: () => T, deps: DependencyList): T => {
    const depsString = deps.toString()
    if (cache.has(depsString)) {
      return cache.get(depsString)
    }

    const result = fun()
    cache.set(depsString, result)
    return result
  }

  return cachedFunction
}


export default function useMemoized<T>(fun: () => T, deps: DependencyList) {
  const cachedFunction = useMemo(() => memoize<T>(), [])
  return cachedFunction(fun, deps)
}
