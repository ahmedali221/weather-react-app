import type { ForecastDay } from '../interfaces/forecastDay';

interface WeatherDetailsProps {
  selectedDay: ForecastDay | null;
}


function WeatherDetails({ selectedDay }: WeatherDetailsProps) {
  if (!selectedDay) return null;
  
  return (
    <div className="bg-gray-800/80 rounded-xl shadow-md p-6 text-white">
      <h3 className="text-xl font-bold mb-2 text-center">Weather Details</h3>
      
      {/* Added day and date display */}
      <div className="flex justify-center items-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-gray-300">
          {selectedDay.date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>
       {/* Condition */}
      <div className="mt-6 text-center mb-6">
        <div className="flex justify-center mb-2">
          <img 
            src={selectedDay.conditionIcon.startsWith('//') ? 
              `https:${selectedDay.conditionIcon}` : selectedDay.conditionIcon} 
            alt={selectedDay.condition} 
            className="h-16 w-16"
          />
        </div>
        <p className="text-xl font-semibold">{selectedDay.condition}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-4">
          {/* Temperature */}
          <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a6 6 0 0 0 0-12 6 6 0 0 0 0 12Z" />
            </svg>
            <div>
              <p className="text-gray-300 text-sm">Temperature</p>
              <p className="font-bold text-lg">{selectedDay.temperature}°C</p>
            </div>
          </div>
          
          {/* Wind */}
          <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>
            <div>
              <p className="text-gray-300 text-sm">Wind Speed</p>
              <p className="font-bold text-lg">{selectedDay.maxwind} km/h</p>
            </div>
          </div>
        </div>
        
        {/* Right column */}
        <div className="space-y-4">
          {/* UV Index */}
          <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            <div>
              <p className="text-gray-300 text-sm">UV Index</p>
              <p className="font-bold text-lg">{selectedDay.uv}</p>
            </div>
          </div>
          
          {/* Rain Chance */}
          <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>
            <div>
              <p className="text-gray-300 text-sm">Chance of Rain</p>
              <p className="font-bold text-lg">{selectedDay.rainChance}%</p>
            </div>
          </div>
        </div>
      </div>
      
     
    </div>
  );
}

export default WeatherDetails;