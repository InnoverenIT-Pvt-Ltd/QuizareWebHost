
import React, { Component, lazy, Suspense } from "react";
import 'antd/dist/reset.css';
import { connect } from "react-redux";
import { Route, Switch,withRouter } from "react-router-dom";
import "./App.css";
import { BundleLoader } from "./Components/Placeholder";
import PrivateRoute from "./Helpers/Auth/PrivateRoute";
import Privacy from "./Privacy";
import Termco from "./Termco";
import SelectPlan from "./Main/SelectPlan";
import ForgotThroughEmail from "./Container/Auth/ForgotThroughEmail";
const NewForgetPassword = lazy(() => import("./Container/Auth/NewForgetPassword"))
const ForgetPasswordForm = lazy(() => import("./Container/Auth/ForgetPasswordForm"))
const LoginByMail = lazy(() => import("./Container/Auth/LoginByMail"))
const SignUpPage = lazy(() => import("./Container/Auth/SignUpPage"))
const ChangePassword = lazy(() => import("./Container/Auth/ChangePassword"))
const Login = lazy(() => import("./Container/Auth/Login"))
const MainApp = lazy(() => import("./Main/MainApp"))
const StripeOutPayLoading =lazy(()=>import("./Main/StripeOutPayLoading"));
  
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userDetails: sessionStorage.getItem('userDetails') // Check if the user is logged in
      };
    }
  
    componentDidMount() {
      const { userDetails } = this.state;
  
      // Prevent back navigation for logged-in users and clear session storage if they try
      if (userDetails) {
        this.preventBackNavigation();
      }
    }
  
    componentWillUnmount() {
      // Cleanup on component unmount
      window.onpopstate = null;
    }
  
    preventBackNavigation = () => {
      // Push a fake history entry to block back navigation after login
      window.history.pushState(null, null, window.location.href);
  
      // Intercept back navigation and redirect to the main page if the user tries to go back
      window.onpopstate = () => {
        window.history.pushState(null, null, window.location.href);  // Prevent going back
        sessionStorage.removeItem('userDetails'); // Clear session storage
        // window.sessionStorage.clear();
        window.location.replace('/email');  // Redirect to login page
      };
    };
  
    handleLogout = () => {
      sessionStorage.removeItem('userDetails'); // Clear session storage
      window.location.href = '/email'; // Redirect to login page
    };
  
  
    render() {
      const { fetchingUserDetails } = this.props;
      const { userDetails } = this.state;
      return (
  
        <div>
         
          <Suspense fallback={<BundleLoader />}>
            <Switch>
              {/* <Route exact path="/login" component={Login} /> */}
              <Route exact path="/email" component={LoginByMail} />
              <Route exact path="/signUp" component={SignUpPage} />
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/term" component={Termco} />
              <Route exact path="/selectplan" component={SelectPlan} />
              <Route exact path="/changepassword" component={ChangePassword} />
              {/* <Route exact path="/forgotPassword" component={ForgetPasswordForm} />
              <Route exact path="/newforgotpassword" component={NewForgetPassword} /> */}
              <Route exact path="/user/forgotPassword/:to" component={ForgetPasswordForm} />
              <Route exact path="/fogotThroughemail" component={ForgotThroughEmail} />
              <Route exact path="/drb/payloading/:stripePaymentId/:paymentId/:subscriptionId/:userId" component={StripeOutPayLoading} />
              {fetchingUserDetails && !userDetails ? (
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
export default connect(mapStateToProps)(withRouter(App));

