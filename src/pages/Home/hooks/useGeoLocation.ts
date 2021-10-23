import { useState, useEffect } from "react";
import { locationDataType } from "../../../utils/types/locationDataType";
import { errorType } from "../../../utils/types/locationErrorType";
import { locationStateType } from "../../../utils/types/locationStateType";

/**
 * useGeoLocation is a custom hook which detects a current location of user and return the "lat", "lng"
 * 
 * @returns upadted "location" state as per the navigator api response
 */
export const useGeoLocation = () => {
    const [location, setLocation] = useState<locationStateType>({
        loaded: false,
        coordinates: {
            lat: 0,
            lng: 0,
        },
        error: {
            code: 1,
            message: 'Please allow your location. Loading....',
        },
    });

    /**
     * Mock function runs when user allow the location access permission.
     * @param locationData 
     */
    const onSuccess = (locationData: locationDataType) => {
        setLocation({
            ...location,
            loaded: true,
            coordinates: {
                lat: locationData.coords.latitude,
                lng: locationData.coords.longitude,
            },
        });
    };

    /**
     * Mock function runs when user denied the location access permission.
     * @param error 
     */
    const onError = (error: errorType) => {
        setLocation({
            ...location,
            loaded: false,
            error: {
                code: error.code,
                message: `${error.message} because of that you can't access our app.`,
            },
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
};