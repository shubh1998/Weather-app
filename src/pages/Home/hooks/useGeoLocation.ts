import { useState, useEffect } from "react";
import { locationDataType } from "../../../utils/types/locationDataType";
import { errorType } from "../../../utils/types/locationErrorType";
import { locationStateType } from "../../../utils/types/locationStateType";

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

    const onError = (error: errorType) => {
        setLocation({
            ...location,
            loaded: false,
            error: {
                code: error.code,
                message: error.message,
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