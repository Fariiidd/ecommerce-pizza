import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Info from './components/Info/Info';

// STYLES
import GlobalStyles from './globalStyles';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Routes>
            <Route path="/" element={<Info />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;