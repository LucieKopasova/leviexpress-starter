import React, { useEffect, useState } from 'react';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCity = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/cities',
      );
      const responseData = await response.json();
      setCities(responseData.results);
    };
    fetchCity();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromCity, toCity, date);
  };

  const CityOptions = ({ value, onChange, dataCities }) => {
    dataCities.map((city) => {
      <option value="mesto01">{city}</option>;
    });
    return (
      <>
        <select value={value} onChange={onChange}>
          <option value="">Vyberte</option>
          {dataCities.map((city) => (
            <option key={city.code} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </>
    );
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <CityOptions
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              dataCities={cities}
            />
            {/* <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            >
              <option value="">Vyberte</option>
              <option value="mesto01">Město 01</option>
              <option value="mesto02">Město 02</option>
              <option value="mesto03">Město 03</option>
              <option value="mesto04">Město 04</option>
              <option value="mesto05">Město 05</option>
            </select> */}
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <CityOptions
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              dataCities={cities}
            />
            {/*   <select value={toCity} onChange={(e) => setToCity(e.target.value)}> 
              <option value="">Vyberte</option>
              <option value="mesto01">Město 01</option>
              <option value="mesto02">Město 02</option>
              <option value="mesto03">Město 03</option>
              <option value="mesto04">Město 04</option>
              <option value="mesto05">Město 05</option>
            </select>*/}
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <option value="">Vyberte</option>
              <option value="datum01">Datum 01</option>
              <option value="datum02">Datum 02</option>
              <option value="datum03">Datum 03</option>
              <option value="datum04">Datum 04</option>
              <option value="datum05">Datum 05</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
