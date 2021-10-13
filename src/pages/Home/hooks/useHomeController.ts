import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"

export const useHomeController = () => {
    const history = useHistory()
    const { search } = useLocation()
    const cityQuery= new URLSearchParams(search).get('city')
    const [city, setCity] = useState<string>('')

    const onClickViewHistorical = ()=>{
        history.push('/view-historical')
    } 
    
    const getSearchText = (value: any)=>{
        history.push(`?city=${value}`)
    }

    useEffect(()=>{
        console.log(cityQuery)
        if(cityQuery != null){
            setCity(cityQuery)
        }
    }, [search])

    return {
        onClickViewHistorical,
        getSearchText,
        city
    }
}