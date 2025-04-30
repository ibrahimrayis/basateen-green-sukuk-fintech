
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DollarSign, Leaf, TreeDeciduous, Users } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Users className="w-10 h-10 text-sukuk-600" />,
      title: "Small Firms Apply",
      description: "Agricultural firms submit applications for tree-planting projects with detailed business plans."
    },
    {
      icon: <Leaf className="w-10 h-10 text-sukuk-600" />,
      title: "SPV Issues Sukuk",
      description: "A special purpose vehicle (SPV) issues Shariah-compliant sukuk certificates to investors."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-sukuk-600" />,
      title: "Funds Are Allocated",
      description: "Funds are pooled and allocated to selected smallholder firms to plant and maintain trees."
    },
    {
      icon: <TreeDeciduous className="w-10 h-10 text-sukuk-600" />,
      title: "Returns Generated",
      description: "Profits from produce sales and carbon credits are shared with investors periodically."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Basateen Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our Shariah-compliant green sukuk model enables agricultural firms to access 
            finance for tree-planting projects while offering tradable investment opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-sukuk-100 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 transform -translate-x-8">
                  <div className="w-full h-full bg-gray-200"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-3 h-3 rounded-full bg-sukuk-600"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/how-it-works">
            <Button variant="outline" size="lg">
              Learn More About Our Process
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
