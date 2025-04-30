
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

const FeaturedProjects: React.FC = () => {
  const projects: ProjectCardProps[] = [
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
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-gray-600">
              Top agricultural initiatives seeking green sukuk investment
            </p>
          </div>
          <Link to="/projects">
            <Button variant="outline">View All Projects</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
