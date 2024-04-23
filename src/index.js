import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import POPOSList from "./components/POPOSList/POPOSList";
import POPOSDetails from "./components/POPOSDetails/POPOSDetails";


// Define your root element
const rootElement = document.getElementById("root");
// Create a root for rendering
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<POPOSDetails />} />
      </Route>
    </Routes>
  </Router>,
);

reportWebVitals();
