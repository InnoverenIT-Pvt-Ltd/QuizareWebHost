import { Button, Input } from 'antd'
import React from 'react'
import { chatGptquiz } from './QuizAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
const ChatGPT = (props) => {

   

         const handleChatGpt = (quizId,quizName ) => {
            const data = {
                quizId: quizId,
                quizName:quizName
            };
          
            props.chatGptquiz(data,quizId)
             
            
          };

  return (
    <>
    <div class="">
      Do you Want to use ChatGPT to Generate Questions?

    </div>
    <div class="flex">
    <Button  type="primary"
    onClick={() => handleChatGpt(props.quizId,props.quizName)}
    > 
    Yes
    </Button>
    <Button  type="primary "> No</Button>
    
    
    </div>
    <Input placeholder='How many question'></Input>
    <Button  type="primary"> Submit</Button>
    </>
  )
}
const mapStateToProps = ({ auth, quiz }) => ({
    
  });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        chatGptquiz,
    },
    dispatch,
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatGPT));