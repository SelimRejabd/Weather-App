import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchTemperature } from "../slices/WeatherSlice";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const { temperature, timestamp, unit, error } = useAppSelector(
    (state) => state.weather
  );

  const loading = !(temperature || error);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchTemperature());
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const formattedDate = timestamp
    ? new Date(timestamp).toLocaleString()
    : "N/A";

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {loading && (
          <div className="flex items-center justify-center w-full h-full absolute bg-blue-50 bg-opacity-50 z-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-600 border border-red-400 p-4 rounded-lg mb-4 shadow-lg">
            <p>Error: {error || "Data could not be loaded!"}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="bg-white w-full max-w-5xl p-6 rounded-lg shadow-lg flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-bold">
                  {temperature}°
                  <span className="text-lg text-gray-600">{unit}</span>
                </h1>
                <p className="text-gray-500 mt-2">{formattedDate}</p>
              </div>
              <div className="text-yellow-500 text-4xl">
                ☀️
                <p className="text-gray-500 text-lg mt-1">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="bg-white w-full max-w-5xl p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-xl font-bold mb-4">Hourly Forecast</h2>
              <div className="grid grid-cols-7 gap-4">
                {[
                  "9:00 PM",
                  "10:00 PM",
                  "11:00 PM",
                  "12:00 PM",
                  "1:00 PM",
                  "2:00 PM",
                  "3:00 PM",
                ].map((time, index) => (
                  <div key={index} className="text-center">
                    <div className="text-gray-700 text-lg font-medium">
                      {[21, 22, 20, 19, 18, 22, 25][index]}°C
                    </div>
                    <div>
                      {["☀️", "☀️", "☁️", "☁️", "🌧", "☀️", "☀️"][index]}
                    </div>
                    <div className="text-gray-500 text-sm">{time}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white w-full max-w-5xl p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Weekly Forecast</h2>
              <div className="grid grid-cols-7 gap-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day, index) => (
                    <div key={index} className="text-center">
                      <div className="text-gray-700 text-lg font-medium">
                        {[21, 20, 16, 17, 18, 19, 22][index]}°C
                      </div>
                      <div>
                        {["☀️", "☀️", "☁️", "☁️", "🌧", "🌧", "☀️"][index]}
                      </div>
                      <div className="text-gray-500 text-sm">{day}</div>
                    </div>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
