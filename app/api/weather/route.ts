import { NextRequest, NextResponse } from "next/server";
import { getWeatherByCity } from "@/lib/weather";
export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city")?.trim();
  if (!city) return NextResponse.json({ error: "Please enter a city name." }, { status: 400 });
  try { return NextResponse.json(await getWeatherByCity(city)); }
  catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load weather right now.";
    return NextResponse.json({ error: message }, { status: 404 });
  }
}
