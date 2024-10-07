import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeQuiz, hostQuiz } from "../../QuizAction";
import { Button, Card } from "antd";
import { useHistory,Link } from "react-router-dom";
import copy from "copy-to-clipboard";


function ShareQuizDetails(props) {
  const link = `https://player.quizledge.no${props.currentItem.quizLink || ""}`;
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
console.log(props.showQuiz)
  return (
    <>
    <div class="">
      {/* <MainHeader /> */}

      <div class="flex justify-center bg-white  items-center max-sm:w-11/12 h-hk  m-auto   w-wk ">
        
        <div class="shadow-2xl border-solid w-wk flex  items-center flex-col  p-1 max-sm:m-0 h-[36rem]  md:m-auto">
      
      
       
          <div class="w-full flex justify-center items-center flex-col  h-hk ">
            <div class="text-xl mt-2 flex  items-center  font-bold justify-start w-wk font-[Poppins] ">
            Share your quiz
            </div>
            <div className="flex items-center justify-between w-wk mt-3">
            <div className="border w-[26rem] flex h-[2.5rem] border-solid border-gray-400 max-sm:w-[12rem]" >
              {/* <h2 class="text-base">{`${props.showQuiz.quizName || ''}`}{' '}</h2> */}
              {props.currentItem.quizLink ? (
                <h2 class="text-xs flex justify-center flex-col ml-2 font-[Poppins] " style={{ overflowWrap: "break-word" }}>{`http://player.quizledge.no${props.currentItem.quizLink || ""
                  }`}</h2>
              ) : (
                ""
              )}
           </div>
            <div class="  flex justify-center">
              <Button
                style={{  height: "2.5rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem',width:'-webkit-fill-available' }}
                onClick={() => copyToClipboard()}
              >
                <h2 class="text-white text-base font-medium font-[Poppins]">Share</h2>
              </Button>
            </div>
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
{/* <Link to="/how3">
<div class="bg-black rounded-rounded2.8 p-1 mt-11 w-60 items-center flex justify-center"
>
<Button style={{ border: "none", height:"4.5rem", }}>
<h3 class="font-medium text-white text-xl"> Return to Library </h3>


</Button>
</div>
</Link> */}
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShareQuizDetails);
