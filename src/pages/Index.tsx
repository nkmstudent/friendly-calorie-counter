
import React from 'react';
import { Link } from 'react-router-dom';
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
                KALKULATOR SPALANIA
              </h2>
              <p className="text-fuel-gray text-lg">
                Kalkulator średniego spalania na 100 km - prosty i dokładny sposób na obliczenie ile paliwa zużywa Twój pojazd i ile to kosztuje.
              </p>
            </div>
            
            <Calculator />
          </section>
          
          {/* Middle ad container */}
          <AdContainer className="my-8" adSlot="middle-banner" />
          
          <Separator className="my-12" />
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center text-fuel-darkblue mb-8">
              Dlaczego warto korzystać z naszego kalkulatora?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-fuel-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Droplet className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Dokładne obliczenia</h3>
                    <p className="text-fuel-gray">
                      Uzyskaj precyzyjne pomiary zużycia paliwa w wielu formatach.
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
                    <h3 className="text-lg font-medium mb-2">Szacowanie zasięgu</h3>
                    <p className="text-fuel-gray">
                      Oblicz, jak daleko możesz jechać na określonej ilości paliwa.
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
                    <h3 className="text-lg font-medium mb-2">Planowanie paliwa</h3>
                    <p className="text-fuel-gray">
                      Określ, ile paliwa będziesz potrzebować na zaplanowaną podróż.
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
                    <h3 className="text-lg font-medium mb-2">Analiza kosztów</h3>
                    <p className="text-fuel-gray">
                      Zrozum prawdziwy koszt zużycia paliwa i zaplanuj swój budżet.
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
                Kalkulator kosztu przejechania trasy
              </h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Podejmuj świadome decyzje dotyczące efektywności paliwowej i kosztów Twojego pojazdu. Nasz kalkulator jest darmowy, łatwy w użyciu i dostarcza wartościowych informacji.
              </p>
              <Link 
                to="/about" 
                className="inline-block bg-white text-fuel-darkblue px-6 py-3 rounded-lg font-medium hover:bg-fuel-lightgray transition-colors duration-200"
              >
                Dowiedz się więcej
              </Link>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
