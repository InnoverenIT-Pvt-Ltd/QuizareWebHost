// import React, { useState,useEffect } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import {
//   closeQuiz,
//   hostQuiz,
//   getOngoingQuiz,
//   updateQuizNameByQuizId,clearQuizNameDetails
// } from "../../Container/Quiz/QuizAction";
// import { Button, Card, Modal } from "antd";
// import { Field, Formik, Form } from "formik";
// import QuizDetailsPlayerTable from "./QuizDetailsPlayerTable";
// import { Link } from "react-router-dom";
// import MainHeader from "../Mainheader";
// import copy from "copy-to-clipboard";
// function QuizDetails(props) {
//   const [duration, setDuration] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editName, setEditName] = useState(false);
//   const [quizName, setQuizName] = useState(props.quizNameDetails.quizName);
//   const handleEdit = () => {
//     setEditName(true);
//   };

//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//     props.updateQuizNameByQuizId(
//       {
//         duration: duration,
//         quizHostId: "QH4472404666122022",
//         quizName: props.quizNameDetails.quizName,
//       },
//       props.quizNameDetails.quizId
//     );
//     props.hostQuiz(props.quizNameDetails.quizId);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   const link = `http://player.quizledge.no.s3-website.eu-west-3.amazonaws.com${
//     props.quizNameDetails.quizLink || ""
//   }`;
//   function copyToClipboard() {
//     copy(link);
//     console.log(link)
//   }

//   const viewData = props.quizNameDetails.playerViewDTOs;
//   const viewmessage = props.quizNameDetails.message;
//   const ID = props.quizNameDetails.quizId;
//   useEffect(() => {
//     props.getOngoingQuiz("QH4472404666122022");
//   }, []);
//   return (
//     <>
//       <div class=" max-sm:w-11/12 mt-8 m-auto md:mt-12  w-1/5  h-h50  ">
//         <div className="bg-white rounded-2xl shadow-2xl border-solid flex justify-center mt-3 ">
//           <div class=" w-11/12 flex justify-center flex-col  p-4 max-sm:m-0 h-h31 rounded-2xl md:m-auto">
//             <h2 class="text-base   flex justify-center">You are hosting</h2>
//             {/* <h2 class="text-base flex justify-center"> */}
//             {editName === false && props.quizNameDetails.quizName ? (
//               <div className="flex flex-row justify-center w-full">
//                 <h2 class="text-base flex justify-center">{`${props.quizNameDetails.quizName}`}</h2>
//                 <div class="ml-2">
//                 <button onClick={handleEdit}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
//                     />
//                   </svg>
//                 </button>
//                 </div>
//               </div>
//             ) : editName === true && props.quizNameDetails.quizName ? (
//               <div className="flex flex-row justify-between w-full">
//                 <input
//                   type="text"
//                   placeholder="Enter quiz name"
//                   name="quizName"
//                   className="border border-gray-300 rounded-md px-1"
//                   value={quizName}
//                   onChange={(ev) => setQuizName(ev.target.value)}
//                 />
//                 <button
//                   type="submit"
//                   className="bg-blue-900 text-white px-4 rounded-md"
//                   onClick={() =>{
//                     props.updateQuizNameByQuizId(
//                       {
//                         quizName: quizName,quizHostId: "QH4472404666122022",
//                       },props.quizNameDetails.quizId,setEditName(false),

//                     )}
//                   }
//                 >
//                   save
//                 </button>
//               </div>
//             ) : null}

//             {/* </h2> */}

//             <h2 class="text-base mt-2 flex justify-center ">
//               Share URL for others to access.
//             </h2>
//             <Card class="mt-4">
//               {props.quizNameDetails.quizLink ? (
//                 <h2 class="text-xs flex justify-center "style={{overflowWrap:"break-word"}}>{`http://player.quizledge.no.s3-website.eu-west-3.amazonaws.com${
//                   props.quizNameDetails.quizLink || ""
//                 }`}</h2>
//               ) : (
//                 ""
//               )}
//             </Card>
//             <div class="flex justify-center mt-1">
//               <Button
//                 style={{
//                   backgroundColor: "#4096ff",
//                   width: "-webkit-fill-available",
//                   borderRadius: "0.4rem",
//                   height: "auto",
//                 }}
//                 onClick={() => copyToClipboard()}
//               >
//                 <h2 class="text-white">Click to copy the url</h2>
//               </Button>
//             </div>
//             <h2 class="text-xl mt-2 flex justify-center">
//               Who is playing your quiz?
//             </h2>
//             <div>
//               {viewData === null ? (
//                 <h2 class="text-base">{viewmessage}</h2>
//               ) : (
//                 <QuizDetailsPlayerTable data={props.quizNameDetails} />
//               )}
//             </div>
//             <div class="flex justify-between mt-2">
//             <div class="w-36">
//                 <Link to="/swipe">
//                   <Button
//                     style={{ backgroundColor: "white" }}
//                     type="primary"
//                    // onClick={ID}
//                   >
//                     <h3>Edit Quiz</h3>
//                   </Button>
//                 </Link>
//               </div>
//               <div class="w-32 ml-2">
//               {props.quizNameDetails.quizHostInd ===true && (
//                 <Button
//                   style={{ backgroundColor: "white" }}
//                   type="primary"
//                   onClick={() => props.closeQuiz(ID)}
//                 >
//                   <h3>Close Quiz</h3>
//                 </Button>
//                  )}  
//               </div>            
//             </div>
//             {/* <div class="mt-3">
//             {props.quizNameDetails.quizHostInd !==true && (
//               <Button
//                 type="primary"
//                 style={{ backgroundColor: "white" }}
//                 onClick={showModal}
//                 //  onClick={() => props.hostQuiz(ID)}
//               >
//                 <h3>Host This Quiz</h3>
//               </Button>
//             )}
//             </div> */}
//             <Modal
//               title="Host Quiz"
//               open={isModalOpen}
//               onOk={handleOk}
//               onCancel={handleCancel}
//             >
//               <form onSubmit={() => handleOk()}>
//                 <input
//                   className="border border-blue-900 rounded-md px-1 w-full"
//                   name="duration"
//                   value={duration}
//                   onChange={(ev) => setDuration(ev.target.value)}
//                   placeholder="Enter Response time per question"
//                 />
//               </form>
//             </Modal>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// const mapStateToProps = ({ quiz }) => ({
//   quizNameDetails: quiz.quizNameDetails,
//   fetchingFeedback: quiz.fetchingFeedback,
//   feedback: quiz.feedback,
//   fetchingFeedbackErrot: quiz.fetchingFeedbackErrot,
//   ongoingQuiz:quiz.ongoingQuiz
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       closeQuiz,
//       updateQuizNameByQuizId,clearQuizNameDetails,
//       hostQuiz,
//       getOngoingQuiz
//     },
//     dispatch
//   );
// export default connect(mapStateToProps, mapDispatchToProps)(QuizDetails);


import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  closeQuiz,
  hostQuiz,
  getOngoingQuiz,
  updateQuizNameByQuizId, clearQuizNameDetails
} from "../../Container/Quiz/QuizAction";
import moment from "moment";
import { Button, Card, Modal } from "antd";
import { Field, Formik, Form } from "formik";
import QuizDetailsPlayerTable from "./QuizDetailsPlayerTable";
import { Link } from "react-router-dom";
import MainHeader from "../Mainheader";
import copy from "copy-to-clipboard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Clipboard from 'clipboard';
import { withRouter } from "react-router-dom";




function QuizDetails(props) {
  const [duration, setDuration] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editName, setEditName] = useState(false);
  const [move, setMove] = useState("");
  const [quizName, setQuizName] = useState(props.ongoingQuiz.quizName);
  const [copiedLink, setCopiedLink] = useState('');

  useEffect(() => {
    const clipboard = new Clipboard('.copy-button');

    clipboard.on('success', (e) => {
      // const link = `http://player.quizledge.no.s3-website.eu-west-3.amazonaws.com${copiedLink}`
      const link = e.trigger.getAttribute('data-link');

      console.log(link)
      setCopiedLink(link);
    });

    return () => {
      clipboard.destroy();
    };
  }, []);
  // console.log(copiedLink)
  const handleEdit = () => {
    setEditName(true);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    props.updateQuizNameByQuizId(
      {
        duration: duration,
        quizHostId: props.quizHostId,
        quizName: props.ongoingQuiz.quizName,
      },
      props.ongoingQuiz.quizId
    );
    props.hostQuiz(props.ongoingQuiz.quizId);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // const link = `http://player.quizledge.no.s3-website.eu-west-3.amazonaws.com${move}`;
  // function copyToClipboard(quizLink) {
  //   setMove(quizLink);
  //   copy(link);
  // }
  // console.log(link)
  console.log(props.ongoingQuiz.quizLink)
  const viewData = props.ongoingQuiz.playerViewDTOs;
  const viewmessage = props.ongoingQuiz.message;
  const ID = props.ongoingQuiz.quizId;
  useEffect(() => {
    props.getOngoingQuiz(props.quizHostId);
  }, []);
  // const [quizData, setQuizData] = useEffect([props.ongoingQuiz])
  // useEffect(() => {
  //   setQuizData(props.ongoingQuiz)
  // }, [props.ongoingQuiz])

  return (
    <>
      <Formik>
        <Form class="flex justify-center max-sm:w-11/12 mt-8 m-auto md:mt-12 w-full  h-h50  ">
          {/* <div className="bg-white rounded-rounded2.8 mt-3 "> */}


          <Swiper

            navigation={true}

            modules={[Navigation]}
            className="mySwiper "
          >
            {props.ongoingQuiz.map((item, i) => {
              const ongoingQuizLink = `http://player.quizledge.no.s3-website.eu-west-3.amazonaws.com${item.quizLink}`
              return (
                <SwiperSlide >

                  <div class=" max-sm:w-11/12  h-h32   m-auto md:w-1/5  h-h50  ">
                    <div className="bg-white rounded-2xl shadow-2xl border-solid flex justify-center mt-3 ">
                      <div class=" w-11/12 flex justify-center flex-col  p-4 max-sm:m-0 h-h31 rounded-2xl md:m-auto">
                        <h2 class="text-base   flex justify-center">You are hosting</h2>
                        {/* <h2 class="text-base flex justify-center"> */}
                        {editName === false && item.quizName ? (
                          <div className="flex flex-row justify-center w-full">
                            <h2 class="text-base flex justify-center">{item.quizName}</h2>
                            <div class="ml-2">
                              <button onClick={handleEdit}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        ) : editName === true && item.quizName ? (
                          <div className="flex flex-row justify-between w-full">
                            <input
                              type="text"
                              placeholder="Enter quiz name"
                              name="quizName"
                              className="border text-xs border-gray-300 rounded-md px-1"
                              value={quizName}
                              onChange={(ev) => setQuizName(ev.target.value)}
                            />
                            <button
                              type="submit"
                              className="bg-blue-900 text-white px-4 rounded-md"
                              onClick={() => {
                                props.updateQuizNameByQuizId(
                                  {
                                    quizName: quizName, quizHostId: "QH4472404666122022",
                                  }, item.quizId, setEditName(false),

                                )
                              }
                              }
                            >
                              save
                            </button>
                          </div>
                        ) : null}

                        {/* </h2> */}

                        <h2 class="text-base mt-2 flex justify-center ">
                          Share URL for others to access.
                        </h2>
                        <Card class="mt-4">
                          {item.quizLink ? (
                            <h2 class="text-xs flex justify-center " style={{ overflowWrap: "break-word" }}>{`http://player.quizledge.no.s3-website.eu-west-3.amazonaws.com${item.quizLink || ""
                              }`}</h2>
                          ) : (
                            ""
                          )}
                        </Card>
                        <div class="flex justify-center mt-1">
                          {/* <Button
        style={{
          backgroundColor: "#4096ff",
          width: "-webkit-fill-available",
          borderRadius: "0.4rem",
          height: "auto",
        }}
        onClick={() => copyToClipboard(item.quizLink)}
      >
        <h2 class="text-white">Click to copy the url</h2>
      </Button> */}
                          <button
                            type="button"
                            className="copy-button"
                            data-link={ongoingQuizLink}
                            data-clipboard-text={ongoingQuizLink}
                            style={{
                              backgroundColor: "#4096ff",
                              width: "100%",
                              borderRadius: "0.4rem",
                              height: "auto",
                            }}
                          >
                            <h2 class="text-white"> Click to copy the url</h2>
                          </button>
                        </div>
                        <h2 class="text-xl mt-2 flex justify-center">
                          Who is playing your quiz?
                        </h2>
                        <div>
                          {viewData === null ? (
                            <h2 class="text-base">{viewmessage}</h2>
                          ) : (
                            <QuizDetailsPlayerTable data={item} />
                          )}
                        </div>
                        <div class="flex justify-between mt-2">
                          <div class="w-36">
                            {/* <Link to="/updateOngoing"> */}
                            <Link to={`updateOngoing/${item.quizId}`}>
                              <Button
                                style={{ backgroundColor: "white" }}
                                type="primary"
                              // onClick={ID}
                              >
                                <h3>Edit Quiz</h3>
                              </Button>
                            </Link>
                          </div>
                          <div class="w-32 ml-2">
                            {item.quizHostInd === true && (
                              <Button
                                style={{ backgroundColor: "white" }}
                                type="primary"
                                onClick={() => props.closeQuiz(item.quizId)}
                              >
                                <h3>Close Quiz</h3>
                              </Button>
                            )}
                          </div>
                        </div>
                        {/* <div class="mt-3">
    {props.quizNameDetails.quizHostInd !==true && (
      <Button
        type="primary"
        style={{ backgroundColor: "white" }}
        onClick={showModal}
        //  onClick={() => props.hostQuiz(ID)}
      >
        <h3>Host This Quiz</h3>
      </Button>
    )}
    </div> */}
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
                              placeholder="Enter Response time per question"
                            />
                          </form>
                        </Modal>
                      </div>
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

const mapStateToProps = ({ quiz, auth }) => ({
  quizNameDetails: quiz.quizNameDetails,
  fetchingFeedback: quiz.fetchingFeedback,
  feedback: quiz.feedback,
  fetchingFeedbackErrot: quiz.fetchingFeedbackErrot,
  ongoingQuiz: quiz.ongoingQuiz,
  quizHostId: auth.userDetails.userId
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      closeQuiz,
      updateQuizNameByQuizId, clearQuizNameDetails,
      hostQuiz,
      getOngoingQuiz
    },
    dispatch
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuizDetails));