import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Wall from './Wall';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/*' element={<Wall />} />
      </Routes>
    </div>
  );
};

export default Home;
