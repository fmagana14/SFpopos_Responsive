import React from "react";
import "./App.css";
import "./title/Title";
// import POPOSList from "./POPOSList/POPOSList";
import { Outlet } from "react-router-dom";
import Title from "./title/Title";
import Footer from "../Footer";
// import POPOSDetails from './POPOSDetails'

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

// Cant access repo talk to Andrew about it and also talk about gif search assigmnet
