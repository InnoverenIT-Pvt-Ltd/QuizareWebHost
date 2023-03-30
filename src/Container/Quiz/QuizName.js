import React, {useEffect} from 'react';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addQuizName} from './QuizAction';
import { Button, Card, Input } from 'antd';

function QuizName(props) { 
 
//   function handeleCallBack(data) {
//     if(data==="success"){props.navigation.navigate('Quiz')}
//     else{alert("Wrong")}
//  }; 
  
  return (
    <>
    
      <Formik
        initialValues={{
          duration: "",
          quizName: "",        
          quizHostId: "QH4472404666122022",         
        }}
        onSubmit={(values,{resetForm}) => {
              
          props.addQuizName(values,
            // handeleCallBack
            )
          resetForm();
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          errors,
          values,
        }) => (
        
            <div>
                <Card >
                <Input
                  name="quizName"
                  onChangeText={handleChange('quizName')}
                  style={{textAlign: 'center'}}
                  placeholder="Enter Quiz Name"
                />
                 <Input
                  name="duration"
                  onChangeText={handleChange('duration')}
                  style={{textAlign: 'center'}}
                  placeholder="Enter Response time per question"
                />
                 {/* <Text                 
                  onChangeText={handleChange('quizName')}
                  style={externalStyle.firstCardText}>
                  Standard                  
                  </Text> */}
                <Button
              
                onClick={handleSubmit}
               // onClick={() => props.navigation.navigate('Quiz')}
                >Add quiz</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuizName);
