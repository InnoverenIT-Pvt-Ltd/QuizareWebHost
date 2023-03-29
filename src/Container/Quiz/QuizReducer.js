import * as types from './QuizActionTypes';

const initialState = {
  fetchingQuestions: false,
  fetchingQuestionsError: false,
  questionsByUserId: [],

  fetchingFinalizeQuiz: false,
  fetchingFinalizeQuizError: false,
  finalizeQuiz: {},

  fetchingFinalizeQuizUrl: false,
  fetchingFinalizeQuizUrlError: false,
  finalizeQuizUrl: {},

  fetchingPlayersDetails: false,
  fetchingPlayersDetailsError: false,
  playersDetails: [],

  fetchingQuizName: false,
  fetchingQuizNameError: false,
  showQuiz:{},

  addingQuizName: false,
  addingQuizNameError: false,

  addingQuestion: false,
  addingQuestionError: false,

  updateQuestionById: false,
  updateQuestionByIdError: false,

  hostQuizByQuizId:false,
  hostQuizByQuizIdError:false,

  deletingQuestion: false,
  deletingQuestionError: false,

  fetchingCategory: false,
  fetchingCategoryError: false,
  category: [],

  addingCategory: false, 
  addingCategoryError: false,

  deletingQuizHost: false,
  deletingQuizHostError: false,
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_QUESTIONS_REQUEST:
      return {...state, fetchingQuestions: true};
    case types.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        fetchingQuestions: false,
        questionsByUserId: action.payload,
      };
    case types.GET_QUESTIONS_FAILURE:
      return {
        ...state,
        fetchingQuestions: false,
        fetchingQuestionsError: true,
      };

    case types.ADD_QUESTION_REQUEST:
      return {...state, addingQuestion: true};
    case types.ADD_QUESTION_SUCCESS:
      return {...state, addingQuestion: false};
    case types.ADD_QUESTION_FAILURE:
      return {...state, addingQuestion: false, addingQuestionError: true};

    case types.UPDATE_QUESTION_REQUEST:
      return {...state, updateQuestionById: true};
    case types.UPDATE_QUESTION_SUCCESS:
      return {
        ...state,
        updateQuestionById: false,
        questionsByUserId: action.payload,
      };
    case types.UPDATE_QUESTION_FAILURE:
      return {
        ...state,
        updateQuestionById: false,
        updateQuestionByIdError: true,
      };

    case types.DELETE_QUESTION_BY_QUESTION_iD_REQUEST:
      return {...state, deletingQuestion: true};
    case types.DELETE_QUESTION_BY_QUESTION_ID_SUCCESS:
      return {
        ...state,
        deletingQuestion: false,
        questionsByUserId: state.questionsByUserId.filter(
          item => item.questionId !== action.payload,
        ),
      };
    case types.DELETE_QUESTION_BY_QUESTION_ID_FAILURE:
      return {
        ...state,
        deletingQuestion: false,
        deletingQuestionError: true,
      };

    case types.GET_CATEGORY_REQUEST:
      return {...state, fetchingCategory: true};
    case types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        fetchingCategory: false,
        category: action.payload,
      };
    case types.GET_CATEGORY_FAILURE:
      return {
        ...state,
        fetchingCategory: false,
        fetchingCategoryError: true,
      };

    case types.ADD_CATEGORY_REQUEST:
      return {...state, addingCategory: true};
    case types.ADD_CATEGORY_SUCCESS:
      return {...state, addingCategory: false};
    case types.ADD_CATEGORY_FAILURE:
      return {...state, addingCategory: false, addingCategoryError: true};

      case types.GET_QUIZ_NAME_REQUEST:
      return {...state, fetchingQuizName: true};
    case types.GET_QUIZ_NAME_SUCCESS:
      return {...state, fetchingQuizName: false,showQuiz: action.payload};


      // add quiz name
      case types.ADD_QUIZ_NAME_REQUEST:
      return {...state, addingQuizName: true};
    case types.ADD_QUIZ_NAME_SUCCESS:
      return {...state, addingQuizName: false};
    case types.ADD_QUIZ_NAME_FAILURE:
      return {...state, addingQuizName: false, addingQuizNameError: true};
//GET FINALIZED QUIZ
      case types.GET_FINALIZE_QUIZ_REQUEST:
      return {...state, fetchingFinalizeQuiz: true};
    case types.GET_FINALIZE_QUIZ_SUCCESS:
      return {
        ...state,
        fetchingFinalizeQuiz: false,
        finalizeQuiz: action.payload,
      };
    case types.GET_FINALIZE_QUIZ_FAILURE:
      return {
        ...state,
        fetchingFinalizeQuiz: false,
        fetchingFinalizeQuizError: true,
      };

      //GET FINALIZED QUIZ
      case types.GET_FINALIZE_QUIZ_URL_REQUEST:
      return {...state, fetchingFinalizeQuiz: true};
    case types.GET_FINALIZE_QUIZ_URL_SUCCESS:
      return {
        ...state,
        fetchingFinalizeQuizUrl: false,
        finalizeQuizUrl: action.payload,
      };
    case types.GET_FINALIZE_QUIZ_URL_FAILURE:
      return {
        ...state,
        fetchingFinalizeQuizUrl: false,
        fetchingFinalizeQuizUrlError: true,
      };

      //delete host quiz

      case types.DELETE_QUIZ_FROM_HOST_REQUEST:
        return {...state, deletingQuizHost: true};
      case types.DELETE_QUIZ_FROM_HOST_SUCCESS:
        return {
          ...state,
          deletingQuizHost: false,
          finalizeQuiz: state.finalizeQuiz.filter(
            item => item.quizId !== action.payload,
          ),
        };
      case types.DELETE_QUIZ_FROM_HOST_FAILURE:
        return {
          ...state,
          deletingQuizHost: false,
          deletingQuizHostError: true,
        };
        //host quiz
        case types.HOST_QUIZ_REQUEST:
      return {...state, hostQuizByQuizId: true};
    case types.HOST_QUIZ_SUCCESS:
      return {
        ...state,
        hostQuizByQuizId: false,
        finalizeQuiz: action.payload,
      };
    case types.HOST_QUIZ_FAILURE:
      return {
        ...state,
        hostQuizByQuizId: false,
        hostQuizByQuizIdError: true,
      };
//GET PLAYERS NAME
case types.GET_PLAYERS_DETAILS_GAME_REQUEST:
  return {...state, fetchingPlayersDetails: true};
case types.GET_PLAYERS_DETAILS_GAME_SUCCESS:
  return {
    ...state,
    fetchingPlayersDetails: false,
    playersDetails: action.payload,
  };
case types.GET_PLAYERS_DETAILS_GAME_FAILURE:
  return {
    ...state,
    fetchingPlayersDetails: false,
    fetchingPlayersDetailsError: true,
  };
    default:
      return state;
  }
};
