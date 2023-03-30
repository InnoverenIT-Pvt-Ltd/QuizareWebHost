import React,{useEffect,useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';
import MainHeader from '../../../../Navigation/MainHeader';
import { hostFinalizeQuizUrl,getPlayersDetails } from '../../QuizAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MainHeaderBackButton from '../../../../Navigation/MainHeaderBackButton';
import externalStyle from '../../../../style/externalStyle';
import PlayersTable from './PlayersTable';

function PlayQuiz(props) {
    useEffect(()=>{
        props.hostFinalizeQuizUrl(props.showQuiz&&props.showQuiz.quizId);
        props.getPlayersDetails(props.playerName);
       },[]) 
    const [dataTable, setDataTable] = useState([]);
    const column = [
        { heading: 'Name', value: 'playerName' },
        { heading: 'Score', value: 'score' },
        { heading: 'Status', value: 'status' },        
      ]
    const navigation = props;

    const onhandleClick = () => {
        props.navigation.navigate('QuizRule ReleaseTwo');
    };

    return (
        <>
            <MainHeader />

            {/* <MainHeaderBackButton
                onhandleBackClick={onhandleClick}
                headerText={'Host Quiz'}
                navigation={navigation.props}
            /> */}

            <View style={externalStyle.firstView} >

                <View style={externalStyle.container}>
                    <Card 
                    containerStyle={externalStyle.mainCardPlayQuiz}
                   // containerStyle={styles.mainCard}
                    >

                        <Text style={externalStyle.headplayquiz}>
                        You are hosting</Text>
                       <Text style={externalStyle.headplayquizhost}>
                        {`${props.finalizeQuizUrl.quizName || ""}`} </Text>                      
                        
                        <Text style={externalStyle.access}>Share URL for others to access.</Text>
                        <Card
                            containerStyle={{                              
                                borderColor: '#32167C',
                                width: '96%',
                                marginLeft: '3%',
                                height: 70,
                            }}
                        >
                            <Text style={externalStyle.firstCardText}>{`${props.finalizeQuizUrl.quizLink || ""}`}</Text>
                        </Card>

                        <Button
                            title={'Copy Code'}
                            titleStyle={{
                                color: '#000000',
                                marginHorizontal: 20,
                                fontSize: 18,
                                fontFamily: 'roboto',
                                //textTransform: 'uppercase',
                            }}
                            containerStyle={{
                                width: '97%',
                                marginHorizontal: 50,
                                marginVertical: 16,
                                marginLeft: '2%',
                            }}
                            buttonStyle={{
                                height: 40,
                                backgroundColor: 'skyblue',
                                borderRadius: 4,
                            }}
                            onPress={() => props.navigation.navigate('Quiz Run')}
                        />
                        <Text style={externalStyle.access}>Who is playing your quiz?</Text>
                        <Card
                            containerStyle={styles.resultCard}
                        >
                        {/* <PlayersTable data={dataTable} column={column}/> */}
                            
                        </Card>

                        <Button
                            title={'Close Quiz'}
                            titleStyle={{
                                color: '#000',
                                marginHorizontal: 20,
                                fontSize: 20,
                                fontFamily: 'roboto',
                                //textTransform: 'uppercase',
                                letterSpacing: 1,
                            }}
                            containerStyle={{
                                width: '97%',
                                marginVertical: '8%',
                                marginLeft: '2%',
                            }}
                            buttonStyle={{
                                height: 50,
                                backgroundColor: '#acd09a',
                                borderRadius: 5,
                            }}
                         onPress={() => props.navigation.navigate('home')}
                        />

                    </Card>
                </View>

            </View>
        </>
    );
}
const mapStateToProps = ({auth, quiz}) => ({  
    showQuiz: quiz.showQuiz, 
  quizId:quiz.showQuiz.quizId,
  fetchingFinalizeQuizUrl: quiz.fetchingFinalizeQuizUrl,
 fetchingFinalizeQuizUrlError: quiz.fetchingFinalizeQuizUrlError,
 finalizeQuizUrl: quiz.finalizeQuizUrl,
 fetchingPlayersDetails: quiz.fetchingPlayersDetails,
 fetchingPlayersDetailsError: quiz.fetchingPlayersDetailsError,
 playerName: quiz.playerName,
   
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {     
        hostFinalizeQuizUrl,
        getPlayersDetails   
      },
      dispatch,
    );  
  export default connect(mapStateToProps, mapDispatchToProps)(PlayQuiz);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }, 
    
    resultCard: {
        height: 170,
        borderRadius: 1,
        borderColor: '#6949FD',
        width: '96%',
        marginLeft: '3%',
        marginTop: '6%',
    },
});