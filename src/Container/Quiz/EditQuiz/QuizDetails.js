import { Button, Card } from 'antd';
import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
 import {closeQuiz,hostQuiz} from '../../Quiz/QuizAction';
  import QuizDetailsPlayerTable from './QuizDetailsPlayerTable';
import MainHeader from '../../../Components/Mainheader';
import { Field, Formik,Form } from 'formik';
import { InputComponent } from '../../../Components/Forms/Formik/InputComponent';
// import FeedbackTable from '../FeedbackTable';

function QuizDetails(props) {
  // useEffect(()=>{
    
  //   props.closeQuiz(props.quizNameDetails.quizId);
  //  },[]) 
  const link = `http://player.quizledge.no${props.quizNameDetails.quizLink || ''}`
  function copyToClipboard(link) {
    navigator.clipboard.writeText(link)
  .then(() => {
    console.log(`Copied text to clipboard: ${link}`);
    //alert(`Copied text to clipboard: ${link}`);
  })
  .catch((error) => {
    console.error(`Could not copy text: ${error}`);
  });
  }
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

  const viewData = props.quizNameDetails.playerViewDTOs;
  const viewmessage = props.quizNameDetails.message;
  const ID = props.quizNameDetails.quizId;

  return (
    <>
     <MainHeader/>
     <Formik>
     <Form class=" max-sm:w-11/12 mt-8 m-auto md:mt-12  w-1/5  h-h50  ">
     <div className="bg-white rounded-2xl mt-3 flex justify-center ">
           
           <div class="shadow-2xl border-solid w-11/12 flex justify-center  p-1 max-sm:m-0 h-h34 rounded-2xl md:m-auto">
        <div class="w-11/12" >
          <div>
           
         
            <h2 class="text-base mt-4 ml-4 flex justify-center" >You are hosting</h2>
            {/* <h1 >
                {`${props.quizNameDetails.quizName || ''}`}{' '}
                </h1> */}

<h2 class="text-base mt-2 flex justify-center" >
              Share URL for others to access.
            </h2>
            <Card class="mt-4">
          {props.quizNameDetails.quizLink?
          <h2 class="text-base overflow-hidden">{`http://player.quizledge.no${props.quizNameDetails.quizLink || ''}`}</h2>:""}
        </Card>
        <div class="flex justify-center mt-1">
        <Button
        style={{backgroundColor:"#4096ff",width:"-webkit-fill-available",borderRadius:"0.4rem",height:"auto"}}
        onClick={copyToClipboard(link)}
        >
        <h2 class="text-white">Click to Copy The Url</h2>
        </Button>
        </div>
            {/* <Card
              containerStyle={{
                borderColor: '#32167C',
                width: '96%',
                marginLeft: '3%',
                height: 70,
              }}>
              <h1 >{`http://player.quizledge.no${props.quizNameDetails.quizLink ||''}`}</h1>
            </Card> */}
            {/* <div>
            <Field
                  //name="quizName"
                  isColumn
                  component={InputComponent}
                  //onChangeText={handleChange('quizName')}
                  style={{textAlign: 'center'}}
                  //placeholder="Enter Quiz Name"
                  inlineLabel
                 
                />
            </div> */}
             {/* <Button
                              type="primary"
                              style={{backgroundColor:"white"}}
              ><h3>Copy URL</h3>
            </Button> */}
            <Button
              title={'Share This Url'}

            //   onPress={shareMessage}
            />
            <h2 class="text-xl mt-2" >Who is playing your quiz?</h2>
             <div >

              {/* {viewData === null ? (
                <h1>{viewmessage}</h1>
              ) : ( */}
                <QuizDetailsPlayerTable
                // data={props.quizNameDetails} 
                />
               {/* )}  */}
            </div> 
            <div
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: '5%',
              }}>
              <Button
               type="primary"
               style={{backgroundColor:"#61845b"}}
               onClick={()=>props.closeQuiz(ID)}
                
              ><h3>Close Quiz</h3></Button>
              {/* <Button
             
        
                // onPress={() => {
                //   navigation.navigate('Update Quiz Name', {quizId: props.item});
                // }}
              >Edit This Quiz</Button> */}
            </div>
            {/* <Button
           

            //   onPress={hostQuiz}
            >Host This Quiz</Button> */}
            <h2 >Player feedback</h2>
           
          </div>
        </div>
      </div>
      </div>
      </Form>
      </Formik>
    </>
  );
}
const mapStateToProps = ({quiz}) => ({
  quizNameDetails: quiz.quizNameDetails,
  fetchingFeedback: quiz.fetchingFeedback,
  feedback: quiz.feedback,
  fetchingFeedbackErrot: quiz.fetchingFeedbackErrot,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
       closeQuiz,
       hostQuiz
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(QuizDetails);