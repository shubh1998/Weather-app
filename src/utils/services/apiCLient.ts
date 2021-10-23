import axios, { AxiosResponse } from 'axios'

/**
 * Setup axios apiClient by adding baseURL
 */
export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

/**
 * Setup axios interceptor to return actual response data only.
 */
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data) {
      return response.data
    }
    return null
  },
  ({ response }: { response: AxiosResponse }) => {
    return Promise.reject(response)
  },
)