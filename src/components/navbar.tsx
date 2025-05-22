import React, { useRef } from 'react';

interface NavbarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

function Navbar({ onSearch, isLoading }: NavbarProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInputRef.current && searchInputRef.current.value.trim()) {
      onSearch(searchInputRef.current.value.trim());
    }
  };

  return (
    <div className="bg-gray-900 shadow-lg "> 
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center">
        <div className="flex items-center mb-4 sm:mb-0">
         
          <h1 className="text-2xl font-bold text-white flex items-center">
            SkyG
            <span className="inline-block mx-1 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </span>
            ard
          </h1>
        </div>
        
        <div className="flex-grow flex justify-center ">
          <form onSubmit={handleSubmit} className="flex items-center w-full max-w-md b-2">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Enter City Name" 
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-sm bg-gray-800 text-white" 
              />
            </div>
            <button 
              type="submit" 
              className="bg-grey-800 border-2 border-white hover:bg-gray-200 hover:text-black text-white font-medium py-2.5 px-5 rounded-r-lg transition-colors text-sm flex items-center" 
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              Search
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;