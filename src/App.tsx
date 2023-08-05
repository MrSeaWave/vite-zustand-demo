// import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { Home } from './pages/Home/Home';
import { BearStorePage } from './pages/BearStorePage/BearStorePage';
import ModalPage from './pages/ModalPage';

type Props = {};
function App() {
  // let a = 1 === '1';
  // let b=`${}`

  // let c=2==='2]d'
  const x = 'y';
  const CONFIG = {};
  // console.log('🚀 ~ file: App.tsx:13 ~ App ~ b:', b);
  return (
    <div className="App">
      <div className="app-container">
        <Link to="/">home</Link>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/about">about</Link>
        <Link to="/bear-store">BearStorePage</Link>
        <Link to="/modal-page">Modal Page</Link>
      </div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/bear-store" element={<BearStorePage />} />
        <Route path="/modal-page" element={<ModalPage />} />
      </Routes>
    </div>
  );
}

export default App;
