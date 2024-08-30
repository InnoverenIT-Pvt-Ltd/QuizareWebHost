import React, { useState } from "react";
import { Button, Input } from 'antd'
import { addUserQuery,sendQuizResponse } from './QuizAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link, withRouter,useHistory } from "react-router-dom";
import Menu from "../../Components/Quizs/Menu";


const ChatGPT = (props) => {

  const history = useHistory();

  const [showCard, setshowCard] = useState(false);
  const [questionReq,setQuestionReq]=useState("");
  const [generationComplete, setGenerationComplete] = useState(false);

 function handleSayNo () {
  history.push(`/addquiz`);
 }

         const handleQuestionRequire = (q) => {
            setQuestionReq(q.target.value)
      }; 
if(props.addingUserQuery){
  return <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-loader">
    <div className="loader"></div>
  </div>
}
  return (
    <>
    <Menu/>
    <div class="flex items-center justify-center mt-4 h-[91vh]">
    <div class="shadow-2xl flex-col  bg-white border-solid w-[35%] flex  items-center  p-4 max-sm:m-0  rounded-xl  m-auto">
    <div class=" text-sm font-semibold mt-8">
      Do you Want to use ChatGPT to Generate Questions?

    </div>
    <div class="flex justify-between w-wk mt-6">
      <div>
    <Button  style={{ height: "3rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem' }}  type="primary"
    onClick={() =>    setshowCard(true)}
    > 
    Yes
    </Button>
    </div>
    <div>
    <Button  style={{ height: "3rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem' }} type="primary" 
    onClick={() =>    handleSayNo()}
    > No</Button>
    </div>
    
    </div>
    <div class="mt-4 w-wk">
    {showCard && 
    <>
    <Input placeholder='How many questions?'
    value={questionReq}
    onChange={handleQuestionRequire}
    />
    <div class="mt-4 ">
    <Button  type="primary"
     style={{ height: "3rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem' }}
    onClick={()=>{
      const query={

user_question:props.quizName,
questions_required:questionReq,
        request_type: "MCQ_Content",  //Hardcode
        options_required: "4", //hardcode
        userid: props.userId,
      quizId:props.quizId
      }
      props.addUserQuery(query);
      setGenerationComplete(true);
      }}> <h3 className="font-medium text-white text-xl -mt-4"> Generate v</h3> </Button>
      </div>
     &nbsp;
     &nbsp;
     {props.obtainedQuizResponse.length===0 &&(
     <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-loader">
     <div className="loader"></div>
   </div>)
    }
    


    </>
}
{generationComplete && (
<Link to={`updateQuizNameInLibrary/${props.quizName}/${props.duration}/${props.quizId}`}>
<Button  type="primary"
  style={{ height: "3rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem' }}
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
    >  <h3 className="font-medium text-white text-xl -mt-4">Submit </h3></Button>
</Link>
 )}
</div>
</div>
</div>
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