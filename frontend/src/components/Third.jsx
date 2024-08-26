import  dish1 from "../assets/photo-1509422007420-a57adf7b7fdf.avif"
import dish2 from "../assets/photo-1572048793162-8a36a83f1def.avif"
import dish3 from "../assets/premium_photo-1680632913194-be52bf941229.avif"
import dish4 from "../assets/premium_photo-1682795922338-ce537f42693c.avif"

import { useNavigate } from "react-router-dom";

const Third = () => {
    const navigate = useNavigate();

  const explore = () => {
    navigate("/explore");
  };

  return (
    <div>
       <section id="second-section" className="bg-teal-100 flex items-center justify-center py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 px-4">
        


      <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-bold text-teal-700">Save ideas you like</h1>
          <p className="text-xl text-teal-600 mt-4">Collect your favourites so that we can get back to u later</p>
          <button onClick={explore} className="mt-6 bg-red-600 text-white rounded-full px-6 py-3 hover:bg-red-700">
            Explore
          </button>
        </div>        
        {/* Left Section */}
        <div className="relative w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
            <img src={dish1} alt="Dish 1" className="w-full h-60 object-cover" />
            <img src={dish2} alt="Dish 2" className="w-full h-60 object-cover" />
            <img src={dish3} alt="Dish 3" className="w-full h-60 object-cover" />
            <img src={dish4} alt="Dish 4" className="w-full h-60 object-cover" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full px-4 py-2">
            <span className="flex items-center text-rose-700 font-medium">
              <span className="material-icons">search for home decor</span>
            </span>
          </div>
        </div>
        
        {/* Right Section */}
       
        
      </div>
    </section>
    </div>
  )
}

export default Third
