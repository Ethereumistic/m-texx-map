"use client";
import { React, useRef, useEffect, useState } from 'react';
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import MarkerGrid from '../MarkerGrid';

import { MapContainer, TileLayer, Marker, Popup, useMap, mapConsumer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import Backlink from '../Backlink';
import Link from 'next/link';

const markerb = require('@/components/concurents/pinsBlue');
const markery = require('@/components/markerz')
const markers = require('@/components/markers')

const customIcon = new Icon({
    iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/pin.png",
    iconSize: [34, 34]
  })

  const customIconConB = new Icon({
    iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/dbpin.png",
    iconSize: [34, 34]
  })

  const customIconConY = new Icon({
    iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/dypin.png",
    iconSize: [34, 34]
  })

  function LocationMap({ selectedLocation }) {

    const map = useMap();
  
    
  
  
      if (selectedLocation) {
        const marker = markers.find((marker) => marker.popUp === selectedLocation);
        if (marker) {
          const [lat, lng] = marker.geocode;
          map.setView([lat, lng], 28); // Adjust zoom level as needed
        }
      }
    
      return null; // Return null since this component doesn't render anything
    }

 
export default function LokaciiCon({  }) {

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleCityClick = (cityName) => {
      if (selectedCity === cityName) {
        setSelectedCity(null); // Close the menu if the same city is clicked again
      } else {
        setSelectedCity(cityName);
      }
    };
  
    const handleLocationClick = (location) => {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setSelectedLocation(location);
      const marker = markers.find((marker) => marker.popUp === location);
      if (marker) {
        const [lat, lng] = marker.geocode;


        // map.setView([lat, lng], 14); // Adjust zoom level as needed
      }
    };

    const uniqueCityNames = [...new Set(markers.map((marker) => marker.city))];

    const [showMarkers1, setShowMarkers1] = useState(true);
    const [showMarkers2, setShowMarkers2] = useState(true);
    const [showMarkers3, setShowMarkers3] = useState(true);
    const [showMarkers4, setShowMarkers4] = useState(true);

    const toggleMarkers1 = () => {
      setShowMarkers1(prevState => !prevState);
    };
  
    const toggleMarkers2 = () => {
      setShowMarkers2(prevState => !prevState);
    };
  
    const toggleMarkers3 = () => {
      setShowMarkers3(prevState => !prevState);
    };

    const toggleMarkers4 = () => {
        setShowMarkers4(prevState => !prevState);
      };


    return (
        <div className='overflow-x-hidden overflow-y-hidden'>

                    
        
        <div className='w-10/12 translate-x-10 sm:translate-x-12 md:translate-x-16 lg:translate-x-72 xl:translate-x-72 2xl:translate-x-72 '>
        {/* <MapContainer
        
        center={[42.7339, 25.4858]}
        zoom={8}
        style={{ width: '100%', height: '800px', zIndex: '10' }}
        fullscreenControl={ true } >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkerClusterGroup
        chunkedLoading>
        {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode} icon={customIconConB}>
        <Popup>
            <div className=''>
                <p className='font-russo text-3xl text-center text-lblue bg-dblue rounded-full py-2'>{marker.city}</p>
                <p className='font-osw text-lg text-center text-dgreen'>{marker.popUp}</p>
                <p className='font-osw text-lg text-center text-dgreen'>
                    {marker.geocode[0].toFixed(6)} {marker.geocode[1].toFixed(6)}
                </p>
            </div>
        </Popup>


        </Marker>
))}
        </MarkerClusterGroup>
        <LocationMap selectedLocation={selectedLocation} />


        
        </MapContainer> */}

{/* <MapContainer center={[42.7339, 25.4858]} zoom={8} style={{ width: '100%', height: '800px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkerClusterGroup>
          {showMarkers1 && markerb.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIconConB}>
              <Popup>
                <div>
                  <p>{marker.city}</p>
                  <p>{marker.popUp}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          {showMarkers2 && markery.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIconConY}>
              <Popup>
                <div>
                  <p>{marker.city}</p>
                  <p>{marker.popUp}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          {showMarkers3 && markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>
                <div>
                  <p>{marker.city}</p>
                  <p>{marker.popUp}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer> */}

    {/* THE MAP CONDITIONAL RENDER BASED ON MARKERCLUSTERTOGGLE BUTTON */}
    {showMarkers4 ? (
    <MapContainer center={[42.7339, 25.4858]} zoom={8} style={{ width: '100%', height: '800px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkerClusterGroup>
          {showMarkers1 && markerb.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIconConB}>
              <Popup>
                <div>
                  <p>{marker.city}</p>
                  <p>{marker.popUp}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          {showMarkers2 && markery.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIconConY}>
              <Popup>
                <div>
                  <p>{marker.city}</p>
                  <p>{marker.popUp}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          {showMarkers3 && markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>
                <div>
                  <p>{marker.city}</p>
                  <p>{marker.popUp}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
      ) : (
        <MapContainer center={[42.7339, 25.4858]} zoom={8} style={{ width: '100%', height: '800px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {showMarkers1 && markerb.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIconConB}>
              <Popup>
                <div>
                  <p>{marker.city}</p>
                  <p>{marker.popUp}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          {showMarkers2 && markery.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIconConY}>
              <Popup>
                <div>
                  <p>{marker.city}</p>
                  <p>{marker.popUp}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          {showMarkers3 && markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>
                <div>
                  <p>{marker.city}</p>
                  <p>{marker.popUp}</p>
                </div>
              </Popup>
            </Marker>
          ))}      </MapContainer>
      )}
            </div>

            <div className='sm:translate-y-2 md:translate-y-2 lg:-translate-y-[800px] xl:-translate-y-[800px] 2xl:-translate-y-[800px] sm:relative md:relative lg:fixed xl:fixed 2xl:fixed '>
            <div className='flex space-x-1 justify-center my-8'>
<button onClick={toggleMarkers1} className={`font-osw text-xl text-center text-dblue bg-lblue hover:scale-110 transition duration-300 p-2 rounded-lg ${showMarkers1 ? 'bg-lblue' : 'bg-gray-400'}`}>
  <h4>🌊</h4>
</button>

      <button onClick={toggleMarkers2} className={`font-osw text-xl text-center text-dyellow bg-lyellow  hover:scale-110 transition duration-300 p-2 rounded-lg ${showMarkers2 ? 'bg-lyellow' : 'bg-gray-400'}`}>
        <h4 >❌</h4>
      </button>
      <button onClick={toggleMarkers3} className={`font-osw text-xl text-center text-dgreen bg-lgreen  hover:scale-110 transition duration-300 p-2 rounded-lg ${showMarkers3 ? 'bg-lblue' : 'bg-gray-400'}`}>
        <h4 className=''>🟢</h4>
      </button>

      <button onClick={toggleMarkers4} className={`font-osw text-xl text-center text-dgreen bg-lred  hover:scale-110 transition duration-300 p-2 rounded-lg ${showMarkers4 ? 'bg-lred' : 'bg-gray-400'}`}>
        <h4 className=''>💢</h4>
      </button>
        </div>
            <div className="bg-lblue  dark:lblue px-2 rounded-md w-80 sm:w-96 md:w-96 lg:w-72 xl:w-72 2xl:w-72 translate-x-10 sm:translate-x-32 md:translate-x-64 lg:translate-x-0 xl:translate-x-0 2xl:translate-x-0 h-[800px] overflow-auto custom-scrollbar " >

<h2 className="text-xl pl-20 text-dgreen font-russo mt-4 mb-6">Локации</h2>
<ul className=''>
  {uniqueCityNames.map((cityName, index) => (
    <li key={index} className=" pl-16 py-2 border-dgreen border  w-full">
      <div
        className="flex items-center font-russo cursor-pointer hover:scale-105 active:scale-105 transition duration-300 text-dgreen dark:text-dgreen"
        onClick={() => handleCityClick(cityName)}
        onTouchStart={() => handleCityClick(cityName)}
         >

        {cityName}
        {selectedCity === cityName ?  (
          <FaAngleDown className="w-4 h-4 ml-2" />
        ) : (
          <FaAngleRight className="w-4 h-4 ml-2" />
        )}
      </div>
      {selectedCity === cityName && (
        <ol className="ml-4  cursor-pointer ">
          {markers
            .filter((marker) => marker.city === cityName)
            .map((marker, index) => (
                <li
                key={index}
                className="mb-1 list-decimal cursor-pointer text-dgreen dark:text-dgreen font-osw "
                onClick={() => handleLocationClick(marker.popUp)}
                onTouchStart={() => handleLocationClick(marker.popUp)}
                >
                {marker.popUp}
              </li>
            ))}
        </ol>
      )}
    </li>
  ))}
</ul>
</div>
    
            </div>
            <div className='w-3/5 translate-x-80 translate-y-[820px]'>        
    <MarkerGrid markers={markers} />
    </div>
    <Backlink page="locations" />
        </div>
    )
};