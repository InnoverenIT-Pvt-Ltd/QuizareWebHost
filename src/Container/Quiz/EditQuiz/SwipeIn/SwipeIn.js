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
import { BundleLoader } from "../../../../Components/Placeholder";

function SwipeIn(props) {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);
  useEffect(() => {
    props.getQuestionList(props.finalizeQuiz && props.finalizeQuiz.quizId);
  }, []);

  const handleQuestionSelect = (index) => {
    setSelectedQuestionIndex(index);
    if (swiperInstance) {
        swiperInstance.slideTo(index); // Move to the selected slide
    }
};
  if(props.fetchingQuestionList){
    return <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-loader">
    <div className="loader"></div>
  </div>
  }
  return (
    <>
            <MainHeader />
            <div className="flex h-hk w-full">
                <div className="w-[20%] bg-[#6245C6] p-4">
                    {props.questionList.map((item, i) => (
                        <Card
                            key={i}
                            className={`cursor-pointer mb-2 ${i === selectedQuestionIndex ? 'bg-blue-200' : ''}`}
                            onClick={() => handleQuestionSelect(i)}
                        >
                            Question {i + 1}
                        </Card>
                    ))}
                </div>
                <div className="w-[80%] p-4">
                    <Swiper
                        onSwiper={setSwiperInstance}
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        initialSlide={selectedQuestionIndex}
                    >
                        {props.questionList.map((item, index) => (
                            <SwiperSlide key={index}>
                               <QuestionEdit
                    item={item}
                    number={index}
                  />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
  );
}

const mapStateToProps = ({ quiz }) => ({
  questionList: quiz.questionList,
  showQuiz: quiz.showQuiz,
  finalizeQuiz: quiz.finalizeQuiz,
  deletingQuestion: quiz.deletingQuestion,
  fetchingQuestionList:quiz.fetchingQuestionList
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getQuestionList,

    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(SwipeIn);
