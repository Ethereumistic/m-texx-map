import { React, useRef, useEffect } from 'react';
import { useLocation } from '@/components/LocationContext';
import L from 'leaflet';
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";


import { MapContainer, TileLayer, Marker, Popup, useMap, mapConsumer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

const markers = require('@/components/markers');

const customIcon = new Icon({
    iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/pin.png",
    iconSize: [34, 34]
  })

 
export default function DesktopMap({  }) {
  

    return (
        <div className='w-full'>
        <div className="">
        

        <MapContainer
        
      center={[42.7339, 25.4858]}
      zoom={8}
      style={{ width: '100%', height: '800px', zIndex: '10' }} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
<MarkerClusterGroup
          chunkedLoading>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>
  <div>
    <p >{marker.city}</p>
    <p>{marker.popUp}</p>
    <p>
{marker.geocode[0].toFixed(6)} {marker.geocode[1].toFixed(6)}
    </p>
  </div>
</Popup>


          </Marker>
        ))}
        </MarkerClusterGroup>



        </MapContainer>

        </div>
        </div>
        );
    }