import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import { bindActionCreators } from 'redux';
// import { withRouter} from "react-router-dom";
import * as Yup from "yup";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";
import { addQuizName } from './QuizAction';
import { Button, Card, Input } from 'antd';
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import MainHeader from '../../Components/Mainheader';

const QuizSchema = Yup.object().shape({

  quizName: Yup.string().required("Input needed!"),
 // duration: Yup.string().required("Input needed!"),

});
function QuizName(props) {
  const history = useHistory();

  function handleCallBack(data) {
    if (data === "success") {
      history.push(`/addquiz`);
    } else {
      history.push(`/quizzes`);
    }
  }



  return (
    <>
      <MainHeader />
      <Formik
        initialValues={{
          duration: "",
          quizName: "",
          quizHostId: "QH4472404666122022",
        }}
        validationSchema={QuizSchema}
        onSubmit={(values, { resetForm }) => {

          props.addQuizName(
            {
              ...values
            },

            handleCallBack
          );
          //resetForm()
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
          <Form class="flex justify-center  max-sm:w-11/12 mt-8 m-auto md:mt-12  w-1/5 ">


            <div class="shadow-2xl border-solid w-11/12 flex justify-center items-center  p-1 max-sm:m-0 h-h31 rounded-xl md:m-auto">
              <div class="flex flex-col items-center ">
                <div >
                  <div >
                    <Field
                      name="quizName"
                      //isColumn
                      component={InputComponent}
                      //onChangeText={handleChange('quizName')}
                      style={{ textAlign: 'center' }}
                      placeholder="Enter Quiz Name"

                    />
                  </div>
                  {/* <div class="mt-6">
                    <Field
                      name="duration"
                      component={InputComponent}
                      onChangeText={handleChange('duration')}
                      style={{ textAlign: 'center' }}
                      placeholder="Enter Response time per question"

                    />
                  </div> */}
                  {/* <Text                 
                  onChangeText={handleChange('quizName')}
                  style={externalStyle.firstCardText}>
                  Standard                  
                  </Text> */}
                  <div class="flex mt-4">
                    {/* <Link to="/addquiz"> */}
                    <Button
                      type="primary"
                      htmlType="submit"
                      //  Loading={props.addingQuizName}
                      onClick={handleSubmit}
                      style={{ width: "16.5rem", backgroundColor: "white", borderBlockColor: "black", borderRadius: "0", height: "2rem" }}
                    // onClick={() => props.navigation.navigate('Quiz')}
                    ><h3 class="font-extrabold">Add Quiz</h3></Button>
                    {/* </Link> */}
                  </div>
                  {/* <AntIcon name="enter" color="green" size={40} /> */}

                </div>
              </div>
            </div>

          </Form>
        )}

      </Formik>

    </>
  );
}
const mapStateToProps = ({ auth, quiz }) => ({
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