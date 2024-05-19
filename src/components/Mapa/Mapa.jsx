// Packages
import { useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// CSS
import './Mapa.css'

const MapContainer = ({position}) => {

    // load map
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: `${import.meta.env.VITE_API_KEY_GOOGLE_MAPS}`,

    })

    useEffect(() => {
      console.log("Position received:", position);
    }, [position]);
  
    return <div className='mapContainer'>
        {isLoaded ? (
      <GoogleMap mapContainerStyle={{width: '100%', height: '80vh'}} center={position} zoom={15}> 
      {/* the position comes via App.jsx props */}
        
        {/* red pin */}
        <Marker position={position} />
        <>
        </>
      </GoogleMap>
  ) : <></>}
    </div>
  
}

export default MapContainer