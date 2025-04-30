
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TreeDeciduous } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="border-b backdrop-blur-sm bg-white/80 fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-basateen-500 text-white p-1.5 rounded-md">
            <TreeDeciduous size={24} />
          </div>
          <span className="text-xl font-bold text-basateen-800">BASATEEN</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/projects" className="text-gray-600 hover:text-basateen-700 transition-colors">
            Projects
          </Link>
          <Link to="/how-it-works" className="text-gray-600 hover:text-basateen-700 transition-colors">
            How It Works
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-basateen-700 transition-colors">
            About Us
          </Link>
          <Link to="/impact" className="text-gray-600 hover:text-basateen-700 transition-colors">
            Impact
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline">Log In</Button>
          </Link>
          <Link to="/register">
            <Button className="bg-sukuk-600 hover:bg-sukuk-700">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
