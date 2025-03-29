
import React from 'react';
import { Fuel } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-fuel-darkblue text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Fuel className="h-6 w-6" />
            <h1 className="text-xl font-bold">FuelCalc</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-fuel-lightblue transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-fuel-lightblue transition-colors duration-200">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-fuel-lightblue transition-colors duration-200">Help</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
