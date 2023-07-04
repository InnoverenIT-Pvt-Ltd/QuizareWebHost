import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQuizNameList, clearQuizNameDetails } from '../../Container/Quiz/QuizAction'
import { StyledSelect } from '../UI/Antd';
const Option = StyledSelect.Option;
function QuizNameList(props) {
  useEffect(() => {
    props.getQuizNameList(props.quizHostId);
    return () => {
      props.clearQuizNameDetails()
    };
  }, [])
  return (
    <>
      <div class="flex justify-center mt-2">
        <StyledSelect
          style={{
            maxWidth: "15rem",
            display: "flex",
            justifyContent: "center"
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

const mapStateToProps = ({ quiz, auth }) => ({
  quizNameList: quiz.quizNameList,
  quizHostId: auth.userDetails.userId
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