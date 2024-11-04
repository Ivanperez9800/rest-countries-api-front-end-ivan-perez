import React, { useState, ReactNode, useEffect } from 'react';
import AppContext, { AppContextType } from '../hooks/UseContextApp';
import { Country } from '../utils/Country.interface';


interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [search, setSearch] = useState("");
  const [value, setValue] = useState('');
  const [countryList, setCountry] = useState<Country[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      const res = await fetch("/data.json")
      const data: Country[] = await res.json();
      setCountry(data)
    }
    loadCountries();
  }, []);



  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }


  const handleSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  const filteredCountries = countryList.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.toLowerCase().includes(value.toLowerCase())
  );



  const contextValue: AppContextType = {
    isDarkMode,
    toggleDarkMode,
    countryList,
    filteredCountries,
    search,
    value,
    onChange,
    handleSelectValue,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

