'use client';
import {APIProvider, Map, Marker} from "@vis.gl/react-google-maps";

const API_GOOGLE_MAP_KEY = process.env.NEXT_PUBLIC_API_GOOGLE_MAP_KEY || '';
console.log('API_GOOGLE_MAP_KEY', API_GOOGLE_MAP_KEY);
const StoreGoogleMap = () => {
    return (
        <div>
            <APIProvider apiKey={
                API_GOOGLE_MAP_KEY
            }>
                <Map
                    style={{width: '100vw', height: '100vh'}}
                    defaultCenter={{lat: 10.745065600555002, lng: 106.69883811642117}}
                    defaultZoom={10}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    fullscreenControl={true}
                >
                    <Marker position={{lat: 10.745065600555002, lng: 106.69883811642117}} />

                </Map>
            </APIProvider>
        </div>
    );
};

export default StoreGoogleMap;
