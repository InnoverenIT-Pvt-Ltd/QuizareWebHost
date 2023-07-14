import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { getQuestionList, handleBackToQuiz } from "../../QuizAction";
import { Card } from "antd";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import QuestionEdit from "./QuestionEdit";
import MainHeader from "../../../../Components/Mainheader";
import { useHistory } from "react-router-dom";

function SwipeInLibrary(props) {
  useEffect(() => {
    props.getQuestionList(props.showQuiz.quizId);
  }, []);
  const history = useHistory();
  // const backTo = () => {
  //   props.handleBackToQuiz()
  //   history.push(`/updateQuizName`)
  // }
  return (
    <>
      <MainHeader />
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {props.questionList.map((item, index) => {
          return (
            <SwiperSlide key={item}>
              <div class="h-h37">
                <Card style={{ marginTop: "2rem" }}>
                  <QuestionEdit
                    item={item}
                    number={index}
                  // backTo={backTo}
                  />
                </Card>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

const mapStateToProps = ({ quiz }) => ({
  questionList: quiz.questionList,
  showQuiz: quiz.showQuiz
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getQuestionList,
      handleBackToQuiz
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(SwipeInLibrary);
