import React, { useEffect, useState } from 'react';
import food from '../src/images/1972-curved.png';
import './App.css';

function App() {
  const [isAnimated, setIsAnimated] = useState(false)
  useEffect(() => {
    setIsAnimated(true)
  }, [])
  return (
    <div
      className="min-h-screen w-screen flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-around"
      style={{
        background: "linear-gradient(to bottom, #F0F4FD, #A1A3BA)",
      }}>
      <div
        className={`${
          isAnimated ? "scale-y-100" : "scale-y-0"
        } mt-5 text-center lg:text-left transform transition duration-1000 ease-in-out`}>
        <h1 className="font-black text-5xl lg:text-6xl mt-12">
          Fresh Healthy <br />
          <span className="font-light text-4xl">
            Delicious<span className="text-red-500">Foods</span>
          </span>
        </h1>
        <p className="text-base text-gray-700">
          We made fresh and healthy foods
        </p>
        <span className="inline-block bg-blue-200 px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5">
          Explore
        </span>
      </div>
      <img
        src={food}
        alt="food"
        className={`${
          isAnimated ? "scale-150" : "translate-x-full translate-y-full"
        } w-2/3 lg:w-1/4 md:w-1/3 transform transition duration-1000 ease-in-out mb-5 mt-5 mr-1`}
      />
    </div>
  );
}

export default App;
