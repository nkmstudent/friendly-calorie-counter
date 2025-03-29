
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdContainer from '@/components/AdContainer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <AdContainer className="mb-8" adSlot="privacy-top" />
          
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-3xl font-bold text-fuel-darkblue mb-6">Privacy Policy</h1>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
              </p>
              
              <p className="mb-4">
                Niniejsza Polityka Prywatności opisuje, w jaki sposób KalkulatorPaliwa zbiera, wykorzystuje i chroni dane osobowe użytkowników serwisu.
              </p>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                1. Jakie dane zbieramy
              </h2>
              <p className="mb-4">
                Możemy zbierać następujące rodzaje danych osobowych:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Informacje, które podajesz dobrowolnie (np. e-mail w formularzu kontaktowym)</li>
                <li>Informacje zbierane automatycznie (np. adres IP, pliki cookie)</li>
                <li>Dane wprowadzane do kalkulatora (np. informacje o zużyciu paliwa)</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                2. Jak wykorzystujemy zebrane dane
              </h2>
              <p className="mb-4">
                Wykorzystujemy zebrane dane w następujących celach:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Aby zapewnić i utrzymać funkcjonalność serwisu</li>
                <li>Aby odpowiadać na zapytania i wiadomości</li>
                <li>Aby analizować wykorzystanie serwisu i poprawiać jego funkcjonalność</li>
                <li>Aby personalizować reklamy wyświetlane w serwisie</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                3. Pliki cookie i podobne technologie
              </h2>
              <p className="mb-4">
                Nasz serwis wykorzystuje pliki cookie i podobne technologie do zbierania informacji o korzystaniu z serwisu. Możesz zarządzać ustawieniami plików cookie w swojej przeglądarce.
              </p>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                4. Udostępnianie danych
              </h2>
              <p className="mb-4">
                Nie sprzedajemy ani nie udostępniamy danych osobowych użytkowników stronom trzecim, z wyjątkiem:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Dostawców usług, którzy pomagają nam prowadzić serwis</li>
                <li>Przypadków wymaganych przez prawo</li>
                <li>Przypadków, gdy otrzymamy na to wyraźną zgodę użytkownika</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                5. Bezpieczeństwo danych
              </h2>
              <p className="mb-4">
                Stosujemy odpowiednie środki bezpieczeństwa, aby chronić dane osobowe użytkowników przed nieautoryzowanym dostępem, utratą lub zniszczeniem.
              </p>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                6. Twoje prawa
              </h2>
              <p className="mb-4">
                Jako użytkownik naszego serwisu masz prawo do:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Sprostowania nieprawidłowych danych</li>
                <li>Usunięcia danych (prawo do bycia zapomnianym)</li>
                <li>Ograniczenia przetwarzania danych</li>
                <li>Przenoszenia danych</li>
                <li>Sprzeciwu wobec przetwarzania danych</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                7. Zmiany w polityce prywatności
              </h2>
              <p className="mb-4">
                Zastrzegamy sobie prawo do zmiany niniejszej Polityki Prywatności w dowolnym momencie. Zachęcamy do regularnego sprawdzania aktualnej wersji.
              </p>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                8. Kontakt
              </h2>
              <p className="mb-4">
                W przypadku pytań dotyczących naszej Polityki Prywatności, prosimy o kontakt na adres: kontakt@kalkulatorpaliwa.pl
              </p>
            </div>
          </section>
          
          <AdContainer className="my-8" adSlot="privacy-bottom" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
