import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  BorderBox,
  FlexContainer,
  MainWrapper,
} from "../../../../Components/UI/Layout";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
import * as Yup from "yup";
import {
  getFinalizeQuiz,
  getLibraryQuiz,
  handleQuizHostModal,
  deleteLibraryQuiz,
  hostQuiz,
  addQuizName,
  closeLibraryQuiz,

  updateQuizNameByQuizId,
} from "../../QuizAction";
import { Button, Card, Modal } from "antd";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import MainHeader from "../../../../Components/Mainheader";
import { Form, Field, Formik } from "formik";

const { useState } = React;

function QuizLibrary(props) {
  const history = useHistory();
  const [duration, setDuration] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  function handleSetCurrentItem(item) {
    setCurrentItem(item);
  }
  console.log(currentItem)
  const handleOk = () => {
    setIsModalOpen(false);
    history.push(`/hostquiz`);
    props.updateQuizNameByQuizId(
      {
        duration: duration,
        quizHostId: props.quizHostId,
        quizName: currentItem.quizName,
      },
      currentItem.quizId
    );
    props.hostQuiz(currentItem.quizId);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //   function handleCallBack(data) {
  //     history.push(`/updateQuizName`);
  //   }
  console.log(props.libraryQuiz)
  useEffect(() => {
    props.getLibraryQuiz(props.quizHostId);
  }, []);
  return (
    <>
      <MainHeader />
      <Formik>
        <Form class="flex justify-center max-sm:w-11/12 mt-8 m-auto md:mt-12  w-2/5  h-h50  ">
          {/* <div className="bg-white rounded-rounded2.8 mt-3 "> */}


          <Swiper

            navigation={true}

            modules={[Navigation]}
            className="mySwiper "
          >
            {props.libraryQuiz.map((item, i) => {
              return (
                <SwiperSlide >

                  <div class="shadow-2xl border-solid flex justify-evenly flex-col  p-4 max-sm:m-0 h-h31 w-11/12 rounded-xl  md:m-auto">
                    <h2 class="text-xl mt-4 ml-4 flex justify-center">
                      {item.quizName}
                    </h2>
                    <div>
                      <div
                        style={{ boxShadow: "0.01rem 0.01rem 0.12rem 0.01rem" }}
                        className="bg-white rounded-2xl  w-full flex justify-center "
                      >
                        <div class="shadow-2xl border-solid w-full flex justify-center flex-col  p-2  max-sm:m-0 h-28 rounded-2xl md:m-auto">
                          <div class="flex flex-row">
                            <h2 class="mr-2 text-base">Created:</h2>
                            <h2 class=" text-base">
                              {`${moment(item.creationDate).format("ll") || ""
                                }`}
                            </h2>
                          </div>
                          <div class="flex flex-row">
                            <h2 class=" text-base">
                              Questions: {`${item.noOfQuestions || ""}`}
                            </h2>
                          </div>
                          <div class="flex flex-row">
                            <h2 class=" text-base">
                              Categories: {`${item.categories && item.categories || ""}`}
                            </h2>
                          </div>
                          <div class="flex flex-row">
                            <h2 class=" text-base">
                              Status: {item.quizHostInd === false ? "Closed" : "Hosted"}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-center mt-6">
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
                              {`${item.duration || ""}`} seconds
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
                    <div class="flex flex-row mt-8 justify-between">
                      {/* <Link to="/create"> */}
                      <Link to={`updateQuizNameLibrary/${item.quizName}/${item.duration}/${item.quizId}`}>

                        <Button
                          style={{ width: "9rem", backgroundColor: "white" }}
                          type="primary"

                        //   onClick={() => props.navigation.navigate('Quiz Invite')}
                        >
                          <h3>Edit Quiz</h3>
                        </Button>
                      </Link>
                      {item.quizHostInd === false && (
                        <Button
                          type="primary"
                          style={{ width: "9rem", backgroundColor: "white", margin: "0" }}
                          onClick={() =>
                            props.deleteLibraryQuiz(item.quizId)
                          }
                        >
                          <h3>Delete This Quiz</h3>
                        </Button>
                      )}
                      {/* </Link> */}

                    </div>
                    <div class=" flex flex-col h-24 justify-between">
                      {/* <Link to="/hostquiz"> */}
                      {item.quizHostInd === false && (
                        <Button
                          type="primary"
                          style={{ backgroundColor: "white" }}
                          onClick={() => {
                            showModal();
                            handleSetCurrentItem(item);

                          }}
                        // onClick={showModal}
                        // onClick={() => props.hostQuiz(props.showQuiz.quizId)}
                        >
                          <h3>Host This Quiz</h3>
                        </Button>
                      )}
                      {item.quizHostInd === true && (
                        <Button
                          type="primary"
                          style={{ backgroundColor: "white" }}
                          // onClick={() =>
                          //  props.handleQuizHostModal(true)
                          // }
                          // onClick={showModal}
                          onClick={() => props.closeLibraryQuiz(item.quizId,)}
                        // onClick={() => props.hostQuiz(props.showQuiz.quizId)}
                        >
                          <h3>Close This Quiz</h3>
                        </Button>
                      )}
                      {/* </Link> */}
                      <Link
                        to={`quizinLibrary/${item.quizId}`}
                      >

                        <Button
                          type="primary"
                          style={{ backgroundColor: "white" }}
                        // onClick={() => props.hostQuiz(props.showQuiz.quizId)}
                        >
                          <h3>Add Question</h3>
                        </Button>
                      </Link>
                      <Modal
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
                            placeholder="Enter Response time per question"
                          />
                        </form>
                      </Modal>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>







          {/* </div> */}
        </Form>
      </Formik>
    </>
  );
}

const mapStateToProps = ({ auth, quiz }) => ({
  libraryQuiz: quiz.libraryQuiz,
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
      getLibraryQuiz,
      //   getFinalizeQuiz,
      deleteLibraryQuiz,
      closeLibraryQuiz,
      hostQuiz,
      handleQuizHostModal,
      //   addQuizName,
      updateQuizNameByQuizId,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(QuizLibrary);
