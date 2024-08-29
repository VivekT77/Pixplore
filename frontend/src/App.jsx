import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Watch from "./pages/Watch";
import Today from "./pages/Today";
import Explore from "./pages/Explore";
import Create from "./pages/Create";
import About from "./pages/About";
import Business from "./pages/Business";
import Blog from "./pages/Blog";
import Footer from "./pages/Footer";
import Header from "./components/Header";
import GenerateAI from "./pages/GenerateAI";




const App = () => {
  return (
    <>
      <BrowserRouter>
         <Header />

        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/today" element={<Today/>} />
          <Route path="/watch" element={<Watch/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/business" element={<Business/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/generateAi" element={<GenerateAI/>} />
         
        </Routes>
        <Footer/>
      </BrowserRouter>    
    </>
  );
};

export default App;