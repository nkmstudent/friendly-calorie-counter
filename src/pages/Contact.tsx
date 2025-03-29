
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdContainer from '@/components/AdContainer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a server
    alert('Wiadomość została wysłana. Dziękujemy!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <AdContainer className="mb-8" adSlot="contact-top" />
          
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-3xl font-bold text-fuel-darkblue mb-6">Kontakt</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-fuel-darkblue mb-4">Skontaktuj się z nami</h2>
                <p className="mb-4">
                  Masz pytania, sugestie lub potrzebujesz pomocy? Wypełnij formularz, a odpowiemy najszybciej jak to możliwe.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-fuel-darkblue mb-2">Dane kontaktowe:</h3>
                  <p className="mb-2">Email: kontakt@kalkulatorpaliwa.pl</p>
                  <p className="mb-2">Telefon: +48 123 456 789</p>
                  <p className="mb-2">Adres: ul. Paliwowa 123, 00-001 Warszawa</p>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Imię i nazwisko
                    </label>
                    <Input id="name" placeholder="Twoje imię i nazwisko" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="twoj@email.pl" required />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Temat
                    </label>
                    <Input id="subject" placeholder="Temat wiadomości" required />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Wiadomość
                    </label>
                    <Textarea id="message" placeholder="Twoja wiadomość..." rows={5} required />
                  </div>
                  
                  <Button type="submit" className="w-full">Wyślij wiadomość</Button>
                </form>
              </div>
            </div>
          </section>
          
          <AdContainer className="my-8" adSlot="contact-bottom" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
