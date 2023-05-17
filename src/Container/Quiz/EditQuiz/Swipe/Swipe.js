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

function Swipe(props) {
  useEffect(() => {
    props.getQuestionList("QUIZ24452475564162023");
  }, []);

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {props.questionList.map((item) => {
          return (
            <SwiperSlide key={item}>
              <div>
                <Card>
                  <QuestionEdit item={item} />
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
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getQuestionList,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Swipe);
