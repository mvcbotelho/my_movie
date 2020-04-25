import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Details from './pages/Details'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detalhes/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
