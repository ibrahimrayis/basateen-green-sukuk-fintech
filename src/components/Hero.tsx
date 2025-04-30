
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, TreeDeciduous, DollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden islamic-pattern">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-basateen-100 text-basateen-800">
              <Leaf size={16} className="mr-2" />
              Shariah-Compliant Green Investment
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Green Sukuk for
              <span className="text-basateen-600 block mt-1">
                Agroforestry Development
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Invest in sustainable agriculture and tree planting initiatives through 
              Shariah-compliant Green Sukuk. Connect with small agricultural firms and 
              make a positive impact on the environment while earning ethical returns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button size="lg" className="bg-basateen-600 hover:bg-basateen-700 w-full">
                  Browse Projects
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-basateen-100 mb-3">
                  <DollarSign className="w-6 h-6 text-basateen-600" />
                </div>
                <h3 className="font-semibold">Halal Returns</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-basateen-100 mb-3">
                  <TreeDeciduous className="w-6 h-6 text-basateen-600" />
                </div>
                <h3 className="font-semibold">Real Assets</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-basateen-100 mb-3">
                  <Leaf className="w-6 h-6 text-basateen-600" />
                </div>
                <h3 className="font-semibold">Positive Impact</h3>
              </div>
            </div>
          </div>
          
          <div className="flex-1 hidden md:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-sukuk-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-basateen-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
              <div className="relative z-10 bg-white p-5 rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Agroforestry" 
                  className="w-full h-80 object-cover rounded-lg"
                />
                
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold">Total Impact</h3>
                    <span className="text-sm text-gray-500">Last updated: April 29, 2025</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded-md text-center shadow-sm">
                      <p className="text-2xl font-bold text-basateen-600">5,280</p>
                      <p className="text-xs text-gray-500 mt-1">Trees Planted</p>
                    </div>
                    <div className="bg-white p-3 rounded-md text-center shadow-sm">
                      <p className="text-2xl font-bold text-sukuk-600">$1.2M</p>
                      <p className="text-xs text-gray-500 mt-1">Invested</p>
                    </div>
                    <div className="bg-white p-3 rounded-md text-center shadow-sm">
                      <p className="text-2xl font-bold text-earth-600">12</p>
                      <p className="text-xs text-gray-500 mt-1">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
