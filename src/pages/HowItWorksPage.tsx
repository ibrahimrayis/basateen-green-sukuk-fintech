
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">How Basateen Works</h1>
            <p className="text-xl text-gray-600">
              Our Shariah-compliant green sukuk platform connects agricultural firms with 
              ethical investors to fund sustainable tree planting initiatives.
            </p>
          </div>
          
          {/* Sukuk Flowchart */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">The Basateen Sukuk Model</h2>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Connecting lines */}
              <div className="hidden md:block absolute left-1/2 top-32 w-full h-[calc(100%-60px)] -translate-x-1/2 border-2 border-sukuk-200 rounded-xl"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <Card className="bg-white border-sukuk-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 w-12 h-12 rounded-full bg-sukuk-100 text-sukuk-800 flex items-center justify-center text-xl font-bold">1</div>
                    <h3 className="text-xl font-semibold mb-2">SPV Formation</h3>
                    <p className="text-gray-600">
                      A special purpose vehicle (SPV) is created by Lebanon Development and Innovation Fund 
                      to represent a pool of qualified small agricultural firms.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-sukuk-200 shadow-sm md:mt-16">
                  <CardContent className="p-6">
                    <div className="mb-4 w-12 h-12 rounded-full bg-sukuk-100 text-sukuk-800 flex items-center justify-center text-xl font-bold">2</div>
                    <h3 className="text-xl font-semibold mb-2">Sukuk Issuance</h3>
                    <p className="text-gray-600">
                      The SPV issues Sukuk certificates to investors, representing ownership in the 
                      underlying assets - the trees and their economic benefits.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-sukuk-200 shadow-sm md:mt-16">
                  <CardContent className="p-6">
                    <div className="mb-4 w-12 h-12 rounded-full bg-sukuk-100 text-sukuk-800 flex items-center justify-center text-xl font-bold">3</div>
                    <h3 className="text-xl font-semibold mb-2">Fund Utilization</h3>
                    <p className="text-gray-600">
                      Funds are pooled and allocated to selected smallholder firms to plant and maintain 
                      trees based on sustainable agroforestry practices.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-sukuk-200 shadow-sm md:mt-32">
                  <CardContent className="p-6">
                    <div className="mb-4 w-12 h-12 rounded-full bg-sukuk-100 text-sukuk-800 flex items-center justify-center text-xl font-bold">4</div>
                    <h3 className="text-xl font-semibold mb-2">Project Management</h3>
                    <p className="text-gray-600">
                      Agricultural firms enter into leasing or profit-sharing agreements with the SPV, 
                      and manage the tree planting and maintenance activities.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-sukuk-200 shadow-sm md:mt-32">
                  <CardContent className="p-6">
                    <div className="mb-4 w-12 h-12 rounded-full bg-sukuk-100 text-sukuk-800 flex items-center justify-center text-xl font-bold">5</div>
                    <h3 className="text-xl font-semibold mb-2">Revenue Generation</h3>
                    <p className="text-gray-600">
                      The trees generate multiple revenue streams including fruit harvests, timber production, 
                      carbon credits, and ecosystem service payments.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-sukuk-200 shadow-sm md:mt-48">
                  <CardContent className="p-6">
                    <div className="mb-4 w-12 h-12 rounded-full bg-sukuk-100 text-sukuk-800 flex items-center justify-center text-xl font-bold">6</div>
                    <h3 className="text-xl font-semibold mb-2">Profit Distribution</h3>
                    <p className="text-gray-600">
                      Profits from these activities are shared with investors periodically according to 
                      the agreed Shariah-compliant profit-sharing structure.
                    </p>
                  </CardContent>
                </Card>
                
              </div>
            </div>
          </div>
          
          {/* Types of Sukuk */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Types of Green Sukuk</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <div className="h-1.5 bg-basateen-500 w-full"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Salam Sukuk</h3>
                  <p className="text-gray-600 mb-4">
                    Forward financing where funds are provided upfront for future delivery of agricultural products.
                  </p>
                  <h4 className="font-medium mb-2">Suitable for:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Fruit orchards with predictable harvests</li>
                    <li>Timber production projects</li>
                    <li>Nut tree plantations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <div className="h-1.5 bg-sukuk-500 w-full"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Muzaraa Sukuk</h3>
                  <p className="text-gray-600 mb-4">
                    Agricultural partnership where one party provides land and the other provides labor and expertise.
                  </p>
                  <h4 className="font-medium mb-2">Suitable for:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Mixed agroforestry projects</li>
                    <li>Rehabilitation of degraded lands</li>
                    <li>Community-based forestry initiatives</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <div className="h-1.5 bg-earth-500 w-full"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Ijarah/Mudarabah Hybrid</h3>
                  <p className="text-gray-600 mb-4">
                    Combination of leasing and profit-sharing arrangements for complex agricultural projects.
                  </p>
                  <h4 className="font-medium mb-2">Suitable for:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Carbon sequestration projects</li>
                    <li>Ecosystem services programs</li>
                    <li>Long-term reforestation initiatives</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Benefits of Basateen Green Sukuk</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-basateen-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">For Small Agri-Firms</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Access to long-term Shariah-compliant financing</li>
                  <li>Enhanced income streams and land productivity</li>
                  <li>Improved climate resilience and market access</li>
                  <li>Technical support and knowledge transfer</li>
                </ul>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-sukuk-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">For Investors</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Exposure to real, productive assets</li>
                  <li>Sustainable impact with financial returns</li>
                  <li>Diversification into green and ethical investments</li>
                  <li>Tradable sukuk with income over time</li>
                </ul>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-earth-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">For Communities & Environment</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Contribution to afforestation and climate goals</li>
                  <li>Rural economic development and job creation</li>
                  <li>Soil and water conservation benefits</li>
                  <li>Biodiversity preservation and enhancement</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Alignment with Islamic Principles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Alignment with Islamic Finance Principles</h2>
            
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-sukuk-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-sukuk-700">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Asset-Backing</h3>
                        <p className="text-gray-600">
                          Every sukuk certificate is backed by real assets - the trees, their produce, and ecological benefits.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-sukuk-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-sukuk-700">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Risk-Sharing</h3>
                        <p className="text-gray-600">
                          Investors share in both the profits and risks associated with the agricultural ventures.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-sukuk-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-sukuk-700">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Ethical Investment</h3>
                        <p className="text-gray-600">
                          Projects support environmentally sustainable and socially beneficial activities.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-sukuk-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-sukuk-700">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">No Riba (Interest)</h3>
                        <p className="text-gray-600">
                          Returns are based on actual profits from productive activities, not interest.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-sukuk-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-sukuk-700">5</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Avoidance of Gharar (Excessive Uncertainty)</h3>
                        <p className="text-gray-600">
                          Clear contracts, transparent reporting, and risk mitigation strategies minimize uncertainty.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
