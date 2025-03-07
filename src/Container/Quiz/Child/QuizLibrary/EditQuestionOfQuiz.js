import React, { useState,useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import FWLogo2 from "../../../../../src/images/tabler_bulb.png";
import { bindActionCreators } from "redux";
import { Button, Card, Drawer,Tooltip,Input } from "antd";
import AddIcon from '@mui/icons-material/Add';
import { useHistory } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import {
    getQuestionList,
    handleBackToQuiz,
    updateQuestionsInQuiz,
    addQuestionQuiz ,
    updateQuizNameByQuizId,
    addUserQuery,
    getQuizName,
    hostQuiz,
    deleteQuestion,

} from "../../../../Container/Quiz/QuizAction";
import {handleShareProcess} from "../../../Auth/AuthAction";
import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
import TextArea from "antd/es/input/TextArea";
import ProcessShareDrawer from "../../../../Components/ProcessShareDrawer";
import { StyledModal } from "../../../../Components/UI/Antd";
import { base_url, base_url2 } from "../../../../Config/Auth";
import axios from "axios";
import FWLogo1 from "../../../../images/linear_background_154 2.jpg";

function EditQuestionofQuiz(props) {
    const [isNewQuestion, setIsNewQuestion] = useState(false);
    const [currentItem, setCurrentItem] = useState("");
    const [duration, setDuration] = useState("");
    const [quizName, setQuizName] = useState(props.quizName);
    const [isEditingName, setIsEditingName] = useState(false);
    const [questionSource, setQuestionSource] = useState("Normal");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loadingSingle, setLoadingSingle] = useState(false); 
    const [loadingMultiple, setLoadingMultiple] = useState(false); 
    const [questionReq, setQuestionReq] = useState("");
    const [showInputQstn, setshowInputQstn] = useState(false);
    const [error, setError] = useState("");
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
    const history = useHistory();

    useEffect(() => {
        if (props.questionList.length === 0) {
          setIsNewQuestion(true); // Automatically switch to add mode if no questions
        }
        props.getQuizName(props.paramsQuizId);
      }, [props.questionList]);

      useEffect(() => {
        props.getQuestionList(props.paramsQuizId);
      }, [props.paramsQuizId]);

      const getNewQuestionNumber = () => props.questionList.length + 1;
    const handleAddQuestion = () => {
      setIsNewQuestion(true);
      // setSelectedQuestionIndex(null);
      setSelectedQuestionIndex(props.questionList.length);
    };
    
    function handleSetCurrentItem(item) {
      setCurrentItem(item);
    }
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
      //history.push(`/hostquiz`);
      props.hostQuiz(
        {
          duration: duration,
          quizHostId: props.quizHostId,
          quizName: props.showQuiz.quizName,
        },
        props.showQuiz.quizId
      );
      // props.hostQuiz(currentItem.quizId);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const handleUpdateQuestion = (values) => {
       
          const updatedQuestion = {
            ...values,
            id:   props.item.id,
            // quizId: props.item.quizId,
          };
          props.updateQuestionsInQuiz(updatedQuestion, props.item.id);
        }

        const handleDeleteQuestion = (id) => {
          props.deleteQuestion(id,callIntoQuiz);
          
      };
  const callIntoQuiz=()=>{
    history.push(`/updateQuizInLibrary/${props.showQuiz.quizName}/${props.showQuiz.quizId}`);
  }
  const handleQuestionSelect = (index) => {
    setSelectedQuestionIndex(index);
    setIsNewQuestion(false);
};
        const handleUpdateName = () => {
            const updatedName = {
                quizHostId:props.quizHostId,
              quizName: quizName,
            };
            props.updateQuizNameByQuizId(updatedName, props.quizId);
            setIsEditingName(false); 
          };
          const checkObj = props.userQuery.hasOwnProperty("status");
          const question = checkObj ? props.userQuery.response.ai_response.question : "";
          const options = checkObj ? props.userQuery.response.ai_response.options : [];
          const selectedQuestion = selectedQuestionIndex >= 0 && props.questionList[selectedQuestionIndex]
          ? props.questionList[selectedQuestionIndex] : {};
   
          // console.log(props.item);
    console.log(selectedQuestion);
    
    const GenerateSingleQuizUsingChatgpt = async (values) => {
      setError(""); 
      setLoadingSingle(true);
      const quizNameForBackend = props.showQuiz.quizName;  
    // const uniqueQuestionPrompt = `${quizNameForBackend} - New Unique Question ${Date.now()}`;
  
      const QGen = {
          noOfQstn: "1",
          quizHostId: props.quizHostId,
          quizName: props.showQuiz.quizName,
          type: "ChatGpt",
      };

      try {
          const generateQuizResponse = await axios.post(`${base_url}/quiz/save/usingChatGpt`, QGen); 

          if (!props.showQuiz.quizId) {
              throw new Error("Failed to generate quiz. Quiz ID is missing.");
          }
          setshowInputQstn(false);

          const query = {
              user_question:values.question.trim() ? values.question : props.showQuiz.quizName,
              questions_required: "1",
              request_type: "MCQ_Content",
              options_required: "4",
              userid: props.quizHostId,
              quizId: props.showQuiz.quizId,
              type: "ChatGpt",
              
          };

          const userQueryResponse = await axios.post(`${base_url2}/user_query/`, query); 
          const existingQuestions = props.questionList || [] ;
          const newQuestions = userQueryResponse.data.response.ai_response.questions.map((qstn, index) => ({
            liveInd: true,
            number: index,
            option1: qstn.options[0]?.value || "",
            option2: qstn.options[1]?.value || "",
            option3: qstn.options[2]?.value || "",
            option4: qstn.options[3]?.value || "",
            question: qstn.question,
            quizId: props.showQuiz.quizId,
            type: "ChatGpt",
          }));
          const existingQuestionsMap = new Set(existingQuestions.map(q => q.question.toLowerCase().trim()));
          const uniqueQuestions = newQuestions.filter((newQuestion) => {
            return !existingQuestionsMap.has(newQuestion.question.toLowerCase().trim());
          });
          if (uniqueQuestions.length > 0) {
            const userPre = {
              questionDTOS: uniqueQuestions, 
              quizId: props.showQuiz.quizId,
            };
    
          // const userPre = {
          //     questionDTOS: userQueryResponse.data.response.ai_response.questions.map((qstn, index) => ({
          //         liveInd: true,
          //         number: index,
          //         option1: qstn.options[0]?.value || "",
          //         option2: qstn.options[1]?.value || "",
          //         option3: qstn.options[2]?.value || "",
          //         option4: qstn.options[3]?.value || "",
          //         question: qstn.question,
          //         quizId: props.showQuiz.quizId,
          //         type: "ChatGpt",
          //     })),
          //     quizId: props.showQuiz.quizId,
          // };
    
    
          await axios.post(`${base_url}/question/multiple/questionsSave`, userPre); 
          props.getQuestionList(props.showQuiz.quizId);
        
        } else {
          setError("No unique questions were generated.");
        }
    
      } catch (err) {
          console.error(err);
          setError(err.message || "An error occurred while generating the quiz.");
      }
      finally {
        setLoadingSingle(false);
    } 
    };

    const GenerateMultipleQuizUsingChatgpt = async () => {
      setError(""); 
      setLoadingMultiple(true);
      const quizNameForBackend = props.showQuiz.quizName;  
    const uniqueQuestionsPrompt = `${quizNameForBackend} - Generate ${questionReq} Unique Questions ${Date.now()}`;

      const QGen = {
          noOfQstn: questionReq,
          quizHostId: props.quizHostId,
          quizName: quizNameForBackend,
          type: "ChatGpt",
      };

      try {
          const generateQuizResponse = await axios.post(`${base_url}/quiz/save/usingChatGpt`, QGen); 

          if (!props.showQuiz.quizId) {
              throw new Error("Failed to generate quiz. Quiz ID is missing.");
          }
          setshowInputQstn(false);

          const query = {
              user_question:uniqueQuestionsPrompt,
              questions_required: questionReq,
              request_type: "MCQ_Content",
              options_required: "4",
              userid: props.quizHostId,
              quizId: props.showQuiz.quizId,
              type: "ChatGpt",
          };

          const userQueryResponse = await axios.post(`${base_url2}/user_query/`, query); 

       
          const userPre = {
              questionDTOS: userQueryResponse.data.response.ai_response.questions.map((qstn, index) => ({
                  liveInd: true,
                  number: index,
                  option1: qstn.options[0]?.value || "",
                  option2: qstn.options[1]?.value || "",
                  option3: qstn.options[2]?.value || "",
                  option4: qstn.options[3]?.value || "",
                  question: qstn.question,
                  quizId: props.showQuiz.quizId,
                  type: "ChatGpt",
              })),
              quizId: props.showQuiz.quizId,
          };


          await axios.post(`${base_url}/question/multiple/questionsSave`, userPre); 
          
          props.getQuestionList(props.showQuiz.quizId);
          // props.history.push(`/updateQuizNameInLibrary/${quizName}/${generateQuizResponse.data.duration}/${quizId}`);
          // handleAddQuestion();
      } catch (err) {
          console.error(err);
          setError(err.message || "An error occurred while generating the quiz.");
      }
      finally {
        setLoadingMultiple(false);
      }
  };

  if (loadingMultiple) {
    return <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-loader">
    <div className="loader"><img src={FWLogo1}  width={10000}  style={{ borderRadius:"0.75rem"}} alt="Loading..."  />
    </div>
    </div>;}


  const validateOptions = (values) => {
    const errors = {};

    const options = [values.option1, values.option2, values.option3, values.option4];

    // Check if all options are unique
    const uniqueOptions = new Set(options);
    if (uniqueOptions.size !== options.length) {
        errors.options = "All options must be different.";
    }

    return errors;
}

// if(props.fetchingQuizName){
//   return  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-loader">
//   <div className="loader"><img src={FWLogo1}  width={10000}  style={{ borderRadius:"0.75rem"}} alt="Loading..."  /></div>
// </div>;
// }

if (loadingSingle) {
  return <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-loader">
  <div className="loader"><img src={FWLogo1}  width={10000}  style={{ borderRadius:"0.75rem"}} alt="Loading..."  /></div>
</div>;
}
    return (
        <>
            <Formik
             enableReinitialize
                initialValues={{
                    quizHostId: props.quizHostId,
                    quizId: props.quizId,
                    question: question || selectedQuestion.question || "", 
                     option1: checkObj ? options[0]?.value : selectedQuestion.option1 || "", 
    option2: checkObj ? options[1]?.value : selectedQuestion.option2 || "",
    option3: checkObj ? options[2]?.value : selectedQuestion.option3 || "",
    option4: checkObj ? options[3]?.value : selectedQuestion.option4 || "", 
                  
                }}
                onSubmit={(values, { resetForm }) => {
                    if (isNewQuestion) {
                       
                        const newQuestionNo = (selectedQuestion.questionNo || 0) + 1;
                        props.addQuestionQuiz(
                            {
                                quizId: props.quizId,
                                quizHostId: props.quizHostId,
                                questionNo: newQuestionNo,
                                type: questionSource,
                                question: checkObj ? question : values.question,
        option1: checkObj ? options[0]?.value : values.option1,
        option2: checkObj ? options[1]?.value : values.option2,
        option3: checkObj ? options[2]?.value : values.option3,
        option4: checkObj ? options[3]?.value : values.option4,
                            },
                            props.quizId
                        );
                    } else {
                        props.updateQuestionsInQuiz(
                            { ...values },
                            selectedQuestion.id,
                            props.quizId
                        );
                    }
                    setQuestionSource("Normal");
                    resetForm(); 
                    setIsNewQuestion(false);  

                }}
                validate={validateOptions}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                    errors,
                    values,
                }) => (
                  <>
                  <div className="flex">
                   <div className="w-[20%] bg-[#6245C6] p-4 max-sm:hidden">
                <div className="overflow-y-auto h-[70vh]" style={{scrollbarWidth:"thin"}}>
                    {props.questionList.map((item, i) => (
                      console.log(i),
                        <Card
                            key={i}
                            className={`cursor-pointer mb-2 ${
                              i === selectedQuestionIndex ? "bg-blue-200 border" : ""} 
                              ${i === 0 ? "bg-gray-300" : ""}  
                              ${item.completeInd ? "border-green-500" : "border-red-500"} border-4`}
                            onClick={() => handleQuestionSelect(i)}
                        >
                            Question {i + 1}
                            <div className="text-sm font-semibold">{item.question}</div>
                        </Card>
                    ))}
                    </div>
                    <div className="flex w-wk justify-center">
                  <Tooltip title="Add Question">
                        <AddIcon className="!text-[5rem] cursor-pointer !text-white"
                          onClick={handleAddQuestion}
                        />
                        </Tooltip>
                      </div>
                      <div className="flex justify-between">
                      <div className="">           
<Button
 type="primary"
  style={{ height: "2.5rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem',width:"5rem" }}
  onClick={() => {
    showModal();
    //handleSetCurrentItem(item);
  }}
  disabled={!props.questionList.every(item => item.completeInd)}
  title={!props.questionList.every(item => item.completeInd)
    ? "Please complete all red mark questions before finalizing or wait for the process to complete."
    : ""}
>
<h3 className="font-medium text-white text-base">Host</h3>
</Button>
</div> 
                      <div className="">
<Button
 type="primary"
 disabled={!props.showQuiz.quizHostInd}
  style={{ height: "2.5rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem',width:"5rem" }}
 onClick={() => {
  props.handleShareProcess(true);
}}
>
<h3 className="font-medium text-white text-base">Share</h3>
</Button>

</div> 
</div>
                </div>
                <Drawer
                title="Select a Question"
                placement="left"
                onClose={() => props.setIsDrawerVisible(false)}
                visible={props.isDrawerVisible}
                width={300}
              > {props.questionList.map((item, i) => (
                <Card
                    key={i}
                    className={`cursor-pointer mb-2 ${i === selectedQuestionIndex ? 'bg-blue-200' : ''}`}
                    onClick={() => handleQuestionSelect(i)}
                >
                    Question {i + 1}
                </Card>
            ))}
            </Drawer>
                    <Form class="flex h-hk w-wk">
                         
                         <div class=" max-sm:w-full flex items-center flex-col h-[93vh] w-wk ">
                         <div className="w-full  flex justify-center flex-col ">
                                {/* Container */}
                                <div class="w-wk flex justify-center flex-col items-center">
                                <div className="flex items-center justify-center ">
                                <Button
                className="md:hidden"
                icon={<MenuOutlined className="!text-black"/>}
                onClick={() => props.setIsDrawerVisible(true)}
              > 
              </Button>
                                        {/* <Card style={{ fontSize: 22, alignSelf: "center" }}> */}
                                        <div>
      {/* Conditionally show input or name text */}
      {isEditingName ? (
        <input
          type="text"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleUpdateName()} // Trigger update on 'Enter'
          onBlur={handleUpdateName} // Optional: Update on blur as well
          autoFocus // Focus the input automatically when editing
        />
      ) : (
        <div onClick={() => setIsEditingName(true)} className="cursor-pointer text-xl font-[Poppins]">{quizName}</div> // Click to enter edit mode
      )}
    </div>
                                            {/* (<h3 class="flex justify-center text-base ">Question {props.questionNo || null}</h3>) */}
                                            </div>
                                        {/* </Card> */}
                                        <hr class="h-px bg-black border-2 w-wk mt-4 border-black"/>
                                      
                                        <div class="mt-4 w-wk p-4">
                                            <Field
                                               
                                                name="question"
                                                value={`${values.question}`}
                                                component={InputComponent}
                                                placeholder={`Question ${
                                                  isNewQuestion ? getNewQuestionNumber() : selectedQuestionIndex + 1
                                                }: Add your question`}
                                                onChangeText={() => handleChange("question")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                                onKeyDown={(e) => e.key === 'Enter' && handleUpdateQuestion(values)}
                                               // onKeyUp={(e) => e.key === 'Enter' && handleSubmit()}
                                              
                                            />
                                        </div>
                                        {props.showQuiz.chatGptQuestionInd && (
                                          <>
                        <div className="flex items-center w-wk justify-center mt-4 p-1">
                          <div>
                            <img
                              className="big-logo"
                              src={FWLogo2}
                              alt="Tekorero logo"
                            />
                          </div>
                        
                          
                          <div className="text-[#3B16B7] text-base mr-2 font-medium">
                            Need help? Generate your Responses with AI using{" "}
                          </div>
                          <div className="text-[#3B16B7] text-base underline font-bold cursor-pointer"
                            
                          
                          
                            onClick={() => {
                              // const query = {
                              //   request_type: "MCQ",
                              //   user_question: values.question,
                              //   options_required: "4",
                              //   userid: props.userId,
                              //   quizId: props.item.quizId,
                              // };
                              GenerateSingleQuizUsingChatgpt(values);
                              setQuestionSource("ChatGpt");
                            }}
                          >
                           ChatGPT
                          
                      
                          </div>
                         

                        </div>

<div className="flex items-center w-wk justify-center mt-2 p-1">
<div>
  <img
    className="big-logo"
    src={FWLogo2}
    alt="Tekorero logo"
  />
</div>


<div className="text-[#3B16B7] text-base mr-2 font-medium">
  Generate multiple questions with AI using{" "}
</div>
<div className="text-[#3B16B7] text-base underline font-bold cursor-pointer"

  onClick={() => {
    setshowInputQstn(true);
    
  }}
>
 ChatGPT
</div>
</div>
{showInputQstn && (
  <Input
  className="text-black placeholder-black-500"
  style={{width:"12rem",color:"black"}}
  placeholder="Enter No.of Questions"
  value={questionReq}
  onChange={(e) => setQuestionReq(e.target.value)}
  onKeyDown={(e) => e.key === 'Enter' && GenerateMultipleQuizUsingChatgpt()}
/>
)}
</>
                        )}
                                        <div className="flex justify-between  w-wk p-4">
                                        <div class="w-[47.5%]">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option1}`}
                                                name="option1"
                                                 placeholder="A. Add Correct Answer"
                                                onChangeText={() => handleChange("option1")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                                onKeyDown={(e) => e.key === 'Enter' && handleUpdateQuestion(values)}
                                                //onKeyUp={(e) => e.key === 'Enter' && handleSubmit()}
                                            />
                                            {errors.options && <div className="text-red-500">{errors.options}</div>}
                                        </div>
                                        <div class="w-[47.5%]">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option2}`}
                                                placeholder="B. Add answer 2"
                                                name="option2"
                                                onChangeText={() => handleChange("option2")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                                onKeyDown={(e) => e.key === 'Enter' && handleUpdateQuestion(values)}
                                                //onKeyUp={(e) => e.key === 'Enter' && handleSubmit()}
                                            />
                                             {errors.options && <div className="text-red-500">{errors.options}</div>}
                                        </div>
                                        </div>
                                        <div className="flex justify-between  w-wk p-4">
                                        <div class="w-[47.5%]">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option3}`}
                                               placeholder="C. Add answer 3"
                                                name="option3"
                                                onChangeText={() => handleChange("option3")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                                onKeyDown={(e) => e.key === 'Enter' && handleUpdateQuestion(values)}
                                                //onKeyUp={(e) => e.key === 'Enter' && handleSubmit()}
                                            />
                                            {errors.options && <div className="text-red-500">{errors.options}</div>}
                                        </div>
                                        <div class="w-[47.5%]">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option4}`}
                                                 placeholder="D. Add answer 4"
                                                name="option4"
                                                onChangeText={handleChange("option4")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                                onKeyDown={(e) => e.key === 'Enter' && handleUpdateQuestion(values)}
                                               // onKeyUp={(e) => e.key === 'Enter' && handleSubmit()}
                                            />
                                            {errors.options && <div className="text-red-500">{errors.options}</div>}
                                        </div>
                                        </div>
                                        <div class="flex justify-between p-6 w-wk">  
                                        {selectedQuestionIndex !== null && !isNewQuestion && (
                                                <div class="" >
                                                <Button
                                                    title={""}
                                                    type="primary"
                                                    onClick={() => handleDeleteQuestion(selectedQuestion.id)}
                                                    style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
                                                >
                                                     <h3 class="font-medium text-white text-base font-[Poppins]">Delete</h3>
                                                </Button>
                                                </div>
                                            )}
                                            {/* <div>
                                            <Button
                                                title=""
                                                type="primary"
                                                onClick={() => handleSubmit()}
                                                style={{ height: "3rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem' }}
                                            >
                                                <h3 class="font-medium text-white text-base">
                                                Update

                                                </h3>
                                            </Button>
                                        </div> */}
                                        <div>
                                        {/* <Button
                                                title={isNewQuestion ? "Save Question" : "Add New Question"}
                                                type="primary"
                                                onClick={() => {
                                                    if (isNewQuestion) {
                                                        handleSubmit(); // Save the question
                                                    } else {
                                                        handleAddQuestion(); // Enter add mode
                                                    }
                                                }}
                                                style={{ height: "3rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem' }}
                                            >
                                                <h3 className="font-medium text-white text-base font-[Poppins]">
                                                    {isNewQuestion ? "Save Question" : "Add New Question"}
                                                </h3>
                                            </Button> */}
                                            <Button
                                                title="Save Question"
                                                type="primary"
                                                onClick={() => {
                                                    
                                                        handleSubmit(); // Enter add mode
                                                      }}
                                                style={{ height: "3rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem' }}
                                            >
                                                <h3 className="font-medium text-white text-base font-[Poppins]">
                                                    Save Question
                                                </h3>
                                            </Button>
                                    </div>    

                                            <div class="" >
                        <Button
                                                title={""}
                                                type="primary"
                                                style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
                                                onClick={() => props.backTo()}

                                            ><h3 class="font-medium text-white text-base font-[Poppins]">Back To Quiz Library</h3></Button>
                                            </div>
                                        </div>
                                       
                                </div>

                                {/* Buttons */}
                            </div>
                        </div>
                       
                    </Form>
                    </div>
                    </>
                )}
            </Formik>
            <ProcessShareDrawer            
                  processShareModal={props.processShareModal}
                    handleShareProcess={props.handleShareProcess}
                />
                 <StyledModal
                        title="Host Quiz"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <form onSubmit={() =>
                          handleOk()
                        }
                        >
                          <input
                            className="border border-blue-900 rounded-md px-1 w-full"
                            name="duration"
                            value={duration}
                            onChange={(ev) => setDuration(ev.target.value)}
                            placeholder="Enter the response time per question in seconds"
                          />
                        </form>
                      </StyledModal>
        </>
    );
}
const mapStateToProps = ({ auth, quiz }) => ({
    fetchingQuizName: quiz.fetchingQuizName,
    fetchingQuizNameError: quiz.fetchingQuizNameError,
    showQuiz: quiz.showQuiz,
    quizId: quiz.showQuiz.quizId,
    category: quiz.category,
    userQuery:quiz.userQuery,
    addingUserQuery:quiz.addingUserQuery,
    questionList: quiz.questionList,
    quizHostId: auth.userDetails.userId,
    processShareModal: auth.processShareModal,

});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getQuestionList,
            updateQuestionsInQuiz,
            addQuestionQuiz, 
            handleBackToQuiz,
            updateQuizNameByQuizId,
            addUserQuery,
            getQuizName,
            handleShareProcess,
            hostQuiz,
            deleteQuestion
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionofQuiz);





// import React from "react";
// import { Field, Form, Formik } from "formik";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { Button, Card } from "antd";
// import { MenuOutlined } from "@ant-design/icons";
// import {
//     getQuestionList,
//     handleBackToQuiz,
//     updateQuestionsInQuiz,
// } from "../../../../Container/Quiz/QuizAction";
// import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
// import TextArea from "antd/es/input/TextArea";


// function EditQuestionofQuiz(props) {

//     console.log(props.item)
//     return (
//         <>
//             <Formik
//                 initialValues={{
//                     quizHostId: props.quizHostId,
//                     quizId: props.item.quizId,
//                     categoryId: props.item.categoryId,
//                     question: props.item.question,
//                     option1: props.item.option1,
//                     option2: props.item.option2,
//                     option3: props.item.option3,
//                     option4: props.item.option4,
//                 }}
//                 onSubmit={(values, { resetForm }) => {
//                     props.updateQuestionsInQuiz
//                         (
//                             {
//                                 ...values,
//                             },
//                             props.item.id,
//                             props.quizId
//                             //(data)=>handleCallBack(data,resetForm)
//                         );
//                 }}
//             >
//                 {({
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     setFieldValue,
//                     errors,
//                     values,
//                 }) => (
//                     <Form class="flex h-hk w-wk">
                         
//                          <div class=" max-sm:w-full flex items-center flex-col h-[93vh] w-wk ">
//                          <div className="w-full  flex justify-center flex-col ">
//                                 {/* Container */}
//                                 <div class="w-wk flex justify-center flex-col items-center">
//                                 <div className="flex items-center justify-center ">
//                                 <Button
//                 className="md:hidden"
//                 icon={<MenuOutlined className="!text-black"/>}
//                 onClick={() => props.setIsDrawerVisible(true)}
//               > 
//               </Button>
//                                         {/* <Card style={{ fontSize: 22, alignSelf: "center" }}> */}
//                                             <h3 class="flex justify-center text-xl">Question {props.questionNo || null}</h3>
//                                             </div>
//                                         {/* </Card> */}
//                                         <hr class="h-px bg-black border-2 w-wk mt-4 border-black"/>
//                                         <div class="mt-4 w-wk p-4">
//                                             <Field
                                               
//                                                 name="question"
//                                                 value={`${values.question}`}
//                                                 component={InputComponent}
//                                                 onChangeText={() => handleChange("question")}
//                                                 style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
//                                             />
//                                         </div>
//                                         <div className="flex justify-between  w-wk p-4">
//                                         <div class="w-[47.5%]">
//                                             <Field
//                                                 component={InputComponent}
//                                                 value={`${values.option1}`}
//                                                 name="option1"
//                                                 onChangeText={() => handleChange("option1")}
//                                                 style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
//                                             />
//                                         </div>
//                                         <div class="w-[47.5%]">
//                                             <Field
//                                                 component={InputComponent}
//                                                 value={`${values.option2}`}
//                                                 placeholder="Option 2"
//                                                 name="option2"
//                                                 onChangeText={() => handleChange("option2")}
//                                                 style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
//                                             />
//                                         </div>
//                                         </div>
//                                         <div className="flex justify-between  w-wk p-4">
//                                         <div class="w-[47.5%]">
//                                             <Field
//                                                 component={InputComponent}
//                                                 value={`${values.option3}`}
//                                                 placeholder="Option 3"
//                                                 name="option3"
//                                                 onChangeText={() => handleChange("option3")}
//                                                 style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
//                                             />
//                                         </div>
//                                         <div class="w-[47.5%]">
//                                             <Field
//                                                 component={InputComponent}
//                                                 value={`${values.option4}`}
//                                                 placeholder="Option 4"
//                                                 name="option4"
//                                                 onChangeText={handleChange("option4")}
//                                                 style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
//                                             />
//                                         </div>
//                                         </div>
//                                         <div class="flex justify-between p-6 w-wk">    
//                                         <div class="" >
//                                             <Button
//                                                 title={""}
//                                                 type="primary"
//                                                 onClick={() => props.handleDeleteQuestion(props.item.id)}
//                                                 style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
//                                             >
//                                                  <h3 class="font-medium text-white text-base">Delete</h3>
//                                             </Button>
//                                             </div>
//                                             <div class="" >
//                                             <Button
//                                                 title={""}
//                                                 type="primary"
//                                                 onClick={() => handleSubmit()}
//                                                 style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
//                                             >
//                                                  <h3 class="font-medium text-white text-base">Update</h3>
//                                             </Button>
//                                             </div>
//                                             <div class="" >
//                         <Button
//                                                 title={""}
//                                                 type="primary"
//                                                 style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
//                                                 onClick={() => props.backTo()}

//                                             ><h3 class="font-medium text-white text-xl">Back To Quiz</h3></Button>
//                                             </div>
//                                         </div>
                                        

//                                 </div>

//                                 {/* Buttons */}
//                             </div>
//                         </div>
                       
//                     </Form>
//                 )}
//             </Formik>
//         </>
//     );
// }
// const mapStateToProps = ({ auth, quiz }) => ({
//     fetchingQuizName: quiz.fetchingQuizName,
//     fetchingQuizNameError: quiz.fetchingQuizNameError,
//     showQuiz: quiz.showQuiz,
//     quizId: quiz.showQuiz.quizId,
//     category: quiz.category,
//     questionList: quiz.questionList,
//     quizHostId: auth.userDetails.userId
// });

// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators(
//         {
//             getQuestionList,
//             updateQuestionsInQuiz,
//             handleBackToQuiz
//         },
//         dispatch
//     );

// export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionofQuiz);