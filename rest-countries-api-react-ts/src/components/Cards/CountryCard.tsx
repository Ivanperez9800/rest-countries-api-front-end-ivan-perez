import React from "react";
import { CountryCardProps } from "../../utils/Country.interface";
import numeral from 'numeral';
import { useAppContext } from "../../hooks/UseContextApp";

const CountryCard: React.FC<CountryCardProps> = ({ data }) => {
    const { name, flag, population, region, capital} = data;


    const formattedPopulation = numeral(population).format('0,0');

    const {isDarkMode} = useAppContext();


    return (
        <div className="country-card">
            <div className="country-card-img">
                <img src={flag} alt={`${name} flag`} />
            </div>
            <div className="country-card-body" style={
                {backgroundColor:isDarkMode ? "#2b3743" : "#fff"
                ,color: isDarkMode ? "#fff" : "#000"
            }} >
                <h2>{name}</h2>
                <p>Population: {formattedPopulation}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </div>
    );
};

export default CountryCard;