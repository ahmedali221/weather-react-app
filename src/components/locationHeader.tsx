import type { Forecast } from '../interfaces/forecastList';
import type { ForecastDay } from '../interfaces/forecastDay';

interface LocationHeaderProps {
  forecast: Forecast;
  selectedDay: ForecastDay | null;
}

function LocationHeader({ forecast, selectedDay }: LocationHeaderProps) {
  return (
    <div className="bg-gray-800/80 rounded-xl shadow-md p-6 text-white">
      <div className="flex flex-col items-center justify-center">
        {/* Location Icon and City Name */}
        <div className="flex items-center mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h2 className="text-3xl font-bold text-white">{forecast.cityName}</h2>
        </div>
        
        {/* Region and Country */}
        <div className="text-center mb-4">
          <p className="text-gray-300 text-lg">
            {forecast.region}, {forecast.country}
          </p>
        </div>
        
        {/* Selected Day Date */}
        {selectedDay && (
          <div className="flex items-center bg-gray-700 px-4 py-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium text-white">
              {new Intl.DateTimeFormat('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric'
              }).format(selectedDay.date)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default LocationHeader;