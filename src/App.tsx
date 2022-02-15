import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Router from './Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
     <Router />
      </div>
     <Footer />
    </div>
  );
}

export default App;
