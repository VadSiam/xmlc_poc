export interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
  isCompanyAdmin: boolean;
  avatarUrl?: string;
}