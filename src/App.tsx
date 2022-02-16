import React from 'react';
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
