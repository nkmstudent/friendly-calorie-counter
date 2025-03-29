
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdContainer from '@/components/AdContainer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <AdContainer className="mb-8" adSlot="about-top" />
          
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-3xl font-bold text-fuel-darkblue mb-6">O nas</h1>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                KalkulatorPaliwa to narzędzie stworzone przez pasjonatów motoryzacji, których celem jest pomoc kierowcom w lepszym zrozumieniu zużycia paliwa ich pojazdów i związanych z tym kosztów.
              </p>
              
              <p className="mb-4">
                Nasza misja jest prosta: dostarczać kierowcom dokładnych i użytecznych informacji, które pomogą im podejmować świadome decyzje dotyczące ich pojazdów i stylu jazdy.
              </p>
              
              <h2 className="text-2xl font-semibold text-fuel-darkblue mt-8 mb-4">Nasza historia</h2>
              
              <p className="mb-4">
                Kalkulator powstał z potrzeby łatwego obliczania rzeczywistego zużycia paliwa i kosztów eksploatacji pojazdów. Zaczęliśmy jako mała grupa entuzjastów, a dziś służymy tysiącom kierowców w całej Polsce.
              </p>
              
              <h2 className="text-2xl font-semibold text-fuel-darkblue mt-8 mb-4">Nasze wartości</h2>
              
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Dokładność: Staramy się zapewnić jak najbardziej precyzyjne obliczenia.</li>
                <li className="mb-2">Prostota: Nasz kalkulator jest intuicyjny i łatwy w użyciu.</li>
                <li className="mb-2">Przejrzystość: Wszystkie nasze metody obliczeniowe są jawne i zrozumiałe.</li>
                <li className="mb-2">Użyteczność: Tworzymy narzędzia, które rzeczywiście pomagają w codziennym życiu.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-fuel-darkblue mt-8 mb-4">Zespół</h2>
              
              <p className="mb-4">
                Nasz zespół składa się z doświadczonych programistów, projektantów UX oraz ekspertów motoryzacyjnych, którzy wspólnie pracują nad ciągłym udoskonalaniem naszego kalkulatora.
              </p>
            </div>
          </section>
          
          <AdContainer className="my-8" adSlot="about-bottom" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
