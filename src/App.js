import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Profile from './components/pages/Profile';
import Missions from './components/pages/Missions';
import Rockets from './components/pages/Rockets';
import { getRokets } from './redux/rockets/rocketsSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch(); // fetch rockets list when page loads for the first time..
  useEffect(() => {
    dispatch(getRokets());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
