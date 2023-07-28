import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
import * as Yup from "yup";
import {
  getFinalizeQuiz,
  handleQuizHostModal,
  deleteHostQuiz,
  hostQuiz,
  addQuizName,

  updateQuizNameByQuizId,
} from "../../QuizAction";
import { Button, Card, Modal } from "antd";
import { useHistory, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import MainHeader from "../../../../Components/Mainheader";
import { Form, Field, Formik } from "formik";

const { useState } = React;

function FinalizeQuiz(props) {
  const history = useHistory();
  const [duration, setDuration] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    history.push(`/hostquiz`);
    props.hostQuiz(
      {
        duration: duration,
        quizHostId: props.quizHostId,
        quizName: props.showQuiz && props.showQuiz.quizName,
      },
      props.showQuiz && props.showQuiz.quizId
    );
    // props.hostQuiz(props.showQuiz && props.showQuiz.quizId);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function handleCallBack(data) {
    history.push(`/updateQuizName`);
  }
  useEffect(() => {
    props.getFinalizeQuiz(props.showQuiz && props.showQuiz.quizId);
  }, [props.showQuiz && props.showQuiz.quizId]);
  return (
    <>
      <MainHeader />
      <Formik>
        <Form class="flex justify-center max-sm:w-wk mt-8 m-auto md:mt-12  w-2/5  h-h50  ">
          {/* <div className="bg-white rounded-rounded2.8 mt-3 "> */}

          <div class="shadow-2xl p-1 bg-white border-solid flex justify-evenly flex-col max-sm:m-0 h-h26 w-11/12 rounded-rounded3  md:m-auto">
            <h2 class="text-xl mt-32  flex justify-center">{`${props.finalizeQuiz.quizName || ""
              }`}</h2>
               <hr class="h-px bg-black border-2 w-wk mt-4 border-black"/>
               <div class="p-4">
        
            <div className=" flex justify-between   ">
                  <div class="flex flex-row ">
                    <h3 class="">Created:</h3>
                    <h3 class=" ml-1 leading-5">{`${moment(props.finalizeQuiz.creationDate).format("ll") || ""
                      }`}</h3>
                  </div>
                  <div class="flex flex-row ">
                    <h3 class="">Last edited:</h3>
                    <h3 class="ml-1 leading-5">{`${moment(props.finalizeQuiz.creationDate).format("ll") || ""
                      }`}</h3>
                  </div>
                  </div>
                  <div class="flex flex-row justify-between mt-6">
                    <div>
                  <h3>
                    Questions: {`${props.finalizeQuiz.noOfQuestions || ""}`}
                  </h3>
                  </div>
                  <h3 >
                    Categories: {`${props.finalizeQuiz.categories || ""}`}
                  </h3>
                  </div>
           
            <div class="flex justify-center mt-8">
              <h3 class="text-xl ">Select quiz rules</h3>
            </div>
            <div>
              <div
                style={{ boxShadow: "0.01rem 0.01rem 0.12rem 0.01rem" }}
                className="bg-white rounded-2xl  w-full flex justify-center ">
                <div class="shadow-2xl border-solid w-full flex justify-center flex-col  p-2 max-sm:m-0 h-20 rounded-2xl md:m-auto">
                  <div class="flex flex-row">
                    <h2 class="text-base font-bold">Question response time:</h2>
                    &nbsp;
                    <h2 class="text-base font-bold">
                      {`${props.finalizeQuiz.duration || ""}`} seconds
                    </h2>
                  </div>
                  <div class="flex flex-row">
                    <h2 class="text-base font-bold">Scoring system:</h2>
                    &nbsp;
                    <h2 class="text-base font-bold">Standard</h2>
                  </div>
                </div>
              </div>
            </div>
            
            </div>
            <div class="flex flex-row mt-4 justify-between p-4">
              {/* <Link to="/create"> */}
              <div class=" w-full flex ">
              <Button
               // type="primary"
                style={{  height: "4em",backgroundColor:"grey",borderRadius:'3rem',width:"8rem" }}
                onClick={() =>
                  props.deleteHostQuiz(
                    props.showQuiz && props.showQuiz.quizId,
                    //  handleCallBack()
                  )
                }
              >
                <h2 class="text-white text-xl font-medium">Delete</h2>
              </Button>
              </div>
              {/* </Link> */}
              <Link to="/updateQuizName">
              <div class="w-full flex ">
                <Button
                 style={{  height: "4em",backgroundColor:"grey",borderRadius:'3rem',width:"8rem" }}
                  //type="primary"

                //   onClick={() => props.navigation.navigate('Quiz Invite')}
                >
                 <h2 class="text-white text-xl font-medium">Edit </h2>
                </Button>
                </div>
              </Link>
            </div>
              {/* <Link to="/hostquiz"> */}
              <div class=" p-1 mt-8  items-center flex justify-center"
>
              <Button
               // type="primary"
                style={{  height: "4em",borderRadius:'3rem',width:'10rem',backgroundColor:"black" }}
                // onClick={() =>
                //  props.handleQuizHostModal(true)
                // }
                onClick={showModal}
              // onClick={() => props.hostQuiz(props.showQuiz.quizId)}
              >
                <h2 class="text-white text-2xl font-medium">Host </h2>
              </Button>
              </div>
              {/* </Link> */}
              {/* <Link to="/addquizin">
                <Button
                  type="primary"
                  style={{ backgroundColor: "white" }}
                // onClick={() => props.hostQuiz(props.showQuiz.quizId)}
                >
                  <h3>Add Question</h3>
                </Button>
              </Link> */}
              <Modal
                title="Host Quiz"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <form onSubmit={() => handleOk()}>
                  <input
                    className="border border-blue-900 rounded-md px-1 w-full"
                    name="duration"
                    value={duration}
                    onChange={(ev) => setDuration(ev.target.value)}
                    placeholder="Enter Response time in seconds"
                  />
                </form>
              </Modal>
            </div>
        
          {/* </div> */}
        </Form>
      </Formik>
    </>
  );
}

const mapStateToProps = ({ auth, quiz }) => ({
  showQuiz: quiz.showQuiz,
  noOfQuestions: quiz.noOfQuestions,
  quizId: quiz.showQuiz.quizId,
  fetchingFinalizeQuiz: quiz.fetchingFinalizeQuiz,
  fetchingFinalizeQuizError: quiz.fetchingFinalizeQuizError,
  finalizeQuiz: quiz.finalizeQuiz,
  deletingQuizHost: quiz.deletingQuizHost,
  deletingQuizHostError: quiz.deletingQuizHostError,
  hostQuizByQuizId: quiz.hostQuizByQuizId,
  hostQuizByQuizIdError: quiz.hostQuizByQuizIdError,
  addQuizHostModal: quiz.addQuizHostModal,
  addingQuizName: quiz.addingQuizName,
  addingQuizNameError: quiz.addingQuizNameError,
  quizName: quiz.quizName,
  quizHostId: auth.userDetails.userId
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getFinalizeQuiz,
      deleteHostQuiz,
      hostQuiz,
      handleQuizHostModal,
      addQuizName,
      updateQuizNameByQuizId,
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FinalizeQuiz));
