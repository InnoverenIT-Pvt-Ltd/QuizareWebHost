// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navigate from './Navigate';


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Navigate cardIndex={1}  />} /> 
        <Route exact path="/card1" render={() => <Navigate cardIndex={1}  />} />
        <Route exact path="/card2" render={() => <Navigate cardIndex={2} />} />
        <Route exact path="/card3" render={() => <Navigate cardIndex={3} />} />
        <Route exact path="/card4" render={() => <Navigate cardIndex={4}  />} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;