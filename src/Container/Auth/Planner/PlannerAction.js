import * as types from "./PlannerActionTypes";
import axios from "axios";
import moment from "moment";
import { base_url } from "../../../Config/Auth";


export const setPlannerViewType = (viewType) => (dispatch) =>
  dispatch({ type: types.SET_PLANNER_VIEW_TYPE, payload: viewType });

// /**
//  * set planner startDate and endDate on drag of calendar
//  */
export const setPlannerDate = (date) => (dispatch) => {
  const formattedDate = {
    startDate: moment(date.start, "YYYY-MM-DD"),
    endDate: moment(date.end, "YYYY-MM-DD"),
    startTime: moment(date.start, "HH:mm:ss"),
    endTime: moment(date.end, "HH:mm:ss"),
  };
  console.log("*******)()()()(", formattedDate);
  dispatch({
    type: types.SET_PLANNER_DATE,
    payload: formattedDate,
  });
};


export const setTimeRangeReport = (startDate, endDate) => (dispatch) => {
  dispatch({
    type: types.SET_TIME_INTERVAL_REPORT,
    payload: {
      startDate: moment(startDate).toISOString(),
      endDate: moment(endDate).toISOString(),
    },
  });
};


export const setSelectedTimeIntervalReport = (selectedTime) => (dispatch) => {
  console.log(selectedTime);
  dispatch({
    type: types.CHANGE_SELECTED_TIME_INTERVAL_REPORT,
    payload: selectedTime,
  });
};

// /**
//  * set startDate/endDate and startTime/endTime
//  */
// export const setDateTime = (dateTime) => (dispatch) => {
//   dispatch({
//     type: types.SET_DATE_AND_TIME,
//     payload: dateTime,
//   });
// };
/**
 *handle which of one (call, event, task ) form modal to show on calendar drag
 */
export const handleChooserModal = (modalForm) => (dispatch) => {
  dispatch({
    type: types.HANDLE_CHOOSER_MODAL,
    payload: modalForm,
  });
};
/**
 *handle the modal open close when a calender event is selected
 */
// export const handleViewEditModal = (modalProps) => (dispatch) => {
//   dispatch({
//     type: types.HANDLE_VIEW_EDIT_MODAL,
//     payload: modalProps,
//   });
// };
// /**
//  *show modal to choose which modal to open(call, event , task)
//  */
// export const setFormModalType = (type) => (dispatch) => {
//   dispatch({
//     type: types.SET_FORM_MODAL_TYPE,
//     payload: type,
//   });
// };

// // export const getsharePlannerUsers = (cb) => (dispatch, getState) => {
// //   const { employeeId } = getState("auth").auth.employeeDetails;
// //   dispatch({
// //     type: types.GET_PLANNER_USERS_REQUEST,
// //   });

// //   axios
// //     .get(`${base_url}/partner/ShareUsers`, {
// //       headers: {
// //         Authorization: "Bearer " + sessionStorage.getItem("token") || "",
// //       },
// //     })
// //     .then((res) => {
// //       console.log(res);
// //       dispatch({
// //         type: types.GET_PLANNER_USERS_SUCCESS,
// //         payload: res.data,
// //       });
// //       cb && cb("success");
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       dispatch({
// //         type: types.GET_PLANNER_USERS_FAILURE,
// //         payload: err,
// //       });
// //       cb && cb("failure");
// //     });
// // };

// export const getPlannerPermissionsList = () => (dispath) => {
//   dispath({ type: types.GET_PERMISSIONS_LIST_REQUEST });
//   axios
//     .get(`${base_url}/permission/type?type=${"planner"}`, {
//       headers: {
//         Authorization: "Bearer " + sessionStorage.getItem("token") || "",
//       },
//     })
//     .then((res) => {
//       dispath({
//         type: types.GET_PERMISSIONS_LIST_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispath({
//         type: types.GET_PERMISSIONS_LIST_FAILURE,
//         payload: err,
//       });
//     });
// };

// export const sharePlannerPermission = (data, userId) => (
//   dispatch,
//   getState
// ) => {
//   // const { userId } = getState("auth").auth.userDetails;
//   dispatch({
//     type: types.SHARE_PLANNER_PERMISSION_REQUEST,
//   });

//   axios
//     .post(`${base_url}/permission/details`, data, {
//       headers: {
//         Authorization: "Bearer " + sessionStorage.getItem("token") || "",
//       },
//     })
//     .then((res) => {
//       // console.log(res);
//       // dispatch(getOpportunityListByUserId(userId));
//       // dispatch(getRecords(userId));
//       dispatch({
//         type: types.SHARE_PLANNER_PERMISSION_SUCCESS,
//         payload: res.data,
//       });
//       //  cb && cb("success");
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch({
//         type: types.SHARE_PLANNER_PERMISSION_FAILURE,
//         payload: err,
//       });
//       //  cb && cb("failure");
//     });
// };


export const getCandidateProject = (candidateId) => (dispatch) => {
  dispatch({
    type: types.GET_CANDIDATE_PROJECT_REQUEST,
  });
  axios
  .get(`${base_url}/recriutment/web/project-name/${candidateId}?url=selectiontowork.com`, {
    // headers: {
    //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
    // },
  })
    
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_CANDIDATE_PROJECT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_CANDIDATE_PROJECT_FAILURE,
        payload: err,
      });
    });
};


export const addHour = (opportunity, cb) => (dispatch, getState) => {
  const userId = getState().auth.userDetails.userId;
  dispatch({
    type: types.ADD_PLANNER_HOUR_REQUEST,
  });
  axios
    .post(`${base_url}/hour/save/website?url=selectiontowork.com`, opportunity, {
      // headers: {
      //   Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      // },
    })
    .then((res) => {
      console.log(res);

      dispatch({
        type: types.ADD_PLANNER_HOUR_SUCCESS,
        payload: res.data,
      });
      cb();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_PLANNER_HOUR_FAILURE,
        payload: err,
      });
    });
};




export const getDateWiseList = (candidateId,endDate,startDate,) => (dispatch) => {
  dispatch({
    type: types.GET_DATE_WISE_REPORT_REQUEST,
  });
  axios
    .get(`${base_url}/hour/user/table/website/${candidateId}?endDate=${endDate}&startDate=${startDate}&url=selectiontowork.com`, {
    //  headers: {
    //     Authorization: "Bearer " + sessionStorage.getItem("token") || "",
    //   },
    })
    .then((res) => {
      dispatch({
        type: types.GET_DATE_WISE_REPORT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_DATE_WISE_REPORT_FAILURE,
      });
    });
};
