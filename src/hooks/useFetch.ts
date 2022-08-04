import { useEffect, useState } from 'react'

const initOptions: RequestInit = {
  method: 'GET',
}

export const useFetch = (url: string, options?: RequestInit) => {
  const [response, setResponse] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setResponse(null)
    setError(null)

    const fetchUrl = async () => {
      try {
        const response = await fetch(url, options || initOptions)
        const data = await response.json()
        setResponse(data)
        setLoading(false)
      } catch (error: unknown) {
        if (typeof error === 'string') {
          setError(error)
        } else if (error instanceof Error) {
          setError(error.message)
        }
      }
    }

    fetchUrl()
  }, [url, options])

  return [response, loading, error]
}
