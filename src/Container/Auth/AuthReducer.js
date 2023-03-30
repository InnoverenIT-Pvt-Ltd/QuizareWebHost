import * as types from "./AuthTypes";
const initialState = {
    env: "server",
    registering: false,
    registeringError: false,
    registeringSuccess: false,
    user: {},
    fetchingUserDetails: false,
    fetchingUserDetailsError: null,
    updatingUserDetails: false,
    updatingUserDetailsError: null,
    userDetails: JSON.parse(sessionStorage.getItem("userDetails")) || {},
    fetchingOrganizationDetails: false,
    fetchingOrganizationDetailsError: null,
    organizationDetails: {},
    updatingOrganizationDetails: false,
    updatingOrganizationDetailsError: null,



    fetchingHourListByUserId:false,
    fetchingHourListByUserId:false,
    hourListByUserId:[],


    fetchingUserDetails: false,
  fetchingUserDetailsError: null,

  
    generatingOtpByEmail: false,
    generatingOtpByEmailError: false,
    otpMsg: {},
  
    validatingOtpByEmail: false,
    validatingOtpByEmailError: false,
    validateMsg: {},
  
  };



  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
  case types.VALIDATE_OTP_BY_EMAIL_REQUEST:
      return { ...state, validatingOtpByEmail: true };
    case types.VALIDATE_OTP_BY_EMAIL_SUCCESS:
      return {
        ...state,
        validatingOtpByEmail: false,
        validateMsg: action.payload
      };
    case types.VALIDATE_OTP_BY_EMAIL_FAILURE:
      return {
        ...state,
        validatingOtpByEmail: false,
        validatingOtpByEmailError: true
      };

      case types.GENERATE_OTP_BY_EMAIL_REQUEST:
        return { ...state, generatingOtpByEmail: true };
      case types.GENERATE_OTP_BY_EMAIL_SUCCESS:
        return {
          ...state,
          generatingOtpByEmail: false,
          otpMsg: action.payload
        };
      case types.GENERATE_OTP_BY_EMAIL_FAILURE:
        return {
          ...state,
          generatingOtpByEmail: false,
          generatingOtpByEmailError: true
        };

        case types.LOGIN_REQUEST:
      return { ...state, logging: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        logging: false,
        token: action.payload.token || sessionStorage.getItem("token"),
      };
    case types.LOGIN_FAILURE:
      return { ...state, logging: false, loginError: true };


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



        case types.GET_HOUR_LIST_BY_USER_ID_REQUEST:
          return { ...state, fetchingHourListByUserId: true };
        case types.GET_HOUR_LIST_BY_USER_ID_SUCCESS:
          return {
            ...state,
            fetchingHourListByUserId: false,
            hourListByUserId: action.payload,
          };
        case types.GET_HOUR_LIST_BY_USER_ID_FAILURE:
          return {
            ...state,
            fetchingHourListByUserId: false,
            fetchingHourListByUserIdError: true,
          };

      default:
        return state;
    }
    return state;
};
