import { useEffect, useState } from "react"

export const useDebouncedState = (value, timeout) => {
  const [state, setState] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setState(value), timeout)

    return () => clearTimeout(handler)
  }, [value, timeout])

  return state
}
