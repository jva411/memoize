# Memoize

This package was develop to provide a more powerful hook than React's useMemo.<br>

## Why to use Memoize?

A problem of the `useMemo` is that it only holds the result of a function if the list of dependencies doesn't change between the re-renders, but if these values can repeat, the previous results calculated are forgetten, and the function will run again.<br>

To solve this, i looked for ways to keep the old results also cached to be reused whenever the list of dependencies repeats, and based on the following article, I created a function that can be used EXACTLY the same way as a common hook, to that I could cache these responses and still keep the default hooks in the project.<br>

> Article: <https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/>

## When use Memoize?

The `useMemoized` will cache all the results associated with the list of dependencies used during the life of the compoent, so if some dependency is random and can have unlimited values, you probably shouldn't use it.<br>

The most appropriate use of `useMemoized` is when you have a limited set of values that cause a call of a function with a hight cost of time or processing, like a request to some api.<br>

## Example

There is a example using the `useMemoized`

```ts
import { useState } from 'react'
import useMemoized from 'use-memoized'

enum Period {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year'
}

function heavyFunction(period: Period) {
    // do heavy calcs
    return result
}

const Example = () => {
  const [period, setPeriod] = useState(Period.DAY)
  const result = useMemoized(() => heavyFunction(period), [period])

  return (
    <div>
        <select value={period} onChange={(e) => setPeriod(e.target.value as Period)}>
            <option value={Period.DAY}>1 Day</option>
            <option value={Period.WEEK}>1 Week</option>
            <option value={Period.MONTH}>1 Month</option>
            <option value={Period.YEAR}>1 Year</option>
        </select>
        <h1>{result}</h1>
    </div>
  );
};

export default Example
```

The **heavyFunction** will be executed at most 4 times, and so the result will be get from cache.
