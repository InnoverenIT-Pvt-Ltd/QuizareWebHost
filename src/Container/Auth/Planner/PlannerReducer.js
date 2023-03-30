import * as types from './PlannerActionTypes'
import dayjs from "dayjs";


const initialState = {
    viewType: "dashboard",

    plannerStartDate: '',
    plannerEndDate: '',
    plannerStartTime: '',
    plannerEndTime: '',
    chooserModal: false,

    fetchingCandidateProject:false,
    fetchingCandidateProjectError:false,
    candidateProject:[],

    addingPlannerHour:false,
    addingPlannerHourError:false,

    fetchingDatewiseReport: false,
    fetchingDatewiseReportError: false,
    showDatelist: [],
//     viewEditModal: false,
//     selectedEvent: {},
//     openedFormModal: 'event',

//     fetchingPermissionsList: false,
//     fetchingPermissionsListError: false,
//     permissionsDataList: [],

//     addingSharingPlanner: false,
//   addingSharingPlannerError: false,
isCustomSelected: false,
startDate: dayjs().toISOString(),
endDate: dayjs().toISOString(),

dateRangeList: [

  // {
  //   id: 8,
  //   type: "All",
  //   value: "All",
  //   starter: true,
  //   isSelected: true,
  //   startDate: dayjs()
  //     .toISOString(),
  //   endDate: dayjs().toISOString(),
  // },
  {
    id: 1,
    type: "Today",
    value: "Today",
    starter: true,
    isSelected: true,
    startDate: dayjs()
      // .subtract(1, "days")
      .toISOString(),
    endDate: dayjs().toISOString(),
  },
  // {
  //   id: 2,
  //   type: "Yesterday",
  //   value: "Yesterday",
  //   starter: false,
  //   isSelected: false,
  //   endDate: dayjs()
  //     .subtract(1, "days")

  //     .toISOString(),
  //   startDate: dayjs().toISOString(),
  // },
  {
    id: 3,
    type: "Last7days",
    value: "Last 7 days",
    starter: false,
    isSelected: false,
    endDate: dayjs()
    .subtract(7, "days")

    .toISOString(),
  startDate: dayjs().toISOString(),
    // startDate: dayjs()
    //   .subtract(7, "days")

    //   .toISOString(),
    // endDate: dayjs().toISOString(),
  },

  {
    id: 4,
    type: "Last30days",
    value: "Last 30 days",
    starter: false,
    isSelected: false,
    endDate: dayjs()
    .subtract(30, "days")

    .toISOString(),
  startDate: dayjs().toISOString(),
    // startDate: dayjs()
    //   .subtract(30, "days")

    //   .toISOString(),
    // endDate: dayjs().toISOString(),
  },
  {
    id: 5,
    type: "Thismonth",
    value: "This month",
    starter: false,
    isSelected: false,
    endDate: dayjs()
    .startOf("week").toISOString(),
  startDate: dayjs().toISOString(),
    
  },
  {
    id: 6,
    type: "Lastmonth",
    value: "Last month",
    starter: false,
    isSelected: false,
    startDate: dayjs().startOf("month").toISOString(),
    endDate: dayjs().toISOString(),
  },
  // {
  //   id: 8,
  //   type: "DateRange",
  //   value: "Date Range",
  //   starter: false,
  //   isSelected: false,
  //   startDate: dayjs().startOf("year").toISOString,
  //   endDate: dayjs().endOf("year").toISOString(),
  // },
]
}
export const plannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PLANNER_VIEW_TYPE:
            return { ...state, viewType: action.payload };

        case types.SET_PLANNER_DATE:
            const { startDate, endDate, startTime, endTime } = action.payload;
            return { ...state, plannerStartDate: startDate, plannerEndDate: endDate, plannerStartTime: startTime, plannerEndTime: endTime };
        // case types.HANDLE_EVENT_MODAL:
        //     return { ...state, addEventModal: action.payload };
        // case types.HANDLE_VIEW_EDIT_MODAL:
        //     return { ...state, viewEditModal: action.payload.visible, selectedEvent: action.payload.event };
        // case types.SET_DATE_AND_TIME:
        //     return { ...state };
        // case types.SET_FORM_MODAL_TYPE:
        //     return { ...state, chooserModal: false };
        case types.HANDLE_CHOOSER_MODAL:
            return { ...state, chooserModal: action.payload };

    

//     case types.GET_PERMISSIONS_LIST_REQUEST:
//     return { ...state, fetchingPermissionsList: true };
//   case types.GET_PERMISSIONS_LIST_SUCCESS:
//     return {
//       ...state,
//       fetchingPermissionsList: false,
//       permissionsDataList: action.payload,
//     };
//   case types.GET_PERMISSIONS_LIST_FAILURE:
//     return {
//       ...state,
//       fetchingPermissionsList: false,
//       fetchingPermissionsListError: false,
//     };

    case types.GET_CANDIDATE_PROJECT_REQUEST:
    return { ...state, fetchingCandidateProject: true };
  case types.GET_CANDIDATE_PROJECT_SUCCESS:
    return {
      ...state,
      fetchingCandidateProject: false,
      candidateProject: action.payload,
    };
  case types.GET_CANDIDATE_PROJECT_FAILURE:
    return {
      ...state,
      fetchingCandidateProject: false,
      fetchingCandidateProjectError: false,
    };

    case types.SET_TIME_INTERVAL_REPORT:
      return {
        ...state,
        isCustomSelected: true,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };


    case types.CHANGE_SELECTED_TIME_INTERVAL_REPORT:
      return {
        ...state,
        dateRangeList: newDateRange(state.dateRangeList, action.payload),
        isCustomSelected: false,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        type: action.payload.type
      };


    
    case types.ADD_PLANNER_HOUR_REQUEST:
        return { ...state, addingPlannerHour: true };
      case types.ADD_PLANNER_HOUR_SUCCESS:
        return {
          ...state,
          addingPlannerHour: false,
          // addOpportunityModal: false,
          // opportunityByUserId:[action.payload,...state.opportunityByUserId]
          // clearbit: null,
        };
      case types.ADD_PLANNER_HOUR_FAILURE:
        return {
          ...state,
          addingPlannerHour: false,
          addingPlannerHourError: true,
          // addOpportunityModal: false,
        };

//     case types.SHARE_PLANNER_PERMISSION_REQUEST:
//         return { ...state, addingSharingPlanner: true };
    
//       case types.SHARE_PLANNER_PERMISSION_SUCCESS:
//         return { ...state, addingSharingPlanner: false, sharingPlanner: action.payload };
    
//       case types.SHARE_PLANNER_PERMISSION_FAILURE:
//         return {
//           ...state,
//           addingSharingPlanner: false,
//           addingSharingPlannerError: true,
//         };


case types.GET_DATE_WISE_REPORT_REQUEST:
  return { ...state, fetchingDatewiseReport: true };
case types.GET_DATE_WISE_REPORT_SUCCESS:
  return {
    ...state,
    fetchingDatewiseReport: false,
    fetchingDatewiseReportError: false,
    showDatelist: action.payload,
  };
case types.GET_DATE_WISE_REPORT_FAILURE:
  return {
    ...state,
    fetchingDatewiseReport: false,
    fetchingDatewiseReportError: true,
    selectedReportType: "dashboard"
  };
    
    default:
    return state;
}
};


const newDateRange = (dateRange, newDate) =>
  dateRange.map((range) => {
    console.log(newDate);
    if (range.id === newDate.id) {
      return { ...range, isSelected: true };
    } else {
      return { ...range, isSelected: false };
    }
  });