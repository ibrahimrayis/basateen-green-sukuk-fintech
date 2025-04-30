
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Users, Award, Flag, TrendingUp } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const Impact: React.FC = () => {
  // Mock data for charts
  const environmentalData = [
    { name: 'Carbon Sequestered (tons)', value: 5280 },
    { name: 'Water Conserved (kL)', value: 12500 },
    { name: 'Land Restored (ha)', value: 230 },
    { name: 'Biodiversity Increase (%)', value: 35 },
  ];
  
  const socialData = [
    { name: 'Jobs Created', value: 124 },
    { name: 'Farmers Supported', value: 85 },
    { name: 'Communities Impacted', value: 23 },
    { name: 'Training Sessions', value: 47 },
  ];
  
  const yearlyProgress = [
    { year: '2023', trees: 320, carbon: 420 },
    { year: '2024', trees: 850, carbon: 750 },
    { year: '2025', trees: 1500, carbon: 1200 },
    { year: '2026', trees: 2200, carbon: 2100 },
    { year: '2027', trees: 3800, carbon: 3500 },
  ];
  
  const sdgContribution = [
    { name: 'SDG 1', value: 15 },
    { name: 'SDG 2', value: 20 },
    { name: 'SDG 8', value: 17 },
    { name: 'SDG 13', value: 25 },
    { name: 'SDG 15', value: 23 },
  ];
  
  const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9', '#10B981'];
  
  const impactMetrics = [
    { label: "Trees Planted", value: "5,280", icon: "🌳", color: "bg-basateen-100" },
    { label: "Farmers Supported", value: "124", icon: "👨‍🌾", color: "bg-sukuk-100" },
    { label: "Carbon Offset (tons)", value: "750", icon: "♻️", color: "bg-basateen-100" },
    { label: "SDGs Addressed", value: "5", icon: "🎯", color: "bg-sukuk-100" },
    { label: "Hectares Restored", value: "230", icon: "🌿", color: "bg-basateen-100" },
    { label: "Investment Value ($)", value: "1.5M", icon: "💰", color: "bg-sukuk-100" },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero section */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Impact Landscape" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="container mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Impact Dashboard</h1>
              <p className="text-white/90 max-w-2xl">
                Tracking our contributions to environmental sustainability, social development, and economic growth
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-12 container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <div className={`mx-auto w-12 h-12 rounded-full ${metric.color} flex items-center justify-center text-2xl mb-2`}>
                    {metric.icon}
                  </div>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs text-gray-500">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="py-8 container mx-auto px-4">
          <Tabs defaultValue="environment" className="w-full">
            <TabsList className="mb-8 justify-center">
              <TabsTrigger value="environment">Environmental Impact</TabsTrigger>
              <TabsTrigger value="social">Social Impact</TabsTrigger>
              <TabsTrigger value="financial">Financial Impact</TabsTrigger>
              <TabsTrigger value="sdgs">SDG Alignment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="environment">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <TrendingUp size={24} className="text-basateen-600" />
                    Environmental Metrics
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Key Environmental Indicators</h3>
                      <div className="space-y-4">
                        {environmentalData.map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between text-sm mb-1">
                              <span>{item.name}</span>
                              <span className="font-medium">{item.value.toLocaleString()}</span>
                            </div>
                            <Progress value={(item.value / Math.max(...environmentalData.map(d => d.value))) * 100} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="h-80">
                      <h3 className="text-lg font-semibold mb-4">Year-over-Year Progress</h3>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={yearlyProgress}>
                          <XAxis dataKey="year" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="trees" name="Trees Planted" fill="#4ade80" />
                          <Bar dataKey="carbon" name="Carbon Offset (tons)" fill="#2dd4bf" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Environmental Impact Notes</h3>
                    <p className="text-sm text-gray-600">
                      Our environmental impact metrics are verified by third-party certifiers. Carbon sequestration 
                      is calculated using the IPCC methodology for agroforestry systems. Water conservation figures 
                      represent the difference in water usage compared to conventional farming methods.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="social">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Users size={24} className="text-sukuk-600" />
                    Social Impact
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Communities & Livelihoods</h3>
                      <div className="space-y-4">
                        {socialData.map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between text-sm mb-1">
                              <span>{item.name}</span>
                              <span className="font-medium">{item.value}</span>
                            </div>
                            <Progress value={(item.value / Math.max(...socialData.map(d => d.value))) * 100} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Demographics</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-center mb-2">
                              <span className="text-xs text-gray-500">Gender Distribution</span>
                            </div>
                            <div className="flex justify-center items-center gap-4">
                              <div className="text-center">
                                <div className="w-8 h-8 rounded-full bg-sukuk-200 mx-auto"></div>
                                <p className="text-xs mt-1">Male</p>
                                <p className="font-bold">58%</p>
                              </div>
                              <div className="text-center">
                                <div className="w-8 h-8 rounded-full bg-basateen-200 mx-auto"></div>
                                <p className="text-xs mt-1">Female</p>
                                <p className="font-bold">42%</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-center mb-2">
                              <span className="text-xs text-gray-500">Age Groups</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1 text-center">
                              <div>
                                <p className="text-xs">18-30</p>
                                <p className="font-bold">25%</p>
                              </div>
                              <div>
                                <p className="text-xs">31-50</p>
                                <p className="font-bold">45%</p>
                              </div>
                              <div>
                                <p className="text-xs">51+</p>
                                <p className="font-bold">30%</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-center mb-1">
                              <span className="text-xs text-gray-500">Education Programs</span>
                              <p className="font-bold text-lg">47</p>
                            </div>
                            <div className="text-center">
                              <p className="text-xs text-gray-500">Participants</p>
                              <p className="font-bold text-lg">685</p>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-center mb-1">
                              <span className="text-xs text-gray-500">Health Benefits</span>
                              <p className="font-bold text-lg">82%</p>
                            </div>
                            <div className="text-center">
                              <p className="text-xs text-gray-500">Report improved quality of life</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="financial">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Financial Impact</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Investment & Returns</h3>
                      <div className="space-y-6">
                        <Card>
                          <CardContent className="p-4">
                            <h4 className="font-medium text-gray-500 text-sm mb-1">Total Investment</h4>
                            <p className="text-2xl font-bold">$1,500,000</p>
                            <div className="flex items-center gap-1 mt-1 text-xs text-basateen-600">
                              <TrendingUp size={14} />
                              <span>12% increase from previous year</span>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-4">
                            <h4 className="font-medium text-gray-500 text-sm mb-1">Average ROI</h4>
                            <p className="text-2xl font-bold">7.8%</p>
                            <p className="text-xs text-gray-500 mt-1">
                              Annual return across all projects
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-4">
                            <h4 className="font-medium text-gray-500 text-sm mb-1">Revenue Generated for Farmers</h4>
                            <p className="text-2xl font-bold">$435,000</p>
                            <p className="text-xs text-gray-500 mt-1">
                              Through project partnerships and product sales
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Economic Benefits</h3>
                      
                      <Card className="mb-6">
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-3">Growth in Agricultural Output</h4>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Year 1</span>
                                <span>+15%</span>
                              </div>
                              <Progress value={15} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Year 2</span>
                                <span>+28%</span>
                              </div>
                              <Progress value={28} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Year 3</span>
                                <span>+42%</span>
                              </div>
                              <Progress value={42} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Year 4</span>
                                <span>+65%</span>
                              </div>
                              <Progress value={65} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Year 5 (Projected)</span>
                                <span>+85%</span>
                              </div>
                              <Progress value={85} className="h-2" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <h4 className="font-medium text-gray-500 text-xs mb-2">Local Economy Impact</h4>
                            <p className="text-2xl font-bold">$2.3M</p>
                            <p className="text-xs text-gray-500 mt-1">
                              Multiplier effect on local economies
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-4 text-center">
                            <h4 className="font-medium text-gray-500 text-xs mb-2">New Businesses Created</h4>
                            <p className="text-2xl font-bold">17</p>
                            <p className="text-xs text-gray-500 mt-1">
                              Supporting project value chains
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sdgs">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Flag size={24} className="text-basateen-600" />
                    Sustainable Development Goals
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">SDG Contribution</h3>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={sdgContribution}
                              cx="50%"
                              cy="50%"
                              labelLine={true}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                            >
                              {sdgContribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">SDG Alignment</h3>
                      <div className="grid grid-cols-5 gap-4">
                        {[1, 2, 8, 13, 15].map((sdg) => (
                          <div key={sdg} className="flex flex-col items-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-md p-2 border flex items-center justify-center">
                              <img 
                                src={`https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/E-SDG-goals-icons-individual-rgb-${sdg.toString().padStart(2, '0')}.png`}
                                alt={`SDG ${sdg}`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-xs text-center mt-2">Goal {sdg}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 space-y-4">
                        <div>
                          <h4 className="font-medium flex items-center gap-1">
                            <Award size={16} className="text-basateen-600" />
                            SDG 1: No Poverty
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Creating sustainable livelihoods for small farmers and rural communities.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium flex items-center gap-1">
                            <Award size={16} className="text-basateen-600" />
                            SDG 2: Zero Hunger
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Improving food security through sustainable agriculture practices.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium flex items-center gap-1">
                            <Award size={16} className="text-basateen-600" />
                            SDG 13: Climate Action
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Sequestering carbon and mitigating climate change impacts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impact;
