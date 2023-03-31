import { Button, Card } from 'antd';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {closeQuiz,hostQuiz} from '../../Quiz/QuizAction';
 import QuizDetailsPlayerTable from './QuizDetailsPlayerTable';
// import FeedbackTable from '../FeedbackTable';

function QuizDetails(props) {
//   const shareMessage = () => {
//     Share.share({
//       message: `http://player.quizledge.no${
//         props.quizNameDetails.quizLink || ''
//       }`,
//     })
//       .then(result => console.log(result))
//       .catch(errorMsg => console.log(errorMsg));
//   };
//   const navigation = useNavigation();

//   const viewData = props.quizNameDetails.playerViewDTOs;
//   const viewmessage = props.quizNameDetails.message;
//   const ID = props.quizNameDetails.quizId;

  return (
    <>
      <div>
        <div >
          <Card
           
            // containerStyle={styles.mainCard}
          >
            <h1 >You are hosting</h1>
            {/* <h1 >
                {`${props.quizNameDetails.quizName || ''}`}{' '}
                </h1> */}

            <h1 >
              Share URL for others to access.
            </h1>
            <Card
              containerStyle={{
                borderColor: '#32167C',
                width: '96%',
                marginLeft: '3%',
                height: 70,
              }}>
              {/* <h1 >{`http://player.quizledge.no${props.quizNameDetails.quizLink ||''}`}</h1> */}
            </Card>
            <Button
              title={'Share This Url'}

            //   onPress={shareMessage}
            />
            <h1>Who is playing your quiz?</h1>
            <Card >

              {/* {viewData === null ? (
                <h1>{viewmessage}</h1>
              ) : ( */}
                <QuizDetailsPlayerTable
                // data={props.quizNameDetails} 
                />
              {/* )} */}
            </Card>
            <div
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: '5%',
              }}>
              <Button
              
                // onPress={() => {
                //   props.closeQuiz(props.item, navigation.navigate('home'));
                // }}
              >Close Quiz</Button>
              <Button
             
        
                // onPress={() => {
                //   navigation.navigate('Update Quiz Name', {quizId: props.item});
                // }}
              >Edit This Quiz</Button>
            </div>
            <Button
           

            //   onPress={hostQuiz}
            >Host This Quiz</Button>
            <h1 >Player feedback</h1>
            <Card>
              {/* <FeedbackTable 
            //   data={props.feedback}
               /> */}
            </Card>
          </Card>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = ({quiz}) => ({
//   quizNameDetails: quiz.quizNameDetails,
//   fetchingFeedback: quiz.fetchingFeedback,
//   feedback: quiz.feedback,
//   fetchingFeedbackErrot: quiz.fetchingFeedbackErrot,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    //   closeQuiz,
    //   hostQuiz
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(QuizDetails);
