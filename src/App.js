



import React, { Component, lazy, Suspense } from "react";
import 'antd/dist/reset.css';
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import MainApp from "./Main/MainApp";
import Login from "./Container/Auth/Login";
import axios from "axios";
import "./App.css";
import { createBrowserHistory } from "history";
import { BundleLoader } from "./Components/Placeholder";
import PrivateRoute from "./Helpers/Auth/PrivateRoute";
// import AddQuiz from "./Components/Quizs/AddQuiz";

import LoginByMail from "./Container/Auth/LoginByMail";
import ForgetPasswordForm from "./Container/Auth/ForgetPasswordForm";
import SignUpPage from "./Container/Auth/SignUpPage";
import ChangePassword from "./Container/Auth/ChangePassword";

/**
 * lazy loaded compenents
 */

const history = createBrowserHistory();
class App extends Component {
  render() {
    const { fetchingUserDetails } = this.props;
    return (

      <div>
        <Suspense fallback={<BundleLoader />}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/email" component={LoginByMail} />
            <Route exact path="/signUp" component={SignUpPage} />
            <Route exact path="/changepassword" component={ChangePassword} />
            <Route exact path="/forgotPassword" component={ForgetPasswordForm} />

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

