import React, { useEffect, useState } from 'react';
import './style.css';

/* 
Při kliknutí na tlačítko „Vyhledat spoj“ se volá funkce handleSubmit, která vypíše údaje zadané uživatelem. Nyní výpis do konzole nahradíte voláním API. Bude se volat následující API endpoint
 */
export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchCity = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/cities',
      );
      const responseData = await response.json();
      setCities(responseData.results);
    };
    fetchCity();

    const fetchDates = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/dates',
      );
      const responseData = await response.json();
      setDates(responseData.results);
    };
    fetchDates();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    );
    const data = await response.json();
    const results = data.results;
    onJourneyChange(results);
  };

  const CityOptions = ({ value, onChange, dataCities }) => {
    return (
      <>
        <select value={value} onChange={onChange}>
          <option value="">Vyberte</option>
          {dataCities.map((city) => (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          ))}
        </select>
      </>
    );
  };

  const DatesOptions = ({ value, onChange, datadates }) => {
    return (
      <>
        <select value={value} onChange={onChange}>
          <option value="">Vyberte</option>
          {datadates.map((data) => (
            <option key={data.dateBasic} value={data.dateBasic}>
              {data.dateCs}
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
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <CityOptions
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              dataCities={cities}
            />
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <DatesOptions
              value={date}
              onChange={(e) => setDate(e.target.value)}
              datadates={dates}
            />
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              disabled={!(fromCity && toCity && date)}
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
