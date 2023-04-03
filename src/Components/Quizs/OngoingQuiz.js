import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getQuizNameDetails,getFeedback } from '../../Container/Quiz/QuizAction';
import QuizNameList from './QuizNameList';
import { Formik } from 'formik';
import QuizDetails from './QuizDetails';
import MainHeader from '../Mainheader';

function OngoingQuiz(props) {
    const [item,setItem]=useState(undefined)
    function handleGetQuizData(data){
      setItem(data);
     // alert(data); 
     props.getQuizNameDetails(data); 
     props.getFeedback(data);  
     
     }
  return (
   <>
    <MainHeader/>
    <Formik>
      <div class="flex justify-center mt-2" >        
        <div style={{alignItems: 'center',alignSelf:"center"}}>
         <QuizNameList handleGetQuizData={handleGetQuizData} item={item}/>
         <QuizDetails item={item}/>        
        </div>        
      </div>
      </Formik>
   </>
  )
}
const mapStateToProps = (quiz) => ({   
 
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {     
      getQuizNameDetails ,
      getFeedback
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(OngoingQuiz);