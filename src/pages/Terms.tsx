
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdContainer from '@/components/AdContainer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <AdContainer className="mb-8" adSlot="terms-top" />
          
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-3xl font-bold text-fuel-darkblue mb-6">Terms & Conditions</h1>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
              </p>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                1. Akceptacja warunków
              </h2>
              <p className="mb-4">
                Korzystając z serwisu KalkulatorPaliwa, akceptujesz niniejszy Regulamin oraz nasze Zasady Prywatności. Jeśli nie zgadzasz się z którymkolwiek z tych warunków, prosimy o niekorzystanie z serwisu.
              </p>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                2. Zmiany w regulaminie
              </h2>
              <p className="mb-4">
                Zastrzegamy sobie prawo do zmiany niniejszego Regulaminu w dowolnym momencie. Dalsze korzystanie z serwisu po wprowadzeniu zmian oznacza akceptację nowych warunków.
              </p>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                3. Korzystanie z serwisu
              </h2>
              <p className="mb-4">
                KalkulatorPaliwa udostępnia narzędzia do obliczania zużycia paliwa i związanych z tym kosztów. Użytkownicy są odpowiedzialni za dokładność wprowadzanych danych, a wszelkie obliczenia mają charakter szacunkowy.
              </p>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                4. Własność intelektualna
              </h2>
              <p className="mb-4">
                Wszelkie prawa autorskie, znaki towarowe, kody, grafiki i inne materiały zawarte w serwisie KalkulatorPaliwa są własnością serwisu lub zostały wykorzystane za zgodą ich właścicieli. Nieuprawnione wykorzystanie tych materiałów jest zabronione.
              </p>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                5. Ograniczenie odpowiedzialności
              </h2>
              <p className="mb-4">
                KalkulatorPaliwa nie ponosi odpowiedzialności za jakiekolwiek szkody wynikające z korzystania lub niemożności korzystania z serwisu. Wszystkie obliczenia mają charakter szacunkowy i nie powinny być traktowane jako profesjonalna porada.
              </p>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                6. Polityka prywatności
              </h2>
              <p className="mb-4">
                Korzystanie z serwisu podlega naszej Polityce Prywatności, która określa sposób zbierania, wykorzystywania i ochrony danych użytkowników.
              </p>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                7. Prawo właściwe
              </h2>
              <p className="mb-4">
                Niniejszy Regulamin podlega przepisom prawa polskiego. Wszelkie spory wynikające z korzystania z serwisu będą rozstrzygane przez właściwe sądy polskie.
              </p>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                8. Kontakt
              </h2>
              <p className="mb-4">
                W przypadku pytań dotyczących niniejszego Regulaminu, prosimy o kontakt na adres: kontakt@kalkulatorpaliwa.pl
              </p>
            </div>
          </section>
          
          <AdContainer className="my-8" adSlot="terms-bottom" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
