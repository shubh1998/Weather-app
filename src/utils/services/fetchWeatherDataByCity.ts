import { WeatherApiResponse } from '../types/WeatherApiResponse'
import { apiClient } from './apiCLient'

/**
 * Mock function to fetch weather data according to city.
 * @param cityName: accept string.
 * @returns promise with weather data according to city.
 */
export const fetchWeatherDataByCity = async ({ 
    cityName 
}:{ 
    cityName:string 
}): Promise<WeatherApiResponse>  => await apiClient.get(
    `/weather?q=${cityName}&appid=${process.env.REACT_APP_API_SECRET_KEY}`
    )