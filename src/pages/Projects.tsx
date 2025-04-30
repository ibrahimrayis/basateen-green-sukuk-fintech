
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const Projects: React.FC = () => {
  // Mock data for projects
  const allProjects: ProjectCardProps[] = [
    {
      id: "1",
      title: "Cedar Reforestation Project",
      location: "Mount Lebanon",
      description: "Restoring cedar forests with drought-resistant varieties across 50 hectares of mountainous terrain.",
      image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      raisedAmount: 85000,
      targetAmount: 120000,
      daysLeft: 12,
      treesPlanted: 850
    },
    {
      id: "2",
      title: "Olive Grove Expansion",
      location: "Bekaa Valley",
      description: "Expanding traditional olive cultivation with modern agroforestry techniques to enhance soil quality and biodiversity.",
      image: "https://images.unsplash.com/photo-1615664527460-43efdfa13d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      raisedAmount: 65000,
      targetAmount: 80000,
      daysLeft: 8,
      treesPlanted: 430
    },
    {
      id: "3",
      title: "Citrus & Date Integration",
      location: "Southern Lebanon",
      description: "Creating mixed orchards of citrus trees and date palms with vegetable intercropping for year-round harvests.",
      image: "https://images.unsplash.com/photo-1591521970967-9f8162d5f4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      raisedAmount: 105000,
      targetAmount: 150000,
      daysLeft: 18,
      treesPlanted: 1200
    },
    {
      id: "4",
      title: "Nut Tree Corridor",
      location: "North Lebanon",
      description: "Creating wildlife corridors with almond, walnut, and pistachio trees on degraded agricultural land.",
      image: "https://images.unsplash.com/photo-1631898039334-8ec1f6368158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      raisedAmount: 45000,
      targetAmount: 90000,
      daysLeft: 24,
      treesPlanted: 380
    },
    {
      id: "5",
      title: "Apple Orchard Renovation",
      location: "Mount Lebanon",
      description: "Modernizing traditional apple orchards with drought-resistant varieties and efficient irrigation.",
      image: "https://images.unsplash.com/photo-1593076896970-22224b353486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      raisedAmount: 70000,
      targetAmount: 100000,
      daysLeft: 14,
      treesPlanted: 620
    },
    {
      id: "6",
      title: "Cherry Valley Revival",
      location: "Bekaa Valley",
      description: "Revitalizing abandoned cherry orchards with modern varieties and organic farming methods.",
      image: "https://images.unsplash.com/photo-1528821128474-25c5c5873284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      raisedAmount: 55000,
      targetAmount: 75000,
      daysLeft: 16,
      treesPlanted: 530
    }
  ];

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("all");
  const [minInvestment, setMinInvestment] = useState([0]);
  const [sortBy, setSortBy] = useState("newest");

  // Filter projects based on filters
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = location === "all" || project.location === location;
    const matchesInvestment = project.targetAmount >= minInvestment[0];
    
    return matchesSearch && matchesLocation && matchesInvestment;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "funding":
        return (b.raisedAmount / b.targetAmount) - (a.raisedAmount / a.targetAmount);
      case "trees":
        return b.treesPlanted - a.treesPlanted;
      case "target":
        return b.targetAmount - a.targetAmount;
      case "closing":
        return a.daysLeft - b.daysLeft;
      case "newest":
      default:
        return parseInt(b.id) - parseInt(a.id);
    }
  });

  // Unique locations for filter
  const locations = Array.from(new Set(allProjects.map(project => project.location)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Browse Projects</h1>
          <p className="text-gray-600 mb-8">
            Discover and invest in Shariah-compliant agricultural initiatives
          </p>
          
          {/* Filters section */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm font-medium mb-2">Search</p>
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Location</p>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="All locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All locations</SelectItem>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">
                  Min Investment: ${minInvestment[0].toLocaleString()}
                </p>
                <Slider
                  value={minInvestment}
                  onValueChange={setMinInvestment}
                  max={150000}
                  step={10000}
                  className="py-4"
                />
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Sort By</p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="funding">Funding Progress</SelectItem>
                    <SelectItem value="trees">Trees Planted</SelectItem>
                    <SelectItem value="target">Target Amount</SelectItem>
                    <SelectItem value="closing">Closing Soon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Projects grid */}
          {sortedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
