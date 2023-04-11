// TokenTypes.ts
export interface Token {
  id: string;
  tokenId: string;
  totalSupply: number;
  circulatingSupply: number;
  name: string;
  symbol: string;
  imageUrl: string;
  owner: {
    id: string;
    companyName: string;
  };
  contractAddress?: string; // Optional
  metadata?: string; // Optional
}


// DigitalProductTypes.ts
export interface DigitalProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  imageUrl?: string; // Optional
  description?: string; // Optional
  token: Token; // Required
}


