import React from "react";
import { CountryCardProps } from "../../utils/Country.interface";
import numeral from 'numeral';

const CountryCard: React.FC<CountryCardProps> = ({ data }) => {
    const { name, flag, population, region, capital } = data;

    const formattedPopulation = numeral(population).format('0,0');



    return (
        <div className="country-card">
            <div className="country-card-img">
                <img src={flag} alt={`${name} flag`} />
            </div>
            <div className="country-card-body">
                <h2>{name}</h2>
                <p>Population: {formattedPopulation}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </div>
    );
};

export default CountryCard;