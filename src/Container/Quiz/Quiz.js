import React, {useEffect,useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TextInput} from 'react-native-paper';
import {Card, Input, Button, withTheme} from 'react-native-elements';
import MainHeader from '../../Navigation/MainHeader';
import {deleteQuestion,addQuestion,getQuizName,getCategory} from './QuizAction';

//import AllQuiz from './AllQuiz';
import externalStyle from '../../style/externalStyle';

function Quiz(props) {
  const [count, setCount] = useState(1);
  const [selectedCategory,setSelectedCategory]= useState("");
  const handleCount = () => setCount(count + 1); 
  const handleCategory = (id) => setSelectedCategory(id); 
  
  function handleCallBack(data,resetForm) {

     if(data==="success"){
     setSelectedCategory(""),
      resetForm(),
      handleCount()
     }
     else{console.log("Wrong")}
  };  

  
   useEffect(()=>{
    props.getCategory();
   },[]) 
   console.log(props.category);
   //alert(props.category);
  
  //console.log(questionId);
  const navigate = props.navigation.navigate;

  const navigation = props;

  const onhandleClick = () => {
    props.navigation.navigate('home');
  };   
  return (
    <>
      <MainHeader />
      <Formik
        initialValues={{
         // duration: "",
          // quizName: props.showQuiz.quizName,
          quizHostId: "QH4472404666122022",
          quizId:props.showQuiz&&props.showQuiz.quizId,
          categoryId: selectedCategory,
          //categoryId:"CAT33389270105262022",
          questionName:"",
          option1:"",
          option2:"",
          option3:"",
          option4:""
        }}
        onSubmit={(values,{resetForm}) => {
          //alert(JSON.stringify(values));
          props.addQuestion({
            ...values,
             quizId:props.showQuiz&&props.showQuiz.quizId,
            categoryId: selectedCategory
          },(data)=>handleCallBack(data,resetForm))        
          // resetForm();
          // handleCount();
        }}>
        {({
          handleChange,
          handleBlur,         
          handleSubmit,
          setFieldValue,
          errors,
          values,
        }) => (
          <View style={externalStyle.firstView}>
            <ScrollView>
              <View style={{alignItems: 'center',alignSelf:"center"}}>
               <Text style={externalStyle.headplayquizhost}>{props.showQuiz&&props.showQuiz.quizName}</Text>          
              </View>
              <View>
                <Button
                    title={'Finalize Quiz'}
                    titleStyle={externalStyle.titleStyle}
                   // containerStyle={externalStyle.containerStyleB}
                   containerStyle={{
                    width: 'auto',
                    alignSelf:"flex-end"                   
                  }}
                    buttonStyle={externalStyle.buttonStyleFinal}
                    onPress={() => props.navigation.navigate('Finalize Quiz')}
                /></View>
              {/* Container */}
              <View style={externalStyle.container}>
                <Card containerStyle={externalStyle.mainCard}>
                  <Card.Title style={{fontSize: 22, alignSelf:'center'}}>
                    <Text > Question {count || null}</Text>
                  </Card.Title>

                  <TouchableOpacity
                  // we can't use perscentge in reactNative
                    style={externalStyle.questions}>
                    <SafeAreaView>
                      <TextInput
                        multiline={true}
                       value={values.questionName}
                       numberOfLines={10}
                        placeholder="Question"
                        name="questionName"                        
                        style={externalStyle.question}
                        onChangeText={handleChange('questionName')}
                      />
                    </SafeAreaView>
                  </TouchableOpacity>
              
                  <TouchableOpacity
                    style={externalStyle.viewOption}
                  
                  >
                    <TextInput
                    multiline
                    value={values.option1}
                    numberOfLines={5}
                      placeholder="Correct answer"
                      name="option1"
                      style={externalStyle.option}
                      onChangeText={handleChange('option1')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    
                    style={externalStyle.viewOption}>
                    <TextInput
                    multiline
                    value={values.option2}
                    numberOfLines={5}
                      placeholder="Option 2"
                      name="option2"                      
                      style={externalStyle.option}
                      onChangeText={handleChange('option2')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                  
                    style={externalStyle.viewOption}>
                    <TextInput
                    multiline
                    value={values.option3}
                    numberOfLines={5}
                      placeholder="Option 3"
                      name="option3"
                      style={externalStyle.option}
                      onChangeText={handleChange('option3')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    
                    style={externalStyle.viewOption}>
                    <TextInput
                    multiline
                    value={values.option4}
                    numberOfLines={5}
                      placeholder="Option 4"
                      name="option4"
                      style={externalStyle.option}
                      onChangeText={handleChange('option4')}
                    />
                  </TouchableOpacity>

                  <View style={{ flexDirection: 'row',flexWrap:"wrap" }}> 
                  {!!props.category.length&&props.category.map((item)=>{
                    return(
                      <View>
                      <Card containerStyle={externalStyle.containerStyleC}>
                      <Button
                          style={{
                              textAlign: 'center',
                              //color: '#6949FD',
                              //fontSize:16,
                              color:item.categoryId===selectedCategory?"red":'#6949FD'
                          }}
                          onClick={() => handleCategory(item.categoryId)}
                      >{item.categoryName}</Button>
                  </Card>
                  </View> 
                    )
                  })}                           
                            {/* <Card containerStyle={externalStyle.containerStyleC}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: '#6949FD'
                                    }}
                                    onPress={() => alert('Nature')}
                                >
                                    Nature
                                </Text>
                            </Card>
                            <Card containerStyle={externalStyle.containerStyleC}>
                                <Text style={{ textAlign: 'center', color: '#6949FD' }}>Geography</Text>
                            </Card>
                            <Card containerStyle={externalStyle.containerStyleC}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: '#6949FD'
                                    }}
                                    onPress={() => props.navigation.navigate('Quiz History')}
                                >
                                    History
                                </Text>
                            </Card> */}
                        </View>
                        {/* <View style={{ flexDirection: 'row' }}>
                        <Card containerStyle={externalStyle.containerStyleC}>
                                <Text style={{ textAlign: 'center', color: '#6949FD' }}>Sports</Text>
                            </Card>
                            <Card containerStyle={externalStyle.containerStyleC}>
                                <Text style={{ textAlign: 'center', color: '#6949FD' }}>Culture</Text>
                            </Card>
                            <Card containerStyle={externalStyle.containerStyleC}>
                                <Text style={{ textAlign: 'center', color: '#6949FD' }}>Mixed</Text>
                            </Card>
                        </View>           */}
                </Card>
              </View>

              {/* Buttons */}

              <View
                style={{
                  flexDirection: 'row',
                  margin:5,
                  alignSelf: 'center'
                }}>
                <Button
                        title={'Delete Question'}
                        titleStyle={externalStyle.titleStyle}
                        containerStyle={externalStyle.containerStyleBD}
                        buttonStyle={externalStyle.buttonStyleDelete}
                        onPress={() => props.navigation.navigate('Swipecard')}
                    />

                <Button
                    title={'Update Quiz'}
                    titleStyle={externalStyle.titleStyle}
                    containerStyle={externalStyle.containerStyleBD}
                    buttonStyle={externalStyle.buttonStyleFinal}
                   // onPress={() => props.navigation.navigate('Finalize Quiz')}
                />

                <Button
                  title={'Add New Questions'}
                  titleStyle={externalStyle.titleStyle}
                  containerStyle={externalStyle.containerStyleBD}
                  buttonStyle={externalStyle.buttonStyleAdd}
                  onPress={handleSubmit}
                // onPress={() => props.navigation.navigate('Quiz Addquestions')}
                />
              </View>
           
            </ScrollView>
          </View>
        )}
      </Formik>
     
    </>
  );
}
const mapStateToProps = ({auth, quiz}) => ({  
  fetchingQuizName: quiz.fetchingQuizName,
  fetchingQuizNameError: quiz.fetchingQuizNameError,
  showQuiz: quiz.showQuiz, 
  quizId:quiz.showQuiz.quizId,
  category: quiz.category,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {     
      deleteQuestion,
      addQuestion,
      getQuizName,
      getCategory,      
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
