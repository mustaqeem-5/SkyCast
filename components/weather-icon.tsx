export function WeatherIcon({ code, small = false }: { code: number; small?: boolean }) {
  let icon = "☀";
  if (code === 0) icon = "☀";
  else if ([1, 2].includes(code)) icon = "🌤";
  else if (code === 3) icon = "☁";
  else if ([45, 48].includes(code)) icon = "🌫";
  else if ([51, 53, 55, 56, 57].includes(code)) icon = "🌦";
  else if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) icon = "🌧";
  else if ([71, 73, 75, 77, 85, 86].includes(code)) icon = "❄";
  else if ([95, 96, 99].includes(code)) icon = "⛈";
  return <span className={small ? "weather-icon weather-icon-small" : "weather-icon"} aria-label="Weather condition">{icon}</span>;
}
