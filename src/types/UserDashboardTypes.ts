export interface DropAction {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

export interface NFT {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  owner: string;
  price: number;
  tags?: string[];
}
