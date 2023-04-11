// src/mocks/tokens.ts
export const tokens = [
  {
    id: "1",
    tokenId: "0x1234567890abcdef",
    totalSupply: 1000000,
    circulatingSupply: 800000,
    name: "Gucci Token",
    symbol: "GUCC",
    imageUrl: "/img/gucc.png",
    owner: {
      id: "1",
      companyName: "Gucci",
    },
    contractAddress: "0x1234567890abcdef",
    metadata: "Metadata for Gucci Token",
  },
  {
    id: "2",
    tokenId: "0xabcdef1234567890",
    totalSupply: 2000000,
    circulatingSupply: 1500000,
    name: "Adidas Token",
    symbol: "ADDS",
    imageUrl: "/img/adds.png",
    owner: {
      id: "2",
      companyName: "Adidas",
    },
    contractAddress: "0xabcdef1234567890",
    metadata: "Metadata for Adidas Token",
  },
  {
    id: "3",
    tokenId: "0x7890abcdef123456",
    totalSupply: 500000,
    circulatingSupply: 300000,
    name: "Prada Token",
    symbol: "PRDA",
    imageUrl: "/img/prda.png",
    owner: {
      id: "3",
      companyName: "Prada",
    },
    contractAddress: "0x7890abcdef123456",
    metadata: "Metadata for Prada Token",
  },
];

