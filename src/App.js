import React from 'react';
import './App.css';
import Banner from './init';
import Screen1 from './screen1/Screen1';
import Screen2 from './screen2/details';
import Notfound from './security/notFound';
import { NavLink, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <Banner />
    </div>

  );
}

export default App;
