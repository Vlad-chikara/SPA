import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherApi';
import './MyCity.css';

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const city = 'Kyiv';

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(city);
        setWeather(data);
      } catch (error) {
        console.error('Помилка при завантаженні погоди:', error);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [city]);

  if (loading) {
    return <div>Завантаження погоди...</div>;
  }

  if (!weather) {
    return <div>Не вдалося отримати дані погоди.</div>;
  }

  const { location, current } = weather;

  return (
    <main className="my-city-container">
      <h1>Моє місто — {location.name}</h1>

      <section className="city-description">
        <h2>Про Київ</h2>
        <p>
          Київ — це не лише столиця України, а й одне з найстаріших міст Європи,
          засноване понад 1400 років тому. Місто розташоване на мальовничих берегах
          річки Дніпро, відоме своїми історичними пам’ятками, архітектурою та культурою.
        </p>
      </section>

      <section className="weather-info">
        <h2>Поточна погода</h2>
        <div className="weather-details">
          <img src={current.condition.icon} alt={current.condition.text} />
          <ul>
            <li><strong>Температура:</strong> {current.temp_c}°C</li>
            <li><strong>Відчувається як:</strong> {current.feelslike_c}°C</li>
            <li><strong>Опис:</strong> {current.condition.text}</li>
            <li><strong>Координати:</strong> {location.lat}, {location.lon}</li>
            <li><strong>Останнє оновлення:</strong> {current.last_updated}</li>
            <li><strong>Країна:</strong> {location.country}</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default MyCity;

