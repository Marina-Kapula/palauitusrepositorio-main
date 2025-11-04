import { useState, useEffect } from "react";
import axios from "axios";
import CountryDetail from "./CountryDetail.jsx";
import "./App.css";

function App() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(response => setCountries(response.data));
    }, []);

    const filtered = countries.filter(c =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
    );

    // Reset selectedCountry if search string changes
    useEffect(() => {
        setSelectedCountry(null);
    }, [search]);

    return (
        <div>
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Пошук країни"
            />
            {filtered.length > 10 && (
                <div>Too many matches, specify another filter</div>
            )}
            {filtered.length <= 10 && filtered.length > 1 && (
                <ul>
                    {filtered.map(c => (
                        <li key={c.cca3}>
                            {c.name.common}
                            <button onClick={() => setSelectedCountry(c)}>show</button>
                        </li>
                    ))}
                </ul>
            )}
            {(filtered.length === 1 || selectedCountry) && (
                <CountryDetail country={selectedCountry || filtered[0]} />
            )}
        </div>
    );
}

export default App;