import React from 'react';
import Main from './Components/Main';
import Header from './Components/Commons/Header';
import Footer from './Components/Commons/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
