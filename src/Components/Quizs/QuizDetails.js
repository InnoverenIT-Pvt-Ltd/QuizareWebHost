import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  closeQuiz,
  hostQuiz,
  updateQuizNameByQuizId,
} from "../../Container/Quiz/QuizAction";
import { Button, Card, Modal } from "antd";
import { Field, Formik, Form } from "formik";
import QuizDetailsPlayerTable from "./QuizDetailsPlayerTable";
import { Link } from "react-router-dom";
import MainHeader from "../Mainheader";
function QuizDetails(props) {
  const [duration, setDuration] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editName, setEditName] = useState(false);
  const [quizName, setQuizName] = useState(props.quizNameDetails.quizName);
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
        quizHostId: "QH4472404666122022",
        quizName: props.quizNameDetails.quizName,
      },
      props.quizNameDetails.quizId
    );
    props.hostQuiz(props.quizNameDetails.quizId);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const link = `http://player.quizledge.no${
    props.quizNameDetails.quizLink || ""
  }`;
  function copyToClipboard(link) {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        console.log(`Copied text to clipboard: ${link}`);
        //alert(`Copied text to clipboard: ${link}`);
      })
      .catch((error) => {
        console.error(`Could not copy text: ${error}`);
      });
  }

  const viewData = props.quizNameDetails.playerViewDTOs;
  const viewmessage = props.quizNameDetails.message;
  const ID = props.quizNameDetails.quizId;

  return (
    <>
      <div class=" max-sm:w-11/12 mt-8 m-auto md:mt-12  w-1/5  h-h50  ">
        <div className="bg-white rounded-2xl flex justify-center mt-3 ">
          <div class="shadow-2xl border-solid w-11/12 flex justify-center flex-col  p-4 max-sm:m-0 h-h31 rounded-2xl md:m-auto">
            <h2 class="text-base  ml-4 flex justify-center">You are hosting</h2>
            {/* <h2 class="text-base flex justify-center"> */}
            {editName === false && props.quizNameDetails.quizName ? (
              <div className="flex flex-row justify-between w-full">
                <h2 class="text-base flex justify-center">{`${props.quizNameDetails.quizName}`}</h2>
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
            ) : editName === true && props.quizNameDetails.quizName ? (
              <div className="flex flex-row justify-between w-full">
                <input
                  type="text"
                  placeholder="Enter quiz name"
                  name="quizName"
                  className="border border-gray-300 rounded-md px-1"
                  value={quizName}
                  onChange={(ev) => setQuizName(ev.target.value)}
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-4 rounded-md"
                  onClick={() =>{
                    props.updateQuizNameByQuizId(
                      {
                        quizName: quizName,
                      },props.quizNameDetails.quizId,setEditName(false),
                      
                    )}
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
              {props.quizNameDetails.quizLink ? (
                <h2 class="text-base overflow-hidden">{`http://player.quizledge.no${
                  props.quizNameDetails.quizLink || ""
                }`}</h2>
              ) : (
                ""
              )}
            </Card>
            <div class="flex justify-center mt-1">
              <Button
                style={{
                  backgroundColor: "#4096ff",
                  width: "-webkit-fill-available",
                  borderRadius: "0.4rem",
                  height: "auto",
                }}
                onClick={() => copyToClipboard(link)}
              >
                <h2 class="text-white">Click to copy the url</h2>
              </Button>
            </div>
            <h2 class="text-xl mt-2 flex justify-center">
              Who is playing your quiz?
            </h2>
            <div>
              {viewData === null ? (
                <h2 class="text-base">{viewmessage}</h2>
              ) : (
                <QuizDetailsPlayerTable data={props.quizNameDetails} />
              )}
            </div>
            <div class="flex justify-between">
              <div class="w-36">
                <Button
                  style={{ backgroundColor: "white" }}
                  type="primary"
                  onClick={() => props.closeQuiz(ID)}
                >
                  <h3>Close Quiz</h3>
                </Button>
              </div>
              <div class="w-36">
                <Link to="/swipe">
                  <Button
                    style={{ backgroundColor: "white" }}
                    type="primary"
                   // onClick={ID}
                  >
                    <h3>Edit This Quiz</h3>
                  </Button>
                </Link>
              </div>
            </div>
            <div class="mt-3">
              <Button
                type="primary"
                style={{ backgroundColor: "white" }}
                onClick={showModal}
                //  onClick={() => props.hostQuiz(ID)}
              >
                <h3>Host This Quiz</h3>
              </Button>
            </div>
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
    </>
  );
}

const mapStateToProps = ({ quiz }) => ({
  quizNameDetails: quiz.quizNameDetails,
  fetchingFeedback: quiz.fetchingFeedback,
  feedback: quiz.feedback,
  fetchingFeedbackErrot: quiz.fetchingFeedbackErrot,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      closeQuiz,
      updateQuizNameByQuizId,
      hostQuiz,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(QuizDetails);
