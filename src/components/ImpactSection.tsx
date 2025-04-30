
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ImpactSection: React.FC = () => {
  const impactMetrics = [
    { label: "Trees Planted", value: "5,280", icon: "🌳" },
    { label: "Farmers Supported", value: "124", icon: "👨‍🌾" },
    { label: "Carbon Offset (tons)", value: "750", icon: "♻️" },
    { label: "SDGs Addressed", value: "5", icon: "🎯" },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-basateen-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-sukuk-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="p-1 rounded-full inline-flex items-center bg-basateen-100 text-basateen-800 text-sm font-medium px-3 mb-6">
              Measurable Impact
            </div>
            <h2 className="text-3xl font-bold mb-4">Making a Real Difference</h2>
            <p className="text-gray-600 mb-8">
              Every investment in Basateen projects contributes to multiple sustainable 
              development goals while generating economic, social, and environmental returns. 
              Our impact is transparent and measurable.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {impactMetrics.map((metric, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="flex items-center p-4">
                    <div className="text-3xl mr-4">{metric.icon}</div>
                    <div>
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <p className="text-sm text-gray-500">{metric.label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Link to="/impact">
              <Button className="bg-basateen-600 hover:bg-basateen-700">
                View Impact Dashboard
              </Button>
            </Link>
          </div>
          
          <div className="flex-1 relative">
            <div className="bg-white rounded-xl shadow-lg p-5 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1590682680695-43b964a3098e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Sustainable farming" 
                className="w-full rounded-lg h-72 object-cover object-center"
              />
              
              <div className="mt-5 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-3">Alignment with UN SDGs</h3>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 8, 13, 15].map((sdg) => (
                    <div key={sdg} className="flex items-center justify-center aspect-square rounded-md bg-white border border-gray-200 p-2">
                      <img 
                        src={`https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/E-SDG-goals-icons-individual-rgb-${sdg.toString().padStart(2, '0')}.png`}
                        alt={`SDG ${sdg}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sukuk-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
