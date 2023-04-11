// mockTokens.ts

import { Token } from "../types/TokenTypes";

export const mockTokens: Token[] = [
  {
    id: '1',
    tokenId: 'GUCC',
    totalSupply: 1000,
    circulatingSupply: 800,
    owner: {
      id: '01',
      companyName: 'Gucci',
    },
  },
  {
    id: '2',
    tokenId: 'ADDS',
    totalSupply: 2000,
    circulatingSupply: 1500,
    owner: {
      id: '02',
      companyName: 'Adidas',
    },
  },
  {
    id: '3',
    tokenId: 'PRDA',
    totalSupply: 1200,
    circulatingSupply: 1000,
    owner: {
      id: '03',
      companyName: 'Prada',
    },
  },
];
