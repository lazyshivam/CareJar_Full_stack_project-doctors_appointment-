import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="mx-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Doctor Appointments</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/contacts" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
