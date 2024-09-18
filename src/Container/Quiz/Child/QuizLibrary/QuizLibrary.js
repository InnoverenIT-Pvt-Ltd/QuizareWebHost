import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import IosShareIcon from '@mui/icons-material/IosShare';
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
  handleCopy
} from "../../QuizAction";
import { Button, Modal, Tooltip } from "antd";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import MainHeader from "../../../../Components/Mainheader";
import { Form, Formik } from "formik";
import Menu from "../../../../Components/Quizs/Menu";
import Image from "./Image";
import { StyledDrawer } from "../../../../Components/UI/Antd";
import ProcessShareDrawer from "../../../../Components/ProcessShareDrawer";
import ShareDrawer from "./ShareDrawer";
import LibrarySearchedData from "./LibrarySearchedData";

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
      <div className="flex justify-center flex-col w-wk items-center">
      <div className="font-[Poppins] font-bold text-base mt-4 w-[80%]">Your Quizzes</div>
      <div className="border-2 border-black w-[80%] mt-4"></div>
      </div>
      <Formik>
        <Form class="flex justify-center  max-sm:w-wk mt-8 m-auto md:mt-4  w-wk max-sm:mt-0     ">
          {/* <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper "
          > */}
            {props.librarySerachedData.length > 0 ? (
    <LibrarySearchedData
    librarySerachedData={props.librarySerachedData}
    />
  ) : (
          <div class="flex flex-wrap max-sm:flex-nowrap h-[82vh] overflow-x-hidden overflow-y-auto w-full max-sm:justify-between max-sm:flex-col max-sm:items-center justify-center">
            {props.libraryQuiz.map((item, i) => {
              const imageUrl = item.imageId ? <Image imageId={FWLogo2} /> : 'none';
              return (
                // <SwiperSlide >

                <div 
  className="rounded-3xl border-2 bg-cover bg-center shadow-[0_0.25em_0.62em] shadow-[#aaa] h-[11rem] 
    text-white m-3 p-2 bg-[#3B16B7] w-[26vw] max-sm:w-wk flex justify-between flex-col scale-[0.99] hover:scale-100 ease-in duration-100 
    border-solid leading-3 hover:border hover:border-[#23A0BE] hover:shadow-[#23A0BE]" 
    // style={{ 
    //   backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
    //   backgroundColor: imageUrl ? 'transparent' : '#3B16B7'
    // }}
  
>
{/* <Image1 imageId={props.homePage.imageId} /> */} 

                  <div className="flex justify-between  items-center">
                  
                    <div class="flex flex-row">
                           
                            <h2 class=" text-base text-white font-[Poppins]">
                              {`${moment(item.creationDate).format("ll") || ""
                                }`}
                            </h2>
                          </div>
                          <h2 class="text-xl   flex j text-white font-[Poppins]">
                      {item.quizName}
                    </h2>  
                   <div className="flex justify-end"
                    key={item.quizId}
                    onMouseEnter={() => handleMouseEnter(item.quizId)}
                    onMouseLeave={handleMouseLeave}// Reset hovered item
                  >
                    <div className="relative inline-block">
                    <MoreHorizIcon/>
     {hoveredItemId === item.quizId && (
        <div 
          className="absolute right-0 mt-2 w-40 bg-white p-2 rounded-md shadow-lg z-10 font-[Poppins]"
          onMouseEnter={() => handleMouseEnter(item.quizId)}
          onMouseLeave={handleMouseLeave}
        >
         <Link to={`updateQuizNameInLibrary/${item.quizName}/${item.duration}/${item.quizId}`}>

<Button
  style={{ width: "9rem", backgroundColor: "white" }}
  type="primary"

//   onClick={() => props.navigation.navigate('Quiz Invite')}
>
  <div className="font-[Poppins] text-black">Edit Quiz</div>
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
                          <div className="font-[Poppins] text-black">Delete This Quiz</div>
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
                           <div className="font-[Poppins] text-black ">Host This Quiz</div>
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
                           <div className="font-[Poppins] text-black">Close This Quiz</div>
                        </Button>
                      )}
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

        </div>
      )}
    </div>
    </div>
    </div>       
    <div className="flex justify-between items-center absolute bottom-0 w-wk p-2">
      <div>
        <Tooltip title="Share">
        <IosShareIcon  onClick={() => {
  props.handleCopy(true);
  handleSetCurrentItem(item);
}} className="!cursor-pointer"/>
        </Tooltip>
        </div>
    <div class="flex flex-row">
                            <div class=" text-base text-white font-[Poppins]">
                              {item.quizHostInd === false ? "Closed" : "Hosted"}
                            </div>
                          </div>
                    <div>
                    
                  
                         
                    <div class="flex flex-row">
  <div class="text-base font-[Poppins] text-white rounded-full border-2 border-white py-1 px-2 w-8 h-8 flex justify-center items-center">
    {`${item.noOfQuestions || ""}`}
  </div>
</div>

                          {/* <div class="flex flex-row">
                            <h2 class=" text-base text-white">
                              Categories: {`${item.categories && item.categories || ""}`}
                            </h2>
                          </div> */}
                        
                       
                    
                    </div>
                  
                  
                     
                        
                          <div class="flex flex-row">
                            
                            &nbsp;
                            <div class="text-sm font-bold text-white font-[Poppins]">
                              {`${item.duration || ""}`} seconds
                            </div>
                          </div>
                          <div class="flex flex-row">
                           
                            <div class="text-sm font-bold text-white font-[Poppins]">Standard</div>
                          </div>
                         
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
                      <StyledDrawer
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
                      </StyledDrawer>
                    </div>
                  </div>
                 
                // </SwiperSlide>
              );
            })}
          {/* </Swiper> */}

          </div>
  )}  




          {/* </div> */}
        </Form>
      </Formik>
      </div>
      <ShareDrawer            
                  copyReduce={props.copyReduce}
                    handleCopy={props.handleCopy}
                    currentItem={currentItem}
                />
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
  fetchingLibraryQuiz:quiz.fetchingLibraryQuiz,
  copyReduce: quiz.copyReduce,
  librarySerachedData:auth.librarySerachedData
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
      handleCopy,
      updateQuizNameByQuizId,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(QuizLibrary);
