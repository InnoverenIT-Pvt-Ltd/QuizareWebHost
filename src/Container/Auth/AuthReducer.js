import * as types from '../Auth/AuthTypes';

const initialState = {
    logging: false,
    loginError: false,

    fetchingUserDetails: false,
    fetchingUserDetailsError: false,
    userDetails: {},
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

        default:
            return state;
    }
};