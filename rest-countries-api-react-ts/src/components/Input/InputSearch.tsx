import React from 'react';

interface InputSearchProps {
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ onChangeInput, search }) => {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={search}
      onChange={onChangeInput}
    />
  );
};

export default InputSearch;