import React, { useState } from "react";
import { Button, Input } from 'antd'
import { addUserQuery,sendQuizResponse } from './QuizAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link, withRouter,useHistory } from "react-router-dom";


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
if(props.addingUserQuery){
  return <div className="custom-loader">
    <div className="loader">Loading</div>
  </div>
}
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
      props.addUserQuery(query);}}> Generate </Button>
     &nbsp;
     &nbsp;
     {props.obtainedQuizResponse.length===0 &&(
     <div className="custom-loader">
     <div className="loader">Loading</div>
   </div>)
    }
<Link to={`updateQuizNameInLibrary/${props.quizName}/${props.duration}/${props.quizId}`}>
<Button  type="primary"
    onClick={()=>{
const userPre= {
  questionDTOS: props.userQuery.response.ai_response.questions.map((qstn, index) => ({
    liveInd: true,
    number: index,
    option1: qstn.options[0].value,
    option2: qstn.options[1].value,
    option3: qstn.options[2].value,
    option4: qstn.options[3].value || "", 
    question: qstn.question,
    quizId: props.userQuery.response.user_request.quizId

})),
quizId: props.userQuery.response.user_request.quizId
}
      props.sendQuizResponse(userPre);}}
    > Submit</Button>
</Link>

    </>
}
    </>
  )
}
const mapStateToProps = ({ auth, quiz }) => ({
  quizId: quiz.showQuiz.quizId,
  quizName:quiz.showQuiz.quizName,
  duration: quiz.showQuiz.duration,
  userId:auth.userDetails.userId,
  userQuery:quiz.userQuery,
  showQuiz: quiz.showQuiz,
  addingUserQuery:quiz.addingUserQuery,
  obtainedQuizResponse:quiz.obtainedQuizResponse

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