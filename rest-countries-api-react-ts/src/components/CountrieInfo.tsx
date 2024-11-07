import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppContext } from '../hooks/UseContextApp'
import numeral from 'numeral';
const CountrieInfo: React.FC = () => {
  const { countrieId } = useParams<{ countrieId: string }>();
  const { countryList } = useAppContext();

  const {isDarkMode} = useAppContext();

  // Usa `find` para obtener el país específico en lugar de `filter`
  const country = countryList.find((country) => country.name === countrieId);

  const formattedPopulation = numeral(country?.population).format('0,0');

  // Verifica que `country` y `borders` existen antes de mapear
  const borderCountries = country?.borders?.map((borderCode) => {
    const borderCountry = countryList.find(
      (country) => country.alpha3Code === borderCode
    );
    return borderCountry ? borderCountry.name : null;
  }).filter(Boolean); // Filtra valores nulos

  return (

    <div className="container" style={{ color: isDarkMode ? "#fff" : "#000" , backgroundColor:isDarkMode ? "#212f36" : "#fff",minHeight:"100vh"}}>


      <button className='btn-back'  style={{
        backgroundColor:isDarkMode ? "#2b3743" : "#fff",borderColor:isDarkMode ? "#fff" : "#000",
        // borderColor:isDarkMode ? "#fff" : "#000",
        borderStyle:isDarkMode ? "solid" : "solid",
        borderWidth:isDarkMode ? "1px" : "none"
        }}  >
        <Link to="/" style={{ color: isDarkMode ? "#fff" : "#000" }}  >Back</Link>
      </button>
      <div className="container-card-info" style={{ color: isDarkMode ? "#fff" : "#000" , backgroundColor:isDarkMode ? "#212f36" : "#fff"}} >

        {country ? (
          <>

            <div className="countrie-img">
              <img src={country.flag} alt={`${country.name} flag`} />
            </div>

            <div className="countrie-card-body">

              <h2>{country.name}</h2>
              <p>Native Name: {country.nativeName}</p>
              <p>Population: {formattedPopulation}</p>
              <p>Region: {country.region}</p>
              <p>Subregion: {country.subregion}</p>
              <p>Capital: {country.capital}</p>
              <p>toplevelDomain: {country.topLevelDomain}</p>
              <div className="card-more-info">
                <p>Monedas:</p>
                <ul>
                  {country.currencies?.map((currency, index) => (
                    <li key={index}>
                      <p>{currency.name}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-more-info">
                
              <p>Lenguajes:</p>
                <ul>
                  {country.languages?.map((language, index) => (
                    <li key={index}>
                      <p>{language.name}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-more-info borders">
                <p>Paises fronterizos:</p>

                <ul>
                  {borderCountries?.length ? (
                    borderCountries.map((borderName, index) => (
                      <Link key={index} to={`/${borderName}`} style={{ 
                        color: isDarkMode ? "#fff" : "#000",
                        backgroundColor:isDarkMode ? "#2b3743" : "#fff",
                        borderColor:isDarkMode ? "#fff" : "#000",
                        borderStyle:isDarkMode ? "solid" : "solid",
                        borderWidth:isDarkMode ? "1px" : "none"
                        }} >
                        <li key={index}>{borderName}</li>
                      </Link>
                    ))
                  ) : (
                    <li>No hay paisses fronterizos</li>
                  )}
                </ul>

              </div>

            </div>

          </>
        ) : (
          <p>Not Found</p>
        )}


      </div>
    </div>

  );
}

export default CountrieInfo;
