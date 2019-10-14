import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from './routes/routes';
import BabySteps from './components/BabySteps';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="page-wrap">
          <Route exact path={ROUTES.LANDING} component={Presentation}/>
          <Route exact path={ROUTES.BLOG} component={BabySteps}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
