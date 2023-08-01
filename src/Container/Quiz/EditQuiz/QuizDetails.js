import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeQuiz, hostQuiz } from "../../../Container/Quiz/QuizAction";
import { Button, Card } from "antd";
import { useHistory,Link } from "react-router-dom";
import { Field, Formik, Form } from "formik";
// import QuizDetailsPlayerTable from './QuizDetailsPlayerTable';
import QuizDetailsPlayerTable from "../../../Components/Quizs/QuizDetailsPlayerTable";
import MainHeader from "../../../Components/Mainheader";
import copy from "copy-to-clipboard";
// import MainHeader from '../Mainheader';

function QuizDetails(props) {
  const link = `https://player.quizledge.no${props.showQuiz.quizLink || ""}`;
  function copyToClipboard() {
    copy(link);
    console.log(link)
  }
  const history = useHistory();

  function handleCallBack(data) {
    history.push(`/create`);
  }
  const viewData = props.showQuiz.playerViewDTOs;
  const viewmessage = props.showQuiz.message;
  const ID = props.showQuiz.quizId;
  return (
    <>
      <MainHeader />

      <div class="flex justify-center  items-center max-sm:w-11/12 mt-8 m-auto md:mt-12  w-2/5 ">
        
        <div class="shadow-2xl border-solid w-wk flex  items-center flex-col  p-1 max-sm:m-0 h-h27 rounded-rounded3 md:m-auto">
      
      
        <div class="flex justify-center mt-1">
            <h2 class="text-2xl flex justify-center">
              {`${props.showQuiz.quizName || ""}`}{" "}
            </h2>
          </div>
          <hr class="h-px bg-black border-2 w-wk mt-4 border-black"/>

          <div class="w-full flex justify-center items-center">
            <h2 class="text-base  flex justify-center flex-col mt-3">
            Your quiz is now running with your selected rules: 
            </h2>
          </div>
        
          <div class="w-full flex justify-center items-center">
            <h2 class="text-base  flex justify-center flex-col mt-3">
           Response Time In seconds:  {`${props.showQuiz.duration || ""}`}{" "}
            </h2>
          </div>
          <div class="w-full flex justify-center items-center">
            <h2 class="text-base  flex justify-center flex-col mt-3">
           Scoring system: Standard
            </h2>
          </div>
          <div class="w-full flex justify-center items-center flex-col mt-4">
            <h2 class="text-base mt-2 flex  items-center ">
            Share URL to invite others to play your quiz
            </h2>
            <Card style={{ width: "100%",backgroundColor:"#F0F0F0", borderRadius:'2rem',marginTop:"1rem" }}>
              {/* <h2 class="text-base">{`${props.showQuiz.quizName || ''}`}{' '}</h2> */}
              {props.showQuiz.quizLink ? (
                <h2 class="text-xs flex justify-center flex-col " style={{ overflowWrap: "break-word" }}>{`http://player.quizledge.no${props.showQuiz.quizLink || ""
                  }`}</h2>
              ) : (
                ""
              )}
            </Card>
            <div class="mt-12 w-full flex justify-center">
              <Button
                style={{  height: "4em",backgroundColor:"grey",borderRadius:'3rem',width:'10rem' }}
                onClick={() => copyToClipboard()}
              >
                <h2 class="text-white text-xl font-medium">Share</h2>
              </Button>
            </div>
            {/* <div>
        {viewData === null ? (
                <h2 class="text-base">{viewmessage}</h2>
              ) : (
                <QuizDetailsPlayerTable data={props.showQuiz} />
              )}
        </div> */}
            {/* <div class='flex justify-between mt-4 w-80 md:w-wk'>
              <div class="w-36">
                <Button
                  style={{ backgroundColor: "white" }}
                  type="primary"
                  onClick={() => props.closeQuiz(ID, handleCallBack())}
                >
                  <h3>Close Quiz</h3>
                </Button>
              </div>
              <div>
                <button
                  className="bg-blue-900 text-white px-4 rounded-md w-36 h-10 "
                  onClick={() => history.push(`/finalize`)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-28 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
<Link to="/librayHome">
<div class="bg-black rounded-rounded2.8 p-1 mt-5 w-60 items-center flex justify-center"
>
<Button style={{ border: "none", height:"4.5rem", }}>
<h3 class="font-medium text-white text-xl"> Return to Library </h3>


</Button>
</div>
</Link>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = ({ auth, quiz }) => ({
  showQuiz: quiz.showQuiz,
  noOfQuestions: quiz.noOfQuestions,
  quizId: quiz.showQuiz.quizId,
  fetchingFinalizeQuiz: quiz.fetchingFinalizeQuiz,
  fetchingFinalizeQuizError: quiz.fetchingFinalizeQuizError,
  finalizeQuiz: quiz.finalizeQuiz,
  deletingQuizHost: quiz.deletingQuizHost,
  deletingQuizHostError: quiz.deletingQuizHostError,
  hostQuizByQuizId: quiz.hostQuizByQuizId,
  hostQuizByQuizIdError: quiz.hostQuizByQuizIdError,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      hostQuiz,
      closeQuiz,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(QuizDetails);
