import { useState, useEffect } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import img from '../assets/pexels-timmossholder-1764702.jpg'; // Correct image import

const First = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["home decor idea", "fashion trend", "culinary delight", "travel inspiration"];

  const colors = [
    "#2E3A4D",
    "#2A2F36",
    "#3A4D41",
    "#2E3A4D",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    document.getElementById("second-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative text-center py-20 px-4 md:px-8 lg:px-16">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.8', // Control background opacity
          zIndex: '-1', // Ensure it's behind the content
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-cyan-950 font-mono mt-8">
          Get your next
        </h1>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl italic mt-5 font-bold mb-8 transition-colors duration-500"
          style={{ color: colors[currentText] }}
        >
          {texts[currentText]}
        </h2>
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
        </div>
        <button
          onClick={handleScroll}
          className="p-4 md:p-5 mt-8 rounded-full transition-colors duration-500 animate-bounce"
          style={{ backgroundColor: colors[currentText] }}
        >
          <span className="text-white text-5xl md:text-6xl lg:text-7xl">
            <IoIosArrowDropdown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default First;
