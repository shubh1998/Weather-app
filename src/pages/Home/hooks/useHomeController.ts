import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
import axios from 'axios';
import { useGeoLocation } from "./useGeoLocation";

export const useHomeController = () => {
    const history = useHistory()
    const location = useGeoLocation()
    const { search } = useLocation()
    const cityQuery= new URLSearchParams(search).get('city')
    const [city, setCity] = useState<string>('')
    const [cityForRouteQuery, setCityForRouteQuery] = useState<string>('')
    const [data, setData] = useState<any>(null)
    const [locationAllow, setLocationAllow] = useState({
        allow: false,
        message: 'loading....'
    })
    const [currentLocation, setCurrentLocation] = useState<boolean>(false)
    const [message, setMessage] = useState('')

    const fetchCurrentLocationWeatherData = async(lat: number, lng: number)=>{
        try{
            const res: any = await axios(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_SECRET_KEY}`)
            if(res.data){
                setCityForRouteQuery(res.data.name)
                setData(res.data)
                setCurrentLocation(true)
            }
        }catch(error){
            setData(null)
            setMessage('Something went wrong. Please try again letter !')
        }
    }

    useEffect(()=>{
        if(location.loaded){
            setLocationAllow({
                allow: true,
                message: 'location accessed'
            })
            fetchCurrentLocationWeatherData(location.coordinates.lat, location.coordinates.lng)
        }else{
            setLocationAllow({
                allow: false,
                message: location.error.message
            })
        }
    }, [location])

    const onClickViewHistorical = ()=>{
        console.log(city)
        history.push(`/view-historical?city=${cityForRouteQuery}&startdate=2021-10-06&enddate=2021-10-12`)
    } 
    
    const getSearchText = (value: any)=>{
        history.push(`?city=${value}`)
    }

    const fetchWeatherData = async({cityName}: {cityName: string})=>{
        try{
            const res: any = await axios(`${process.env.REACT_APP_API_URL}/weather?q=${cityName}&appid=${process.env.REACT_APP_API_SECRET_KEY}`)
            if(res.data){
                setCurrentLocation(false)
                setData(res.data)
            }
        }catch(error){
            setData(null)
            setMessage('City not found')
        }
    }

    useEffect(()=>{
        if(cityQuery != null){
            setCityForRouteQuery(cityQuery)
            setCity(cityQuery)
            if(cityQuery !== ""){
                fetchWeatherData({cityName: cityQuery})
            }else if(location.loaded){
                fetchCurrentLocationWeatherData(location.coordinates.lat, location.coordinates.lng)
            }
        }
    }, [search, location])

    return {
        onClickViewHistorical,
        getSearchText,
        city,
        data,
        locationAllow,
        message,
        currentLocation
    }
}