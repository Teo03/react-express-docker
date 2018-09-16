import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {App} from './components/App.js';

ReactDOM.render(
    <Router>
      <div>
      <Route exact path='/' component={App}/>
      </div>
    </Router>
   ,
  document.getElementById('app')
);