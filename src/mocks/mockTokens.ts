import { Token } from "../types/TokenTypes";

// src/mocks/tokens.ts
const tokens: Token[] = [
  {
    id: "0",
    price: 1,
    tokenId: "0x1234567890abcddf",
    totalSupply: 10000000,
    circulatingSupply: 8000000,
    name: "Ximulacrum Token",
    symbol: "XMLC",
    imageUrl: `${process.env.PUBLIC_URL}/img/xmlc.png`,
    owner: {
      id: "0",
      companyName: "Ximulacrum DAO",
    },
    contractAddress: "0x1234567890bbcdef",
    metadata: "Metadata for XMLC Token",
  },
  {
    id: "1",
    price: 2,
    tokenId: "0x1234567890abcdef",
    totalSupply: 1000000,
    circulatingSupply: 800000,
    name: "Gucci Token",
    symbol: "GUCC",
    imageUrl: `${process.env.PUBLIC_URL}/img/gucc.png`,
    owner: {
      id: "1",
      companyName: "Gucci",
    },
    contractAddress: "0x1234567890abcdef",
    metadata: "Metadata for Gucci Token",
  },
  {
    id: "2",
    price: 0.6,
    tokenId: "0xabcdef1234567890",
    totalSupply: 2000000,
    circulatingSupply: 1500000,
    name: "Adidas Token",
    symbol: "ADDS",
    imageUrl: `${process.env.PUBLIC_URL}/img/adds.png`,
    owner: {
      id: "2",
      companyName: "Adidas",
    },
    contractAddress: "0xabcdef1234567890",
    metadata: "Metadata for Adidas Token",
  },
  {
    id: "3",
    price: 1.5,
    tokenId: "0x7890abcdef123456",
    totalSupply: 500000,
    circulatingSupply: 300000,
    name: "Prada Token",
    symbol: "PRDA",
    imageUrl: `${process.env.PUBLIC_URL}/img/prda.png`,
    owner: {
      id: "3",
      companyName: "Prada",
    },
    contractAddress: "0x7890abcdef123456",
    metadata: "Metadata for Prada Token",
  },
];

export default { tokens }