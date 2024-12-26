import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
          <h1 className="text-2xl font-bold">Weather Dashboard</h1>
        </div>

        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search location..."
            className="outline-none px-2 text-gray-700"
          />
          <button className="text-blue-600 font-bold px-4">Search</button>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#forecast" className="hover:underline">
            Forecast
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 text-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#forecast" className="hover:underline">
              Forecast
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <div className="w-full px-6">
              <div className="bg-white rounded-full px-4 py-2">
                <input
                  type="text"
                  placeholder="Search location..."
                  className="outline-none px-2 text-gray-700 w-full"
                />
                <button className="text-blue-600 font-bold px-4">Search</button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
