import React from 'react';
import './App.css';
import Home from './components/Home/home';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/form';
import Profile from './components/Profile/profile';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/profile" component={Profile} />

    </div>
  );
}

export default App;
