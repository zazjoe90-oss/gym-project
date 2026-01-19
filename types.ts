
export interface ClassItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
