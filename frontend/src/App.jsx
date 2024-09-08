import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import Create from "./pages/Create";
import About from "./pages/About";



const App = () => {
  return (
    
    <>

      <BrowserRouter>
         <Header />

        <Routes>

          <Route path="/" element={<Home/>} />

          <Route path="/home" element={<Home/>} />

    


          <Route path="/explore" element={<Explore/>} />
          <Route path="explore/category/:categoryId" element={<CategoryDetailsPage />} />

          {/* <Route path="/explore/:categoryName" element={<Explore/>} /> */}

          <Route path="/create" element={<Create/>} />
          <Route path="/about" element={<About/>} />
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