import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
        
      <div className="flex items-center space-x-4 font-medium space-x-7">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png"
          alt="Pinterest"
          className="h-11"
        />
        <h1 className="text-rose-700 font-bold text-xl 	">Pinterest</h1>
        <Link to="/today" className="hover:text-rose-700">
          Today
        </Link>
        <Link to="/watch" className="hover:text-rose-700">
          Watch
        </Link>
        <Link to="/explore" className="hover:text-rose-700">
          Explore
        </Link>
      </div>

      
     

        <div className="flex items-center space-x-4 ml-auto font-medium space-x-7">
          <Link to="/about" className="hover:text-rose-700">
            About
          </Link>
          <Link to="/business" className="hover:text-rose-700">
            Business
          </Link>
          <Link to="/blog" className="hover:text-rose-700">
            Blog
          </Link>
          <button className="bg-red-600 text-white rounded-full px-4 py-2 hover:bg-red-700 font-medium">
            Login
          </button>
          <button className="bg-gray-300 rounded-full px-4 py-2 hover:bg-gray-400 font-medium">
            Signup
          </button>
        </div> 
    
    </header>
  );
};

export default Header;
