export interface Address {
  city: string;
  street: string;
}

export interface People {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
}