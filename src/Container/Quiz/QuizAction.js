import * as types from './QuizActionTypes';
import axios from 'axios';
import { base_url,base_url2 } from '../../Config/Auth';
import store from '../../Store';
import { createBrowserHistory } from "history";
import { message } from "antd";

/**
 * request for adding a quiz name
 */
const history = createBrowserHistory();
export const handleQuizHostModal = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_QUIZ_HOST_MODAL,
    payload: modalProps,
  });
};

export const addQuizName = (quiz, cb) => dispatch => {
  console.log('name', history);
  // console.log('name',quiz );
  dispatch({
    type: types.ADD_QUIZ_NAME_REQUEST,
  });

  axios
    .post(`${base_url}/quiz/save`, quiz)
    .then(res => {
      //console.log(res.data);   

      dispatch(getQuizName(res.data.quizId))
      //  console.log("hi",history);  
      //  history.push("/addquiz");
      //  window.location.reload()
      dispatch({
        type: types.ADD_QUIZ_NAME_SUCCESS,
        payload: res.data,
      });
      cb && cb("success");
      // history.push("/addquiz")
    })
    .catch(err => {
      // console.log(err);
      dispatch({
        type: types.ADD_QUIZ_NAME_FAILURE,
        payload: err,
      });
      cb && cb("failuer");
      message.error("Quiz name already exists!")
    });
};

/**
 * get quiz name
 */
export const getQuizName = quizId => dispatch => {
  dispatch({
    type: types.GET_QUIZ_NAME_REQUEST,
  });
  axios
    .get(`${base_url}/quiz/${quizId}`)
    .then(res => {
      console.log(':::::::::::::::::::::>getQuizName', res.data);
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
export const addQuestion = (quiz, quizId, cb) => dispatch => {

  console.log('inside add question', quiz);
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
      dispatch(getFinalizeQuiz(quizId));
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
export const deleteQuestion = (id, cb) => dispatch => {
  console.log("inside delete question", id)
  dispatch({
    type: types.DELETE_QUESTION_BY_QUESTION_ID_REQUEST,
  });
  axios
    .delete(`${base_url}/question/${id}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      dispatch({
        type: types.DELETE_QUESTION_BY_QUESTION_ID_SUCCESS,
        payload: id,
      });
      cb && cb("success");
      message.success("Question has deleted successfully !!")
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.DELETE_QUESTION_BY_QUESTION_ID_FAILURE,
        payload: err,
      });
      cb && cb("error");
    });
};

/**
 * get the category of questions
 */
export const getCategory = () => dispatch => {
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
export const getFinalizeQuiz = quizId => dispatch => {
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
      console.log(err.response);

      dispatch({
        type: types.GET_FINALIZE_QUIZ_FAILURE,
        payload: err,
      });
      message.error("Please add atleast 1 question!")
    });
};
/**
 * put the quiz url
 */
export const hostFinalizeQuizUrl = quizId => dispatch => {
  dispatch({
    type: types.GET_FINALIZE_QUIZ_URL_REQUEST,
  });
  axios
    .put(`${base_url}/quiz/updatehost/${quizId}`,)
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
export const deleteHostQuiz = (quizId, cb) => dispatch => {
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
      // dispatch(getFinalizeQuiz(quizId));
      dispatch({
        type: types.DELETE_QUIZ_FROM_HOST_SUCCESS,
        payload: quizId,
      });
      console.log(res.data);
      message.success(res.data);
      cb && cb("success");
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.DELETE_QUIZ_FROM_HOST_FAILURE,
        payload: err,
      });
      cb && cb("failuer");
    });
};
//Host quiz
export const hostQuiz = (data, quizId) => dispatch => {
  //console.log('inside update question');
  dispatch({
    type: types.HOST_QUIZ_REQUEST,
  });
  axios
    .put(`${base_url}/quiz/updatehost/${quizId}`, data)
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
export const getPlayersDetails = quizId => dispatch => {
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

export const getOngoingQuiz = (userId) => dispatch => {
  dispatch({
    type: types.GET_ONGOING_QUIZ_REQUEST,
  });
  axios
    .get(`${base_url}/userDetails/onGoingQuizes/${userId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.GET_ONGOING_QUIZ_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      //console.log(err.response);
      dispatch({
        type: types.GET_ONGOING_QUIZ_FAILURE,
        payload: err,
      });
    });
};


/**
 * get the quiz name list in  quiz
 */
export const getQuizNameList = userId => dispatch => {
  dispatch({
    type: types.GET_QUIZ_NAME_LIST_GAME_REQUEST,
  });
  axios
    .get(`${base_url}/userDetails/getQuizes/${userId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: types.GET_QUIZ_NAME_LIST_GAME_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      //console.log(err.response);
      dispatch({
        type: types.GET_QUIZ_NAME_LIST_GAME_FAILURE,
        payload: err,
      });
    });
};
export const closeQuiz = (quizId, quizHostId, cb) => dispatch => {
  //console.log('inside update question');
  dispatch({
    type: types.CLOSE_QUIZ_REQUEST,
  });
  axios
    .put(`${base_url}/quiz/updatehost/close/quiz/${quizId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      console.log(res.data);
      dispatch(getOngoingQuiz(quizHostId))
      dispatch({
        type: types.CLOSE_QUIZ_SUCCESS,
        payload: quizId,
      });
      cb && cb('success');
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.CLOSE_QUIZ_FAILURE,
        payload: err,
      });
      cb && cb("failuer");
    });
};

//UPDATE QUIZ NAME DURATION
export const updateQuizNameByQuizId = (data, quizId, cb) => dispatch => {
  console.log('inside update question', data);
  dispatch({
    type: types.UPDATE_QUIZ_NAME_REQUEST,
  });
  axios
    .put(`${base_url}/quiz/update/${quizId}`, data, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      console.log(res.data);
      dispatch(getQuizNameList(res.data.quizHostId));
      dispatch({
        type: types.UPDATE_QUIZ_NAME_SUCCESS,
        payload: res.data,
      });
      cb && cb('success');
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.UPDATE_QUIZ_NAME_FAILURE,
        payload: err,
      });
      // cb && cb();
    });
};
// get the quiz name list in  quiz

export const getQuizNameDetails = quizId => dispatch => {
  dispatch({
    type: types.GET_QUIZ_NAME_DETAILS_GAME_REQUEST,
  });
  axios
    .get(`${base_url}/userDetails/getOnGoingQuizDetails/${quizId}`)
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: types.GET_QUIZ_NAME_DETAILS_GAME_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      //console.log(err.response);
      dispatch({
        type: types.GET_QUIZ_NAME_DETAILS_GAME_FAILURE,
        payload: err,
      });
    });
};
//clear quiz details data
export const clearQuizNameDetails = () => dispatch => {
  console.log("clear")
  dispatch({
    type: types.CLEAR_QUIZ_NAME_DETAILS_GAME,
  });
};

/**
 * get questions list in  quiz
 */
export const getQuestionList = quizId => dispatch => {
  dispatch({
    type: types.GET_QUESTIONS_LIST_IN_QUIZ_REQUEST,
  });
  axios
    .get(`${base_url}/userDetails/questions/${quizId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      console.log('getQuestion', res.data);
      dispatch({
        type: types.GET_QUESTIONS_LIST_IN_QUIZ_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      //console.log(err.response);
      dispatch({
        type: types.GET_QUESTIONS_LIST_IN_QUIZ_FAILURE,
        payload: err,
      });
    });
};
//UPDATE QUESTIONS IN QUIZ
export const updateQuestionsInQuiz = (data, questionId, cb) => dispatch => {
  // console.log('inside update question',data);
  dispatch({
    type: types.UPDATE_QUESTIONS_IN_QUIZ_REQUEST,
  });
  axios
    .put(`${base_url}/question/updateQuestion/${questionId}`, data, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      message.success("Question has updated successfully !!")
      dispatch(getQuestionList(res.data.quizId));
      dispatch({
        type: types.UPDATE_QUESTIONS_IN_QUIZ_SUCCESS,
        payload: res.data,
      });
      cb && cb('success');

    })
    .catch(err => {
      //console.log(err);
      dispatch({
        type: types.UPDATE_QUESTIONS_IN_QUIZ_FAILURE,
        payload: err,
      });
      // cb && cb();
    });
};
// get feedback  quiz

export const getFeedback = quizId => dispatch => {
  dispatch({
    type: types.GET_QUIZ_FEEDBACK_REQUEST,
  });
  axios
    .get(`${base_url}/userDetails/Playerfeedback/${quizId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      console.log(res.data, "feedback");
      dispatch({
        type: types.GET_QUIZ_FEEDBACK_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      //console.log(err.response);
      dispatch({
        type: types.GET_QUIZ_FEEDBACK_FAILURE,
        payload: err,
      });
    });
};

export const getBugsList = quizHostId => dispatch => {
  dispatch({
    type: types.GET_BUGS_REQUEST,
  });
  axios
    .get(`${base_url}/bugs/getBugs/${quizHostId}`, {

    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.GET_BUGS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      //console.log(err.response);
      dispatch({
        type: types.GET_BUGS_FAILURE,
        payload: err,
      });
    });
};

export const addBugs = (data) => dispatch => {
  console.log('name', data);
  dispatch({
    type: types.ADD_BUGS_REQUEST,
  });

  axios
    .post(`${base_url}/bugs/saveBug`, data)
    .then(res => {
      console.log(res.data);
      dispatch(getBugsList(res.data.quizHostId))

      dispatch({
        type: types.ADD_BUGS_SUCCESS,
        payload: res.data,
      });
      //  cb && cb("success");        
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.ADD_BUGS_FAILURE,
        payload: err,
      });
      // cb && cb("failuer");
      //  message.error("Quiz name already exists!")
    });
};


export const getLibraryQuiz = (userId) => dispatch => {
  dispatch({
    type: types.GET_LIBRARY_QUIZ_REQUEST,
  });
  axios
    .get(`${base_url}/userDetails/quiz/${userId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.GET_LIBRARY_QUIZ_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err.response);

      dispatch({
        type: types.GET_LIBRARY_QUIZ_FAILURE,
        payload: err,
      });
      message.error("Please add atleast 1 question!")
    });
};


export const deleteLibraryQuiz = (quizId, cb) => dispatch => {
  dispatch({
    type: types.DELETE_LIBRARY_FROM_HOST_REQUEST,
  });
  axios
    .delete(`${base_url}/quiz/${quizId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      console.log(res.data);
      // dispatch(getFinalizeQuiz(quizId));
      dispatch({
        type: types.DELETE_LIBRARY_FROM_HOST_SUCCESS,
        payload: quizId,
      });
      console.log(res.data);
      message.success(res.data);
      cb && cb("success");
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.DELETE_LIBRARY_FROM_HOST_FAILURE,
        payload: err,
      });
      cb && cb("failuer");
    });
};



export const closeLibraryQuiz = (quizId,) => dispatch => {
  //console.log('inside update question');
  dispatch({
    type: types.CLOSE_LIBRARY_QUIZ_REQUEST,
  });
  axios
    .put(`${base_url}/quiz/updatehost/close/quiz/${quizId}`, {
      headers: {
        Authorization: 'Bearer ' + store.getState().auth.token || '',
      },
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.CLOSE_LIBRARY_QUIZ_SUCCESS,
        payload: res.data,
      });
      // cb && cb('success');
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.CLOSE_LIBRARY_QUIZ_FAILURE,
        payload: err,
      });
      // cb && cb("failuer");
    });
};


export const handleBackToQuiz = (modalProps) => (dispatch) => {
  dispatch({
    type: types.BACK_TO_QUIZ_PAGE,
    payload: modalProps,
  });
};

export const addUserQuery = (query) => dispatch => {
  dispatch({
    type: types.ADD_USER_QUERY_REQUEST,
  });
axios
    .post(`${base_url2}/user_query/`, 
    query,)
    .then(res => {    
      dispatch({
        type: types.ADD_USER_QUERY_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: types.ADD_USER_QUERY_FAILURE,
        payload: err,
      });
    });
};

export const ClearReducerDataOfLoadProgress = () => (dispatch) => {
  dispatch({
    type: types.HANDLE_CLAER_REDUCER_DATA_LOAD_PROGRESS,
  });
};