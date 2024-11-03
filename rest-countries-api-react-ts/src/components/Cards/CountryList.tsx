import React from 'react'
import CountryCard from './CountryCard';
import InputSearch from '../Input/InputSearch';
import { useAppContext } from '../../hooks/UseContextApp';
import { Link } from 'react-router-dom';

const CountryList: React.FC = () => {


    const {filteredCountries,onChange,search,handleSelectValue,value,isDarkMode} = useAppContext();

    return (
        <>

            <div className="input_container" >
                <div className="input-search"       style={{ 
        backgroundColor:isDarkMode ? "#2b3743" : "#fff",
        color: isDarkMode ? "#fff" : "#000"
      }} >
                    <InputSearch onChangeInput={onChange} search={search} />
                </div>

                <div className="option_select_input">

                    <select className="select_input" value={value} onChange={handleSelectValue}  
                    style={{backgroundColor:isDarkMode ? "#2b3743" : "#fff",
                    color: isDarkMode ? "#fff" : "#000"}}
                    >

                        <option value="">Filter by Region</option>
                        <option value="Americas">America</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Asia">Asia</option>
                    </select>
                </div>
            </div>

            <div className="__container-card">
                {filteredCountries.map((country) => (
                    
                    <Link to={`/${country.name}`} key={country.name} style={{ textDecoration: 'none' }}>
                        <CountryCard key={country.name} data={country} />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default CountryList