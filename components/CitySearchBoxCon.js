import React, { useState, useEffect } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const CitySearchBoxCon = ({ cities, onCitySearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSticky, setIsSticky] = useState(false); // State variable for sticky behavior

  const handleSearch = () => {
    if (searchQuery) {
      onCitySearch(searchQuery);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    handleSearch(); // Scroll to the city section
  };

  const updateSuggestions = (input) => {
    const filteredSuggestions = cities.filter(city =>
      city.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  useEffect(() => {
    updateSuggestions(searchQuery);
  }, [searchQuery, cities]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100); // Set to true when scrolled down 100 pixels
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`text-center ${isSticky ? 'sticky top-0 bg-dgreen shadow' : ''}`}>
      <input
        className='-translate-y-[12px] h-[38px] border-dgreen border rounded-lg text-center font-russo bg-lgreen text-dgreen px-4'
        type="text"
        placeholder="Търси населено място"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          updateSuggestions(e.target.value);
        }}
      />
      <button className='mx-4 sm:mb-0 mb-4 border-2 border-dgreen dark:border-lgreen rounded-md text-dgreen dark:text-lgreen hover:scale-110 transition duration-300' onClick={handleSearch}><BiSearchAlt size={38}/></button>

      {suggestions.length > 0 && searchQuery && (
        <ul className="suggestion-list mx-auto">
          {suggestions.map((suggestion, index) => (
            <li
              className='dark:border-lgreen border-dgreen border rounded-md text-center inline-block px-2 py-1 m-2 cursor-pointer font-russo text-dgreen dark:text-lgreen hover:scale-110 transition duration-300'
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearchBoxCon;
