import { createContext, useContext } from "react";
import { Country } from "../utils/Country.interface";

// Define la interfaz para el tipo de datos del contexto
export interface AppContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;

    search:string
    value:string
    countryList:Country[]
    filteredCountries:Country[]
    
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSelectValue: (event: React.ChangeEvent<HTMLSelectElement>) => void





  }
  

const AppContext = createContext<AppContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe ser usado dentro de un AppProvider");
  }
  return context;
};


export default AppContext;