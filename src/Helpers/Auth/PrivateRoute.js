import React,{useEffect,useState} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Route, Redirect, useHistory,withRouter } from 'react-router-dom';
import axios from "axios";
import { message } from "antd";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();

  useEffect(() => {
    // Set up the response interceptor for expired session handling
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          sessionStorage.clear();
          history.push("/email");
          message.error("Your session has expired. Please re-login.");
        }
        return Promise.reject(error);
      }
    );

    // Check if userDetails are in sessionStorage or redirect
    if (!sessionStorage.getItem("userDetails")) {
      history.push("/email");
      message.error("Your session has expired. Please re-login.");
    }
    return () => {
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [history]);

  return (
    <Route
      {...rest}
      render={(props) =>
        sessionStorage.getItem("userDetails") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/email" />
        )
      }
    />
  );
};


const mapStateToProps = ({ auth }) => {
  return {
    userDetails: JSON.stringify(sessionStorage.getItem("userDetails")),
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {

    },
    dispatch
  );
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
);
