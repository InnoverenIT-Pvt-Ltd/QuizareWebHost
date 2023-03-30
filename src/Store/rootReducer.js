import { combineReducers } from "redux";

import { languageReducer } from "../../src/Language/LanguageReducer";
import {authReducer} from "../Container/Auth/AuthReducer";
import {quizReducer} from "../Container/Quiz/QuizReducer"
// import { LOGOUT } from "../Containers/Auth/AuthTypes";
/**
 *  All of application reducers import goes here...
 */
import { plannerReducer } from "../Container/Auth/Planner/PlannerReducer";

import {jobReducer} from "../Jobsite/JobReducer";
import {coursesReducer} from "../Container/Courses/CoursesReducer";
const appReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
  job:jobReducer,
  planner: plannerReducer,
  language: languageReducer,
  courses:coursesReducer
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    sessionStorage.clear();
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
