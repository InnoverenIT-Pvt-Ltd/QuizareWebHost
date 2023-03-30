import * as types from './CoursesActionTypes'
import dayjs from "dayjs";




const initialState = {
    viewType: "card",
}


export const coursesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.SET_COURSES_VIEW_TYPE:
            return { ...state, viewType: action.payload };

        default:
    return state;

    }
};