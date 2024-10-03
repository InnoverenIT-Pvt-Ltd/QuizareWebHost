// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { useEffect } from "react";
// import { getQuestionList, deleteQuestion, handleBackToQuiz } from "../../../../Container/Quiz/QuizAction";
// import { Card } from "antd";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import MainHeader from "../../../../Components/Mainheader";
// import { useHistory } from "react-router-dom";
// import EditQuestionOfQuiz from "./EditQuestionOfQuiz";

// function UpdateQuizInLibrary(props) {

//     useEffect(() => {
//         props.getQuestionList(props.match.params.quizId);
//     }, [props.match.params.quizId]);

//     const history = useHistory();

//     const handleDeleteQuestion = (id) => {
//         props.deleteQuestion(id, handleCallBack)

//     }
//     const handleCallBack = () => {
//         history.push(`/updateQuizNameInLibrary/${props.showQuiz.quizName}/${props.showQuiz.duration}/${props.showQuiz.quizId}`)
//     }
//     const backTo = () => {
//         props.handleBackToQuiz()
//         history.push(`/quizLibrary`)
//     }

//     if(props.fetchingQuestionList){
//         return <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-loader">
//         <div className="loader"></div>
//       </div>
//       }

//     return (
//         <>
//             <MainHeader />
//             <Swiper
//                 pagination={{
//                     type: "fraction",
//                 }}
//                 navigation={true}
//                 modules={[Pagination, Navigation]}
//                 className="mySwiper"
//             >
//                 {props.questionList.map((item, i) => {
//                     console.log(i + 1)
//                     console.log(item)
//                     const questionNo = i + 1
//                     return (
//                         // <SwiperSlide key={item}>

//                             <div class="flex h-hk w-full">
//                                <div className="w-[20%] bg-[#6245C6]"></div>
//                                <div className="w-[80%]">
//                                {/* <SwiperSlide key={item}> */}
//                                     <EditQuestionOfQuiz item={item}
//                                         questionNo={questionNo}
//                                         handleDeleteQuestion={handleDeleteQuestion}
//                                         backTo={backTo}
//                                     />
//                                {/* </SwiperSlide> */}
//                                </div>
//                             </div>
//                         // </SwiperSlide>
//                     );
//                 })}
//             </Swiper>
//         </>
//     )
// }
// const mapStateToProps = ({ quiz }) => ({
//     questionList: quiz.questionList,
//     quizNameDetails: quiz.quizNameDetails,
//     showQuiz: quiz.showQuiz,
//     fetchingQuestionList: quiz.fetchingQuestionList,
// });

// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators(
//         {
//             getQuestionList,
//             deleteQuestion,
//             handleBackToQuiz
//         },

//         dispatch
//     );
// export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuizInLibrary);

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";
import { getQuestionList, deleteQuestion, handleBackToQuiz } from "../../../../Container/Quiz/QuizAction";
import {  Card,Drawer } from "antd";
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
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    useEffect(() => {
        props.getQuestionList(props.match.params.quizId);
    }, [props.match.params.quizId]);

    const history = useHistory();

    const handleDeleteQuestion = (id) => {
        props.deleteQuestion(id, handleCallBack);
    };

    const handleCallBack = () => {
        history.push(`/updateQuizNameInLibrary/${props.showQuiz.quizName}/${props.showQuiz.duration}/${props.showQuiz.quizId}`);
    };

    const backTo = () => {
        props.handleBackToQuiz();
        history.push(`/quizLibrary`);
    };

    const handleQuestionSelect = (index) => {
        setSelectedQuestionIndex(index);
        if (swiperInstance) {
            swiperInstance.slideTo(index); // Move to the selected slide
        }
        setIsDrawerVisible(false);
    };

    if (props.fetchingQuestionList) {
        return (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-loader">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <>
            <MainHeader />
            <div className="flex h-hk w-full ">
                <div className="w-[20%] bg-[#6245C6] p-4 max-sm:hidden">
                    {props.questionList.map((item, i) => (
                        <Card
                            key={i}
                            className={`cursor-pointer mb-2 ${i === selectedQuestionIndex ? 'bg-blue-200' : ''}`}
                            onClick={() => handleQuestionSelect(i)}
                        >
                            Question {i + 1}
                            <div className="text-sm font-semibold">{item.question}</div>
                        </Card>
                    ))}
                </div>
                <Drawer
                title="Select a Question"
                placement="left"
                onClose={() => setIsDrawerVisible(false)}
                visible={isDrawerVisible}
                width={300}
              > {props.questionList.map((item, i) => (
                <Card
                    key={i}
                    className={`cursor-pointer mb-2 ${i === selectedQuestionIndex ? 'bg-blue-200' : ''}`}
                    onClick={() => handleQuestionSelect(i)}
                >
                    Question {i + 1}
                </Card>
            ))}
            </Drawer>
                <div className="w-[80%] md:p-4 max-sm:w-wk ">
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
                        {props.questionList.map((item, i) => (
                            <SwiperSlide key={i}>
                                <EditQuestionOfQuiz
                                    item={item}
                                    questionNo={i + 1}
                                    handleDeleteQuestion={handleDeleteQuestion}
                                    backTo={backTo}
                                    setIsDrawerVisible={setIsDrawerVisible}
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
    quizNameDetails: quiz.quizNameDetails,
    showQuiz: quiz.showQuiz,
    fetchingQuestionList: quiz.fetchingQuestionList,
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
