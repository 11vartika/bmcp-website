import { Topbar } from './components/Topbar/Topbar'
import { Footer } from './components/Footer';
import './App.css';
import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Topbar />
      <Footer />
    </div>
  );
}