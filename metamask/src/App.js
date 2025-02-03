import './index.css';
import React from 'react';
// import ReactGA from 'react-ga';
import { BrowserRouter, Routes, Route} from 'react-router-dom';




// import Home from './Pages/Home';

import Verify from './Pages/Verify';
import Home from './Pages/Home';
import Alt from './Pages/Alt';

// App component is now a child of BrowserRouter
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <AnalyticsWrapper /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
        
          <Route path="/alt" element={<Alt/>} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
