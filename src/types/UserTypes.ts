export interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
  isCompanyAdmin: boolean;
  avatarUrl?: string;
  tokenBalances?: TokenBalanceType[]; // Optional
}

export interface TokenBalanceType {
  tokenId: string;
  balance: number;
}

export interface Campaign {
  id: number;
  name: string;
  date: string;
  token: string;
  amount: number;
}

export interface CampaignUser {
  id: number;
  name: string;
  createdAt: string;
  tokens: { symbol: string; amount: number }[];
  campaignsParticipated: Campaign[];
}