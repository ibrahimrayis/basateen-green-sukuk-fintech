
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import FeaturedProjects from '@/components/FeaturedProjects';
import ImpactSection from '@/components/ImpactSection';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <HowItWorks />
        <FeaturedProjects />
        <ImpactSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
