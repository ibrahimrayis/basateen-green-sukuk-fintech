
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Leaf, TreeDeciduous, CalendarIcon, DollarSign, Users, Globe, Check } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock project data
  const project = {
    id: id || "1",
    title: "Cedar Reforestation Project",
    location: "Mount Lebanon",
    description: "Restoring cedar forests with drought-resistant varieties across 50 hectares of mountainous terrain in the Mount Lebanon region. This project aims to combat deforestation, improve biodiversity, and create sustainable income sources for local communities.",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    raisedAmount: 85000,
    targetAmount: 120000,
    minInvestment: 500,
    expectedReturn: "7-9% annually",
    returnType: "Profit sharing (Mudarabah)",
    sukukTerm: "10 years",
    daysLeft: 12,
    treesPlanted: 850,
    treesTarget: 1200,
    farmInfo: {
      name: "Al-Arz Cooperative",
      founded: 2012,
      size: "50 hectares",
      employees: 15,
      certifications: ["Organic Certified", "Fair Trade"]
    },
    timeline: [
      { date: "May 2025", milestone: "Initial land preparation and soil conditioning" },
      { date: "June 2025", milestone: "First phase of tree planting (500 saplings)" },
      { date: "September 2025", milestone: "Irrigation system installation complete" },
      { date: "March 2026", milestone: "Second phase of tree planting (700 saplings)" },
      { date: "2028", milestone: "First harvest of complementary crops" },
      { date: "2030", milestone: "First carbon credit certification" }
    ],
    impact: {
      environmentalMetrics: {
        carbonSequestered: "5,200 tons (projected over 10 years)",
        waterConserved: "1.2 million liters annually",
        biodiversityIncrease: "35% increase in native species"
      },
      socialMetrics: {
        jobsCreated: 15,
        communitiesBenefited: 3,
        educationalPrograms: 2
      }
    },
    financials: {
      initialInvestment: "$120,000",
      operationalCosts: "$15,000 annually",
      projectedRevenue: {
        year1: "$0",
        year3: "$25,000",
        year5: "$45,000",
        year10: "$90,000"
      },
      returnOnInvestment: {
        year1: "0%",
        year3: "4%",
        year5: "7%",
        year10: "9%"
      }
    }
  };
  
  const percentRaised = Math.min(Math.round((project.raisedAmount / project.targetAmount) * 100), 100);
  const percentTrees = Math.min(Math.round((project.treesPlanted / project.treesTarget) * 100), 100);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        {/* Hero section */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="container mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-basateen-500/80 rounded-full text-sm">
                  {project.location}
                </span>
                <span className="px-3 py-1 bg-sukuk-600/80 rounded-full text-sm">
                  {project.farmInfo.name}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 -mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <Tabs defaultValue="overview">
                    <TabsList className="mb-6">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="impact">Impact</TabsTrigger>
                      <TabsTrigger value="financials">Financials</TabsTrigger>
                      <TabsTrigger value="timeline">Timeline</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
                          <p className="text-gray-700">
                            {project.description}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3">About the Farm</h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-gray-500">Farm Name</p>
                                <p className="font-medium">{project.farmInfo.name}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Founded</p>
                                <p className="font-medium">{project.farmInfo.founded}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Size</p>
                                <p className="font-medium">{project.farmInfo.size}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Employees</p>
                                <p className="font-medium">{project.farmInfo.employees}</p>
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <p className="text-sm text-gray-500">Certifications</p>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {project.farmInfo.certifications.map((cert, index) => (
                                  <div key={index} className="flex items-center gap-1 px-2 py-1 bg-white rounded border text-xs">
                                    <Check size={12} className="text-basateen-600" />
                                    {cert}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3">Project Progress</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <div className="flex justify-between text-sm mb-1">
                                <span className="font-medium">Funding Progress</span>
                                <span>{percentRaised}%</span>
                              </div>
                              <Progress value={percentRaised} className="h-2" />
                              <div className="mt-2 text-sm text-gray-500">
                                ${project.raisedAmount.toLocaleString()} raised of ${project.targetAmount.toLocaleString()}
                              </div>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <div className="flex justify-between text-sm mb-1">
                                <span className="font-medium">Planting Progress</span>
                                <span>{percentTrees}%</span>
                              </div>
                              <Progress value={percentTrees} className="h-2" />
                              <div className="mt-2 text-sm text-gray-500">
                                {project.treesPlanted.toLocaleString()} trees planted of {project.treesTarget.toLocaleString()} target
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="impact">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-semibold mb-4">Environmental Impact</h2>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-basateen-50 p-4 rounded-lg">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-basateen-100 flex items-center justify-center">
                                  <TreeDeciduous size={20} className="text-basateen-700" />
                                </div>
                                <h4 className="font-medium">Carbon Sequestration</h4>
                              </div>
                              <p className="text-basateen-700 font-semibold">
                                {project.impact.environmentalMetrics.carbonSequestered}
                              </p>
                            </div>
                            <div className="bg-basateen-50 p-4 rounded-lg">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-basateen-100 flex items-center justify-center">
                                  <Leaf size={20} className="text-basateen-700" />
                                </div>
                                <h4 className="font-medium">Water Conservation</h4>
                              </div>
                              <p className="text-basateen-700 font-semibold">
                                {project.impact.environmentalMetrics.waterConserved}
                              </p>
                            </div>
                            <div className="bg-basateen-50 p-4 rounded-lg">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-basateen-100 flex items-center justify-center">
                                  <Globe size={20} className="text-basateen-700" />
                                </div>
                                <h4 className="font-medium">Biodiversity</h4>
                              </div>
                              <p className="text-basateen-700 font-semibold">
                                {project.impact.environmentalMetrics.biodiversityIncrease}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h2 className="text-2xl font-semibold mb-4">Social Impact</h2>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-sukuk-50 p-4 rounded-lg">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-sukuk-100 flex items-center justify-center">
                                  <Users size={20} className="text-sukuk-700" />
                                </div>
                                <h4 className="font-medium">Jobs Created</h4>
                              </div>
                              <p className="text-sukuk-700 font-semibold">
                                {project.impact.socialMetrics.jobsCreated}
                              </p>
                            </div>
                            <div className="bg-sukuk-50 p-4 rounded-lg">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-sukuk-100 flex items-center justify-center">
                                  <Users size={20} className="text-sukuk-700" />
                                </div>
                                <h4 className="font-medium">Communities</h4>
                              </div>
                              <p className="text-sukuk-700 font-semibold">
                                {project.impact.socialMetrics.communitiesBenefited}
                              </p>
                            </div>
                            <div className="bg-sukuk-50 p-4 rounded-lg">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-sukuk-100 flex items-center justify-center">
                                  <Users size={20} className="text-sukuk-700" />
                                </div>
                                <h4 className="font-medium">Education Programs</h4>
                              </div>
                              <p className="text-sukuk-700 font-semibold">
                                {project.impact.socialMetrics.educationalPrograms}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h2 className="text-2xl font-semibold mb-4">SDG Alignment</h2>
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
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="financials">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-semibold mb-4">Financial Overview</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium mb-3">Investment Structure</h4>
                              <div className="space-y-3">
                                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="text-gray-600">Initial Investment</span>
                                  <span className="font-semibold">{project.financials.initialInvestment}</span>
                                </div>
                                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="text-gray-600">Operational Costs</span>
                                  <span className="font-semibold">{project.financials.operationalCosts}</span>
                                </div>
                                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="text-gray-600">Sukuk Structure</span>
                                  <span className="font-semibold">{project.returnType}</span>
                                </div>
                                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="text-gray-600">Term Length</span>
                                  <span className="font-semibold">{project.sukukTerm}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-medium mb-3">Projected Revenue</h4>
                              <div className="space-y-3">
                                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="text-gray-600">Year 1</span>
                                  <span className="font-semibold">{project.financials.projectedRevenue.year1}</span>
                                </div>
                                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="text-gray-600">Year 3</span>
                                  <span className="font-semibold">{project.financials.projectedRevenue.year3}</span>
                                </div>
                                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="text-gray-600">Year 5</span>
                                  <span className="font-semibold">{project.financials.projectedRevenue.year5}</span>
                                </div>
                                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="text-gray-600">Year 10</span>
                                  <span className="font-semibold">{project.financials.projectedRevenue.year10}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h2 className="text-2xl font-semibold mb-4">Return on Investment</h2>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 bg-sukuk-50 rounded-lg text-center">
                              <p className="text-xs text-gray-500 mb-1">Year 1</p>
                              <p className="text-2xl font-bold text-sukuk-700">{project.financials.returnOnInvestment.year1}</p>
                            </div>
                            <div className="p-4 bg-sukuk-50 rounded-lg text-center">
                              <p className="text-xs text-gray-500 mb-1">Year 3</p>
                              <p className="text-2xl font-bold text-sukuk-700">{project.financials.returnOnInvestment.year3}</p>
                            </div>
                            <div className="p-4 bg-sukuk-50 rounded-lg text-center">
                              <p className="text-xs text-gray-500 mb-1">Year 5</p>
                              <p className="text-2xl font-bold text-sukuk-700">{project.financials.returnOnInvestment.year5}</p>
                            </div>
                            <div className="p-4 bg-sukuk-50 rounded-lg text-center">
                              <p className="text-xs text-gray-500 mb-1">Year 10</p>
                              <p className="text-2xl font-bold text-sukuk-700">{project.financials.returnOnInvestment.year10}</p>
                            </div>
                          </div>
                          
                          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-500">
                              <strong>Note:</strong> These projections are based on historical data and market research. Actual returns may vary. All investments are made in accordance with Shariah principles and subject to risks associated with agricultural ventures and market conditions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="timeline">
                      <div>
                        <h2 className="text-2xl font-semibold mb-6">Project Timeline</h2>
                        <div className="relative pl-6">
                          {project.timeline.map((item, index) => (
                            <div key={index} className="mb-8 relative">
                              {/* Timeline line */}
                              {index < project.timeline.length - 1 && (
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 -ml-3 h-full"></div>
                              )}
                              
                              {/* Timeline dot */}
                              <div className="absolute left-0 w-6 h-6 rounded-full bg-sukuk-100 border-2 border-sukuk-400 -ml-6 flex items-center justify-center">
                                <CalendarIcon size={12} className="text-sukuk-600" />
                              </div>
                              
                              {/* Content */}
                              <div className="pl-4">
                                <span className="inline-block px-3 py-1 bg-sukuk-100 text-sukuk-700 rounded-full text-xs font-medium mb-2">
                                  {item.date}
                                </span>
                                <h3 className="text-lg font-medium">{item.milestone}</h3>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            {/* Investment sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-5">Invest in this Project</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Min. Investment</span>
                        <span className="font-medium">${project.minInvestment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expected Return</span>
                        <span className="font-medium">{project.expectedReturn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sukuk Term</span>
                        <span className="font-medium">{project.sukukTerm}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time Left</span>
                        <span className="font-medium">{project.daysLeft} days</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Link to="/login">
                        <Button className="w-full bg-sukuk-600 hover:bg-sukuk-700">
                          Invest Now
                        </Button>
                      </Link>
                      
                      <p className="text-xs text-center text-gray-500">
                        By investing, you agree to our <Link to="/terms" className="text-sukuk-600 hover:underline">Terms of Service</Link> and acknowledge that your investment is subject to risks.
                      </p>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-medium mb-4">Share This Project</h4>
                      <div className="flex justify-center gap-4">
                        {/* Placeholder for share buttons */}
                        <Button variant="outline" size="sm">
                          Twitter
                        </Button>
                        <Button variant="outline" size="sm">
                          Facebook
                        </Button>
                        <Button variant="outline" size="sm">
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
