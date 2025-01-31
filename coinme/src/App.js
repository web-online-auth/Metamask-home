import './App.css';
import React, { useEffect } from 'react';
// import ReactGA from 'react-ga';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Home from './Pages/Home';
import Alrt from './Pages/Alrt';
import Verify from './Pages/Verify';
import Demo from './Pages/Demo';

// App component is now a child of BrowserRouter
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <AnalyticsWrapper /> */}
        <Routes>
        <Route path="/" element={<Demo />} />

          <Route path="/home" element={<Home />} />
          <Route path="/alt" element={<Alrt />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// This is the wrapper component to handle analytics
// function AnalyticsWrapper() {
//   const location = useLocation(); // Now we can safely use useLocation here

//   useEffect(() => {
//     window.gtag('config', 'G-L3D2GYFPH6', {
//       page_path: location.pathname + location.search,});
//   }, [location]); // The useEffect hook listens for location changes

//   return null; // No UI needs to be rendered here
// }

export default App;
