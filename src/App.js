import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';
import headerContent from './api/headerContent'

import { 
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch } from "react-router-dom";


function App() {
  return (
    <Router>
        <nav>
          <ul className='navigation'>
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/tabs">Tabs</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact component={HomePage} /> 
          <Route path='/tabs/:tabsId?' component={Tabs} />
        </Switch>
    </Router>
  );
}

const HomePage = () => <h4>{headerContent}</h4>;

export default App;
