import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from "formik";
import { bindActionCreators } from 'redux';
// import { withRouter} from "react-router-dom";
import * as Yup from "yup";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";
import { addQuizName } from './QuizAction';
import { Button } from 'antd';
import FWLogo from "../../../src/images/linear_background_154 2.jpg";
import FWLogo1 from "../../../src/images/prev.png";
import FWLogo2 from "../../../src/images/forw.png";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import MainHeader from '../../Components/Mainheader';
import CreateQuiz from '../../Components/Quizs/CreateQuiz';
import Menu from '../../Components/Quizs/Menu';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const QuizSchema = Yup.object().shape({

  quizName: Yup.string().required("Input needed!"),
  // duration: Yup.string().required("Input needed!"),

});
function QuizName(props) {
  const history = useHistory();

  function handleCallBack(data) {
    if (data === "success") {
      history.push(`/chatgpt`);
    } else {
      history.push(`/quizzes`);
    }
  }



  return (
    <>
      <Menu/>
      <Formik
        initialValues={{
          duration: "",
          quizName: "",
          quizHostId: props.quizHostId,
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
          <Form class="flex  justify-center flex-col items-center  max-sm:w-11/12 mt-8 m-auto h-[60vh] md:mt-12 w-4/12 md:h-[80vh] ">

              <div>
              <img
                    className="big-logo"
                    src={FWLogo}
                    style={{ borderRadius:"0.75rem"}}
                    alt="Tekorero logo"

                  />
              </div>
            <div class="absolute md:bottom-[8rem] w-full flex flex-col justify-center items-center  max-sm:m-0 h-80  md:w-full m-auto">
            
              <div class="flex flex-col items-center ">
              <h2 class="text-3xl font-medium text-white font-[Poppins]">Name your Project</h2>
             
                <div >
                  <h3 class="text-sm font-normal text-white mt-6 font-[Poppins]">Start creating by choosing a name for your quiz</h3>
                  <div class="mt-4">
                    <Field
                      name="quizName"
                      //isColumn
                      component={InputComponent}
                      //onChangeText={handleChange('quizName')}
                      style={{ width: "100%", height: "2rem",borderRadius:"0.25rem",backgroundColor:"#E4E2E2", }}
                      placeholder="Enter quiz name"

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
                 
                

                </div>
             
              </div>
              <div class=" rounded  items-center flex justify-center mt-6" >
                   {/* <Link to="/chatgpt"> */}
                   <Button
                     type="primary"
                     htmlType="submit"
                     onClick={handleSubmit}
                     style={{  height: "2rem",backgroundColor:"white",borderRadius:'0.25rem',width:"11rem",display:"flex",justifyContent:"center",alignItems:"center" }}
                   > <div class="font-medium text-black text-xl font-[Poppins]">Create</div></Button>
                   {/* </Link> */}
                 </div> 
            </div>
          
            {/* <div class="flex justify-around items-center mt-4" >
            <img
                  className="big-logo"
                  src={FWLogo1}
                 
                  alt="Tekorero logo"
                  onClick={props.goToPreviousCard}

                />
            <div class="bg-black rounded-rounded2.8   w-44 items-center flex justify-center" >
                  
                   <Button
                     type="primary"
                     htmlType="submit"
                     onClick={handleSubmit}
                     style={{  height: "5em",backgroundColor:"black",borderRadius:'3rem',width:"11rem",display:"flex",justifyContent:"center",alignItems:"center" }}
                   > <h3 class="font-medium text-white text-3xl">Create</h3></Button>
                 
                 </div>
                 <img
                  className="big-logo"
                  src={FWLogo2}
                 
                  alt="Tekorero logo"
                  onClick={props.goToNextCard}

                />
                </div> */}
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
  quizHostId: auth.userDetails.userId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addQuizName,
    },
    dispatch,
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuizName));