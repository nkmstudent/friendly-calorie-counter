
// Utility functions for fuel consumption calculations

// Convert liters per 100km to different formats
export const convertConsumption = (liters100km: number) => {
  // km per liter
  const kmPerLiter = 100 / liters100km;
  
  // miles per gallon (US)
  const milesPerGallonUS = kmPerLiter * 2.352;
  
  // miles per gallon (UK)
  const milesPerGallonUK = kmPerLiter * 2.825;
  
  return {
    liters100km,
    kmPerLiter,
    milesPerGallonUS,
    milesPerGallonUK
  };
};

// Calculate fuel consumption based on distance and amount
export const calculateConsumption = (distance: number, fuelAmount: number) => {
  // Liters per 100km
  const liters100km = (fuelAmount * 100) / distance;
  
  return convertConsumption(liters100km);
};

// Calculate distance that can be driven with given amount and consumption
export const calculateDistance = (fuelAmount: number, consumption: number) => {
  // Distance in km
  return (fuelAmount * 100) / consumption;
};

// Calculate fuel needed for a given distance and consumption
export const calculateFuelNeeded = (distance: number, consumption: number) => {
  // Fuel amount in liters
  return (distance * consumption) / 100;
};

// Calculate cost for a given distance, consumption, and fuel price
export const calculateCost = (distance: number, consumption: number, fuelPrice: number) => {
  const fuelNeeded = calculateFuelNeeded(distance, consumption);
  return fuelNeeded * fuelPrice;
};

export type CalculationType = 'consumption' | 'distance' | 'fuel';

export interface FuelValues {
  distance: number;
  fuelAmount: number;
  fuelPrice: number;
  consumption: number;
}
