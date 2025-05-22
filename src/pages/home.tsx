import { useState, useEffect } from 'react';
import { getForecast, getForecastByLocation } from '../functions/weatherFunctions';
import ForecastCard from '../components/forecastCard';
import Navbar from '../components/navbar';
import LocationHeader from '../components/locationHeader';
import WeatherDetails from '../components/weatherDetails';
import HeroSection from '../components/heroSection';
import type { Forecast } from '../interfaces/forecastList';
import type { ForecastDay } from '../interfaces/forecastDay';

function HomePage() {
  const [city, setCity] = useState<string>('Cairo');
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<ForecastDay | null>(null);

  const fetchWeatherData = async (searchCity: string) => {
    if (!searchCity) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const forecastData = await getForecast(searchCity);
      setForecast(forecastData);
      
      if (forecastData.forecastDays.length > 0) {
        setSelectedDay(forecastData.forecastDays[0]);
      }
    } catch (err) {
      setError(`Failed to load weather data: ${err}`);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByLocation = async (latitude: number, longitude: number) => {
    setLoading(true);
    setError(null);
    
    try {
      const forecastData = await getForecastByLocation(latitude, longitude);
      setForecast(forecastData);
      setCity(forecastData.cityName); 
      
      if (forecastData.forecastDays.length > 0) {
        setSelectedDay(forecastData.forecastDays[0]);
      }
    } catch (err) {
      setError(`Failed to load weather data for your location : ${err}`);
      setForecast(null);
      fetchWeatherData(city);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      fetchWeatherData(city); 
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByLocation(latitude, longitude);
      },
      (error) => {
        setError(`Geolocation error: ${error.message}`);
        fetchWeatherData(city); 
      }
    );
  }, []); 

  const handleSearch = (searchCity: string) => {
    setCity(searchCity);
    fetchWeatherData(searchCity);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 to-gray-900 overflow-x-hidden"> 
      <Navbar onSearch={handleSearch} isLoading={loading} />
      
      <HeroSection />

      <div className="container mx-auto px-4 py-8 relative"> 
        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg shadow-md mb-6 mx-auto max-w-3xl">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="font-medium">Error:</span>
              <span className="ml-2">{error}</span>
            </div>
          </div>
        )}
     
        {forecast && (
          <div className="space-y-10">
            <LocationHeader forecast={forecast} selectedDay={selectedDay} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative mx-auto max-w-6xl px-2">
              {forecast.forecastDays.slice(0, 3).map((day, index) => {
                const isCurrentDay = index === 0;
                
                let displayOrder;
                let zIndex;
                
                if (isCurrentDay) {
                  displayOrder = "md:order-2";
                  zIndex = "z-30"; 
                } else if (index === 1) {
                  displayOrder = "md:order-1";
                  zIndex = "z-20";
                } else {
                  displayOrder = "md:order-3";
                  zIndex = "z-20";
                }
                
                return (
                  <div 
                    key={index} 
                    className={`relative h-full transform transition-transform hover:scale-105 ${displayOrder} ${zIndex}`}
                  >
                    {isCurrentDay && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full z-40 shadow-md">
                        Today
                      </div>
                    )}
                    <ForecastCard 
                      forecastDay={day}
                      isSelected={selectedDay === day}
                      onClick={() => setSelectedDay(day)}
                    />
                  </div>
                );
              })}
            </div>
            
            {selectedDay && (
              <WeatherDetails selectedDay={selectedDay} />
            )}
          </div>
        )}

        {loading && !forecast && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            <p className="text-white text-xl">Loading weather data...</p>
          </div>
        )}

        {!loading && !forecast && !error && (
          <div className="text-center py-20">
            <p className="text-white text-xl">No weather data available. Please search for a city.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;