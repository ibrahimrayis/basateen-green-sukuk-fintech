
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  raisedAmount: number;
  targetAmount: number;
  daysLeft: number;
  treesPlanted: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  location,
  description,
  image,
  raisedAmount,
  targetAmount,
  daysLeft,
  treesPlanted,
}) => {
  const percentRaised = Math.min(Math.round((raisedAmount / targetAmount) * 100), 100);
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 px-3 py-1 text-xs font-medium text-white bg-basateen-600">
          {location}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">${raisedAmount.toLocaleString()} raised</span>
            <span className="text-gray-500">{percentRaised}%</span>
          </div>
          <Progress value={percentRaised} className="h-2" />
        </div>
        
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="text-center p-2 bg-basateen-50 rounded-md">
            <p className="text-xs text-gray-500">Target</p>
            <p className="text-basateen-700 font-semibold">${targetAmount.toLocaleString()}</p>
          </div>
          <div className="text-center p-2 bg-sukuk-50 rounded-md">
            <p className="text-xs text-gray-500">Trees</p>
            <p className="text-sukuk-700 font-semibold">{treesPlanted}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-1 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {daysLeft} days left
        </div>
        <Link to={`/projects/${id}`}>
          <Button className="bg-sukuk-600 hover:bg-sukuk-700">
            Invest Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
