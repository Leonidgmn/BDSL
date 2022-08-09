import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '700px',
    height: '400px'
  };
  
  const center = {
    lat: 49.853313,
    lng: 24.025688
  };

function Maps() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCwl3AALufo-cure3qw8S5vFgnBFvEklOY"
      })     

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        // setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        // setMap(null)
      }, [])

      if (!isLoaded) return (<div>Loading...</div>)
  return (
    <div className="map-containers">
      <GoogleMap
        mapContainerClassName='map-container'
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
        <></>
      </GoogleMap>
    </div>
  )
}

export default Maps
