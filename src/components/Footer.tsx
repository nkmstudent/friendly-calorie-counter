
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-fuel-darkblue text-white py-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} KalkulatorPaliwa. Wszelkie prawa zastrzeżone.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy" className="hover:text-fuel-lightblue transition-colors duration-200">
              Polityka prywatności
            </Link>
            <Link to="/terms" className="hover:text-fuel-lightblue transition-colors duration-200">
              Regulamin
            </Link>
            <Link to="/disclaimer" className="hover:text-fuel-lightblue transition-colors duration-200">
              Zastrzeżenia
            </Link>
            <Link to="/contact" className="hover:text-fuel-lightblue transition-colors duration-200">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
