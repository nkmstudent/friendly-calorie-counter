
import React from 'react';
import Header from '@/components/Header';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Droplet, Gauge, Calculator as CalcIcon, DollarSign } from 'lucide-react';
import AdContainer from '@/components/AdContainer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Top ad container */}
          <AdContainer className="mb-8" adSlot="top-banner" />
          
          <section className="mb-12">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-3xl font-bold text-fuel-darkblue mb-4">
                Calculate Your Vehicle's Fuel Consumption
              </h2>
              <p className="text-fuel-gray text-lg">
                A simple and accurate way to calculate how much fuel your vehicle uses and what it costs you.
              </p>
            </div>
            
            <Calculator />
          </section>
          
          {/* Middle ad container */}
          <AdContainer className="my-8" adSlot="middle-banner" />
          
          <Separator className="my-12" />
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center text-fuel-darkblue mb-8">
              Why Use Our Fuel Calculator?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-fuel-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Droplet className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Accurate Consumption</h3>
                    <p className="text-fuel-gray">
                      Get precise measurements of your vehicle's fuel consumption in multiple formats.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-fuel-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Gauge className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Range Estimation</h3>
                    <p className="text-fuel-gray">
                      Calculate how far you can drive with a given amount of fuel.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-fuel-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <CalcIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Fuel Planning</h3>
                    <p className="text-fuel-gray">
                      Determine how much fuel you'll need for your planned journey.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-fuel-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Cost Analysis</h3>
                    <p className="text-fuel-gray">
                      Understand the true cost of your fuel consumption and plan your budget.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Bottom ad container */}
          <AdContainer className="my-8" adSlot="bottom-banner" />
          
          <section>
            <div className="bg-gradient-to-r from-fuel-blue to-fuel-darkblue rounded-lg text-white p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Start Calculating Your Fuel Consumption Today
              </h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Make informed decisions about your vehicle's fuel efficiency and costs. Our calculator is free, easy to use, and provides valuable insights.
              </p>
              <a 
                href="#" 
                className="inline-block bg-white text-fuel-darkblue px-6 py-3 rounded-lg font-medium hover:bg-fuel-lightgray transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
