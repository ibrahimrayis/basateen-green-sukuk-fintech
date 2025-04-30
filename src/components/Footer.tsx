
import React from 'react';
import { Link } from 'react-router-dom';
import { TreeDeciduous } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-basateen-500 text-white p-1.5 rounded-md">
                <TreeDeciduous size={24} />
              </div>
              <span className="text-xl font-bold text-basateen-800">BASATEEN</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Green Sukuk for Agroforestry Development. 
              Shariah-compliant investment in sustainable agriculture.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Platform</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/projects" className="text-sm text-gray-600 hover:text-basateen-700">
                  Browse Projects
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-gray-600 hover:text-basateen-700">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-sm text-gray-600 hover:text-basateen-700">
                  Impact Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-basateen-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-gray-600 hover:text-basateen-700">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-basateen-700">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-basateen-700">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-basateen-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/shariah" className="text-sm text-gray-600 hover:text-basateen-700">
                  Shariah Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-sm text-center text-gray-500">
            &copy; {new Date().getFullYear()} Basateen Green Sukuk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
