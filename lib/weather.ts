export type ForecastDay = { date: string; day: string; max: number; min: number; weatherCode: number; description: string; precipitationProbability: number; };
export type WeatherData = { city: string; country: string; timezone: string; localTime: string; temperature: number; apparentTemperature: number; humidity: number; cloudCover: number; windSpeed: number; precipitation: number; weatherCode: number; description: string; forecast: ForecastDay[]; };
type GeoResult = { name: string; country?: string; latitude: number; longitude: number; timezone?: string; };
function describeWeather(code: number): string {
  if (code === 0) return "Clear sky"; if (code === 1) return "Mostly clear"; if (code === 2) return "Partly cloudy"; if (code === 3) return "Overcast";
  if ([45,48].includes(code)) return "Fog"; if ([51,53,55].includes(code)) return "Drizzle"; if ([56,57].includes(code)) return "Freezing drizzle";
  if ([61,63,65].includes(code)) return "Rain"; if ([66,67].includes(code)) return "Freezing rain"; if ([71,73,75,77].includes(code)) return "Snow";
  if ([80,81,82].includes(code)) return "Rain showers"; if ([85,86].includes(code)) return "Snow showers"; if ([95,96,99].includes(code)) return "Thunderstorm"; return "Weather conditions";
}
export async function getWeatherByCity(city: string): Promise<WeatherData> {
  const geoUrl = new URL("https://geocoding-api.open-meteo.com/v1/search");
  geoUrl.searchParams.set("name", city); geoUrl.searchParams.set("count", "1"); geoUrl.searchParams.set("language", "en"); geoUrl.searchParams.set("format", "json");
  const geoResponse = await fetch(geoUrl.toString(), { next: { revalidate: 1800 } });
  if (!geoResponse.ok) throw new Error("City search is temporarily unavailable.");
  const geoData = await geoResponse.json() as { results?: GeoResult[] }; const place = geoData.results?.[0];
  if (!place) throw new Error(`We couldn't find "${city}". Check the spelling and try again.`);
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(place.latitude)); url.searchParams.set("longitude", String(place.longitude));
  url.searchParams.set("current", "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,cloud_cover,wind_speed_10m");
  url.searchParams.set("daily", "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max");
  url.searchParams.set("timezone", "auto"); url.searchParams.set("forecast_days", "5"); url.searchParams.set("temperature_unit", "celsius"); url.searchParams.set("wind_speed_unit", "kmh");
  const response = await fetch(url.toString(), { next: { revalidate: 600 } });
  if (!response.ok) throw new Error("Weather data is temporarily unavailable.");
  const data = await response.json(); const current = data.current; const daily = data.daily;
  if (!current || !daily) throw new Error("Weather data was incomplete. Please try again.");
  const forecast: ForecastDay[] = (daily.time as string[]).map((date, index) => ({ date, day: index === 0 ? "Today" : new Date(`${date}T12:00:00`).toLocaleDateString("en-US", { weekday: "short" }), max: daily.temperature_2m_max[index], min: daily.temperature_2m_min[index], weatherCode: daily.weather_code[index], description: describeWeather(daily.weather_code[index]), precipitationProbability: daily.precipitation_probability_max[index] ?? 0 }));
  return { city: place.name, country: place.country ?? "Unknown country", timezone: data.timezone ?? place.timezone ?? "Local time", localTime: String(current.time ?? "").replace("T", " "), temperature: current.temperature_2m, apparentTemperature: current.apparent_temperature, humidity: current.relative_humidity_2m, cloudCover: current.cloud_cover, windSpeed: current.wind_speed_10m, precipitation: current.precipitation, weatherCode: current.weather_code, description: describeWeather(current.weather_code), forecast };
}
