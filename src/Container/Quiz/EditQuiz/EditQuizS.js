import React, {useEffect} from 'react';
import Swiper from 'react-native-swiper';
import UpdateQuiz from './UpdateQuiz';
import {Container} from './Style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getQuestionList,clearQuizNameDetails} from '../QuizAction';
function EditQuizS(props) {
  console.log("quiz page",props)
  useEffect(() => {
    props.getQuestionList(props.showQuiz && props.showQuiz.quizId);
    return()=>{
      props.clearQuizNameDetails();
 
     }
  }, []);
  if(props.fetchingQuestionList){
    alert("Hello")
    return(
      <div></div>
    )
  }
  console.log("component lebel",props.questionList)
  return (
    <>
      <div style={{alignItems: 'center', backgroundColor: 'white'}}>
        <h1>{props.showQuiz&&props.showQuiz.quizName}</h1>
      </div>

      <div>
      <Swiper showsPagination={false} showsButtons>
        {props.questionList.length &&
          props.questionList.map((item, i) => {
            return (
              
              <Container key={item.id}>
                <View>
                <UpdateQuiz item={item} i={i + 1} />
                </View>
              </Container>
              
            );
          })}
      </Swiper>    
      </div>  
    </>
  );
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