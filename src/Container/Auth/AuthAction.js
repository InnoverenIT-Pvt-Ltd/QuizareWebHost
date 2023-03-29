import * as types from './AuthActionTypes';
import {base_url, login_url} from '../../Config/Auth';
import axios from 'axios';
import store from '../../Store';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * login url
 */
 export const login = ({ username, password }, history, cb) => (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  axios
    .post(`${login_url}/login`, {
      username: username,
      password: password,
    })
    .then((res) => {
      //console.log(res);
      //console.log('get response');
      dispatch(getUserDetails(res.data));
      // dispatch(getUserDetailsByOrgId(res.data));
      history.push("/");
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data,
      });
      cb && cb("success");
    })
    .catch((err) => {
      //console.log(err && err.response && err.response.data);
      cb && cb("failure");
      if (
        err &&
        err.response &&
        err.response.data ===
        "You have entered an invalid username or password "
      ) {
        //message.error("You have entered an invalid username or password ");
      } else {
       // message.error("Oops! something went wrong. Please retry.");
        //console.log(err);
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

/**
 * get user details after login
 */
export const getUserDetails = userId => dispatch => {
  //console.log('user details request....');
  dispatch({
    type: types.GET_USER_DETAILS_REQUEST,
  });
  axios
    .get(`${base_url}/user/${userId}`)
    .then(res => {
      //console.log(res);
      AsyncStorage.setItem('userDetails', JSON.stringify(res.data));
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
