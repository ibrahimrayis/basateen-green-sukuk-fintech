
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Basateen has transformed our olive farm by providing Shariah-compliant financing that allowed us to expand our operations and implement sustainable practices.",
      name: "Fatima Al-Hariri",
      role: "Owner, Al-Noor Olive Gardens",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "As an investor, I appreciate how Basateen provides complete transparency and the ability to see the direct impact of my investment on both the environment and local communities.",
      name: "Ahmed Khalil",
      role: "Sukuk Investor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "The detailed reporting on environmental impact and financial returns gives me confidence that my investment is making a difference while adhering to Islamic finance principles.",
      name: "Layla Nazari",
      role: "Ethical Investment Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="py-16 bg-sukuk-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our community of investors and agricultural partners about their 
            experience with Basateen's green sukuk platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-4xl text-basateen-200">"</div>
                  <p className="text-gray-700 relative z-10 pl-4">
                    {testimonial.quote}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
