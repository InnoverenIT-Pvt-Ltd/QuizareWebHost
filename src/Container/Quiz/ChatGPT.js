import React, { useState } from "react";
import { Button, Input } from 'antd'
import { addUserQuery,sendQuizResponse,checkGenerateQuiz } from './QuizAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FWLogo from "../../../src/images/linear_background_154 2.jpg";
import {Link, withRouter,useHistory } from "react-router-dom";
import Menu from "../../Components/Quizs/Menu";


const ChatGPT = (props) => {

  const history = useHistory();

  const [showCard, setshowCard] = useState(false);
  const [questionReq,setQuestionReq]=useState("");
  const [QuizName,setQuizName] =useState("");
  const [generationComplete, setGenerationComplete] = useState(false);


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
    <div class="flex  justify-center flex-col items-center  max-sm:w-11/12 mt-8 m-auto h-[60vh] md:mt-12 w-4/12 md:h-[80vh] ">
    <div>
              <img
                    className="big-logo"
                    src={FWLogo}
                    style={{ borderRadius:"0.75rem"}}
                    alt="Tekorero logo"

                  />
              </div>
              <div class="absolute md:bottom-[10rem]  flex flex-col justify-center items-center  max-sm:m-0 h-80  m-auto">
    <div class=" text-sm font-semibold  text-white">
      How many Questions?

    </div>
    <div class="mt-4 w-wk">
    <>
    <Input
    placeholder="Enter quiz name" 
    value={QuizName}
    onChange={(e)=> setQuizName(e.target.value)}
    className="custom-input"
    />
<div class="mb-3" />
    <Input 
    value={questionReq}
    onChange={handleQuestionRequire}
    className="custom-input"
    />

<div class="mt-4 ">
    <Button  type="primary"
     style={{ height: "3rem", backgroundColor: "white", borderRadius: '0.25rem' }}
    onClick={()=>{
      const QGen={
        noOfQstn:questionReq,
        quizHostId:props.userId,
        quizName: QuizName,
        type:"ChatGpt",
      }
      const query={

        user_question:QuizName,
        questions_required:questionReq,
                request_type: "MCQ_Content",  //Hardcode
                options_required: "4", //hardcode
                userid: props.userId,
              quizId:props.quizId,
              type:"ChatGpt",
        
              }
      props.checkGenerateQuiz(QGen,query);
      setGenerationComplete(true);
      }}> <h3 className="font-medium  text-xl -mt-4"> Send </h3> </Button>
      </div>

    {/* <div class="mt-4 ">
    <Button  type="primary"
     style={{ height: "3rem", backgroundColor: "white", borderRadius: '0.25rem' }}
    onClick={()=>{
      const query={

user_question:QuizName,
questions_required:questionReq,
        request_type: "MCQ_Content",  //Hardcode
        options_required: "4", //hardcode
        userid: props.userId,
      quizId:props.quizId,
      type:"ChatGpt",

      }
      props.addUserQuery(query);
      setGenerationComplete(true);
      }}> <h3 className="font-medium  text-xl -mt-4"> Generate </h3> </Button>
      </div> */}
     &nbsp;
     &nbsp;
     {props.obtainedQuizResponse.length===0 &&(
     <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-loader">
     <div className="loader"></div>
   </div>)
    }
    

    </>
{/* } */}
{generationComplete && (
<Link to={`updateQuizNameInLibrary/${props.checkQuizGenerate.quizName}/${props.checkQuizGenerate.duration}/${props.checkQuizGenerate.quizId}`}>
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
    // option4: qstn.options[3].value || "", 
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
  obtainedQuizResponse:quiz.obtainedQuizResponse,
  checkQuizGenerate:quiz.checkQuizGenerate

  });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addUserQuery,
      sendQuizResponse,
      checkGenerateQuiz
    },
    dispatch,
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatGPT));