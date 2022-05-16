export interface Address {
    street: string;
    city: string;
    postalCode: string;
    complement: string;
    country?: string;
  }

  export interface QueryAddress {
    getAddress: [Address]
  }

