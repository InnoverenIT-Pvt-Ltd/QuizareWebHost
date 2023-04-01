import React,{Share}from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeQuiz, hostQuiz } from '../../Container/Quiz/QuizAction';
import { Button, Card } from "antd";
import QuizDetailsPlayerTable from './QuizDetailsPlayerTable';
import { Link } from 'react-router-dom';
function QuizDetails(props) {
  const shareMessage = () => {
    Share.share({
      message: `http://player.quizledge.no${
        props.quizNameDetails.quizLink || ''
      }`,
    })
  };
  const viewData = props.quizNameDetails.playerViewDTOs;
  const viewmessage = props.quizNameDetails.message;
  const ID = props.quizNameDetails.quizId;
  return (
    <>
      <div>
        <h1>You are hosting</h1>
        <h2>{`${props.quizNameDetails.quizName || ''}`}{' '}</h2>
        <h1>Share URL for others to access.</h1>
        <Card>
          {props.quizNameDetails.quizLink?
          <h1>{`http://player.quizledge.no${props.quizNameDetails.quizLink || ''}`}</h1>:""}
        </Card>
        <Button
        onClick={shareMessage}
        >
        Share This Url
        </Button>
        <h1>Who is playing your quiz?</h1>
        <Card>
        {viewData === null ? (
                <h1>{viewmessage}</h1>
              ) : (
                <QuizDetailsPlayerTable data={props.quizNameDetails} />
              )}
        </Card>
        <div>
          <Button
          style={{ width: "9rem", backgroundColor: "white" }}
          type='primary'
          onClick={()=>props.closeQuiz(ID)}
          ><h3>Close Quiz</h3></Button>
           <Link to="/updateQuizName">
                  <Button
                    style={{ width: "9rem", backgroundColor: "white" }}
                    type="primary"

                     onClick={ID}
                  ><h3>Edit This Quiz</h3></Button>
                </Link>
          <Button
          type='primary'
          style={{ width: "9rem", backgroundColor: "white" }}
          onClick={() => props.hostQuiz(ID)}
          ><h3>Host This Quiz</h3></Button>
        </div>
      </div>
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
