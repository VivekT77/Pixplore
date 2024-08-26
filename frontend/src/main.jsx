import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";


const store=configureStore({
  reducer:rootReducer,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

        
          <App />
          <Toaster/>
        

    </Provider>
  </StrictMode>,
)
