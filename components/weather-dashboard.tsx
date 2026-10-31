"use client";
import { FormEvent, useState } from "react";
import type { WeatherData } from "@/lib/weather";
import { WeatherIcon } from "./weather-icon";
export default function WeatherDashboard({ initialWeather }: { initialWeather: WeatherData | null }) {
  const [weather, setWeather] = useState<WeatherData | null>(initialWeather);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = city.trim();
    if (!query) { setError("Please type a city name first."); return; }
    setLoading(true); setError("");
    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(query)}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not find that city.");
      setWeather(data as WeatherData); setCity("");
    } catch (caught) { setError(caught instanceof Error ? caught.message : "Something went wrong."); }
    finally { setLoading(false); }
  }
  return <section className="weather-section" aria-label="Weather dashboard">
    <form className="search-form" onSubmit={handleSearch}><span className="search-symbol">⌕</span><input aria-label="Search city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Search a city, e.g. Lahore" autoComplete="off" /><button type="submit" disabled={loading}>{loading ? "Searching…" : "Search"} <span>↗</span></button></form>
    {error && <p className="error-message" role="alert">{error}</p>}
    {loading && <div className="loading-panel"><span className="spinner" />Finding the latest forecast…</div>}
    {!weather && !loading && <div className="empty-state"><span>☁</span><h2>Search for a city</h2><p>Weather details will appear here.</p></div>}
    {weather && !loading && <><div className="weather-card"><div className="weather-main"><div><p className="card-label">CURRENT CONDITIONS</p><h2>{weather.city}</h2><p className="country-line">{weather.country} <span>·</span> {weather.localTime}</p><p className="condition">{weather.description}</p></div><div className="temperature-block"><WeatherIcon code={weather.weatherCode} /><p className="temperature">{Math.round(weather.temperature)}<span>°C</span></p><p className="feels-like">Feels like {Math.round(weather.apparentTemperature)}°C</p></div></div><div className="weather-divider" /><div className="stats-grid"><Stat icon="☁" label="Cloud cover" value={`${weather.cloudCover}%`} /><Stat icon="💧" label="Humidity" value={`${weather.humidity}%`} /><Stat icon="↗" label="Wind speed" value={`${Math.round(weather.windSpeed)} km/h`} /><Stat icon="☂" label="Precipitation" value={`${weather.precipitation} mm`} /></div></div>
    <section className="forecast-section"><div className="section-heading"><div><p className="eyebrow">LOOK AHEAD</p><h2>Next 5 days</h2></div><span className="timezone-pill">{weather.timezone.replaceAll("_", " ")}</span></div><div className="forecast-grid">{weather.forecast.map((day) => <article className="forecast-card" key={day.date}><p className="forecast-day">{day.day}</p><WeatherIcon code={day.weatherCode} small /><p className="forecast-condition">{day.description}</p><div className="forecast-temps"><strong>{Math.round(day.max)}°</strong><span>{Math.round(day.min)}°</span></div><p className="rain-chance">☂ {day.precipitationProbability}%</p></article>)}</div></section></>}
    <p className="data-note">Weather data by Open-Meteo. Forecasts are approximate and may change.</p>
  </section>;
}
function Stat({ icon, label, value }: { icon: string; label: string; value: string }) { return <div className="stat"><span className="stat-icon">{icon}</span><div><p>{label}</p><strong>{value}</strong></div></div>; }
