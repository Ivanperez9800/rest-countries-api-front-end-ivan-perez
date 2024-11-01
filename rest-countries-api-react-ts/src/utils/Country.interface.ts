export interface Country {
    name: string;
    nativeName?:string;
    flag: string;
    population: number;
    region: string;
    capital: string;
    subregion?: string;
    currencies?: { 
        code: string; 
        name: string; 
        symbol: string 
    }[]; // Array de objetos para las monedas
    topLevelDomain?:string[];
    borders?: string[];
    languages?: { 
        name: string; 
        nativeName: string 
    }[]; //array de objetos para los idiomas
    alpha3Code?: string;
}

export interface CountryCardProps {
    data: Country;
  }