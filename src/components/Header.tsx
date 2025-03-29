
import React, { useState } from 'react';
import { Fuel } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [language, setLanguage] = useState('pl'); // Default to Polish
  
  return (
    <header className="bg-fuel-darkblue text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Fuel className="h-6 w-6" />
            <h1 className="text-xl font-bold">KalkulatorPaliwa</h1>
          </div>
          
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <Link to="/" className="hover:text-fuel-lightblue transition-colors duration-200">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-fuel-lightblue transition-colors duration-200">
                  O nas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-fuel-lightblue transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-fuel-lightblue transition-colors duration-200">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-fuel-lightblue transition-colors duration-200">
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-fuel-lightblue transition-colors duration-200">
                  Zastrzeżenia
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
