"use client";
import { React, useRef, useEffect, useState } from 'react';
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import MarkerGrid from './MarkerGrid';

import { MapContainer, TileLayer, Marker, Popup, useMap, mapConsumer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import Backlink from './Backlink';

const markers = require('@/components/markers');

const customIcon = new Icon({
    iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/pin.png",
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

 
export default function Lokacii({  }) {

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [mapFullscreen, setMapFullscreen] = useState(false);

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



    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <div className='w-10/12 translate-x-10 sm:translate-x-12 md:translate-x-16 lg:translate-x-72 xl:translate-x-72 2xl:translate-x-72 '>
                    <MapContainer
        
                    center={[42.7339, 25.4858]}
                    zoom={8}
                    style={{ width: '100%', height: '800px', zIndex: '10' }}
                    fullscreenControl={ true } >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <MarkerClusterGroup
                    chunkedLoading>
                    {markers.map((marker, index) => (
                    <Marker key={index} position={marker.geocode} icon={customIcon}>
                    <Popup>
                        <div className=''>
                            <p className='font-russo text-3xl text-center text-lgreen bg-dgreen rounded-full py-2'>{marker.city}</p>
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


                    
                    </MapContainer>
                    
            </div>

            <div className='sm:translate-y-2 md:translate-y-2 lg:-translate-y-[800px] xl:-translate-y-[800px] 2xl:-translate-y-[800px] sm:relative md:relative lg:fixed xl:fixed 2xl:fixed '>
            <div className="bg-lgreen  dark:bg-lgreen px-2 rounded-md w-80 sm:w-96 md:w-96 lg:w-72 xl:w-72 2xl:w-72 translate-x-10 sm:translate-x-32 md:translate-x-64 lg:translate-x-0 xl:translate-x-0 2xl:translate-x-0 h-[800px] overflow-auto custom-scrollbar " >

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