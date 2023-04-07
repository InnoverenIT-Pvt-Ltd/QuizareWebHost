import React,{Share}from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeQuiz, hostQuiz } from '../../../Container/Quiz/QuizAction';
import { Button, Card } from "antd";
import { useHistory } from "react-router-dom";
import { Field, Formik,Form } from 'formik';
// import QuizDetailsPlayerTable from './QuizDetailsPlayerTable';
import QuizDetailsPlayerTable from '../../../Components/Quizs/QuizDetailsPlayerTable';
import MainHeader from '../../../Components/Mainheader';
// import MainHeader from '../Mainheader';

function QuizDetails(props) {
  const link = `http://player.quizledge.no${props.showQuiz.quizLink || ''}`
  function copyToClipboard(link) {
    navigator.clipboard.writeText(link)
  .then(() => {
    console.log(`Copied text to clipboard: ${link}`);
    //alert(`Copied text to clipboard: ${link}`);
  })
  .catch((error) => {
    console.error(`Could not copy text: ${error}`);
  });

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
    <MainHeader/>
<Formik>
<Form class="flex justify-center  items-center max-sm:w-11/12 mt-8 m-auto md:mt-12  w-1/5 ">
<div class="shadow-2xl border-solid w-11/12 flex justify-center items-center flex-col  p-1 max-sm:m-0 h-h34 rounded-xl md:m-auto">
  <div class="w-full flex justify-center items-center">
<h2 class="text-base  ml-4 flex justify-center flex-col" >You are hosting</h2>
        <h2 class="text-base flex justify-center">{`${props.showQuiz.quizName || ''}`}{' '}</h2>
        </div>
        
        <div class="w-full flex justify-center items-center flex-col">
  <h2 class="text-base mt-2 flex  items-center " >Share URL for others to access.</h2>
  <Card style={{width:"100%"}}>
    {/* <h2 class="text-base">{`${props.showQuiz.quizName || ''}`}{' '}</h2> */}
    {props.showQuiz.quizLink?
    <h2 class="text-base">{`http://player.quizledge.no${props.showQuiz.quizLink || ''}`}</h2>:""}
    </Card>
    <div class="mt-4 w-full">
      <Button
        style={{backgroundColor:"#4096ff",width:"100%",borderRadius:"0.4rem",height:"auto"}}
        onClick={copyToClipboard(link)}
        >
        <h2 class="text-white">Click to copy the url</h2>
        </Button>
        </div>
        {/* <div>
        {viewData === null ? (
                <h2 class="text-base">{viewmessage}</h2>
              ) : (
                <QuizDetailsPlayerTable data={props.showQuiz} />
              )}
        </div> */}
        <div class="mt-8 w-full">
        <Button
          style={{ backgroundColor: "white" }}
          type='primary'
          onClick={()=>props.closeQuiz(ID,handleCallBack())}
          ><h3>Close Quiz</h3></Button>
          </div>
          </div>
          </div>
          </Form>
          </Formik>
    </>
  )
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
      closeQuiz
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(QuizDetails);
