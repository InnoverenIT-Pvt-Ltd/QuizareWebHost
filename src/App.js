
import React, { Component, lazy, Suspense } from "react";
import 'antd/dist/reset.css';
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { BundleLoader } from "./Components/Placeholder";
import PrivateRoute from "./Helpers/Auth/PrivateRoute";
const ForgetPasswordForm = lazy(() => import("./Container/Auth/ForgetPasswordForm"))
const LoginByMail = lazy(() => import("./Container/Auth/LoginByMail"))
const SignUpPage = lazy(() => import("./Container/Auth/SignUpPage"))
const ChangePassword = lazy(() => import("./Container/Auth/ChangePassword"))
const Login = lazy(() => import("./Container/Auth/Login"))
const MainApp = lazy(() => import("./Main/MainApp"))


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

            {fetchingUserDetails ? (
              <BundleLoader />
            ) : (
              <PrivateRoute path="/" component={MainApp} />
            )}
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

