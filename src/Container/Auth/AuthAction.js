import * as types from './AuthTypes';
import { base_url, login_url } from '../../Config/Auth';
import axios from 'axios';
import { message } from "antd"
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
// import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * login url
 */
export const login = ({ email, password }, history, cb) => (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  axios
    .post(`${login_url}/userDetails/login`, {
      email: email,
      password: password,
    })
    .then((res) => {
      //console.log(res);
      //console.log('get response');
      dispatch(getUserDetails(res.data.userId));
      history.push("/create");
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data,
      });
      cb && cb("success");
    })
    .catch((err) => {
      //console.log(err && err.response && err.response.data);
      cb && cb("failure");
      message.error("Oops! something went wrong. Please retry.")
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: err,
      });
    });
};

/**
 * get user details after login
 */
export const getUserDetails = userId => dispatch => {
  //console.log('user details request....');
  dispatch({
    type: types.GET_USER_DETAILS_REQUEST,
  });
  axios
    .get(`${base_url}/userDetails/profile/${userId}`)
    .then(res => {
      sessionStorage.setItem("userDetails", JSON.stringify(res.data));
      dispatch({
        type: types.GET_USER_DETAILS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      //console.log(err);
      dispatch({
        type: types.GET_USER_DETAILS_FAILURE,
        payload: err,
      });
    });
};
export const facebookLogin = (token, cb) => dispatch => {
  dispatch({
    type: types.FACEBOOK_LOGIN_REQUEST
  });

  axios
    .post(`${base_url}/facebooklogin`, {
      access_token: token
    })
    .then(res => {
      dispatch({
        type: types.FACEBOOK_LOGIN_SUCCESS,
        payload: res.data
      });
      console.log(res.data);
      if (res.data.successInd === true) {
        localStorage.setItem("userCredential", JSON.stringify(res.data));
        cb && cb("success");
      }

      if (res.data.successInd === false) {
        cb && cb("invalid", res.data);
      } else {
        // cb && cb('error')
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.FACEBOOK_LOGIN_FAILURE,
        payload: err
      });
      cb("failure");
    });
};

export const googleLogin = (tokenId, cb) => dispatch => {
  dispatch({
    type: types.GOOGLE_LOGIN_REQUEST
  });

  axios
    .post(`${base_url}/googlelogin`, {
      idToken: tokenId,
    })
    .then(res => {
      dispatch({
        type: types.GOOGLE_LOGIN_SUCCESS,
        payload: res.data
      });
      console.log(res.data);
      if (res.data.successInd === true) {
        localStorage.setItem("userCredential", JSON.stringify(res.data));
        cb && cb("success");
      }

      if (res.data.successInd === false) {
        cb && cb("invalid", res.data);
      } else {
        // cb && cb('error')
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.GOOGLE_LOGIN_FAILURE,
        payload: err
      });
      cb("failure");
    });
};

export const signUpByUser = (data, cb) => (dispatch) => {
  dispatch({
    type: types.SIGN_UP_BY_USER_REQUEST,
  });
  axios
    .post(`${login_url}/userDetails/save`, data)
    .then((res) => {
      dispatch(getUserDetails(res.data.userId));
      dispatch({
        type: types.SIGN_UP_BY_USER_SUCCESS,
        payload: res.data,
      });
      cb();
    })
    .catch((err) => {
      cb()
      if (
        err &&
        err.response &&
        err.response.data ===
        "You have entered an invalid username or password "
      ) {
      } else {
        history.push({
          pathname: "/",
        });
      }
      dispatch({
        type: types.SIGN_UP_BY_USER_FAILURE,
        payload: err,
      });
    });
};

export const changePassword = (data, userId, cb) => (dispatch) => {
  dispatch({
    type: types.CHANGE_PASSWORD_REQUEST,
  });
  axios
    .post(`${login_url}/userDetails/changePassword/${userId}`, data)
    .then((res) => {
      dispatch(getUserDetails(userId));
      dispatch({
        type: types.CHANGE_PASSWORD_SUCCESS,
        payload: res.data,
      });
      cb();
      message.success(res.data)
    })
    .catch((err) => {
      cb()
      if (
        err &&
        err.response &&
        err.response.data ===
        "You have entered an invalid username or password "
      ) {
      } else {
        history.push({
          pathname: "/",
        });
      }
      dispatch({
        type: types.CHANGE_PASSWORD_FAILURE,
        payload: err,
      });
    });
};

export const sendOtpForValidation = (data, cb) => (dispatch) => {
  dispatch({
    type: types.SEND_OTP_FOR_VALIDATION_REQUEST,
  });
  axios
    .post(`${login_url}/otp/generateOTP`, data)
    .then((res) => {
      dispatch({
        type: types.SEND_OTP_FOR_VALIDATION_SUCCESS,
        payload: res.data,
      });
      cb();
    })
    .catch((err) => {
      cb()

      dispatch({
        type: types.SEND_OTP_FOR_VALIDATION_FAILURE,
        payload: err,
      });
    });
};

export const updatePassword = (data, cb) => (dispatch) => {
  dispatch({
    type: types.UPDATE_PASSWORD_REQUEST,
  });
  axios
    .post(`${login_url}/userDetails/forgotPassword`, data)
    .then((res) => {
      dispatch({
        type: types.UPDATE_PASSWORD_SUCCESS,
        payload: res.data,
      });
      cb();
      message.success("Password has changed successfully !!")
    })
    .catch((err) => {
      cb()

      dispatch({
        type: types.UPDATE_PASSWORD_FAILURE,
        payload: err,
      });
    });
};

export const validateOtp = (data, cb) => (dispatch) => {
  dispatch({
    type: types.VALIDATE_OTP_REQUEST,
  });
  axios
    .post(`${login_url}/otp/validateOtp`, data)
    .then((res) => {
      dispatch({
        type: types.VALIDATE_OTP_SUCCESS,
        payload: res.data,
      });
      cb();
    })
    .catch((err) => {
      cb()

      dispatch({
        type: types.VALIDATE_OTP_FAILURE,
        payload: err,
      });
    });
};

