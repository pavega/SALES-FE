import { useState } from 'react'

export const useApi = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const callApi = async (apiFunction) => {
    setLoading(true)
    setError(null)

    try {
      const response = await apiFunction()
      return response
    } catch (err) {
      setError(err.response ? err.response.data : 'Error en la solicitud')
      return null
    } finally {
      setLoading(false)
    }
  }

  return { callApi, loading, error }
}
