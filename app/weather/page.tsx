import type { Metadata } from "next";
import WeatherDashboard from "@/components/weather-dashboard";
import { getWeatherByCity } from "@/lib/weather";
export const metadata: Metadata = { title: "Weather Dashboard" };
export const revalidate = 300;
export default async function WeatherPage() {
  const initialWeather = await getWeatherByCity("Karachi").catch(() => null);
  return <main className="page-main wrap"><div className="page-intro"><span className="eyebrow">LIVE WEATHER</span><h1>The forecast, <span>at a glance.</span></h1><p>Look up current conditions and the next five days for cities around the world.</p></div><WeatherDashboard initialWeather={initialWeather} /></main>;
}
