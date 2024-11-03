import React from 'react';
import { useAppContext } from '../../hooks/UseContextApp';

interface InputSearchProps {
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ onChangeInput, search }) => {

  const {isDarkMode} = useAppContext();

  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={search}
      onChange={onChangeInput}
      
      style={{ 
        backgroundColor:isDarkMode ? "#2b3743" : "#fff",
        color: isDarkMode ? "#fff" : "#000"
      }}
    />
  );
};

export default InputSearch;