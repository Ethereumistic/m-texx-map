"use client";
import { React, useRef, useEffect, useState } from 'react';
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/Leaflet.fullscreen";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css"
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import MarkerGrid from '../MarkerGrid';

import { MapContainer, TileLayer, Marker, Popup, useMap, mapConsumer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import Backlink from '../Backlink';
import Link from 'next/link';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import MarkerGridBlue from './blue/MarkerGridBlue';
import MarkerGridRed from './red/MarkerGridRed';

const markerb = require('@/components/concurents/blue/blue');
const markery = require('@/components/concurents/red/red')
const markers = require('@/components/markers')

const customIcon = new Icon({
    iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/pin.png",
    iconSize: [34, 34]
  })

  const customIconConB = new Icon({
    iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/lbpin.png",
    iconSize: [34, 34]
  })

  const customIconConY = new Icon({
    iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/lrpin.png",
    iconSize: [34, 34]
  })


// const iconWave = new Icon({
//     iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/wave1.png",
//     iconSize: [34, 34]
//   })

//   const iconX = new Icon({
//     iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/x1.png",
//     iconSize: [34, 34]
//   })

//   const iconG = new Icon({
//     iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/green1.png",
//     iconSize: [34, 34]
//   })

function Fullscreen() {
  const mapRef = useRef();

  useEffect(() => {
    const {current = {} } = mapRef;
    const { leafletElement: map } = current;
  })
}


  
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
    
  function LocationMapBlue({ selectedLocationBlue }) {
    const map = useMap();
      if (selectedLocationBlue) {
        const markerb = markers.find((marker) => marker.popUp === selectedLocationBlue);
        if (markerb) {
          const [lat, lng] = markerb.geocode;
          map.setView([lat, lng], 28); // Adjust zoom level as needed
        }
      }
      return null; // Return null since this component doesn't render anything
    };

    function LocationMapRed({ selectedLocationRed }) {
        const map = useMap();
          if (selectedLocationRed) {
            const markery = markers.find((marker) => marker.popUp === selectedLocationRed);
            if (markery) {
              const [lat, lng] = markery.geocode;
              map.setView([lat, lng], 28); // Adjust zoom level as needed
            }
          }
          return null; // Return null since this component doesn't render anything
        };


 
export default function LokaciiCon({  }) {

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const [selectedCityBlue, setSelectedCityBlue] = useState(null);
    const [selectedLocationBlue, setSelectedLocationBlue] = useState(null);

    const [selectedCityRed, setSelectedCityRed] = useState(null);
    const [selectedLocationRed, setSelectedLocationRed] = useState(null);


    
    const handleCityClick = (cityName) => {
      if (selectedCity === cityName) {
        setSelectedCity(null); // Close the menu if the same city is clicked again
      } else {
        setSelectedCity(cityName);
      }
    };
    const handleCityClickBlue = (cityName) => {
      if (selectedCityBlue === cityName) {
        setSelectedCityBlue(null); // Close the menu if the same city is clicked again
      } else {
        setSelectedCityBlue(cityName);
      }
    };
    const handleCityClickRed = (cityName) => {
      if (selectedCityRed === cityName) {
        setSelectedCityRed(null); // Close the menu if the same city is clicked again
      } else {
        setSelectedCityRed(cityName);
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

    const handleLocationClickRed = (location) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSelectedLocation(location);
      const markery = markers.find((marker) => marker.popUp === location);
      if (markery) {
        const [lat, lng] = markery.geocode;
          // map.setView([lat, lng], 14); 
        }
      };
      
      const handleLocationClickBlue = (location) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSelectedLocation(location);
        const markerb = markers.find((marker) => marker.popUp === location);
        if (markerb) {
          const [lat, lng] = markerb.geocode;
        //   map.setView([lat, lng], 14); 
        }
      };

    const uniqueCityNames = [...new Set(markers.map((marker) => marker.city))];
    const uniqueCityNamesBlue = [...new Set(markerb.map((marker) => marker.city))];
    const uniqueCityNamesRed = [...new Set(markery.map((marker) => marker.city))];

    const [showMarkers1, setShowMarkers1] = useState(true);
    const [showMarkers2, setShowMarkers2] = useState(true);
    const [showMarkers3, setShowMarkers3] = useState(true);
    const [showMarkers4, setShowMarkers4] = useState(true);
    const [showMarkers5, setShowMarkers5] = useState(true);
    const [showRedSidebar, setShowRedSidebar] = useState(true);
    const [showGreenSidebar, setShowGreenSidebar] = useState(true);
    const [showBlueSidebar, setShowBlueSidebar] = useState(true);
    const [iconSize, setIconSize] = useState([34, 34]); // Initial icon size
    const [showGray, setShowGray] = useState(true);

    
    
const iconWave = new Icon({
  iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/wave1.png",
  iconSize: iconSize
})

const iconX = new Icon({
  iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/x1.png",
  iconSize: iconSize
})

const iconG = new Icon({
  iconUrl: "https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/locations/green1.png",
  iconSize: iconSize
})
    
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
      const toggleMarkers5 = () => {
        setShowMarkers5(prevState => !prevState);
      };

      const toggleRedSidebar = () => {
        setShowRedSidebar((prev) => !prev);
      };
      const toggleGreenSidebar = () => {
        setShowGreenSidebar((prev) => !prev);
      };
      const toggleBlueSidebar = () => {
        setShowBlueSidebar((prev) => !prev);
      };
      
      const toggleIconSize = () => {
        // Toggle the icon size based on the current state
        setIconSize(prevSize => (prevSize[0] === 34 && prevSize[1] === 34) ? [21, 21] : [34, 34]);
      };

      const toggleIconGray = () => {
        setShowGray(prevState => !prevState);
      };


    return (
        <div className='overflow-x-hidden overflow-y-hidden '>

                    
        
        <div className='w-10/12 translate-x-10 sm:translate-x-12 md:translate-x-16 lg:translate-x-72 xl:translate-x-72 2xl:translate-x-72 '>

    {/* THE MAP CONDITIONAL RENDER BASED ON MARKERCLUSTERTOGGLE BUTTON */}
    {showMarkers4 ? (
  <MapContainer center={[42.7339, 25.4858]} FullscreenControl={true} zoom={8} style={{ width: '100%', height: '800px' }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <MarkerClusterGroup>
      {showMarkers1 && markerb.map((marker, index) => (
        <Marker key={index} position={marker.geocode} icon={iconWave}>
          <Popup>
            <div>
              <p>{marker.city}</p>
              <p>{marker.popUp}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      {showMarkers2 && markery.map((marker, index) => (
        <Marker key={index} position={marker.geocode} icon={iconX}>
          <Popup>
            <div>
              <p>{marker.city}</p>
              <p>{marker.popUp}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      {showMarkers3 && markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode} icon={iconG}>
          <Popup>
            <div>
              <p>{marker.city}</p>
              <p>{marker.popUp}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
    <LocationMap selectedLocation={selectedLocation} />
    <LocationMapBlue selectedLocationBlue={selectedLocationBlue} />
    <LocationMapRed selectedLocationRed={selectedLocationRed} />
  </MapContainer>
      ) : (
        <MapContainer center={[42.7339, 25.4858]} FullscreenControl={true} zoom={8} style={{ width: '100%', height: '800px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {showMarkers1 && markerb.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={iconWave}>
              <Popup>
                <div>
                  <p>{marker.city}</p>
                  <p>{marker.popUp}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          {showMarkers2 && markery.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={iconX}>
              <Popup>
                <div>
                  <p>{marker.city}</p>
                  <p>{marker.popUp}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          {showMarkers3 && markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={iconG}>
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

            <div className='z-[1000] sm:translate-y-2 md:translate-y-2 lg:-translate-y-[800px] xl:-translate-y-[800px] 2xl:-translate-y-[920px] sm:relative md:relative lg:fixed xl:fixed 2xl:fixed '>
            <div className='flex space-x-1 justify-center my-4'>
                <div className='flex '>
                <div className='flex-col flex'>
  <button onClick={toggleMarkers1} className={`font-osw text-xl m-2 text-center hover:scale-110 transition duration-300 p-2 rounded-full ${showMarkers1 ? 'text-dblue bg-lblue' : 'text-gray-400 bg-gray-300'}`}>
    <h4>🌊</h4>
  </button>
  <button onClick={toggleBlueSidebar} className={`font-osw text-xl  mx-auto text-centerhover:scale-110 transition duration-300 p-2 rounded-lg ${showBlueSidebar ? 'text-dblue bg-lblue' : 'text-gray-400 bg-gray-300'}`}>
    <h4><IoIosArrowDropdownCircle size={24}/></h4>
  </button>
</div>

<div className='flex-col flex'>
  <button onClick={toggleMarkers2} className={`font-osw text-xl m-2 text-center hover:scale-110 transition duration-300 p-2 rounded-full ${showMarkers2 ? 'text-dyellow bg-lyellow' : 'text-gray-400 bg-gray-300'}`}>
    <h4>❌</h4>
  </button>
  <button onClick={toggleRedSidebar} className={`font-osw text-xl  mx-auto text-center hover:scale-110 transition duration-300 p-2 rounded-lg ${showRedSidebar ? 'text-dyellow bg-lyellow' : 'text-gray-400 bg-gray-300'}`}>
    <h4><IoIosArrowDropdownCircle size={24}/></h4>
  </button>
</div>

<div className='flex-col flex'>
  <button onClick={toggleMarkers3} className={`font-osw text-xl m-2 text-center hover:scale-110 transition duration-300 p-2 rounded-full ${showMarkers3 ? 'text-dgreen bg-lgreen' : 'text-gray-400 bg-gray-300'}`}>
    <h4>🟢</h4>
  </button>
  <button onClick={toggleGreenSidebar} className={`font-osw text-xl  mx-auto hover:scale-110 transition duration-300 p-2 rounded-lg ${showGreenSidebar ? 'text-dgreen bg-lgreen' : 'text-gray-400 bg-gray-300'}`}>
    <h4><IoIosArrowDropdownCircle size={24}/></h4>
  </button>
</div>

<div className='flex-col flex'>
  <button onClick={toggleMarkers4} className={`font-osw text-xl m-2 text-center hover:scale-110 transition duration-300 p-2 rounded-lg ${showMarkers4 ? 'text-dgreen bg-lred' : 'text-gray-400 bg-gray-300'}`}>
    <h4>💢</h4>
  </button>
  <button 
  onClick={toggleIconSize} 
  className={`font-osw text-xl mx-auto hover:scale-110 transition duration-300 p-2 rounded-lg ${
    (showMarkers5 && iconSize[0] === 34 && iconSize[1] === 34) 
      ? 'text-dgreen bg-lred' // Button is active and icon size is normal
      : 'text-gray-400 bg-gray-300' // Button is inactive or icon size is small
  }`}
>
  <h4 className='text-sm py-[2px] px-[10px]'>
    { (showMarkers5 && iconSize[0] === 34 && iconSize[1] === 34) 
      ? 'L' // Display "L" when button is red (active)
      : 'S' // Display "S" when button is gray (inactive)
    }
  </h4>
</button>
  {/* <button  className={`font-osw text-xl text-center hover:scale-110 transition duration-300 p-2 rounded-lg ${showMarkers ? 'text-dgreen bg-lred' : 'text-gray-400 bg-gray-300'}`}>
    <h4><IoIosArrowDropdownCircle size={24}/></h4>
  </button> */}
</div>


      </div>
        </div>
            <div className="  dark:lblue px-2 rounded-md w-80 sm:w-96 md:w-96 lg:w-72 xl:w-72 2xl:w-72 translate-x-10 sm:translate-x-32 md:translate-x-64 lg:translate-x-0 xl:translate-x-0 2xl:translate-x-0 h-[800px] overflow-auto custom-scrollbar " >

<h2 className="text-xl pl-20 text-dgreen dark:text-white font-russo mt-4 mb-6">Локации</h2>
<ul className=''>
  {/* {uniqueCityNames.map((cityName, index) => (
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
  ))} */}

{showBlueSidebar ? (
    <div className='bg-lblue rounded-md'>
    {/* Green Sidebar Content */}
    {uniqueCityNamesBlue.map((cityName, index) => (
    <li key={index} className=" pl-16 py-2 border-dgreen border  w-full">
    <div
      className="flex items-center font-russo cursor-pointer hover:scale-105 active:scale-105 transition duration-300 text-dred dark:text-dred"
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
        {markerb
          .filter((marker) => marker.city === cityName)
          .map((marker, index) => (
              <li
              key={index}
              className="mb-1 list-decimal cursor-pointer text-dgreen dark:text-dgreen font-osw "
              onClick={() => handleLocationClickBlue(marker.popUp)}
              onTouchStart={() => handleLocationClickBlue(marker.popUp)}
              >
              {marker.popUp}
            </li>
          ))}
      </ol>
    )}
  </li>
))}
  </div>
) : null}

{showRedSidebar ? (
  <div className='bg-lred rounded-md'>
    {/* Red Sidebar Content */}
    {uniqueCityNamesRed.map((cityName, index) => (
      <li key={index} className="pl-16 py-2 border-dgreen border w-full">
        <div
          className="flex items-center font-russo cursor-pointer hover:scale-105 active:scale-105 transition duration-300 text-dred dark:text-dred"
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
          <ol className="ml-4 cursor-pointer">
            {markery
              .filter((marker) => marker.city === cityName)
              .map((marker, index) => (
                <li
                  key={index}
                  className="mb-1 list-decimal cursor-pointer text-dgreen dark:text-dgreen font-osw"
                  onClick={() => handleLocationClickRed(marker.popUp, marker)}
                  onTouchStart={() => handleLocationClickRed(marker.popUp, marker)}
                >
                  {marker.popUp}
                </li>
              ))}
          </ol>
        )}
      </li>
    ))}
  </div>
) : null}

{showGreenSidebar ? (
    <div className='bg-lgreen rounded-md'>
    {/* Green Sidebar Content */}
    {uniqueCityNames.map((cityName, index) => (
    <li key={index} className=" pl-16 py-2 border-dgreen border  w-full">
    <div
      className="flex items-center font-russo cursor-pointer hover:scale-105 active:scale-105 transition duration-300 text-dred dark:text-dred"
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
  </div>
) : null}

</ul>

</div>
    
            </div>
            <div className='w-3/5 translate-x-80 translate-y-[820px]'>        
            {showGreenSidebar && <MarkerGrid markers={markers} />}
{showBlueSidebar && <MarkerGridBlue markers={markerb} />}
{showRedSidebar && <MarkerGridRed markers={markery} />}
    </div>
    <div className='text-4xl'>asd</div>
    <Backlink page="locations" />
        </div>
    )
};