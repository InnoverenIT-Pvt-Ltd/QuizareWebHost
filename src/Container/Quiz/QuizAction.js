import * as types from './QuizActionTypes';
import axios from 'axios';
import {base_url} from '../../Config/Auth';
import store from '../../Store';

/**
 * request for adding a quiz name
 */
 export const addQuizName = (quiz,cb,history) => dispatch => {
  
 // console.log('name',quiz );
  dispatch({
    type: types.ADD_QUIZ_NAME_REQUEST,
  });

  axios
    .post(`${base_url}/quiz/save`, quiz,)
    .then(res => {  
      //console.log(res.data);   
       dispatch(getQuizName(res.data.quizId))     

      dispatch({
        type: types.ADD_QUIZ_NAME_SUCCESS,
        payload: res.data,
      });
        cb && cb("success");
          history.push("/addquiz")
    })
    .catch(err => {      
     // console.log(err);
      dispatch({
        type: types.ADD_QUIZ_NAME_FAILURE,
        payload: err,
      });
       cb && cb("failuer");
      //  history.push("/question")
    });
};

/**
 * get quiz name
 */
 export const getQuizName = (quizId) => dispatch => {
  dispatch({
    type: types.GET_QUIZ_NAME_REQUEST,
  });
  axios
    .get(`${base_url}/quiz/${quizId}`,)
    .then(res => {
     // console.log(":::::::::::::::::::::>getQuizName",res.data);
      dispatch({
        type: types.GET_QUIZ_NAME_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
     // console.log(err.response);
      dispatch({
        type: types.GET_QUESTIONS_FAILURE,
        payload: err,
      });
    });
};

/**
 * get all the question
 */
export const getQuestionsByUserId = userId => dispatch => {
  dispatch({
    type: types.GET_QUESTIONS_REQUEST,
  });
  axios
    .get(`${base_url}/question/${userId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      //console.log(res);
      dispatch({
        type: types.GET_QUESTIONS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      //console.log(err.response);
      dispatch({
        type: types.GET_QUESTIONS_FAILURE,
        payload: err,
      });
    });
};

/**
 * request for adding a question
 */
export const addQuestion = (quiz,cb) => dispatch => {
  
  console.log('inside add question',quiz );
  dispatch({
    type: types.ADD_QUESTION_REQUEST,
  });

  axios
    .post(`${base_url}/question/save`, quiz, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
     // console.log(res);     

      dispatch({
        type: types.ADD_QUESTION_SUCCESS,
        payload: res.data,
      });
       cb && cb("success");
    })
    .catch(err => {
      //console.log(err);
      dispatch({
        type: types.ADD_QUESTION_FAILURE,
        payload: err,
      });
       cb && cb("failure");
    });
};

/**
 * request for updating a question
 */
export const updateQuestion = questionId => dispatch => {
  //console.log('inside update question');
  dispatch({
    type: types.UPDATE_QUESTION_REQUEST,
  });
  axios
    .put(`${base_url}/question/${questionId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      //console.log(res);
      // dispatch(
      //   linkContactsToOpportunity(opportunityId, { contactIds: [res.data] }, cb)
      // );
      // const startDate = moment()
      // .startOf("month")
      // .toISOString();
      // const endDate = moment()
      // .endOf("month")
      // .toISOString();
      // dispatch(getContactById(contactId));
      // dispatch(getLatestContacts(userId, startDate, endDate));
      // dispatch(getContactListByUserId(userId));

      dispatch({
        type: types.UPDATE_QUESTION_SUCCESS,
        payload: res.data,
      });
      // cb && cb();
    })
    .catch(err => {
      //console.log(err);
      dispatch({
        type: types.UPDATE_QUESTION_FAILURE,
        payload: err,
      });
      // cb && cb();
    });
};

/**
 * delete a question from table
 */
export const deleteQuestion = (questionId,userId) => dispatch => {
  dispatch({
    type: types.DELETE_QUESTION_BY_QUESTION_iD_REQUEST,
  });
  axios
    .delete(`${base_url}/question/${questionId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      //console.log(res);
      dispatch(getQuestionsByUserId(userId));
      dispatch({
        type: types.DELETE_QUESTION_BY_QUESTION_ID_SUCCESS,
        payload: questionId,
      });
    })
    .catch(err => {
      //console.log(err);
      dispatch({
        type: types.DELETE_QUESTION_BY_QUESTION_ID_FAILURE,
        payload: err,
      });
    });
};

/**
 * get the category of questions
 */
export const getCategory =() => dispatch => {
  dispatch({
    type: types.GET_CATEGORY_REQUEST,
  });
  axios
    .get(`${base_url}/category/getAllCategory`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      //console.log(res);
      dispatch({
        type: types.GET_CATEGORY_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      //console.log(err.response);
      dispatch({
        type: types.GET_CATEGORY_FAILURE,
        payload: err,
      });
    });
};

/**
 * request for adding a category
 */
export const addCategory = category => dispatch => {
  //console.log('inside add category');
  dispatch({
    type: types.ADD_CATEGORY_REQUEST,
  });

  axios
    .post(`${base_url}/category`, category, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      //console.log(res);

      dispatch({
        type: types.ADD_CATEGORY_SUCCESS,
        payload: res.data,
      });
      // cb && cb();
    })
    .catch(err => {
      //console.log(err);
      dispatch({
        type: types.ADD_CATEGORY_FAILURE,
        payload: err,
      });
      // cb && cb();
    });
};

/**
 * get the quiz 
 */
 export const getFinalizeQuiz =(quizId) => dispatch => {
  dispatch({
    type: types.GET_FINALIZE_QUIZ_REQUEST,
  });
  axios
    .get(`${base_url}/quiz/finalize/${quizId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.GET_FINALIZE_QUIZ_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      //console.log(err.response);
      dispatch({
        type: types.GET_FINALIZE_QUIZ_FAILURE,
        payload: err,
      });
    });
};
/**
 * put the quiz url
 */
 export const hostFinalizeQuizUrl =(quizId) => dispatch => {
  dispatch({
    type: types.GET_FINALIZE_QUIZ_URL_REQUEST,
  });
  axios
    .put(`${base_url}/quiz/updatehost/${quizId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.GET_FINALIZE_QUIZ_URL_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      //console.log(err.response);
      dispatch({
        type: types.GET_FINALIZE_QUIZ_URL_FAILURE,
        payload: err,
      });
    });
};
/**
 * delete a quiz from table
 */
 export const deleteHostQuiz = (quizId)=> dispatch => {
  dispatch({
    type: types.DELETE_QUIZ_FROM_HOST_REQUEST,
  });
  axios
    .delete(`${base_url}/quiz/${quizId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      console.log(res.data);
      dispatch(getFinalizeQuiz(quizId));
      dispatch({
        type: types.DELETE_QUIZ_FROM_HOST_SUCCESS,
        payload: quizId,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.DELETE_QUIZ_FROM_HOST_FAILURE,
        payload: err,
      });
    });
};
//Host quiz
export const hostQuiz = quizId => dispatch => {
  //console.log('inside update question');
  dispatch({
    type: types.HOST_QUIZ_REQUEST,
  });
  axios
    .put(`${base_url}/quiz/updatehost/${quizId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {    

      dispatch({
        type: types.HOST_QUIZ_SUCCESS,
        payload: res.data,
      });
      // cb && cb();
    })
    .catch(err => {
      //console.log(err);
      dispatch({
        type: types.HOST_QUIZ_FAILURE,
        payload: err,
      });
      // cb && cb();
    });
};
/**
 * get the players in  quiz 
 */
 export const getPlayersDetails =(quizId) => dispatch => {
  dispatch({
    type: types.GET_PLAYERS_DETAILS_GAME_REQUEST,
  });
  axios
    .get(`${base_url}/quiz/players/${quizId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.GET_PLAYERS_DETAILS_GAME_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      //console.log(err.response);
      dispatch({
        type: types.GET_PLAYERS_DETAILS_GAME_FAILURE,
        payload: err,
      });
    });
};