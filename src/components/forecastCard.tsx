import type { ForecastDay } from '../interfaces/forecastDay';

interface ForecastCardProps {
  forecastDay: ForecastDay;
  isSelected?: boolean;
  onClick?: () => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function ForecastCard(props: ForecastCardProps) {
  const { forecastDay, isSelected = false, onClick } = props;
  
  return (
    <div 
      className={classNames(
        'rounded-3xl p-12 ring-1 ring-gray-900/10 transition-all h-auto  hover:m-5 cursor-pointer',
        isSelected ? 'bg-gray-800 shadow-2xl text-white' : 'bg-white text-gray-900 ',
      )}
      onClick={onClick}
    >
      <div className="text-3xl font-medium mb-4 text-center">
        {forecastDay.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
      </div>
      
      <div className="flex justify-center mb-4">
        <img 
          src={forecastDay.conditionIcon.startsWith('//') ? 
            `https:${forecastDay.conditionIcon}` : forecastDay.conditionIcon} 
          alt={forecastDay.condition} 
          className="h-16 w-16"
        />
      </div>
      
      <div className="text-center mb-3">
        <span className={classNames(
          'text-4xl font-bold tracking-tight',
          isSelected ? 'text-white' : 'text-gray-900'
        )}>
          {forecastDay.temperature}°C
        </span>
      </div>
      
      <div className={classNames(
        'text-center font-semibold mb-6 text-base',
        isSelected ? 'text-gray-300' : 'text-gray-600'
      )}>
        {forecastDay.condition}
      </div>
      
      <ul role="list" className={classNames(
        'space-y-3 text-sm/6',
        isSelected ? 'text-gray-300' : 'text-gray-600'
      )}>

        <li className="flex gap-x-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className={classNames(
              'h-5 w-5 flex-none',
              isSelected ? 'text-indigo-400' : 'text-indigo-600'
            )}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
          </svg>
          <span className="font-medium">Wind {forecastDay.maxwind} km/h</span>
        </li>
        
        <li className="flex gap-x-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className={classNames(
              'h-5 w-5 flex-none',
              isSelected ? 'text-indigo-400' : 'text-indigo-600'
            )}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
          <span className="font-medium">UV Index: {forecastDay.uv}</span>
        </li>
        
        <li className="flex gap-x-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className={classNames(
              'h-5 w-5 flex-none',
              isSelected ? 'text-indigo-400' : 'text-indigo-600'
            )}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.25 9.75-3-3m0 0-3 3m3-3v7.5M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
          </svg>
          <span className="font-medium">Rain Chance: {forecastDay.rainChance}%</span>
        </li>
      </ul>
    </div>
  );
}

export default ForecastCard;