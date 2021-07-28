interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo:IGeo
}

interface IGeo {
  lat: number;
  lng: number;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Iuser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: number;
  website: string;
  company: ICompany;

}
