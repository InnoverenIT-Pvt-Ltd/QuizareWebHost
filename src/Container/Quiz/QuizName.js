import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import {bindActionCreators} from 'redux';
// import { withRouter} from "react-router-dom";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";
import {addQuizName} from './QuizAction';
import { Button, Card, Input } from 'antd';
import {withRouter } from "react-router-dom";


function QuizName(props) { 
  // const history = useHistory();
 
  // function handleCallBack(data) {
  //   history.push(`/addquiz`);
  // }

  return (
    <>
    
      <Formik
        initialValues={{
          duration: "",
          quizName: "",        
          quizHostId: "QH4472404666122022",         
        }}
        onSubmit={(values,{resetForm}) => {
              
          props.addQuizName(
            {
              ...values
            },
           
            // handleCallBack
            );
            resetForm()
        }}
        >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          errors,
          values,
        }) => (
        
            <div class="flex flex-col items-center mt-8">
                <Card >
                  <div class="w-80">
                  <Field
                  name="quizName"
                  isColumn
                  component={InputComponent}
                  //onChangeText={handleChange('quizName')}
                  style={{textAlign: 'center'}}
                  placeholder="Enter Quiz Name"
                  inlineLabel
                />
                </div>
                <div class="w-80 mt-6">
                <Field
                  name="duration"
                  component={InputComponent}
                  onChangeText={handleChange('duration')}
                  style={{textAlign: 'center'}}
                  placeholder="Enter Response time per question"
                  inlineLabel
                />
                </div>
                 {/* <Text                 
                  onChangeText={handleChange('quizName')}
                  style={externalStyle.firstCardText}>
                  Standard                  
                  </Text> */}
                  <div class="mt-8">
                  {/* <Link to="/addquiz"> */}
                <Button
                type="primary"
                htmlType="submit" 
                //  Loading={props.addingQuizName}
                   onClick={handleSubmit}
                 style={{width:"19rem",height:"2rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}
               // onClick={() => props.navigation.navigate('Quiz')}
                ><h3 class="font-extrabold">Add quiz</h3></Button>
                  {/* </Link> */}
                </div>
                {/* <AntIcon name="enter" color="green" size={40} /> */}
              </Card>
              </div>
          
        )}
      </Formik>
     
    </>
  );
}
const mapStateToProps = ({auth, quiz}) => ({
  addingQuizName: quiz.addingQuizName,
  addingQuizNameError: quiz.addingQuizNameError,  
  quizName: quiz.quizName, 
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {      
      addQuizName,
    },
    dispatch,
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuizName));