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
