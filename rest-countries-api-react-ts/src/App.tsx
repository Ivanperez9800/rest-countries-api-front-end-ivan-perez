import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';

import './App.css';
import CountrieInfo from './components/CountrieInfo';
import Banner from './components/Banner/Banner';

const App: React.FC = () => {



  return (
    <>
        <Banner />
        <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/:countrieId" element={<CountrieInfo />} />
      </Routes>
    </Router>
    </>

  );
};

export default App;