import type { ForecastDay } from "./forecastDay";

export interface Forecast {
    cityName: string;
    country: string;
    region: string;
    forecastDays: ForecastDay[];
}