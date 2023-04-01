import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getFinalizeQuiz, deleteHostQuiz, hostQuiz } from "../../QuizAction";
import { Button, Card } from "antd";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function FinalizeQuiz(props) {
    const history = useHistory();
 
  function handleCallBack(data) {
    history.push(`/create`);
  }
  useEffect(() => {
    props.getFinalizeQuiz(props.showQuiz && props.showQuiz.quizId);
  }, []);
  return (
    <>
      <div>
      <h1>{`${props.finalizeQuiz.quizName || ""}`}</h1>
      <Card>
        <h2>Created:</h2>
        <h2>Questions:  {`${props.finalizeQuiz.noOfQuestions || ""}`}</h2>
        <h2>Categories:</h2>
      </Card>
      <div style={{ marginTop: '14%' }}>
                            <h1 >Select quiz rules</h1>
                        </div>
                        <Card
                            
                            >
                                <div style={{ flexDirection: 'row' }}>
                                    <h1 >
                                        Question response time:
                                    </h1>
                                    <h1 >
                                        {`${props.finalizeQuiz.duration || ""}`} sec
                                    </h1>
                                </div>
                                <div style={{ flexDirection: 'row', marginVertical: '3%' }}>
                                    <h1 >
                                        Scoring system:
                                    </h1>
                                    <h1 >
                                        Standard
                                    </h1>
                                </div>                           
                            </Card>
                            <div style={{ flexDirection: 'row', alignSelf:'center',marginTop:'5%', }}>
                            <Link to="/create">
                            <Button
                              type="primary"
                              
                              onClick={() => props.deleteHostQuiz(props.showQuiz&&props.showQuiz.quizId,handleCallBack())}
                            >Delete This Quiz</Button>
                            </Link>
                         <Link to="/create">
                           <Button
                              type="primary"
                              
                            //   onClick={() => props.navigation.navigate('Quiz Invite')}
                            >Edit This Quiz</Button>
                            </Link> 
                            
                        </div>
                        <Link to="/hostquiz">
                        <Button
                              type="primary"
                              
                              onClick={() => props.hostQuiz()}
                            >Host This Quiz</Button>
                            </Link>



      </div>
    </>
  );
}

const mapStateToProps = ({ auth, quiz }) => ({
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
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getFinalizeQuiz,
      deleteHostQuiz,
      hostQuiz,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FinalizeQuiz);
