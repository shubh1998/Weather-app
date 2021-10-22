import axios, { AxiosResponse } from 'axios'

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

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