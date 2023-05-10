import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getQuizNameList,clearQuizNameDetails} from '../../Container/Quiz/QuizAction'
import { StyledSelect } from '../UI/Antd';
const Option = StyledSelect.Option;
function QuizNameList(props) {
  useEffect(()=>{
    props.getQuizNameList("QH4472404666122022");
    return () => {
       props.clearQuizNameDetails()
     };
   },[])
  return (
    <>
    <div  class="flex justify-center mt-2">
      <StyledSelect
      style={{
        maxWidth:"15rem"
      }}
      name="quizName"
      placeholder="Select Quiz Name"
      selectedValue={props.item}
      onChange={itemValue =>
         props.handleGetQuizData(itemValue)
      }
      > 
      {props.quizNameList.map((item, key) => (
        <Option 
       // label={`${item.quizName || ''}`}
        value={`${item.quizId || ''}`}
        key={key}
        
        >{`${item.quizName || ''}`}</Option>
        
        ))}
        </StyledSelect>
      
    </div>
    </>
  )
}

const mapStateToProps = ({quiz}) => ({  
  quizNameList:quiz.quizNameList,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {    
       getQuizNameList,        
       clearQuizNameDetails
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(QuizNameList);