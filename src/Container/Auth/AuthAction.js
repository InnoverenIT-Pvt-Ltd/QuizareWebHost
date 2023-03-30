import * as types from "./AuthTypes.js";
import { base_url, login_url } from "../../Config/Auth";
import axios from "axios";
import { message, notification } from "antd";


import { createBrowserHistory } from "history";

import moment from "moment";



let history = createBrowserHistory();
// const history = createBrowserHistory();



// export const login = ( userName,otp , history, cb) => (dispatch) => {
//   dispatch({
//     type: types.LOGIN_REQUEST,
//   });
//   axios
//     .post(`${login_url}/api/v1/otp/validateOtp`, {
//       username: userName,
//       otp: otp,
//     })
//     .then((res) => {
//       // message.success('Welcome to FokusWork, great to have you here.')
//       console.log(res);
//       sessionStorage.setItem("token", res.data.token);

//       //dispatch(getUserDetails(res.data.token));

//       history.push("/jobVendor");
//       dispatch({
//         type: types.LOGIN_SUCCESS,
//         payload: res.data,
//       });
//       cb && cb("success");
//     })
//     .catch((err) => {
//       console.log(err && err.response && err.response.data);
//       cb && cb("failure");

//       if (
//         err &&
//         err.response &&
//         err.response.data ===
//         "You have entered an invalid username or password "
//       ) {
//         message.error("You have entered an invalid username or password ");
//       } else {
//         message.error(err.response.data);
//         console.log(err);
//         history.push({
//           pathname: "/",
//         });
//       }
//       dispatch({
//         type: types.LOGIN_FAILURE,
//         payload: err,
//       });
//     });
// };

export const login = ( {emailId,otp} ,history,   cb) => (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  axios
    .post(`${login_url}/api/v1/otp/validateOtp`, {
      emailId:emailId,
      otp:otp,
    })
    .then((res) => {
      // message.success('Welcome to FokusWork, great to have you here.')
      console.log(res);
      sessionStorage.setItem("token", res.data.userId);

      dispatch(getUserDetails(res.data.userId));
      history.push("/planner");
    
      // navigate("/profile");
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data,
      });
      cb && cb("success");
    })
    .catch((err) => {
      console.log(err && err.response && err.response.data);
      cb && cb("failure");

      if (
        err &&
        err.response &&
        err.response.data ===
        "You have entered an invalid username or password "
      ) {
        message.error("You have entered an invalid username or password ");
      } else {
        message.error(err.response.data);
        console.log(err);
        history.push({
          pathname: "/",
        });
      }
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: err,
      });
    });
};

export const generateOtpByEmail = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: types.GENERATE_OTP_BY_EMAIL_REQUEST });
    axios
      .post(`${base_url}/otp/generateOTP`, data)
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.GENERATE_OTP_BY_EMAIL_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: types.GENERATE_OTP_BY_EMAIL_FAILURE });
      });
  };

  export const validateOtp = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: types.VALIDATE_OTP_BY_EMAIL_REQUEST });
    axios
      .post(`${base_url}/otp/validateOtp`, data)
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.VALIDATE_OTP_BY_EMAIL_SUCCESS,
          payload: res.data,
        });
        message.success(res.data.status)
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: types.VALIDATE_OTP_BY_EMAIL_FAILURE });
      });
  };


  export const getUserDetails = (candidateId) => (dispatch) => {
    dispatch({
      type: types.GET_USER_DETAILS_REQUEST,
    });
    axios
      .get(`${base_url}/candidate/login/${candidateId}?url=selectiontowork.com`, {
        // headers: {
        //   Authorization: "Bearer " + token,
        // },/candidate/login/{candidateId}
      })
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("userDetails", JSON.stringify(res.data));
        dispatch({
          type: types.GET_USER_DETAILS_SUCCESS,
          payload: res.data,
        });
  
        // dispatch(setFiscalTimeIntervalReport(res.data));
        // dispatch(setFiscalTimeIntervalTeam(res.data));
        // dispatch(setFiscalTimeIntervalViewport(res.data));
  
        // dispatch(setFiscalTimeInterval(res.data));
  
        // dispatch(getLoginDetails(res.data.userId));
      })
      .catch((err) => {
        // message.error("Oops, something went wrong during getting user details.");
        console.log(err);
        // history.push({
        //   pathname: "/",
        // });
        dispatch({
          type: types.GET_USER_DETAILS_FAILURE,
          payload: err,
        });
      });
  };



  export const getHourListByUserId = (candidateId) => (dispatch) => {
    //console.log(employeeId);
    dispatch({
      type: types.GET_HOUR_LIST_BY_USER_ID_REQUEST,
    });
    axios
      .get(`${base_url}/hour/user/planner/website/${candidateId}?url=selectiontowork.com`, {
        // headers: {
        //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        // },
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.GET_HOUR_LIST_BY_USER_ID_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.GET_HOUR_LIST_BY_USER_ID_FAILURE,
          payload: err,
        });
      });
  };