import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import PlantPage from "./pages/PlantPage";
import ParkPage from "./pages/ParkPage";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
 
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parks/:id" element={<ParkPage />} />
            <Route path="/plants/:id" element={<PlantPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
