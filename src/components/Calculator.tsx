
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Car, DropletHalf, CalculatorIcon, Ruler, Banknote } from "lucide-react";
import { 
  calculateConsumption, 
  calculateDistance, 
  calculateFuelNeeded, 
  calculateCost,
  CalculationType,
  FuelValues 
} from "@/utils/fuelCalculations";
import ResultsDisplay from "./ResultsDisplay";

const initialValues: FuelValues = {
  distance: 100,
  fuelAmount: 8,
  fuelPrice: 1.5,
  consumption: 8
};

const Calculator = () => {
  const [calculationType, setCalculationType] = useState<CalculationType>('consumption');
  const [values, setValues] = useState<FuelValues>(initialValues);
  const [results, setResults] = useState<any>(null);

  // Update results whenever values change
  useEffect(() => {
    calculateResults();
  }, [values, calculationType]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseFloat(value);
    
    if (isNaN(numValue) || numValue <= 0) {
      setValues(prev => ({ ...prev, [name]: value }));
      return;
    }
    
    setValues(prev => ({ ...prev, [name]: numValue }));
  };

  const calculateResults = () => {
    try {
      let result;
      
      switch (calculationType) {
        case 'consumption':
          if (!values.distance || !values.fuelAmount) return;
          result = {
            type: 'consumption',
            ...calculateConsumption(values.distance, values.fuelAmount),
            cost: values.fuelPrice * values.fuelAmount
          };
          break;
          
        case 'distance':
          if (!values.fuelAmount || !values.consumption) return;
          const distance = calculateDistance(values.fuelAmount, values.consumption);
          result = {
            type: 'distance',
            distance,
            cost: values.fuelPrice * values.fuelAmount
          };
          break;
          
        case 'fuel':
          if (!values.distance || !values.consumption) return;
          const fuelNeeded = calculateFuelNeeded(values.distance, values.consumption);
          result = {
            type: 'fuel',
            fuelNeeded,
            cost: values.fuelPrice * fuelNeeded
          };
          break;
      }
      
      setResults(result);
    } catch (error) {
      console.error("Calculation error:", error);
      toast.error("Error in calculation. Please check your inputs.");
    }
  };

  const resetCalculator = () => {
    setValues(initialValues);
    toast.success("Calculator has been reset");
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 animate-fade-in">
      <Card className="shadow-lg border-fuel-lightblue">
        <CardHeader className="bg-gradient-to-r from-fuel-blue to-fuel-darkblue text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <Car className="h-6 w-6" />
            <CardTitle>Fuel Consumption Calculator</CardTitle>
          </div>
          <CardDescription className="text-white/80">
            Calculate your vehicle's fuel consumption, mileage, and costs
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6">
          <Tabs defaultValue="consumption" onValueChange={(value) => setCalculationType(value as CalculationType)}>
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="consumption" className="flex items-center gap-2">
                <DropletHalf className="h-4 w-4" />
                <span>Consumption</span>
              </TabsTrigger>
              <TabsTrigger value="distance" className="flex items-center gap-2">
                <Ruler className="h-4 w-4" />
                <span>Distance</span>
              </TabsTrigger>
              <TabsTrigger value="fuel" className="flex items-center gap-2">
                <CalculatorIcon className="h-4 w-4" />
                <span>Fuel Needed</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="consumption" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="distance">Distance (km)</Label>
                  <Input
                    id="distance"
                    name="distance"
                    type="number"
                    value={values.distance}
                    onChange={handleInputChange}
                    className="input-focus-ring"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fuelAmount">Fuel Amount (liters)</Label>
                  <Input
                    id="fuelAmount"
                    name="fuelAmount"
                    type="number"
                    value={values.fuelAmount}
                    onChange={handleInputChange}
                    className="input-focus-ring"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fuelPrice">Fuel Price (per liter)</Label>
                <div className="relative">
                  <Banknote className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="fuelPrice"
                    name="fuelPrice"
                    type="number"
                    value={values.fuelPrice}
                    onChange={handleInputChange}
                    className="pl-10 input-focus-ring"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="distance" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fuelAmount">Fuel Amount (liters)</Label>
                  <Input
                    id="fuelAmount"
                    name="fuelAmount"
                    type="number"
                    value={values.fuelAmount}
                    onChange={handleInputChange}
                    className="input-focus-ring"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="consumption">Consumption (L/100km)</Label>
                  <Input
                    id="consumption"
                    name="consumption"
                    type="number"
                    value={values.consumption}
                    onChange={handleInputChange}
                    className="input-focus-ring"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fuelPrice">Fuel Price (per liter)</Label>
                <div className="relative">
                  <Banknote className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="fuelPrice"
                    name="fuelPrice"
                    type="number"
                    value={values.fuelPrice}
                    onChange={handleInputChange}
                    className="pl-10 input-focus-ring"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="fuel" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="distance">Distance (km)</Label>
                  <Input
                    id="distance"
                    name="distance"
                    type="number"
                    value={values.distance}
                    onChange={handleInputChange}
                    className="input-focus-ring"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="consumption">Consumption (L/100km)</Label>
                  <Input
                    id="consumption"
                    name="consumption"
                    type="number"
                    value={values.consumption}
                    onChange={handleInputChange}
                    className="input-focus-ring"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fuelPrice">Fuel Price (per liter)</Label>
                <div className="relative">
                  <Banknote className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="fuelPrice"
                    name="fuelPrice"
                    type="number"
                    value={values.fuelPrice}
                    onChange={handleInputChange}
                    className="pl-10 input-focus-ring"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-end mt-6">
            <Button variant="outline" onClick={resetCalculator} className="mr-2">
              Reset
            </Button>
            <Button onClick={calculateResults}>Calculate</Button>
          </div>
          
          <Separator className="my-6" />
          
          {results && <ResultsDisplay results={results} fuelPrice={values.fuelPrice} />}
        </CardContent>
      </Card>
    </div>
  );
};

export default Calculator;
