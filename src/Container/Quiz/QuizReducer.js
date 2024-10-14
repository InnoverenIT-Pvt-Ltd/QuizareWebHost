import * as types from "./QuizActionTypes";

const initialState = {
  fetchingQuestions: false,
  fetchingQuestionsError: false,
  questionsByUserId: [],

  fetchingFinalizeQuiz: false,
  fetchingFinalizeQuizError: false,
  finalizeQuiz: {},

  updateProfileData: false,
  updateProfileDataError: false,

  fetchingUpgradeSuscrption: false,
  fetchingUpgradeSuscrptionError: false,
  suscrptionUpgradeData:[],
  
  fetchingSuscrption: false,
  fetchingSuscrptionError: false,
  suscrptionData:[],

  updatingSuscrption: false,
  updatingSuscrptionError: true,

  addingSuscrpitionModal:false,

  addiNVEStripeModal:false,

  addingQuizPaymentId: false, 
  addingQuizPaymentIdError: false,
  paymentQuizDetails:{},


  addingMakeStripePayment: false,
  addingMakeStripePaymentError: false,
  confirmedQuizPayment:{},

  fetchingOngoingQuiz: false,
  fetchingOngoingQuizError: false,
  ongoingQuiz: [],


  addingBugs: false,
  addingBugsError: false,

  fetchingFinalizeQuizUrl: false,
  fetchingFinalizeQuizUrlError: false,
  finalizeQuizUrl: {},

  fetchingPlayersDetails: false,
  fetchingPlayersDetailsError: false,
  playersDetails: {},

  fetchingQuizNameList: false,
  fetchingQuizNameListError: false,
  quizNameList: [],

  fetchingQuizNameDetails: false,
  fetchingQuizNameDetailsError: false,
  quizNameDetails: {},

  fetchingFeedback: false,
  fetchingFeedbackError: false,
  feedback: [],

  fetchingBugs: false,
  fetchingBugsError: false,
  bugs: [],

  closeQuizLibrary: false,
  closeQuizLibraryError: false,


  fetchingLibraryQuiz: false,
  fetchingLibraryQuizError: false,
  libraryQuiz: [],



  fetchingQuizName: false,
  fetchingQuizNameError: false,
  showQuiz: {},

  addingQuizName: false,
  addingQuizNameError: false,
  quizDetails: {},

  addingQuestion: false,
  addingQuestionError: false,

  addingQuestionQuiz: false,
  addingQuestionQuizError: false, 

  updateQuestionById: false,
  updateQuestionByIdError: false,

  hostQuizByQuizId: false,
  hostQuizByQuizIdError: false,

  deletingQuestion: false,
  deletingQuestionError: false,

  fetchingCategory: false,
  fetchingCategoryError: false,
  category: [],

  copyReduce:false,

  addingCategory: false,
  addingCategoryError: false,

  deletingLibraryHost: false,
  deletingLibraryHostError: false,

  addQuizHostModal: false,

  deletingQuizHost: false,
  deletingQuizHostError: false,

  closeQuizByQuizId: false,
  closeQuizByQuizIdError: false,

  updateQuizNameQuizId: false,
  updateQuizNameQuizIdError: false,

  chatGptQuiz: false,
  chatGptQuizError: false,

  fetchingQuestionList: false,
  fetchingQuestionListError: false,
  questionList: [],

  updateQuestions: false,
  updateQuestionsError: false,

  addingUserQuery: false, addingUserQueryError: false,
  userQuery:{},

  sendingquizResponse: false,
  sendingquizResponseError:false,
  obtainedQuizResponse:{},

  checkGenerate: false, checkGenerateError:false,
  checkQuizGenerate:{},
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_QUIZ_HOST_MODAL:
      return {
        ...state,
        addQuizHostModal: action.payload,
      };

      case types.HANDLE_COPY:
        return {
          ...state,
          copyReduce: action.payload,
        };

    case types.GET_QUESTIONS_REQUEST:
      return { ...state, fetchingQuestions: true };
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
      return { ...state, addingQuestion: true };
    case types.ADD_QUESTION_SUCCESS:
      return { ...state, addingQuestion: false };
    case types.ADD_QUESTION_FAILURE:
      return { ...state, addingQuestion: false, addingQuestionError: true };

      case types.ADD_QUESTIONQUIZ_REQUEST:
      return { ...state, addingQuestionQuiz: true };
    case types.ADD_QUESTIONQUIZ_SUCCESS:
      return { ...state, addingQuestionQuiz: false };
    case types.ADD_QUESTIONQUIZ_FAILURE:
      return { ...state, 
        addingQuestionQuiz: false,
         addingQuestionQuizError: true };


    case types.UPDATE_QUESTION_REQUEST:
      return { ...state, updateQuestionById: true };
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

    case types.DELETE_QUESTION_BY_QUESTION_ID_REQUEST:
      return { ...state, deletingQuestion: true };
    case types.DELETE_QUESTION_BY_QUESTION_ID_SUCCESS:
      return {
        ...state,
        deletingQuestion: false,
        questionList: state.questionList.filter(
          (item) => item.id !== action.payload
        ),
      };
    case types.DELETE_QUESTION_BY_QUESTION_ID_FAILURE:
      return {
        ...state,
        deletingQuestion: false,
        deletingQuestionError: true,
      };

    case types.GET_CATEGORY_REQUEST:
      return { ...state, fetchingCategory: true };
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
      return { ...state, addingCategory: true };
    case types.ADD_CATEGORY_SUCCESS:
      return { ...state, addingCategory: false };
    case types.ADD_CATEGORY_FAILURE:
      return { ...state, addingCategory: false, addingCategoryError: true };

    case types.GET_QUIZ_NAME_REQUEST:
      return { ...state, fetchingQuizName: true };
    case types.GET_QUIZ_NAME_SUCCESS:
      return { ...state, fetchingQuizName: false, showQuiz: action.payload };

    // add quiz name
    case types.ADD_QUIZ_NAME_REQUEST:
      return { ...state, addingQuizName: true };
    case types.ADD_QUIZ_NAME_SUCCESS:
      return {
        ...state, addingQuizName: false,
        quizDetails: action.payload,

      };
    case types.ADD_QUIZ_NAME_FAILURE:
      return { ...state, addingQuizName: false, addingQuizNameError: true };
    //GET FINALIZED QUIZ
    case types.GET_FINALIZE_QUIZ_REQUEST:
      return { ...state, fetchingFinalizeQuiz: true };
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

    case types.GET_ONGOING_QUIZ_REQUEST:
      return { ...state, fetchingOngoingQuiz: true };
    case types.GET_ONGOING_QUIZ_SUCCESS:
      return {
        ...state,
        fetchingOngoingQuiz: false,
        ongoingQuiz: action.payload,
      };
    case types.GET_ONGOING_QUIZ_FAILURE:
      return {
        ...state,
        fetchingOngoingQuiz: false,
        fetchingOngoingQuizError: true,
      };

    //GET FINALIZED QUIZ
    case types.GET_FINALIZE_QUIZ_URL_REQUEST:
      return { ...state, fetchingFinalizeQuiz: true };
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
      return { ...state, deletingQuizHost: true };
    case types.DELETE_QUIZ_FROM_HOST_SUCCESS:
      return {
        ...state,
        deletingQuizHost: false,
        finalizeQuiz: state.finalizeQuiz.filter(
          (item) => item.quizId !== action.payload
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
      return { ...state, hostQuizByQuizId: true };
    case types.HOST_QUIZ_SUCCESS:
      return {
        ...state,
        hostQuizByQuizId: false,
        finalise:false,
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
      return { ...state, fetchingPlayersDetails: true };
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

    // get quizname list
    case types.GET_QUIZ_NAME_LIST_GAME_REQUEST:
      return { ...state, fetchingQuizNameList: true };
    case types.GET_QUIZ_NAME_LIST_GAME_SUCCESS:
      return {
        ...state,
        fetchingQuizNameList: false,
        quizNameList: action.payload,
      };
    case types.GET_QUIZ_NAME_LIST_GAME_FAILURE:
      return {
        ...state,
        fetchingQuizNameList: false,
        fetchingQuizNameListError: true,
      };

    // close quiz
    case types.CLOSE_QUIZ_REQUEST:
      return { ...state, closeQuizByQuizId: true };
    case types.CLOSE_QUIZ_SUCCESS:
      return {
        ...state,
        closeQuizByQuizId: false,
        finalizeQuiz: action.payload,
      };
    case types.CLOSE_QUIZ_FAILURE:
      return {
        ...state,
        closeQuizByQuizId: false,
        closeQuizByQuizIdError: true,
      };
    //UPDATE QUIZ NAME
    case types.UPDATE_QUIZ_NAME_REQUEST:
      return { ...state, updateQuizNameQuizId: true };
    case types.UPDATE_QUIZ_NAME_SUCCESS:
      return {
        ...state,
        updateQuizNameQuizId: false,
        showQuiz: action.payload,
      };
    case types.UPDATE_QUIZ_NAME_FAILURE:
      return {
        ...state,
        updateQuizNameQuizId: false,
        updateQuizNameQuizIdError: true,
      };


      case types.SEND_QUIZ_RESPONSE_REQUEST:
        return { ...state, sendingquizResponse: true };
      case types.SEND_QUIZ_RESPONSE_SUCCESS:
        return {
          ...state,
          sendingquizResponse: false,
          obtainedQuizResponse:action.payload
        };
      case types.SEND_QUIZ_RESPONSE_FAILURE:
        return {
          ...state,
          sendingquizResponse: false,
          sendingquizResponseError: true,
        };




    // get quizname details
    case types.GET_QUIZ_NAME_DETAILS_GAME_REQUEST:
      return { ...state, fetchingQuizNameDetails: true };
    case types.GET_QUIZ_NAME_DETAILS_GAME_SUCCESS:
      return {
        ...state,
        fetchingQuizNameDetails: false,
        quizNameDetails: action.payload,
      };
    case types.GET_QUIZ_NAME_DETAILS_GAME_FAILURE:
      return {
        ...state,
        fetchingQuizNameDetails: false,
        fetchingQuizNameDetailsError: true,
      };
    //clear quiz details data

    case types.CLEAR_QUIZ_NAME_DETAILS_GAME:
      return {
        ...state,
        quizNameDetails: {},
        showQuiz: {},
        feedback: [],
        questionList: [],
      };

    // get questions list
    case types.GET_QUESTIONS_LIST_IN_QUIZ_REQUEST:
      return { ...state, fetchingQuestionList: true };
    case types.GET_QUESTIONS_LIST_IN_QUIZ_SUCCESS:
      return {
        ...state,
        fetchingQuestionList: false,
        questionList: action.payload,
      };
    case types.GET_QUESTIONS_LIST_IN_QUIZ_FAILURE:
      return {
        ...state,
        fetchingQuestionList: false,
        fetchingQuestionListError: true,
      };

    //UPDATE QUESTIONS LIST IN QUIZ
    case types.UPDATE_QUESTIONS_IN_QUIZ_REQUEST:
      return { ...state, updateQuestions: true };
    case types.UPDATE_QUESTIONS_IN_QUIZ_SUCCESS:
      return {
        ...state,
        updateQuestions: false,
        // questionList: state.questionList.filter((item)=>item.id === action.payload.id).map((data)=>{
        //   const newData=[...action.payload,...data]
        //   console.log(action.payload,data,newData)
        // return newData
        questionList: state.questionList.map((item) => {
          return item.id === action.payload.id
            ? { ...item, ...action.payload }
            : item;
        }),
        // questionList: state.questionList.filter((item)=>{
        //   if(item.id===action.payload.id){
        //     return(
        //       [...questionList,action.payload]
        //     )
        //   }
        //   else{
        //     return(
        //       state.questionList
        //     )
        //   }
        // })
      };
    case types.UPDATE_QUESTIONS_IN_QUIZ_FAILURE:
      return {
        ...state,
        updateQuestions: false,
        updateQuestionsError: true,
      };

      case types.UPDATE_PROFILE_IN_QUIZ_REQUEST:
        return { ...state, updateProfileData: true };
      case types.UPDATE_PROFILE_IN_QUIZ_SUCCESS:
        return {
          ...state,
          updateProfileData: false,
          user: state.user.map((item) => {
            return item.userId === action.payload.userId
              ? { ...item, ...action.payload }
              : item;
          }),
          
        };
      case types.UPDATE_PROFILE_IN_QUIZ_FAILURE:
        return {
          ...state,
          updateProfileData: false,
          updateProfileDataError: true,
        };

    // get feedback
    case types.GET_QUIZ_FEEDBACK_REQUEST:
      return { ...state, fetchingFeedback: true };
    case types.GET_QUIZ_FEEDBACK_SUCCESS:
      return {
        ...state,
        fetchingFeedback: false,
        feedback: action.payload,
      };
    case types.GET_QUIZ_FEEDBACK_FAILURE:
      return {
        ...state,
        fetchingFeedback: false,
        fetchingFeedbackError: true,
      };

    case types.GET_BUGS_REQUEST:
      return { ...state, fetchingBugs: true };
    case types.GET_BUGS_SUCCESS:
      return {
        ...state,
        fetchingBugs: false,
        bugs: action.payload,
      };
    case types.GET_BUGS_FAILURE:
      return {
        ...state,
        fetchingBugs: false,
        fetchingBugsError: true,
      };


    case types.GET_LIBRARY_QUIZ_REQUEST:
      return { ...state, fetchingLibraryQuiz: true };
    case types.GET_LIBRARY_QUIZ_SUCCESS:
      return {
        ...state,
        fetchingLibraryQuiz: false,
        libraryQuiz: action.payload,
      };
    case types.GET_LIBRARY_QUIZ_FAILURE:
      return {
        ...state,
        fetchingLibraryQuiz: false,
        fetchingLibraryQuizError: true,
      };



    case types.DELETE_LIBRARY_FROM_HOST_REQUEST:
      return { ...state, deletingLibraryHost: true };
    case types.DELETE_LIBRARY_FROM_HOST_SUCCESS:
      return {
        ...state,
        deletingLibraryHost: false,
        libraryQuiz: state.libraryQuiz.filter(
          (item) => item.quizId !== action.payload
        ),
      };
    case types.DELETE_LIBRARY_FROM_HOST_FAILURE:
      return {
        ...state,
        deletingLibraryHost: false,
        deletingLibraryHostError: true,
      };


    case types.CLOSE_LIBRARY_QUIZ_REQUEST:
      return { ...state, closeQuizLibrary: true };
    case types.CLOSE_LIBRARY_QUIZ_SUCCESS:
      return {
        ...state,
        closeQuizLibrary: false,
        // libraryQuiz: action.payload,
        libraryQuiz: state.libraryQuiz.map((item) => {
          if (item.quizId === action.payload.quizId) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };
    case types.CLOSE_LIBRARY_QUIZ_FAILURE:
      return {
        ...state,
        closeQuizLibrary: false,
        closeQuizLibraryError: true,
      };

    case types.ADD_BUGS_REQUEST:
      return { ...state, addingBugs: true };
    case types.ADD_BUGS_SUCCESS:
      return { ...state, addingBugs: false };
    case types.ADD_BUGS_FAILURE:
      return { ...state, addingBugs: false, addingBugsError: true };

    case types.BACK_TO_QUIZ_PAGE:
      return {
        ...state,
        questionList: []
      };

      case types.ADD_USER_QUERY_REQUEST:
        return { ...state, addingUserQuery: true };
      case types.ADD_USER_QUERY_SUCCESS:
        return { ...state, addingUserQuery: false,
          userQuery:action.payload,
        };
      case types.ADD_USER_QUERY_FAILURE:
        return { ...state, addingUserQuery: false, addingUserQueryError: true };

        case types.HANDLE_CLAER_REDUCER_DATA_LOAD_PROGRESS:
          return { ...state, 
            userQuery: {}, 
          };

          case types.HANDLE_INVENTORY_STRIPE_MODAL:
            return { ...state, addiNVEStripeModal: action.payload };


            case types.ADD_QUIZ_PAYMENT_ID_REQUEST:
              return { ...state, addingQuizPaymentId: true };
            case types.ADD_QUIZ_PAYMENT_ID_SUCCESS:
              return {
                ...state,
                addingQuizPaymentId: false,
                paymentQuizDetails: action.payload
              };
            case types.ADD_QUIZ_PAYMENT_ID_FAILURE:
              return { ...state, 
                addingQuizPaymentId: false, 
                addingQuizPaymentIdError: true };

                case types.MAKE_STRIPE_PAYMENT_REQUEST:
                  return { ...state, addingMakeStripePayment: true };
                case types.MAKE_STRIPE_PAYMENT_SUCCESS:
                  return {
                    ...state,
                    addingMakeStripePayment: false,
                    addiNVEStripeModal:false,
                    confirmedQuizPayment: action.payload
                  };
                case types.MAKE_STRIPE_PAYMENT_FAILURE:
                  return {
                    ...state,
                    addingMakeStripePayment: false,
                    addingMakeStripePaymentError: true
                  };

                  case types.HANDLE_SUSCRIPTION_MODAL:
                    return { ...state, addingSuscrpitionModal: action.payload }; 

                    case types.UPDATE_SUSCRIPTION_REQUEST:
                      return { ...state, updatingSuscrption: true };
                    case types.UPDATE_SUSCRIPTION_SUCCESS:
                      return {
                        ...state,
                        updatingSuscrption: false,
                        addingSuscrpitionModal: false,
                        // employees: state.employees.map((item) => {
                        //   if (item.employeeId === action.payload.employeeId) {
                        //     return action.payload;
                        //   } else {
                        //     return item;
                        //   }
                        // }),
                      };
                    case types.UPDATE_SUSCRIPTION_FAILURE:
                      return {
                        ...state,
                        updatingSuscrption: false,
                        updatingSuscrptionError: true,
                      };


                      case types.GET_SUSCRIPTION_REQUEST:
                        return { ...state, fetchingSuscrption: true };
                      case types.GET_SUSCRIPTION_SUCCESS:
                        return {
                          ...state,
                          fetchingSuscrption: false,
                          suscrptionData: action.payload,
                        };
                      case types.GET_SUSCRIPTION_FAILURE:
                        return {
                          ...state,
                          fetchingSuscrption: false,
                          fetchingSuscrptionError: true,
                        };

                        case types.GET_UPGRADE_SUSCRIPTION_REQUEST:
                        return { ...state, fetchingUpgradeSuscrption: true };
                      case types.GET_UPGRADE_SUSCRIPTION_SUCCESS:
                        return {
                          ...state,
                          fetchingUpgradeSuscrption: false,
                          suscrptionUpgradeData: action.payload,
                        };
                      case types.GET_UPGRADE_SUSCRIPTION_FAILURE:
                        return {
                          ...state,
                          fetchingUpgradeSuscrption: false,
                          fetchingUpgradeSuscrptionError: true,
                        };
            
                        case types.CHECK_GENERATE_REQUEST:
                          return { ...state, checkGenerate: true };
                        case types.CHECK_GENERATE_SUCCESS:
                          return { ...state, checkGenerate: false,
                            checkQuizGenerate:action.payload,
                          };
                        case types.CHECK_GENERATE_FAILURE:
                          return { ...state, checkGenerate: false, checkGenerateError: true };

                          
    default:
      return state;
  }
};
