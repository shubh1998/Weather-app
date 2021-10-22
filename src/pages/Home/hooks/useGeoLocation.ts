import { useState, useEffect } from "react";

export const useGeoLocation = () => {
    const [location, setLocation] = useState<any>({
        loaded: false,
        error: {
            message: 'Please allow your location. Loading....',
        },
    });

    const onSuccess = (location: any) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = (error: any) => {
        setLocation({
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