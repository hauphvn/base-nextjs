'use client';
import {APIProvider, Map} from "@vis.gl/react-google-maps";

const API_GOOGLE_MAP_KEY = 'AIzaSyB8WD2zOtTIiZiaWXoy6BRKz6lQlvXNvVw';
const StoreGoogleMap = () => {
    return (
        <div>
            <APIProvider apiKey={
                API_GOOGLE_MAP_KEY
            }>
                <Map
                    style={{width: '100vw', height: '100vh'}}
                    defaultCenter={{lat: 10.745065600555002, lng: 106.69883811642117}}
                    defaultZoom={15}
                    // gestureHandling={'greedy'}
                    disableDefaultUI={true}
                />
            </APIProvider>
        </div>
    );
};

export default StoreGoogleMap;
