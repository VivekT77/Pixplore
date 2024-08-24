import  { useState, useEffect } from "react";


const First = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["home decor idea", "fashion trend", "culinary delight", "travel inspiration"];
   
  const colors = [
    "#FF6F61", // Color for "home decor idea"
    "#6B5B95", // Color for "fashion trend"
    "#88B04B", // Color for "culinary delight"
    "#009B77", // Color for "travel inspiration"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white text-center py-20">
      <h1 className="text-7xl   font-font-medium">Get your next</h1>
      <h2
        className="text-4xl mt-5 font-bold mb-8 transition-colors duration-500"
        style={{ color: colors[currentText] }}
      >
        {texts[currentText]}
      </h2>
      <div className="flex justify-center mt-4">
        <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full mx-1"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
      </div>
      <button
        className="p-4 mt-8 rounded-full transition-colors duration-500"
        style={{ backgroundColor: colors[currentText] }}
      >
        <span className="text-white text-2xl">⬇</span>
      </button>
    </div>
  );
};

export default First;
