import React from 'react';
import {useEffect,useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';
import {Formik} from 'formik';
import MainHeader from '../../../../Navigation/MainHeader';
import {bindActionCreators} from 'redux';
import MainHeaderBackButton from '../../../../Navigation/MainHeaderBackButton';
import {getFinalizeQuiz,deleteHostQuiz,hostQuiz} from "../../QuizAction";
import {connect} from 'react-redux';
import externalStyle from '../../../../style/externalStyle';
function FinalizeQuiz(props) {

    useEffect(()=>{
           props.getFinalizeQuiz(props.showQuiz&&props.showQuiz.quizId);
          },[]) 
    const navigate = props.navigation.navigate;

    const navigation = props;   
    const onhandleClick = () => {
        props.navigation.navigate('home');
    };
    // const onhandleClickHost = () => {
    //     props.navigation.navigate('Play Quiz');
    // };
   // const quizName = this.props.quizId.quizName;

    return (
        <>
            <MainHeader />
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 16,
                    position: 'relative',
                    backgroundColor: '#ffffff',
                }}
            >
                  <View style={externalStyle.container}>
                    <Card containerStyle={externalStyle.mainCardF}>
                        {/* <Text style={styles.norwegian}> Norwegian explorers</Text> */}
                        <Text style={externalStyle.headplayquizhost} >
                                    {`${props.finalizeQuiz.quizName || ""}`}
                                </Text>
                        <Card
                            containerStyle={{
                                borderRadius: 10,
                                marginTop: '8%',
                                borderColor: 'lightgray',
                                width: '95%',
                                marginLeft: '3%',
                                height: 125,
                            }}
                        >
                            <Text style={externalStyle.firstCardTextF}>Created:</Text>
                            <Text style={externalStyle.firstCardTextF}>Questions:  {`${props.finalizeQuiz.noOfQuestions || ""}`}</Text>
                            <Text style={externalStyle.firstCardTextF}>Categories:</Text>
                        </Card>

                        <View style={{ marginTop: '14%' }}>
                            <Text style={externalStyle.selectF}>Select quiz rules</Text>
                        </View>
                        <Card
                            containerStyle={externalStyle.resultCardF}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={externalStyle.textViewFP}>
                                    Question response time:
                                </Text>
                                <Text style={externalStyle.timeTextFP}>
                                    {`${props.finalizeQuiz.duration || ""}`} sec
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginVertical: '3%' }}>
                                <Text style={externalStyle.textViewFP}>
                                    Scoring system:
                                </Text>
                                <Text style={externalStyle.timeTextFP}>
                                    Standard
                                </Text>
                            </View>                           
                        </Card>
                        <View style={{ flexDirection: 'row', alignSelf:'center',marginTop:'5%', }}>
                            <Button
                                title={'Delete This Quiz'} 
                                titleStyle={externalStyle.titleStyleFP}                               
                                containerStyle={externalStyle.containerStyleFP}
                                buttonStyle={externalStyle.buttonStyleHP}
                                onPress={() => props.deleteHostQuiz(props.showQuiz&&props.showQuiz.quizId,onhandleClick())}                              
                            />
                            <Button
                                title={'Edit This Quiz'}  
                                titleStyle={externalStyle.titleStyleFP}                             
                                containerStyle={externalStyle.containerStyleFP}
                                buttonStyle={externalStyle.buttonStyleHP}
                                onPress={() => props.navigation.navigate('Quiz Invite')}
                            />
                        </View>
                        <Button
                            title={'Host This Quiz'}
                            titleStyle={externalStyle.titleStyleLB}
                            containerStyle={externalStyle.containerStyleLB}
                            buttonStyle={externalStyle.buttonStyleHP}
                            onPress={() => props.hostQuiz(props.navigation.navigate('Play Quiz'))}
                        />
                    </Card>
                </View>

            </View >
          
        </>
    );
}
const mapStateToProps = ({auth, quiz}) => ({  
    showQuiz: quiz.showQuiz, 
    noOfQuestions:quiz.noOfQuestions,
  quizId:quiz.showQuiz.quizId,
  fetchingFinalizeQuiz: quiz.fetchingFinalizeQuiz,
 fetchingFinalizeQuizError: quiz.fetchingFinalizeQuizError,
 finalizeQuiz: quiz.finalizeQuiz,
 deletingQuizHost:quiz.deletingQuizHost,
 deletingQuizHostError: quiz.deletingQuizHostError,
 hostQuizByQuizId:quiz.hostQuizByQuizId,
 hostQuizByQuizIdError: quiz.hostQuizByQuizIdError,
   
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {     
         getFinalizeQuiz,
         deleteHostQuiz,
         hostQuiz    
      },
      dispatch,
    );
  
  export default connect(mapStateToProps, mapDispatchToProps)(FinalizeQuiz);




