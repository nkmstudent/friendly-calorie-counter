
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdContainer from '@/components/AdContainer';

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <AdContainer className="mb-8" adSlot="disclaimer-top" />
          
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-3xl font-bold text-fuel-darkblue mb-6">Zastrzeżenia</h1>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
              </p>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                Zastrzeżenie dotyczące dokładności obliczeń
              </h2>
              <p className="mb-4">
                Kalkulator Paliwa oferuje narzędzia do szacowania zużycia paliwa i związanych z tym kosztów. Dokładamy wszelkich starań, aby zapewnić jak najbardziej precyzyjne obliczenia, jednak należy pamiętać, że:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Wszystkie obliczenia mają charakter szacunkowy</li>
                <li>Rzeczywiste zużycie paliwa może się różnić ze względu na wiele czynników (styl jazdy, stan techniczny pojazdu, warunki drogowe, etc.)</li>
                <li>Wyniki nie powinny być traktowane jako oficjalne dane producenta pojazdu</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                Zastrzeżenie odpowiedzialności
              </h2>
              <p className="mb-4">
                KalkulatorPaliwa nie ponosi odpowiedzialności za:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Decyzje podjęte na podstawie wyników kalkulatora</li>
                <li>Błędy wynikające z nieprawidłowo wprowadzonych danych</li>
                <li>Pośrednie lub bezpośrednie szkody wynikające z korzystania z serwisu</li>
                <li>Niedostępność serwisu z przyczyn technicznych lub innych</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                Zastrzeżenie dotyczące treści
              </h2>
              <p className="mb-4">
                Dołożyliśmy wszelkich starań, aby informacje zawarte w serwisie były aktualne i dokładne, jednak:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Nie gwarantujemy bezbłędności wszystkich zawartych treści</li>
                <li>Zastrzegamy sobie prawo do aktualizacji lub usunięcia treści bez uprzedzenia</li>
                <li>Linki zewnętrzne prowadzące do stron trzecich nie są objęte naszą kontrolą</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-fuel-darkblue mt-6 mb-4">
                Zastrzeżenie dotyczące usług
              </h2>
              <p className="mb-4">
                KalkulatorPaliwa zastrzega sobie prawo do:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Modyfikacji, zawieszenia lub zakończenia świadczenia usług bez uprzedzenia</li>
                <li>Ograniczenia dostępu do serwisu w razie konieczności przeprowadzenia prac konserwacyjnych</li>
                <li>Wprowadzania nowych funkcji lub usuwania istniejących</li>
              </ul>
              
              <p className="mt-6 mb-4">
                Korzystając z serwisu KalkulatorPaliwa, użytkownik akceptuje powyższe zastrzeżenia. W przypadku braku akceptacji zastrzeżeń, prosimy o niekorzystanie z serwisu.
              </p>
            </div>
          </section>
          
          <AdContainer className="my-8" adSlot="disclaimer-bottom" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;
