import React, { useEffect } from 'react'
import Swiper from 'react-slider-swiper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UpdateQuiz from './UpdateQuiz';
import { getQuestionList,clearQuizNameDetails } from '../QuizAction';
import { Card } from 'antd';
function EditQuizS(props) {
  useEffect(() => {
    props.getQuestionList(props.showQuiz && props.showQuiz.quizId);
    return()=>{
      props.clearQuizNameDetails();
 
     }
  }, []);
  if(props.fetchingQuestionList){
    alert("Hello")
    return(
      <>
      <div>new</div>
        </>
    )
  }
  return (
    <>
    <div>
    <div>
      <h1>{props.showQuiz&&props.showQuiz.quizName}</h1>
    </div>
    <Swiper>
    {props.questionList.length &&
          props.questionList.map((item, i) => {
            return (
              <div key={item.id}>
                <Card>
                <UpdateQuiz item={item} i={i + 1}/>
                </Card>
                
              </div>
              );
            })}
    </Swiper>

    </div>
    </>
  )
}

const mapStateToProps = ({auth, quiz}) => ({
  showQuiz: quiz.showQuiz,
  questionList: quiz.questionList,
  fetchingQuestionList:quiz.fetchingQuestionList,
  
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getQuestionList,
      clearQuizNameDetails,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(EditQuizS);