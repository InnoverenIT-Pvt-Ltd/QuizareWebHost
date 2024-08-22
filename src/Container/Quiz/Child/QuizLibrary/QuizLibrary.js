import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FWLogo2 from "../../../../images/image 20.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  getLibraryQuiz,
  handleQuizHostModal,
  deleteLibraryQuiz,
  hostQuiz,
  closeLibraryQuiz,
  updateQuizNameByQuizId,
} from "../../QuizAction";
import { Button, Modal } from "antd";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import MainHeader from "../../../../Components/Mainheader";
import { Form, Formik } from "formik";
import Menu from "../../../../Components/Quizs/Menu";
import Image from "./Image";

const { useState } = React;

function QuizLibrary(props) {


  const history = useHistory();
  const [duration, setDuration] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const handleMouseEnter = (quizId) => {
    setHoveredItemId(quizId);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHoveredItemId(null);
    }, 2000); // Adjust the delay as needed
  };
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
    props.hostQuiz(
      {
        duration: duration,
        quizHostId: props.quizHostId,
        quizName: currentItem.quizName,
      },
      currentItem.quizId
    );
    // props.hostQuiz(currentItem.quizId);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log(props.libraryQuiz)
  useEffect(() => {
    props.getLibraryQuiz(props.quizHostId);
  }, []);
  if (props.fetchingLibraryQuiz) {
    return  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-loader">
    <div className="loader"></div>
  </div>
  }
  return (
    <>
    <div class="min-h-screen">
      <Menu />
      <Formik>
        <Form class="flex justify-center h-h32 max-sm:w-11/12 mt-8 m-auto md:mt-12  w-wk    ">
          {/* <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper "
          > */}
          <div class="flex flex-wrap h-[86vh] overflow-x-auto w-full max-sm:justify-between max-sm:flex-col max-sm:items-center justify-center">
            {props.libraryQuiz.map((item, i) => {
              const imageUrl = item.imageId ? <Image imageId={FWLogo2} /> : 'none';
              return (
                // <SwiperSlide >

                <div 
  className="rounded-3xl border-2 bg-cover bg-center shadow-[0_0.25em_0.62em] shadow-[#aaa] h-[12rem] 
    text-white m-3 p-2 bg-[#3B16B7] w-[28vw] max-sm:w-wk flex flex-col scale-[0.99] hover:scale-100 ease-in duration-100 
    border-solid leading-3 hover:border hover:border-[#23A0BE] hover:shadow-[#23A0BE]" 
    // style={{ 
    //   backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
    //   backgroundColor: imageUrl ? 'transparent' : '#3B16B7'
    // }}
  
>
{/* <Image1 imageId={props.homePage.imageId} /> */} 

                  <div className="flex justify-between  items-center">
                  
                    <div class="flex flex-row">
                            <h2 class="mr-2 text-base text-white">Created:</h2>
                            <h2 class=" text-base text-white">
                              {`${moment(item.creationDate).format("ll") || ""
                                }`}
                            </h2>
                          </div>
                   <div className="flex justify-end"
                    key={item.quizId}
                    onMouseEnter={() => handleMouseEnter(item.quizId)}
                    onMouseLeave={handleMouseLeave}// Reset hovered item
                  >
                    <div className="relative inline-block">
                    <MoreHorizIcon/>
     {hoveredItemId === item.quizId && (
        <div 
          className="absolute right-0 mt-2 w-40 bg-white p-2 rounded-md shadow-lg z-10"
          onMouseEnter={() => handleMouseEnter(item.quizId)}
          onMouseLeave={handleMouseLeave}
        >
         <Link to={`updateQuizNameInLibrary/${item.quizName}/${item.duration}/${item.quizId}`}>

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
                          style={{ backgroundColor: "white"}}
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
                       <Link
                        to={`quizinLibrary/${item.quizId}`}
                      >

                        <Button
                          type="primary"
                          style={{ backgroundColor: "white"}}
                        // onClick={() => props.hostQuiz(props.showQuiz.quizId)}
                        >
                          <h3>Add Question</h3>
                        </Button>
                      </Link>

        </div>
      )}
    </div>
    </div>
    </div>           
                    <div>
                    
                    <h2 class="text-xl   flex j text-white">
                      {item.quizName}
                    </h2>  
                         
                          <div class="flex flex-row">
                            <h2 class=" text-base text-white">
                              Questions: {`${item.noOfQuestions || ""}`}
                            </h2>
                          </div>
                          <div class="flex flex-row">
                            <h2 class=" text-base text-white">
                              Categories: {`${item.categories && item.categories || ""}`}
                            </h2>
                          </div>
                          <div class="flex flex-row">
                            <h2 class=" text-base text-white">
                              Status: {item.quizHostInd === false ? "Closed" : "Hosted"}
                            </h2>
                          </div>
                       
                    
                    </div>
                  
                  
                     
                        
                          <div class="flex flex-row">
                            <h2 class="text-base font-bold text-white">Question response time:</h2>
                            &nbsp;
                            <h2 class="text-base font-bold text-white">
                              {`${item.duration || ""}`} seconds
                            </h2>
                          </div>
                          <div class="flex flex-row">
                            <h2 class="text-base font-bold text-white">Scoring system:</h2>
                            &nbsp;
                            <h2 class="text-base font-bold text-white">Standard</h2>
                          </div>
                      
                      
                   
                  


                    {/* <div class="flex flex-row mt-8 justify-between">
                    
                      <Link to={`updateQuizNameInLibrary/${item.quizName}/${item.duration}/${item.quizId}`}>

                        <Button
                          style={{ width: "9rem", backgroundColor: "white" }}
                          type="primary"

                          onClick={() => props.navigation.navigate('Quiz Invite')}
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


                    </div> */}
                    <div class=" flex flex-col h-24 justify-between">
                     
                      {/* {item.quizHostInd === false && (
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
                      )} */}
                      {/* {item.quizHostInd === true && (
                        <Button
                          type="primary"
                          style={{ backgroundColor: "white"}}
                          // onClick={() =>
                          //  props.handleQuizHostModal(true)
                          // }
                          // onClick={showModal}
                          onClick={() => props.closeLibraryQuiz(item.quizId,)}
                        // onClick={() => props.hostQuiz(props.showQuiz.quizId)}
                        >
                          <h3>Close This Quiz</h3>
                        </Button>
                      )} */}
                      
                      {/* <Link
                        to={`quizinLibrary/${item.quizId}`}
                      >

                        <Button
                          type="primary"
                          style={{ backgroundColor: "white"}}
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
                 
                // </SwiperSlide>
              );
            })}
          {/* </Swiper> */}

          </div>





          {/* </div> */}
        </Form>
      </Formik>
      </div>
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
  quizHostId: auth.userDetails.userId,
  fetchingLibraryQuiz:quiz.fetchingLibraryQuiz
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
