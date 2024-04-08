'use client';
import { FaSearch } from "react-icons/fa";

import { useState, useEffect } from 'react';

const DirectSearch = ({ page }) => {
  const linkProps = {

    direct: {
        icon: <FaSearch size={20}/>,
        text: "Ctrl + K",
    }
  };

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollOptions = {
      top: 800,
      left: 0,
      behavior: 'smooth',
    };



    window.scrollTo(scrollOptions);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        showButton ? 'block' : 'hidden'
      } dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300 fixed -translate-y-24 bottom-5 right-5 flex place-items-center space-x-2 rounded border border-gray-300 bg-white px-3 py-1 font-sans text-sm font-semibold text-gray-900 shadow-sm dark:border-gray-600 dark:bg-dgreen dark:text-gray-100`}
    >
      {linkProps[page]?.icon}
      <span>{linkProps[page]?.text}</span>
    </button>
  );
};

export default DirectSearch;