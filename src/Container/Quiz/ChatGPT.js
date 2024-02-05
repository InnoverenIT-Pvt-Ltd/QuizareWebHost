import React, { useState } from "react";
import { Button, Input } from 'antd'
import { addUserQuery,sendQuizResponse } from './QuizAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter,useHistory } from "react-router-dom";

const ChatGPT = (props) => {

  const history = useHistory();

  const [showCard, setshowCard] = useState(false);
  const [questionReq,setQuestionReq]=useState("");


 function handleSayNo () {
  history.push(`/addquiz`);
 }

         const handleQuestionRequire = (q) => {
            setQuestionReq(q.target.value)
      }; 

  return (
    <>
    <div class="">
      Do you Want to use ChatGPT to Generate Questions?

    </div>
    <div class="flex">
    <Button  type="primary"
    onClick={() =>    setshowCard(true)}
    > 
    Yes
    </Button>
    <Button  type="primary" 
    onClick={() =>    handleSayNo()}
    > No</Button>
    
    
    </div>
    {showCard && 
    <>
    <Input placeholder='How many question'
    value={questionReq}
    onChange={handleQuestionRequire}
    />
    <Button  type="primary"
    onClick={()=>{
      const query={

user_question:props.quizName,
questions_required:questionReq,
        request_type: "MCQ_Content",  //Hardcode
        options_required: "4", //hardcode
        userid: props.userId,
      quizId:props.quizId
      }
      props.addUserQuery(query);}}
    > Submit</Button>

<Button  type="primary"
    onClick={()=>{
// const userPre=props.userQuery
      props.sendQuizResponse(props.userQuery);}}
    > Final Submit</Button>

    </>
}
    </>
  )
}
const mapStateToProps = ({ auth, quiz }) => ({
  quizId: quiz.showQuiz.quizId,
  quizName:quiz.showQuiz.quizName,
  userId:auth.userDetails.userId,
  userQuery:quiz.userQuery,
  showQuiz: quiz.showQuiz,

  });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addUserQuery,
      sendQuizResponse
    },
    dispatch,
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatGPT));