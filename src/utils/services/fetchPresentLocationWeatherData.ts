import { WeatherApiResponse } from 'utils/types/WeatherApiResponse'

import { apiClient } from './apiCLient'

type dataType = {
  lat: number
  lng: number
}

/**
 * Mock function to fetch weather data of current or present location.
 * @param data: contains object which have "lat", "lng" key-value pair.
 * @returns promise with weather data of present or current location.
 */
export const fetchPresentLocationWeatherData = async ({
  data,
}: {
  data: dataType
}): Promise<WeatherApiResponse> =>
  await apiClient.get(
    `/weather?lat=${data.lat}&lon=${data.lng}&appid=${process.env.REACT_APP_API_SECRET_KEY}`
  )
