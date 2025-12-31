
export interface Product {
  id: string;
  name: string;
  brand: 'Yale' | 'Aqara' | 'Ward' | 'RFID Solutions' | 'NFC Tech' | 'Gate Systems';
  category: 'Smart Locks' | 'Safes' | 'Sensors' | 'Hubs' | 'Cameras' | 'Accessories' | 'RFID Cards' | 'NFC Tags' | 'Wrist Bands' | 'Parking Gates' | 'Access Control';
  price: number;
  image: string;
  description: string;
  features: string[];
  connectivity: string[];
}

export interface RecommendationRequest {
  doorType: string;
  usageType: string;
  connectivityPreference: string;
  budget: string;
}

export interface RecommendationResponse {
  recommendedProductId: string;
  reasoning: string;
  securityTips: string[];
}
