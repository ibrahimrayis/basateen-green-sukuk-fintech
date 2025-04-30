
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Flag } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero section */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Basateen Team" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="container mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">About Basateen</h1>
              <p className="text-white/90 max-w-2xl">
                Creating sustainable growth through Shariah-compliant green investments
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-1 rounded-full inline-flex items-center bg-basateen-100 text-basateen-800 text-sm font-medium px-3 mb-6">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold mb-6">Building a More Sustainable Future</h2>
              <p className="text-gray-700 mb-4">
                Basateen is a pioneering green sukuk platform dedicated to financing sustainable agroforestry projects 
                across the Middle East and North Africa. Through Shariah-compliant investment opportunities, we connect 
                investors with impactful projects that generate environmental, social, and financial returns.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to accelerate sustainable agricultural development while creating 
                economic opportunities for small agricultural firms and rural communities. By leveraging 
                innovative financial instruments and technology, we make it possible to invest in a 
                greener, more prosperous future.
              </p>
              
              <div className="bg-sukuk-50 p-5 rounded-lg border border-sukuk-100">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Flag size={18} className="text-sukuk-600" />
                  Funding Partner
                </h3>
                <div className="flex items-center gap-4">
                  <img 
                    src="/lovable-uploads/2a69be5f-cb8b-4692-816e-ddbb3f4d3a0a.png" 
                    alt="Lebanon Fund for Development and Innovation" 
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <p className="font-medium">Lebanon Fund for Development and Innovation (LFDI)</p>
                    <p className="text-sm text-gray-600">
                      Basateen is proudly funded and supported by the Lebanon Fund for Development and Innovation,
                      driving sustainable economic growth through innovative financing solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-5 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Agroforestry landscape" 
                  className="w-full rounded-lg h-72 object-cover object-center"
                />
                
                <div className="mt-5 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-3">Our Values</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-basateen-100 flex items-center justify-center">
                        <Award size={14} className="text-basateen-700" />
                      </div>
                      <span>Shariah Compliance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-basateen-100 flex items-center justify-center">
                        <Award size={14} className="text-basateen-700" />
                      </div>
                      <span>Environmental Sustainability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-basateen-100 flex items-center justify-center">
                        <Award size={14} className="text-basateen-700" />
                      </div>
                      <span>Social Impact</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-basateen-100 flex items-center justify-center">
                        <Award size={14} className="text-basateen-700" />
                      </div>
                      <span>Transparency & Accountability</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sukuk-200 rounded-full"></div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="p-1 rounded-full inline-flex items-center bg-sukuk-100 text-sukuk-800 text-sm font-medium px-3 mb-4">
                Our Team
              </div>
              <h2 className="text-3xl font-bold">The People Behind Basateen</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Our diverse team brings together expertise in Islamic finance, sustainable agriculture, 
                technology, and impact investment to create innovative solutions for a better world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                    <Users size={36} className="text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-lg">Dr. Ahmad Hassan</h3>
                  <p className="text-sukuk-600 mb-2">Chief Executive Officer</p>
                  <p className="text-sm text-gray-500">
                    20+ years of experience in sustainable finance and Islamic banking.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                    <Users size={36} className="text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-lg">Sarah Mansour</h3>
                  <p className="text-sukuk-600 mb-2">Chief Financial Officer</p>
                  <p className="text-sm text-gray-500">
                    Finance expert with extensive experience in structuring sukuk instruments.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                    <Users size={36} className="text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-lg">Omar Nasser</h3>
                  <p className="text-sukuk-600 mb-2">Head of Agricultural Projects</p>
                  <p className="text-sm text-gray-500">
                    Agricultural engineer specialized in sustainable agroforestry systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
