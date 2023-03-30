



import React, { Component, lazy, Suspense } from "react";
import 'antd/dist/reset.css';
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import MainApp from "./Main/MainApp";
import Login from "./Container/Auth/Login";
import axios from "axios";
import "./App.css";
import { BundleLoader } from "./Components/Placeholder";
import PrivateRoute from "./Helpers/Auth/PrivateRoute";
import AddQuiz from "./Components/Quiz/AddQuiz";
// import AppErrorBoundary from "./Helpers/ErrorBoundary/AppErrorBoundary";




/**
 * lazy loaded compenents
 */


class App extends Component {
  render() {
    const { fetchingUserDetails } = this.props;
    return (
      <div>
     
          <Suspense fallback={<BundleLoader />}>
            <Switch>

            <Route exact path="/" component={Login }/>
            
            <Route exact path="/quiz" component={AddQuiz }/>

         
                <PrivateRoute path="/" component={MainApp} />
          
            </Switch>
          </Suspense>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  fetchingUserDetails: auth.fetchingUserDetails,
});
export default connect(mapStateToProps)(App);

