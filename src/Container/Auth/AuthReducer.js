import * as types from '../Auth/AuthTypes';

const initialState = {
    logging: false,
    loginError: false,

    facebooklogging: false,
    facebookloginError: false,

    processSpareModal:false,

    fetchingLibraySearchData: false,
    fetchingLibraySearchDataError: false,
    librarySerachedData:[],

    processShareModal:false,

    googlelogging: false,
    googleloginError: false,

    fetchingUserDetails: false,
    fetchingUserDetailsError: false,
    userDetails: JSON.parse(sessionStorage.getItem("userDetails")) || {},

    signingUpByUser: false,
    signingUpByUserError: false,

    changingPassword: false,
    changingPasswordError: false,

    sendingOtpForValidation: false,
    sendingOtpForValidationError: false,

    updatingPasswordOfUser: false,
    updatingPasswordOfUserError: false,

    validatingOtp: false,
    validatingOtpError: false
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
            return {
                ...state, signingUpByUser: false,
                signingUpByUserError: true
            };

        case types.CHANGE_PASSWORD_REQUEST:
            return { ...state, changingPassword: true };
        case types.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                changingPassword: false
            };
        case types.CHANGE_PASSWORD_FAILURE:
            return {
                ...state,
                changingPassword: false,
                changingPasswordError: true
            };

        case types.SEND_OTP_FOR_VALIDATION_REQUEST:
            return { ...state, sendingOtpForValidation: true };
        case types.SEND_OTP_FOR_VALIDATION_SUCCESS:
            return {
                ...state,
                sendingOtpForValidation: false
            };
        case types.SEND_OTP_FOR_VALIDATION_FAILURE:
            return {
                ...state,
                sendingOtpForValidation: false,
                sendingOtpForValidationError: true
            };

        case types.UPDATE_PASSWORD_REQUEST:
            return { ...state, updatingPasswordOfUser: true };
        case types.UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                updatingPasswordOfUser: false
            };
        case types.UPDATE_PASSWORD_FAILURE:
            return {
                ...state,
                updatingPasswordOfUser: false,
                updatingPasswordOfUserError: true
            };

        case types.VALIDATE_OTP_REQUEST:
            return { ...state, validatingOtp: true };
        case types.VALIDATE_OTP_SUCCESS:
            return {
                ...state,
                validatingOtp: false
            };
        case types.VALIDATE_OTP_FAILURE:
            return {
                ...state,
                validatingOtp: false,
                validatingOtpError: true
            };

            case types.HANDLE_SPARE_PROCESS:
                return { ...state, processSpareModal: action.payload };

                case types.HANDLE_SHARE_PROCESS:
                    return { ...state, processShareModal: action.payload };

                    case types.GET_LIBRAY_SEARCH_REQUEST:
                              return { ...state, fetchingLibraySearchData: true };
                            case types.GET_LIBRAY_SEARCH_SUCCESS:
                              return {
                                ...state,
                                fetchingLibraySearchData: false,
                                 librarySerachedData: action.payload,
                              };
                            case types.GET_LIBRAY_SEARCH_FAILURE:
                              return { ...state, fetchingLibraySearchDataError: true };
                        

                              case types.HANDLE_CLAER_REDUCER_DATA_LIBRARY:
                                return { ...state, 
                                    librarySerachedData: [],  
                                };


        default:
            return state;
    }
};