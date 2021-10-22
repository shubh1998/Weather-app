import { apiClient } from './apiCLient'

type dataType = { 
    lat: number, 
    lng: number 
}

export const fetchPresentLocationWeatherData = async ({ data }:{ data:dataType }) => {
    return await apiClient.get(`/weather?lat=${data.lat}&lon=${data.lng}&appid=${process.env.REACT_APP_API_SECRET_KEY}`)
}