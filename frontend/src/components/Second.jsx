import dish1 from '../assets/premium_photo-1669742928112-19364a33b530.avif';
import dish2 from '../assets/premium_photo-1661767136966-38d5999f819a.avif';
import dish3 from '../assets/photo-1633457027853-106d9bed16ce.avif';
import dish4 from '../assets/photo-1633457027853-106d9bed16ce.avif';
import { useNavigate } from 'react-router-dom';

const Second = () => {
  const navigate = useNavigate();

  const explore = () => {
    navigate("/explore");
  };

  return (
    <section id="second-section" className="bg-yellow-400 flex items-center justify-center py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 px-4">
        
        {/* Left Section */}
        <div className="relative w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
            <img src={dish1} alt="Dish 1" className="w-full h-60 object-cover" />
            <img src={dish2} alt="Dish 2" className="w-full h-full object-cover" />
            <img src={dish3} alt="Dish 3" className="w-full h-full object-cover" />
            <img src={dish4} alt="Dish 4" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full px-4 py-2">
            <span className="flex items-center text-rose-700 font-medium">
              <span className="material-icons">search easy chicken dinner </span> 
            </span>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-bold text-rose-700">Search for an idea</h1>
          <p className="text-xl text-rose-700 mt-4">What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you find.</p>
          <button onClick={explore} className="mt-6 bg-red-600 text-white rounded-full px-6 py-3 hover:bg-red-700">
            Explore
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Second;
