import React, { useEffect, useState } from "react";
import { Field, Formik, Form } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Yup from "yup";
import { withRouter, useHistory } from "react-router-dom";
// import MainHeader from '../../Navigation/MainHeader';
import {
  deleteQuestion,
  addQuestion,
  getQuizName,
  getCategory,
  addUserQuery,
  ClearReducerDataOfLoadProgress
} from "./QuizAction";
import { Button} from "antd";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";
import MainHeader from "../../Components/Mainheader";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const QuizzSchema = Yup.object().shape({
  question: Yup.string().required("Input needed!"),
  option1: Yup.string().required("Input needed!"),
  option2: Yup.string().required("Input needed!"),
  option3: Yup.string().required("Input needed!"),
  option4: Yup.string().required("Input needed!")
});


function Quiz(props) {
  const [count, setCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCount = () => setCount(count + 1);
  const handleCategory = (id) => setSelectedCategory(id);

  // function handleCallBack(data,resetForm) {
  //   //alert(data);
  //    if(data==="success"){
  //    setSelectedCategory("")
  //     resetForm(),
  //     handleCount()
  //    }
  //    else{console.log("Wrong")}
  // };
  function isValid(value) {
    return value.trim() !== '';
  }
  useEffect(() => {
    props.getCategory();
  }, []);
  console.log(props.selectedCategory);

  const history = useHistory();

  const goToFinalize = () => {
    history.push(`/finalize`)
  }
const checkObj=props.userQuery.hasOwnProperty('status')
console.log("Obbj",checkObj)
  const options =checkObj ? props.userQuery && props.userQuery.response.ai_response.options.map(option => ({
    value: option.value,
    sn: option.sn
  })) :"no data"
  console.log(options)
 

console.log(options && options[0].value)
    console.log(options && options[1].value)

 console.log("drDD",props.userQuery)

if(!checkObj || checkObj){

}
return (
  <>
  <div class="min-h-screen">
    <MainHeader />
    <Formik
    enableReinitialize
      initialValues={{
        quizHostId: props.quizHostId,
        quizId: props.showQuiz && props.showQuiz.quizId,
        categoryId: selectedCategory,
        question: checkObj ? props.userQuery.response.ai_response.question : "",
        option1:checkObj ? options && options[0].value :"",
        option2:checkObj ? options && options[1].value :"",
        option3:checkObj ? options && options[2].value:"",
        option4:checkObj ? options && options[3].value:"",
      }}
      validationSchema={QuizzSchema}
      onSubmit={(values, { resetForm }) => {
        //alert(JSON.stringify(values));
       props.addQuestion(
          {
            ...values,
        //     question: checkObj ? props.userQuery.response.ai_response.question : "",
        // option1:checkObj ? options && options[0].value :"",
        // option2:checkObj ? options && options[1].value :"",
        // option3:checkObj ? options && options[2].value:"",
        // option4:checkObj ? options && options[3].value:"",
            quizId: props.showQuiz && props.showQuiz.quizId,
            categoryId: selectedCategory,
            number: count,
          },
          props.showQuiz && props.showQuiz.quizId
        );
        resetForm();
        props.ClearReducerDataOfLoadProgress();
        handleCount();
      
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
        <div className="h-[93vh]">
          {/* <div class="flex justify-center mt-2">
            <h2 class="text-2xl">
              {props.showQuiz && props.showQuiz.quizName}
            </h2>
          </div> */}
        
          {/* Container */}
          <Form class="flex h-hk">
            <div className="w-[20%] bg-[#6245C6]"></div>
          <div class=" max-sm:w-full flex items-center flex-col h-hk w-[80%] ">
            <div className="w-full  flex justify-center ">
              <div class="w-wk flex justify-center flex-col items-center">
                <div class=" flex justify-center flex-col w-full">
                  <h3 class="flex justify-center text-xl">
                    {/* {" "}
                    Question {count || null} */}
                     {props.showQuiz && props.showQuiz.quizName}
                  </h3>
                  <hr class="h-px bg-black border-2 w-wk mt-4 border-black"/>
                  {/* <TouchableOpacity
                // we can't use perscentge in reactNative
                
                  > */}
                  <div class="mt-4 p-6">
                    <div>
                      <Field
                        component={InputComponent}
                        // onChangeText={handleChange("question")}
                        placeholder="Add your question"
                        name="question"
                       // className={isValid(values.question) ? '' : 'invalid'} 
                        style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                      // onChangeText={handleChange('questionName')}
                      />
                    </div>
                    {/* </TouchableOpacity> */}
                    {/*               
                <TouchableOpacity
               
                
                > */}
                <div className="flex justify-between mt-3">
                    <div class="w-[47.5%]">
                      <Field
                        // multiline
                        // value={values.option1}
                        // numberOfLines={5}
                        component={InputComponent}
                        // onChangeText={handleChange("option1")}
                        placeholder="A.           Add answer 1"
                        name="option1"
                        //className={isValid(values.option1) ? '' : 'invalid'} 
                        style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                      // onChangeText={handleChange('option1')}
                      />
                    </div>
                    {/* </TouchableOpacity> */}

                    {/* <TouchableOpacity
                  
                  
                  > */}
                     <div class="w-[47.5%]">
                      <Field
                        // multiline
                        // value={values.option2}
                        // numberOfLines={5}
                        component={InputComponent}
                        // onChangeText={handleChange("option2")}
                        placeholder="B.           Add answer 2"
                        name="option2"
                       // className={isValid(values.option2) ? '' : 'invalid'} 
                        style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}

                      // onChangeText={handleChange('option2')}
                      />
                    </div>
                    </div>
                    {/* </TouchableOpacity>

                <TouchableOpacity
                
              
                  > */}
                   <div className="flex justify-between mt-3">
                   <div class="w-[47.5%]">
                      <Field
                        // multiline
                        // value={values.option3}
                        // numberOfLines={5}
                        component={InputComponent}
                        // onChangeText={handleChange("option3")}
                        placeholder="C.           Add answer 3 (Optional)"
                        name="option3"
                       // className={isValid(values.option3) ? '' : 'invalid'} 
                        style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                      />
                    </div>
                    {/* </TouchableOpacity> */}

                    {/* <TouchableOpacity
              > */}
                     <div class="w-[47.5%]">
                      <Field
                        // multiline
                        // value={values.option4}
                        // numberOfLines={5}
                        placeholder="D.           Add answer 4 (Optional)"
                        name="option4"
                        component={InputComponent}
                        // onChangeText={handleChange("option4")}
                        //className={isValid(values.option4) ? '' : 'invalid'} 
                        style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                      />
                    </div>
                    </div>
                    {/* </TouchableOpacity> */}
                  </div>
                  {/* <div class=" max-sm:flex flex-wrap justify-center mt-2 md:w-full  md:grid grid-cols-3 justify-items-center">
                    {!!props.category.length &&
                      props.category.map((item) => {
                        return (
                          <div class="m-1">
                            <Button style={{ borderColor: "black" }}>
                              <p
                                style={{
                                  textAlign: "center",
                                
                                  color:
                                    item.categoryId === selectedCategory
                                      ? "red"
                                      : "#6949FD",
                                }}
                                onClick={() =>
                                  handleCategory(item.categoryId)
                                }
                              >
                                {item.categoryName}
                              </p>
                            </Button>
                          </div>
                        );
                      })}
                  </div> */}
                  {/* <View style={{ flexDirection: 'row' }}>
                      <Card containerStyle={externalStyle.containerStyleC}>
                              <Text style={{ textAlign: 'center', color: '#6949FD' }}>Sports</Text>
                          </Card>
                          <Card containerStyle={externalStyle.containerStyleC}>
                              <Text style={{ textAlign: 'center', color: '#6949FD' }}>Culture</Text>
                          </Card>
                          <Card containerStyle={externalStyle.containerStyleC}>
                              <Text style={{ textAlign: 'center', color: '#6949FD' }}>Mixed</Text>
                          </Card>
                      </View>           */}
                </div>
                <div class="flex justify-between p-6 w-wk">
                <div class="" >
              <Button
                 style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
                type="primary"
                onClick={handleSubmit}
              
              >
               <h3 class="font-medium text-white text-base">+ Add question </h3>
              </Button>
            </div>
            {/* <div class="bg-black rounded-rounded2.8  mt-2 w-48 items-center flex " >
              <Button
                 style={{  height: "3rem",backgroundColor:"#565656",borderRadius:'3rem' }}
                type="primary"
                
                onClick={()=>{
                  const query={
                    request_type: "MCQ",  //Hardcode
                    user_question: values.question, //qstn dynamic
                    options_required: "4", //hardcode
                    userid: props.userId,
                  quizId:props.showQuiz && props.showQuiz.quizId
                  }
                  props.addUserQuery(query);}}
              
              >
               <h3 class="font-medium text-white text-2xl">Check chatgpt </h3>
              </Button>
            </div> */}
            <div class="" >
            {count >= 1 ?

              <Button type="primary"
              style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
                onClick={() => {
                  handleSubmit()
                  goToFinalize()
                }}
              >
              <h3 class="font-medium text-white text-xl">  Finalize</h3>
              </Button>
              : ""}
          </div>
            </div>
              </div>
            
            </div>
            
          </div>
          </Form>
        
          <div class="max-sm: flex flex-row justify-center items-center mt-4 ">
        
            {/* <div class="mr-1">
              <Button
                style={{
                  backgroundColor: "white",
                  borderColor: "black",
                  borderRadius: "0.75rem",
                  width: "5rem",
                  height: "2.2rem",
                }}
                type="primary"
                // title={'Add New Questions'}
                // titleStyle={externalStyle.titleStyle}
                // containerStyle={externalStyle.containerStyleBD}
                // buttonStyle={externalStyle.buttonStyleAdd}
                onClick={handleSubmit}
                Loading={props.addingQuestion}
                // onPress={() => props.navigation.navigate('Quiz Addquestions')}
              >
                <h4>Update</h4>
              </Button>
            </div>
            <div class="mr-1">
              <Button
                style={{
                  backgroundColor: "white",
                  borderColor: "black",
                  borderRadius: "0.75rem",
                  width: "5rem",
                  height: "2.2rem",
                }}
                type="primary"
                // title={'Add New Questions'}
                // titleStyle={externalStyle.titleStyle}
                // containerStyle={externalStyle.containerStyleBD}
                // buttonStyle={externalStyle.buttonStyleAdd}
                onClick={handleSubmit}
                Loading={props.addingQuestion}
                // onPress={() => props.navigation.navigate('Quiz Addquestions')}
              >
                <h4>Delete </h4>
              </Button>
            </div> */}
          </div>
          {/* Buttons */}
        </div>
      )}
    </Formik>
    </div>
  </>
);
}
const mapStateToProps = ({ auth, quiz }) => ({
  fetchingQuizName: quiz.fetchingQuizName,
  fetchingQuizNameError: quiz.fetchingQuizNameError,
  showQuiz: quiz.showQuiz,
  quizId: quiz.showQuiz.quizId,
  category: quiz.category,
  quizHostId: auth.userDetails.userId,
  userId:auth.userDetails.userId,
  userQuery:quiz.userQuery,
  addingUserQuery:quiz.addingUserQuery
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      deleteQuestion,
      addQuestion,
      getQuizName,
      getCategory,
      addUserQuery,
      ClearReducerDataOfLoadProgress
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quiz));

// import React from 'react';
// import { Link ,withRouter} from "react-router-dom";
// import CreateQuiz from '../../Components/Quizs/CreateQuiz';
// import QuizHost from './QuizHost';

// function Quiz() {
//   return (
//     <div>
//       <QuizHost/>
//     </div>
//   )
// }

// export default withRouter (Quiz);
