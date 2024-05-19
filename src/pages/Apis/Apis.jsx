// CSS
import './Apis.css'

// Packages
import { Link } from 'react-router-dom'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Apis = () => {
  return (
    <div>
      <Header />

      <div className='apisContainer'>
        <div className='apisImage'>
          <img src="./google-api.jpg" alt="" width={'180px'} />
        </div>

        <div className='apisInformations'>
          <h3>01</h3>
          <h2>API Maps JavaScript from Google</h2>
          <p>The Maps JavaScript API is a service provided by Google that allows developers to embed Google Maps on web pages using JavaScript. This API enables the inclusion of interactive maps with a variety of features, such as markers, geocoding, directions, and more. It is highly customizable and supports numerous functionalities to enhance the user experience on web applications. For detailed information and documentation, you can visit the official <span><Link to={'https://developers.google.com/maps'} target={'_blank'}>Google Maps JavaScript API documentation.</Link></span></p>
        </div>
      </div>

      <div className='separator'>

      </div>

      <div className='apisContainer'>
        <div className='apisImage'>
          <img src="./openweather.jpg" alt="" width={'300px'} />
        </div>

        <div className='apisInformations'>
          <h3>02</h3>
          <h2>OpenWeather API</h2>
          <p>The OpenWeather API is a service that provides weather data for developers to integrate into their applications. It offers current weather information, forecasts, historical data, and weather alerts for any location worldwide. The API supports multiple data formats and can be customized to retrieve various weather parameters, making it versatile for different use cases. For detailed information and documentation, you can visit the official  <span><Link to={'https://openweathermap.org/api'} target={'_blank'}>OpenWeather API documentation.</Link></span></p>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Apis