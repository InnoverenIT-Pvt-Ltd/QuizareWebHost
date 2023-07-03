import * as types from '../Auth/AuthTypes';

const initialState = {
    logging: false,
    loginError: false,

    facebooklogging: false,
    facebookloginError: false,

    googlelogging: false,
    googleloginError: false,

    fetchingUserDetails: false,
    fetchingUserDetailsError: false,
    userDetails: JSON.parse(sessionStorage.getItem("userDetails")) || {},

    signingUpByUser: false,
    signingUpByUserError: false
    // userDetails: JSON.parse(sessionStorage.getItem("userDetails")) || {},  
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        //login request
        case types.LOGIN_REQUEST:
            return { ...state, logging: true };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                logging: false,
            };
        case types.LOGIN_FAILURE:
            return { ...state, logging: false, loginError: true };

        //user details
        case types.GET_USER_DETAILS_REQUEST:
            return { ...state, fetchingUserDetails: true };
        case types.GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                fetchingUserDetails: false,
                userDetails:
                    action.payload || JSON.parse(sessionStorage.getItem("userDetails")),
            };
        case types.GET_USER_DETAILS_FAILURE:
            return {
                ...state,
                fetchingUserDetails: false,
                fetchingUserDetailsError: true,
            };

        case types.FACEBOOK_LOGIN_REQUEST:
            return { ...state, facebooklogging: true };
        case types.FACEBOOK_LOGIN_SUCCESS:
            return {
                ...state,
                facebooklogging: false
            };
        case types.FACEBOOK_LOGIN_FAILURE:
            return {
                ...state,
                facebooklogging: false,
                facebookloginError: true
            };

        case types.GOOGLE_LOGIN_REQUEST:
            return { ...state, googlelogging: true };
        case types.GOOGLE_LOGIN_SUCCESS:
            return {
                ...state,
                googlelogging: false
            };
        case types.GOOGLE_LOGIN_FAILURE:
            return {
                ...state,
                googlelogging: false,
                googleloginError: true
            };

        case types.SIGN_UP_BY_USER_REQUEST:
            return { ...state, signingUpByUser: true };
        case types.SIGN_UP_BY_USER_SUCCESS:
            return {
                ...state,
                signingUpByUser: false,
            };
        case types.SIGN_UP_BY_USER_FAILURE:
            return { ...state, signingUpByUser: false, signingUpByUserError: true };
        default:
            return state;
    }
};