import React, { useEffect, useState } from 'react'
import { Country } from '../../utils/Country.interface';
import CountryCard from './CountryCard';
import InputSearch from '../Input/InputSearch';

const CountryList: React.FC = () => {


    const [search, setSearch] = useState<string>('');
    const [value, setValue] = useState<string>('');

    const [countryList, setCountry] = useState<Country[]>([]);
    useEffect(() => {

        const loadCountries = async () => {

            const res = await fetch("./data.json")
            const data: Country[] = await res.json();
            setCountry(data)

        }

        loadCountries();

    }, [])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const filteredCountries = countryList.filter(
        (country) =>
            country.name.toLowerCase().includes(search.toLowerCase()) &&
            country.region.toLowerCase().includes(value.toLowerCase())
    );

    const handleSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value)
    }

    return (
        <>

            <div className="input_container">
                <div className="input-search">
                    <InputSearch onChangeInput={onChange} search={search} />
                </div>

                <div className="option_select_input">

                    <select className="select_input" value={value} onChange={handleSelectValue} >

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
                    <CountryCard key={country.name} data={country} />
                ))}
            </div>
        </>
    )
}

export default CountryList