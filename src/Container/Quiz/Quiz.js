import React, {useEffect,useState } from 'react';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import MainHeader from '../../Navigation/MainHeader';
import {deleteQuestion,addQuestion,getQuizName,getCategory} from './QuizAction';
import { Button, Card, Input } from 'antd';

//import AllQuiz from './AllQuiz';

function Quiz(props) {
  const [count, setCount] = useState(1);
  const [selectedCategory,setSelectedCategory]= useState("");
  const handleCount = () => setCount(count + 1); 
  const handleCategory = (id) => setSelectedCategory(id); 
  
  // function handleCallBack(data,resetForm) {
  //   //alert(data);
  //    if(data==="success"){
  //    setSelectedCategory(""),
  //     resetForm(),
  //     handleCount()
  //    }
  //    else{console.log("Wrong")}
  // };  

  
   useEffect(()=>{
    props.getCategory();
   },[]) 
   console.log(props.category);
   //alert(props.category);
  
   
  return (
    <>
      {/* <MainHeader /> */}
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
          },
          (data)=>
          // handleCallBack
          (data,resetForm))        
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
          <div >
              <div style={{alignItems: 'center',alignSelf:"center"}}>
               <Input>{props.showQuiz&&props.showQuiz.quizName}</Input>          
              </div>
              <div>
                <Button
                    title={'Finalize Quiz'}
                   
                   // containerStyle={externalStyle.containerStyleB}
                   containerStyle={{
                    width: 'auto',
                    alignSelf:"flex-end"                   
                  }}
                   
                    onPress={() => props.navigation.navigate('Finalize Quiz')}
                />
                </div>
              {/* Container */}
              <div >
                <Card >
                  <Card.Title style={{fontSize: 22, alignSelf:'center'}}>
                    <Input > Question {count || null}</Input>
                  </Card.Title>

                  {/* <TouchableOpacity
                  // we can't use perscentge in reactNative
                  
                    > */}
                   
                      <Input
                        multiline={true}
                       value={values.questionName}
                       numberOfLines={10}
                        placeholder="Question"
                        name="questionName"                        
                       
                        onChangeText={handleChange('questionName')}
                      />
    
                  {/* </TouchableOpacity> */}
{/*               
                  <TouchableOpacity
                 
                  
                  > */}
                    <Input
                    multiline
                    value={values.option1}
                    numberOfLines={5}
                      placeholder="Correct answer"
                      name="option1"
                 
                      onChangeText={handleChange('option1')}
                    />
                  {/* </TouchableOpacity> */}

                  {/* <TouchableOpacity
                    
                    
                    > */}
                    <Input
                    multiline
                    value={values.option2}
                    numberOfLines={5}
                      placeholder="Option 2"
                      name="option2"                      
                   
                      onChangeText={handleChange('option2')}
                    />
                  {/* </TouchableOpacity>

                  <TouchableOpacity
                  
                
                    > */}
                    <Input
                    multiline
                    value={values.option3}
                    numberOfLines={5}
                      placeholder="Option 3"
                      name="option3"
                     
                      onChangeText={handleChange('option3')}
                    />
                  {/* </TouchableOpacity> */}

                  {/* <TouchableOpacity
                > */}
                    <Input
                    multiline
                    value={values.option4}
                    numberOfLines={5}
                      placeholder="Option 4"
                      name="option4"
                  
                      onChangeText={handleChange('option4')}
                    />
                  {/* </TouchableOpacity> */}

                  <div style={{ flexDirection: 'row',flexWrap:"wrap" }}> 
                  {!!props.category.length&&props.category.map((item)=>{
                    return(
                      <div>
                      <Card>
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
                  </div> 
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
                        </div>
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
              </div>

              {/* Buttons */}

              <div
                style={{
                  flexDirection: 'row',
                  margin:5,
                  alignSelf: 'center'
                }}>
                <Button
                        title={'Delete Question'}
                        // titleStyle={externalStyle.titleStyle}
                        // containerStyle={externalStyle.containerStyleBD}
                        // buttonStyle={externalStyle.buttonStyleDelete}
                        // onPress={() => props.navigation.navigate('Swipecard')}
                    />

                <Button
                    title={'Update Quiz'}
                    onClick={handleSubmit}
                    Loading={props.addingQuestion}
                    // titleStyle={externalStyle.titleStyle}
                    // containerStyle={externalStyle.containerStyleBD}
                    // buttonStyle={externalStyle.buttonStyleFinal}
                   // onPress={() => props.navigation.navigate('Finalize Quiz')}
                />

                <Button
                  title={'Add New Questions'}
                  // titleStyle={externalStyle.titleStyle}
                  // containerStyle={externalStyle.containerStyleBD}
                  // buttonStyle={externalStyle.buttonStyleAdd}
                  onClick={handleSubmit}
                  Loading={props.addingQuestion}
                // onPress={() => props.navigation.navigate('Quiz Addquestions')}
                />
              </div>
           

          </div>
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
