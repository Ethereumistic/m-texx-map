import React, { useState, useEffect, useRef } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { TbCurrentLocation } from 'react-icons/tb';
import { FaLocationArrow } from 'react-icons/fa';
import CitySearchBox from './CitySearchBox';
 


const MarkerGrid = ({ markers }) => {
  const [copiedText, setCopiedText] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const cityRefs = {}; 

  const handleCitySearch = (city) => {
    const cityRef = cityRefs[city];
    if (cityRef) {
      const offset = -120; // Adjust the offset value as needed
      const topPos = cityRef.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };
  


  // const handleCityClick = (cityName) => {
  //   const cityRef = cityRefs[cityName];
  //   if (cityRef) {
  //     cityRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };

  useEffect(() => {
    if (copiedText) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1800); // Adjust the duration as needed (in milliseconds)
    }
  }, [copiedText]);


  // Group markers by city
  const groupedMarkers = markers.reduce((acc, marker) => {
    const { city } = marker;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(marker);
    return acc;
  }, {});



  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => {
      setCopiedText(null);
    }, 500);
  };

  return (
    <div>
      
      <div className='text-center'>
        
      </div>
    <div className="border p-4 -mx-16 sm:-mx-16 md:-mx-16 lg:-mx-0 xl:-mx-0 z-20 -translate-y-[800px] -translate-x-60 sm:-translate-x-48 md:-translate-x-36 lg:-translate-x-0 xl:-translate-x-0">
    <CitySearchBox cities={Object.keys(groupedMarkers)} onCitySearch={handleCitySearch} />
    {Object.keys(groupedMarkers).map((city, index) => (
  <div key={city} className="border p-8 mb-4 " ref={(el) => (cityRefs[city] = el)}>
          <h2 className="text-4xl text-center mt-2 font-bold mb-2 dark:text-gray-200 ">{city}</h2>
          <h1 className="text-center text-2xl mt-4 font-black text-gray-500 mb-2">
            {groupedMarkers[city].length}
          </h1>
          <h2 className="text-xl font-bold -mb-8 dark:text-gray-200">Адрес:</h2>
          <h2 className="text-xl text-right font-bold mb-6 dark:text-gray-200 2xl:mr-8 mr-0">GPS:</h2>
          {groupedMarkers[city].map((location, locationIndex) => (
            <div key={locationIndex} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>

            {/* COPY ADDRESS BUTTON */}
            <form
              className='mt-2 sm:w-[60px] sm:h-[60px] w-[32px] h-[32px] sm:pl-[14px] pl-[4px] 
                        border rounded-md
                        translate-y-16
                          sm:translate-y-0
                          md:translate-y-0
                          lg:translate-y-0
                          xl:translate-y-0
                          2xl:translate-y-0
                          -ml-4
                          sm:ml-0'
              onClick={() => {
                copyToClipboard(location.popUp);
              }}
              onTouchStart={() => {
                copyToClipboard(location.popUp);
              }}
            >
              <FaLocationArrow size={20} className='dark:block hidden mt-1 sm:mt-4' />
              <FaLocationArrow size={20} className='dark:hidden mt-1 sm:mt-4' />
            </form>
          
            {/* Middle button for copying address and geocode */}
            <form
              key={locationIndex}
              className={`mx-8
                          sm:-mx-8 
                          md:-mx-16 
                          lg:-mx-24 
                          xl:-mx-36 
                          2xl:-mx-36 
                          sm:-translate-x-24
                          md:-translate-x-0
                          lg:-translate-x-2
                          xl:-translate-x-2
                          2xl:-translate-x-4
                          justify-center p-2 rounded-lg bg-green-300 dark:bg-gray-800 mb-2 text-center transition ${copiedText === `${location.popUp}\n ${location.geocode[0]}, ${location.geocode[1]}` ? 'animate-ping' : ''}`}
              onClick={() => {
                copyToClipboard(`${location.popUp}\n ${location.geocode[0]}, ${location.geocode[1]}`);
              }}
              onTouchStart={() => {
                copyToClipboard(`${location.popUp}\n ${location.geocode[0]}, ${location.geocode[1]}`);
              }}
            >
              <p className={`mt-2 mb-4 text-left  ${copiedText === `${location.popUp}\n ${location.geocode[0]}, ${location.geocode[1]}` ? 'hidden' : 'block'} dark:text-gray-200 `}>
                {location.popUp}
              </p>
              <p className={`text-right sm:-mt-4 sm:mb-2 hover:text-green ${copiedText === `${location.popUp}\n ${location.geocode[0]}, ${location.geocode[1]}` ? 'hidden' : 'block'} dark:text-gray-200`}>
                {location.geocode[0]}, {location.geocode[1]}
              </p>
              {copiedText === `${location.popUp}\n ${location.geocode[0]}, ${location.geocode[1]}` && (
                <p className="text-2xl text-green-600 my-2 text-center dark:text-green-300">Адресът и координатите са копирани!</p>
              )}
            </form>
          
            {/* Right button for copying geocode */}
            <button
              className=' sm:w-[60px] sm:h-[60px] 
                          w-[32px] h-[32px] 
                          sm:pl-[12px] 
                          border rounded-md 
                          translate-x-60 
                          sm:translate-x-[410px] 
                          -translate-y-24
                          sm:-translate-y-24
                          md:-translate-y-0
                          lg:-translate-y-0
                          xl:-translate-y-0
                          2xl:-translate-y-0
                          md:translate-x-36 
                          lg:translate-x-40 
                          xl:translate-x-48 
                          2xl:translate-x-64
                          mt-2
                          ml-3
                          '
              onClick={() => {
                copyToClipboard(`${location.geocode[0]}, ${location.geocode[1]}`);
              }}
              onTouchStart={() => {
                copyToClipboard(`${location.geocode[0]}, ${location.geocode[1]}`);
              }}
            >
              <TbCurrentLocation size={28} className='dark:block hidden' />
              <BiCurrentLocation size={28} className='dark:hidden block' />
            </button>
          </div>
          ))}
        </div>
      ))}

{showPopup && (
  <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-200 dark:bg-gray-800 py-1 px-4 rounded-lg shadow-lg animate-fade-out">
    <p className="text-sm dark:text-gray-300">Копирано!</p>
  </div>
)}

    </div>
    </div>
  );
};

export default MarkerGrid;