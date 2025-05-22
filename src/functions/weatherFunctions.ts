import axios from 'axios';
import { ApiConstants } from '../constants/apiConstants';
import type { ForecastDay } from "../interfaces/forecastDay";
import type { Forecast } from "../interfaces/forecastList";

export async function getForecast(cityName: string): Promise<Forecast> {
    try {
        const url = `${ApiConstants.Base_URL}?key=${ApiConstants.Api_Key}&q=${encodeURIComponent(cityName)}&days=3&aqi=yes&alerts=no`;
        const response = await axios.get(url);

        if (response.status !== 200) {
            throw new Error(`Failed to fetch forecast data: ${response.status}`);
        }
        const jsonData = response.data;

        const forecastDays: ForecastDay[] = jsonData.forecast.forecastday.map((item: any) => {
            return {
                date: new Date(item.date),
                temperature: item.day.maxtemp_c,
                condition: item.day.condition.text,
                conditionIcon: item.day.condition.icon,
                maxwind: item.day.maxwind_kph,
                uv: item.day.uv,
                rainChance: item.day.daily_chance_of_rain,
            };
        });

        return {
            cityName: jsonData.location.name,
            region: jsonData.location.region,
            country: jsonData.location.country,

            forecastDays,
        };
    } catch (err) {
        throw new Error(`Error fetching forecast for city ${cityName}: ${err instanceof Error ? err.message : String(err)}`);
    }
}

export async function getForecastByLocation(latitude: number, longitude: number): Promise<Forecast> {
    try {
        const url = `${ApiConstants.Base_URL}?key=${ApiConstants.Api_Key}&q=${latitude},${longitude}&days=3&aqi=yes&alerts=no`;
        const response = await axios.get(url);

        if (response.status !== 200) {
            throw new Error(`Failed to fetch forecast data: ${response.status}`);
        }
        const jsonData = response.data;

        const forecastDays: ForecastDay[] = jsonData.forecast.forecastday.map((item: any) => {

            return {
                date: new Date(item.date),
                temperature: item.day.maxtemp_c,
                condition: item.day.condition.text,
                conditionIcon: item.day.condition.icon,
                maxwind: item.day.maxwind_kph,
                uv: item.day.uv,
                rainChance: item.day.daily_chance_of_rain,
            };
        });

        return {
            cityName: jsonData.location.name,
            region: jsonData.location.region,
            country: jsonData.location.country,
            forecastDays,
        };
    } catch (err) {
        throw new Error(`Error fetching forecast for location (${latitude}, ${longitude}): ${err instanceof Error ? err.message : String(err)}`);
    }
}