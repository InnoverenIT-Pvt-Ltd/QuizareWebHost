import * as types from "./CoursesActionTypes";
import axios from "axios";
import moment from "moment";
import { base_url } from "../../Config/Auth";



export const setCoursesViewType = (viewType) => (dispatch) =>
  dispatch({ type: types.SET_COURSES_VIEW_TYPE, payload: viewType });