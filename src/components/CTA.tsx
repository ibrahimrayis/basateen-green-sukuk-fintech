
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-sukuk-600 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 islamic-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Basateen Movement Today
          </h2>
          <p className="text-sukuk-100 mb-8 text-lg">
            Whether you're looking to invest in a sustainable future or seeking financing for your 
            agricultural project, Basateen provides the perfect Shariah-compliant platform to achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/projects">
              <Button size="lg" className="bg-white text-sukuk-800 hover:bg-sukuk-100">
                Browse Projects
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-sukuk-500">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
