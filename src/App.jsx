// CSS
import './App.css'

// Componentes
import MapContainer from './components/Mapa/Mapa'
import Header from './components/Header/Header'
import Title from './components/Title/Title'
import Footer from './components/Footer/Footer'
import Weather from './components/Weather/Weather'

// Packages
import { useState, useEffect } from 'react'

function App() {

  // initial position
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  // get users position
  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    function showPosition(position) {
        setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });
    }
  }, []);

  return (
    <div>
      <Header />
      <Title props={'Hi! According to the GPS location of your notebook/cell phone, you are here:'} />
      <MapContainer position={position} />
      <Title props={'And according to the junior developers preferred API, these are the weather conditions of your location:'} />
      <Weather position={position} />
      <Footer />
    </div>
  )
}

export default App
