
function HeroSection() {
  return (
    <div className="py-12 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Sky</span>
          <span className="inline-block mx-1 relative">
            {/* Shield icon for 'u' */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">ard</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Your personal weather companion for accurate forecasts and real-time updates
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full"></div>
      </div>
    </div>
  );
}

export default HeroSection;