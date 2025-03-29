
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Droplet, 
  Ruler, 
  GaugeCircle, 
  Banknote,
  ArrowRight
} from "lucide-react";

interface ResultsDisplayProps {
  results: any;
  fuelPrice: number;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results, fuelPrice }) => {
  if (!results) return null;
  
  const formatNumber = (num: number): string => {
    return num.toFixed(2);
  };
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center">
        <GaugeCircle className="mr-2 h-5 w-5 text-fuel-blue" />
        Wyniki
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.type === 'consumption' && (
          <>
            <Card className="overflow-hidden card-shadow">
              <CardContent className="p-0">
                <div className="bg-fuel-blue text-white p-3">
                  <h4 className="font-medium flex items-center">
                    <Droplet className="mr-2 h-4 w-4" />
                    Zużycie Paliwa
                  </h4>
                </div>
                <div className="p-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-fuel-gray">L/100km:</span>
                    <span className="font-medium">{formatNumber(results.liters100km)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-fuel-gray">km/L:</span>
                    <span className="font-medium">{formatNumber(results.kmPerLiter)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-fuel-gray">MPG (US):</span>
                    <span className="font-medium">{formatNumber(results.milesPerGallonUS)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-fuel-gray">MPG (UK):</span>
                    <span className="font-medium">{formatNumber(results.milesPerGallonUK)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-shadow">
              <CardContent className="p-0">
                <div className="bg-fuel-blue text-white p-3">
                  <h4 className="font-medium flex items-center">
                    <Banknote className="mr-2 h-4 w-4" />
                    Analiza Kosztów
                  </h4>
                </div>
                <div className="p-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-fuel-gray">Całkowity koszt:</span>
                    <span className="font-medium">{formatNumber(results.cost)} zł</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-fuel-gray">Koszt za km:</span>
                    <span className="font-medium">{formatNumber(results.cost / (results.liters100km * 100 / results.liters100km))} zł</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-fuel-gray">Koszt na 100 km:</span>
                    <span className="font-medium">{formatNumber(results.liters100km * fuelPrice)} zł</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
        
        {results.type === 'distance' && (
          <>
            <Card className="overflow-hidden card-shadow">
              <CardContent className="p-0">
                <div className="bg-fuel-blue text-white p-3">
                  <h4 className="font-medium flex items-center">
                    <Ruler className="mr-2 h-4 w-4" />
                    Zasięg
                  </h4>
                </div>
                <div className="p-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-fuel-gray">Całkowity zasięg:</span>
                    <span className="font-medium">{formatNumber(results.distance)} km</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-fuel-gray">Zasięg w milach:</span>
                    <span className="font-medium">{formatNumber(results.distance * 0.621371)} mi</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-shadow">
              <CardContent className="p-0">
                <div className="bg-fuel-blue text-white p-3">
                  <h4 className="font-medium flex items-center">
                    <Banknote className="mr-2 h-4 w-4" />
                    Analiza Kosztów
                  </h4>
                </div>
                <div className="p-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-fuel-gray">Całkowity koszt:</span>
                    <span className="font-medium">{formatNumber(results.cost)} zł</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-fuel-gray">Koszt za km:</span>
                    <span className="font-medium">{formatNumber(results.cost / results.distance)} zł</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
        
        {results.type === 'fuel' && (
          <>
            <Card className="overflow-hidden card-shadow">
              <CardContent className="p-0">
                <div className="bg-fuel-blue text-white p-3">
                  <h4 className="font-medium flex items-center">
                    <Droplet className="mr-2 h-4 w-4" />
                    Potrzebne Paliwo
                  </h4>
                </div>
                <div className="p-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-fuel-gray">Wymagane paliwo:</span>
                    <span className="font-medium">{formatNumber(results.fuelNeeded)} litrów</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-fuel-gray">Paliwo w galonach (US):</span>
                    <span className="font-medium">{formatNumber(results.fuelNeeded * 0.264172)} gal</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-shadow">
              <CardContent className="p-0">
                <div className="bg-fuel-blue text-white p-3">
                  <h4 className="font-medium flex items-center">
                    <Banknote className="mr-2 h-4 w-4" />
                    Analiza Kosztów
                  </h4>
                </div>
                <div className="p-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-fuel-gray">Całkowity koszt:</span>
                    <span className="font-medium">{formatNumber(results.cost)} zł</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-fuel-gray">Koszt za km:</span>
                    <span className="font-medium">{formatNumber(results.cost / (results.fuelNeeded / (results.fuelNeeded * 100)))} zł</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultsDisplay;
