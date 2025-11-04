const CountryDetail = ({ country }) => {
    const capital = country.capital && country.capital[0];
    return (
        <div>
            <h2>{country.name.common}</h2>
            <img src={country.flags.png} alt={`${country.name.common} flag`} width={120} />
            <div>Official name: {country.name.official}</div>
            <div>Capital: {capital}</div>
            <div>Region: {country.region}</div>
            <div>Population: {country.population}</div>
            <div>Money: {country.currencies && Object.values(country.currencies).map(cur => cur.name).join(', ')}</div>
            <div>Language: {country.languages && Object.values(country.languages).join(', ')}</div>
        </div>
    );
};

export default CountryDetail;