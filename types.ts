
export interface Product {
  id: string;
  name: string;
  brand: 'Yale' | 'Aqara';
  category: 'Smart Locks' | 'Safes' | 'Sensors' | 'Hubs' | 'Cameras' | 'Accessories';
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
