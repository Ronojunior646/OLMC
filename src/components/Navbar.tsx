import React from 'react';
import { Link } from 'react-router-dom';
import { Church } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Church className="h-8 w-8" />
            <span className="font-bold text-lg">OLCM Church</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/services" className="hover:text-blue-200">Services</Link>
            <Link to="/donate" className="hover:text-blue-200">Donate</Link>
            <Link to="/about" className="hover:text-blue-200">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}