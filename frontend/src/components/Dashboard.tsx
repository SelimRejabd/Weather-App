import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchTemperature } from "../slices/WeatherSlice";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const { temperature, timestamp, unit } = useAppSelector(
    (state) => state.weather
  );

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchTemperature());
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const formattedDate = new Date(timestamp).toLocaleString();

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg flex justify-between items-center mb-4">
        <div>
          <h1 className="text-4xl font-bold mr-4">{temperature}</h1>
          <p className="text-lg text-gray-600">{unit}</p>
        </div>
        <div>
          <p className="text-gray-500">{formattedDate}</p>
        </div>
        <div className="text-yellow-500 text-2xl">
          <p>☀️</p>
          <p className="text-gray-500">Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg mb-4">
        <div className="flex justify-between">
          {["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"].map(
            (time, index) => (
              <div key={index} className="text-center">
                <div className="text-gray-700 text-lg">
                  {[21, 22, 20, 19, 18][index]}°C
                </div>
                <div>{["☀️", "☀️", "☁️", "☁️", "🌧"][index]}</div>
                <div className="text-gray-500 text-sm">{time}</div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <div className="flex justify-between">
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-gray-700 text-lg">
                {[21, 20, 16, 17, 18][index]}°C
              </div>
              <div>{["☀️", "☀️", "☁️", "☁️", "🌧"][index]}</div>
              <div className="text-gray-500 text-sm">{day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
