import React from 'react';
import Main from './components/MainComponent';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
