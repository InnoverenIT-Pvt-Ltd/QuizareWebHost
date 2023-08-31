import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { getQuestionList, deleteQuestion, handleBackToQuiz } from "../../../../Container/Quiz/QuizAction";
import { Card } from "antd";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainHeader from "../../../../Components/Mainheader";
import { useHistory } from "react-router-dom";
import EditQuestionOfQuiz from "./EditQuestionOfQuiz";

function UpdateQuizInLibrary(props) {

    useEffect(() => {
        props.getQuestionList(props.match.params.quizId);
    }, [props.match.params.quizId]);

    const history = useHistory();

    const handleDeleteQuestion = (id) => {
        props.deleteQuestion(id, handleCallBack)

    }
    const handleCallBack = () => {
        history.push(`/updateQuizNameInLibrary/${props.showQuiz.quizName}/${props.showQuiz.duration}/${props.showQuiz.quizId}`)
    }
    const backTo = () => {
        props.handleBackToQuiz()
        history.push(`/quizLibrary`)
    }

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
                {props.questionList.map((item, i) => {
                    console.log(i + 1)
                    console.log(item)
                    const questionNo = i + 1
                    return (
                        <SwiperSlide key={item}>

                            <div class="h-h37">
                               
                                    <EditQuestionOfQuiz item={item}
                                        questionNo={questionNo}
                                        handleDeleteQuestion={handleDeleteQuestion}
                                        backTo={backTo}
                                    />
                               
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
    showQuiz: quiz.showQuiz
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getQuestionList,
            deleteQuestion,
            handleBackToQuiz
        },

        dispatch
    );
export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuizInLibrary);