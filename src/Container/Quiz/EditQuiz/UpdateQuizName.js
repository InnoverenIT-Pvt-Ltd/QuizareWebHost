import React, {useEffect} from 'react';
import {Field, Formik} from 'formik';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";
import { InputComponent } from "../../../Components/Forms/Formik/InputComponent";
import {updateQuizNameByQuizId,getQuizName} from '../QuizAction';
import { Button, Card } from 'antd';

function UpdateQuizName(props) { 
  const history = useHistory();
 
  function handleCallBack(data) {
    history.push(`/updatequiz`);
  }
  useEffect(()=>{
    props.getQuizName(props.route.params.quizId);   
   },[])
  function handeleCallBack(data) {
    if(data==="success"){
   // alert("success")
   props.navigation.navigate('Edit Quiz')
  }
   // else{alert("Wrong")}
 }
 // const duration=props.showQuiz&&props.showQuiz.duration;
  
  console.log("quiz",props.showQuiz)
  return (
    <>
      <Formik
      enableReinitialize
        initialValues={{
          duration: props.showQuiz&&props.showQuiz.duration,
          quizName: props.showQuiz&&props.showQuiz.quizName,                
        }}
        onSubmit={(values) => {     
         // alert(values)
          props.updateQuizNameByQuizId({
            ...values,
          },
          props.showQuiz&&props.showQuiz.quizId,
          (data)=>handeleCallBack(data))
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          errors,
          values,
        }) => (
          <div >
            
            <div >
            <div>
                <Card>
                <Field
                  name="quizName"
                  onChangeText={handleChange('quizName')}
                  component={InputComponent}
                  value={`${values.quizName}`}
                  placeholder="Enter Quiz Name"
                />
                 <Field
                  name="duration"
                  onChangeText={handleChange('duration')}
                  component={InputComponent}
                  value={`${values.duration}`}
                  placeholder="Enter Response time per question"
                />
                 
                 {/* <TextInput                 
                 // onChangeText={handleChange('quizName')}
                  defaultValue="Standard"
                  style={externalStyle.textinputbox}
                  />                                    */}
                 
                <Button
                type="primary"
                onPress={handleSubmit}
                >Update Quiz</Button>
              </Card>
              </div>
              </div>           
           
            
          </div>
        )}
      </Formik>
     
    </>
  );
}
const mapStateToProps = ({auth, quiz}) => ({
  updateQuizNameQuizId:quiz.updateQuizNameQuizId,
  updateQuizNameQuizIdError:quiz.updateQuizNameQuizIdError,
  showQuiz: quiz.showQuiz, 
  fetchingQuizName:quiz.fetchingQuizName,
 // quizId:quiz.showQuiz.quizId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {      
      updateQuizNameByQuizId,
      getQuizName,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuizName);
