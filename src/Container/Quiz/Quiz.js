import React, {useEffect,useState } from 'react';
import {Field, Formik} from 'formik';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link ,withRouter} from "react-router-dom";
// import MainHeader from '../../Navigation/MainHeader';
import {deleteQuestion,addQuestion,getQuizName,getCategory} from './QuizAction';
import { Button, Card, Input } from 'antd';
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";

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
          <Card style={{ width: 350, height: 450,borderRadius: 1,borderWidth:1,boxShadow: '1px 2px 2px 2px rgba(40,40,40,39)' }}>
          <div >
              <div style={{alignItems: 'center',alignSelf:"center"}}>
               <h1>{props.showQuiz&&props.showQuiz.quizName}</h1>          
              </div>
              <div>
                <Button
                    title={'Finalize Quiz'}
                   
                   // containerStyle={externalStyle.containerStyleB}
                   containerStyle={{
                    width: 'auto',
                    alignSelf:"flex-end"                   
                  }}
                   
                    // onPress={() => props.navigation.navigate('Finalize Quiz')}
                />
                </div>
              {/* Container */}
              <div >
                <Card >
                  <Card style={{fontSize: 22, alignSelf:'center'}}>
                    <h1 > Question {count || null}</h1>
                  </Card>

                  {/* <TouchableOpacity
                  // we can't use perscentge in reactNative
                  
                    > */}
                   
                      <Field
                      //   multiline={true}
                      //  value={values.questionName}
                      //  numberOfLines={10}
                      component={InputComponent}
                      onChangeText={handleChange('questionName')}
                      style={{textAlign: 'center'}}
                        placeholder="Question"
                        name="questionName"                        
                       
                        // onChangeText={handleChange('questionName')}
                      />
    
                  {/* </TouchableOpacity> */}
{/*               
                  <TouchableOpacity
                 
                  
                  > */}
                    <Field
                    // multiline
                    // value={values.option1}
                    // numberOfLines={5}
                    component={InputComponent}
                    onChangeText={handleChange('option1')}
                    style={{textAlign: 'center'}}
                      placeholder="Correct answer"
                      name="option1"
                 
                      // onChangeText={handleChange('option1')}
                    />
                  {/* </TouchableOpacity> */}

                  {/* <TouchableOpacity
                    
                    
                    > */}
                    <Field
                    // multiline
                    // value={values.option2}
                    // numberOfLines={5}
                    component={InputComponent}
                    onChangeText={handleChange('option2')}
                    style={{textAlign: 'center'}}
                      placeholder="Option 2"
                      name="option2"                      
                   
                      // onChangeText={handleChange('option2')}
                    />
                  {/* </TouchableOpacity>

                  <TouchableOpacity
                  
                
                    > */}
                    <Field
                    // multiline
                    // value={values.option3}
                    // numberOfLines={5}
                    component={InputComponent}
                    onChangeText={handleChange('option3')}
                    style={{textAlign: 'center'}}
                      placeholder="Option 3"
                      name="option3"
                     
                      
                    />
                  {/* </TouchableOpacity> */}

                  {/* <TouchableOpacity
                > */}
                    <Field
                    // multiline
                    // value={values.option4}
                    // numberOfLines={5}
                      placeholder="Option 4"
                      name="option4"
                  
                      component={InputComponent}
                      onChangeText={handleChange('option4')}
                      style={{textAlign: 'center'}}
                    />
                  {/* </TouchableOpacity> */}

                  <div class="flex flex-wrap justify-center"> 
                  {!!props.category.length&&props.category.map((item)=>{
                    return(
                      <div>
                      <Card>
                      <p
                          style={{
                              textAlign: 'center',
                              //color: '#6949FD',
                              //fontSize:16,
                              color:item.categoryId===selectedCategory?"red":'#6949FD'
                          }}
                          onClick={() => handleCategory(item.categoryId)}
                      >{item.categoryName}</p>
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
  <div class="max-sm: flex flex-row justify-center items-center"
             >
<div>
<Button
  type="primary"
                  // title={'Add New Questions'}
                  // titleStyle={externalStyle.titleStyle}
                  // containerStyle={externalStyle.containerStyleBD}
                  // buttonStyle={externalStyle.buttonStyleAdd}
                  onClick={handleSubmit}
                  Loading={props.addingQuestion}
                // onPress={() => props.navigation.navigate('Quiz Addquestions')}
                >Add New Questions</Button>
                </div>
                <div>
<Button
  type="primary"
                  // title={'Add New Questions'}
                  // titleStyle={externalStyle.titleStyle}
                  // containerStyle={externalStyle.containerStyleBD}
                  // buttonStyle={externalStyle.buttonStyleAdd}
                  onClick={handleSubmit}
                  Loading={props.addingQuestion}
                // onPress={() => props.navigation.navigate('Quiz Addquestions')}
                >Update Quiz</Button>
                </div>
                <div>
<Button
  type="primary"
                  // title={'Add New Questions'}
                  // titleStyle={externalStyle.titleStyle}
                  // containerStyle={externalStyle.containerStyleBD}
                  // buttonStyle={externalStyle.buttonStyleAdd}
                  onClick={handleSubmit}
                  Loading={props.addingQuestion}
                // onPress={() => props.navigation.navigate('Quiz Addquestions')}
                >Delete Question</Button>
                </div>
                </div>
                </Card>
              </div>

              {/* Buttons */}

           

          </div>
          </Card>
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

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quiz));




// import React from 'react';
// import { Link ,withRouter} from "react-router-dom";
// import CreateQuiz from '../../Components/Quizs/CreateQuiz';
// import QuizHost from './QuizHost';

// function Quiz() {
//   return (
//     <div>
//       <QuizHost/>
//     </div>
//   )
// }

// export default withRouter (Quiz);

