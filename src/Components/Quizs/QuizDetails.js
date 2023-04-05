import React,{Share}from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeQuiz, hostQuiz } from '../../Container/Quiz/QuizAction';
import { Button, Card } from "antd";
import { Field, Formik,Form } from 'formik';
import QuizDetailsPlayerTable from './QuizDetailsPlayerTable';
import { Link } from 'react-router-dom';
import MainHeader from '../Mainheader';
function QuizDetails(props) {
  const link = `http://player.quizledge.no${props.quizNameDetails.quizLink || ''}`
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
  
  const viewData = props.quizNameDetails.playerViewDTOs;
  const viewmessage = props.quizNameDetails.message;
  const ID = props.quizNameDetails.quizId;
  return (
    <>
   
     <Formik>
     <Form class=" max-sm:w-11/12 mt-8 m-auto md:mt-12  w-1/5  h-h50  ">
     <div className="bg-white rounded-2xl flex justify-center mt-3 ">
           
           <div class="shadow-2xl border-solid w-11/12 flex justify-center flex-col  p-4 max-sm:m-0 h-h31 rounded-2xl md:m-auto">
           <h2 class="text-base  ml-4 flex justify-center" >You are hosting</h2>
        <h2 class="text-base flex justify-center">{`${props.quizNameDetails.quizName || ''}`}{' '}</h2>
        <h2 class="text-base mt-2 flex justify-center " >Share URL for others to access.</h2>
        <Card class="mt-4">
          {props.quizNameDetails.quizLink?
          <h2 class="text-base overflow-hidden">{`http://player.quizledge.no${props.quizNameDetails.quizLink || ''}`}</h2>:""}
        </Card>
        <div class="flex justify-center mt-1">
        <Button
        style={{backgroundColor:"#4096ff",width:"-webkit-fill-available",borderRadius:"0.4rem",height:"auto"}}
        onClick={copyToClipboard(link)}
        >
        <h2 class="text-white">Click to copy the url</h2>
        </Button>
        </div>
        <h2 class="text-xl mt-2 flex justify-center" >Who is playing your quiz?</h2>
        <div>
        {viewData === null ? (
                <h2 class="text-base">{viewmessage}</h2>
              ) : (
                <QuizDetailsPlayerTable data={props.quizNameDetails} />
              )}
        </div>
        <div class="flex justify-between">
        <div class="w-36"> 
          <Button
          style={{ backgroundColor: "white" }}
          type='primary'
          onClick={()=>props.closeQuiz(ID)}
          ><h3>Close Quiz</h3></Button>
          </div>
          <div class="w-36"> 
           <Link to="/updateQuizName">
                  <Button
                    style={{backgroundColor: "white" }}
                    type="primary"

                     onClick={ID}
                  ><h3>Edit This Quiz</h3></Button>
                </Link>
                </div>
        </div>
        <div class="mt-3"> 
           <Button
          type='primary'
          style={{ backgroundColor: "white" }}
          onClick={() => props.hostQuiz(ID)}
          ><h3>Host This Quiz</h3></Button></div>
      </div>
      </div>
      </Form>
      </Formik>
    </>
  )
}

const mapStateToProps = ({ quiz }) => ({
  quizNameDetails: quiz.quizNameDetails,
  fetchingFeedback: quiz.fetchingFeedback,
  feedback: quiz.feedback,
  fetchingFeedbackErrot: quiz.fetchingFeedbackErrot,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closeQuiz,
      hostQuiz
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(QuizDetails);
