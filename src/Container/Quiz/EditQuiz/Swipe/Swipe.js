import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { getQuestionList } from "../../QuizAction";
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

function Swipe(props) {
  useEffect(() => {
    props.getQuestionList(props.quizNameDetails.quizId);
  }, []);
 
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
        {props.questionList.map((item,i) => {
          console.log(i+1)
          const questionNo=i+1
          return (
            <SwiperSlide key={item}>
              <div class="h-h37">
                <Card style={{marginTop:"2rem"}}>
                  <QuestionEdit item={item}
                 
                  questionNo={questionNo}
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
  quizNameDetails: quiz.quizNameDetails, 
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getQuestionList,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Swipe);
