import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { getQuestionList, deleteQuestion } from "../../Container/Quiz/QuizAction";
import { Card } from "antd";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
// import QuestionEdit from "./QuestionEdit";
import MainHeader from "../../Components/Mainheader";
import OngoingQuestionedit from "./ongoingQuestionedit";
function UpdateOngoing(props) {

  const [data, setdata] = useState([props.questionList])
  useEffect(() => {
    props.getQuestionList(props.match.params.quizId);
  }, [props.match.params.quizId]);

  const handleDeleteQuestion = (id) => {
    props.deleteQuestion(id, handleCallBack, props.match.params.quizId)
  }
  const handleCallBack = () => {
    props.getQuestionList(props.match.params.quizId);
  }
  useEffect(() => {
    setdata(props.questionList)
  }, [props.questionList])
  console.log(data)
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
        {data.map((item, i) => {
          console.log(i + 1)
          console.log(item)
          const questionNo = i + 1
          return (
            <SwiperSlide key={item}>
              <div class="h-h37">
                <Card style={{ marginTop: "2rem" }}>
                  <OngoingQuestionedit item={item}
                    questionNo={questionNo}
                    handleDeleteQuestion={handleDeleteQuestion}
                  />
                </Card>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  )
}
const mapStateToProps = ({ quiz }) => ({
  questionList: quiz.questionList,
  quizNameDetails: quiz.quizNameDetails,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getQuestionList,
      deleteQuestion
    },

    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(UpdateOngoing);