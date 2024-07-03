// src/components/LanguageSelector.js
import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';


const LanguageSelector = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const{i18n}= useTranslation();
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="text-lg"
      >
        <FaGlobe size={24} />
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded shadow-lg py-2">
          <button
            onClick={() => handleLanguageChange('en')}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('hi')}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Hindi
          </button>
          <button
            onClick={() => handleLanguageChange('ar')}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Arabic
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;