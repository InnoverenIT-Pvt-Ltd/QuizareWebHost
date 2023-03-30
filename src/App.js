



import React, { Component, lazy, Suspense } from "react";
import 'antd/dist/reset.css';
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import MainApp from "./Main/MainApp";
import Login from "./Container/Auth/Login";
import axios from "axios";
import "./App.css";
import { BundleLoader } from "./Components/Placeholder";
import PrivateRoute from "./Helpers/Auth/PrivateRoute";
import AddQuiz from "./Components/Quizs/AddQuiz";
import Question1 from "./Components/Quizs/Question1";
import SelectQuizname from "./Components/Quizs/SelectQuizname";
import CreateQuiz from "./Components/Quizs/CreateQuiz";
import QuizName from "./Container/Quiz/QuizName";
import Quiz from "./Container/Quiz/Quiz";
// import AppErrorBoundary from "./Helpers/ErrorBoundary/AppErrorBoundary";




/**
 * lazy loaded compenents
 */


class App extends Component {
  render() {
    const { fetchingUserDetails } = this.props;
    return (
      <div>
     
          <Suspense fallback={<BundleLoader />}>
            <Switch>

            <Route exact path="/" component={Login }/>
            
            <Route exact path="/quiz" component={AddQuiz}/>
            <Route exact path="/question" component={Question1 }/>
            <Route exact path="/select" component={SelectQuizname}/>
            <Route exact path="/create" component={CreateQuiz}/>
            <Route exact path="/quizzes" component={QuizName}/>
            <Route exact path="/addquiz" component={Quiz}/>


         
                <PrivateRoute path="/" component={MainApp} />
          
            </Switch>
          </Suspense>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  fetchingUserDetails: auth.fetchingUserDetails,
});
export default connect(mapStateToProps)(App);

