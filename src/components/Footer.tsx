
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-fuel-darkblue text-white py-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} FuelCalc. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-fuel-lightblue transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-fuel-lightblue transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-fuel-lightblue transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
