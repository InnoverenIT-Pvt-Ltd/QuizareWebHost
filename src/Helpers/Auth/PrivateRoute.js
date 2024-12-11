import React,{useEffect,useState} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Route, Redirect, useHistory,withRouter } from 'react-router-dom';
import axios from "axios";
import { message } from "antd";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const [sessionExpired, setSessionExpired] = useState(false);
  useEffect(() => {
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          sessionStorage.clear();
          setSessionExpired(true); 
          history.push("/email");
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
    );

    // Check if userDetails are in sessionStorage or redirect
    if (!sessionStorage.getItem("userDetails") && window.location.pathname !== "/email") {
      setSessionExpired(true); // Mark session as expired if no userDetails
      history.push("/email");
    }
    return () => {
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [history]);

  useEffect(() => {
    if (sessionExpired) {
      message.error("Your session has expired. Please re-login.");
    }
  }, [sessionExpired]);
  
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
