



import React, { Component, lazy, Suspense } from "react";
import 'antd/dist/reset.css';
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import MainApp from "./Main/MainApp";
import Login from "./Container/Auth/Login";
import axios from "axios";
import "./App.css";
import { createBrowserHistory } from "history";
import { BundleLoader } from "./Components/Placeholder";
import PrivateRoute from "./Helpers/Auth/PrivateRoute";
// import AddQuiz from "./Components/Quizs/AddQuiz";
import Question1 from "./Components/Quizs/Question1";
import SelectQuizname from "./Components/Quizs/SelectQuizname";
import CreateQuiz from "./Components/Quizs/CreateQuiz";
import QuizName from "./Container/Quiz/QuizName";
import Quiz from "./Container/Quiz/Quiz";
import QuizinLibrary from "./Container/Quiz/EditQuiz/SwipeIn/QuizinLibrary"
import FinalizeQuiz from "./Container/Quiz/Child/HostQuizes/FinalizeQuiz";
import UpdateQuizName from "./Container/Quiz/EditQuiz/UpdateQuizName";
import QuizDetails from "./Container/Quiz/EditQuiz/QuizDetails";
import UpdateQuiz from "./Container/Quiz/EditQuiz/UpdateQuiz";
import OngoingQuiz from "./Components/Quizs/OngoingQuiz";
import ReportBugs from "./Components/Quizs/ReportBugs";
import Report from "./Components/Quizs/Report";
import Swipe from "./Container/Quiz/EditQuiz/Swipe/Swipe";
import SwipeIn from "./Container/Quiz/EditQuiz/SwipeIn/SwipeIn";
import QuizOut from "./Container/Quiz/EditQuiz/Swipe/QuizOut";
import QuizIn from "./Container/Quiz/EditQuiz/SwipeIn/QuizIn";
import QuizLibrary from "./Container/Quiz/Child/QuizLibrary/QuizLibrary"
import SwipeInLibrary from "./Container/Quiz/EditQuiz/SwipeIn/SwipelnLibrary"
import UpdateQuizNameLibrary from "./Container/Quiz/EditQuiz/UpdateQuizNameLibrary"
import updateOngoing from "./Components/Quizs/updateOngoing";
import LoginByMail from "./Container/Auth/LoginByMail";
import ForgetPasswordForm from "./Container/Auth/ForgetPasswordForm";
import SignUpPage from "./Container/Auth/SignUpPage";
import ChangePassword from "./Container/Auth/ChangePassword";
// import AppErrorBoundary from "./Helpers/ErrorBoundary/AppErrorBoundary";




/**
 * lazy loaded compenents
 */

const history = createBrowserHistory();
class App extends Component {
  render() {
    const { fetchingUserDetails } = this.props;
    return (

      <div>

        <Suspense fallback={<BundleLoader />}>
          {/* <Router history={history}> */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/email" component={LoginByMail} />
            <Route exact path="/create" component={CreateQuiz} />
            <Route exact path="/changepassword" component={ChangePassword} />
            <Route exact path="/quizzes" component={QuizName} />
            <Route exact path="/forgotPassword" component={ForgetPasswordForm} />
            <Route exact path="/signUp" component={SignUpPage} />
            <Route exact path="/addquiz" component={Quiz} />
            <Route exact path="/addquizout" component={QuizOut} />
            <Route exact path="/addquizin" component={QuizIn} />
            <Route path="/quizinLibrary/:quizId" component={QuizinLibrary} />
            <Route exact path="/finalize" component={FinalizeQuiz} />
            <Route exact path="/updateQuizName" component={UpdateQuizName} />
            <Route exact path="/updateQuizNameLibrary/:quizName/:duration/:quizId" component={UpdateQuizNameLibrary} />
            <Route exact path="/updateQuiz" component={UpdateQuiz} />
            <Route exact path="/hostquiz" component={QuizDetails} />
            <Route exact path="/updateOngoing/:quizId" component={updateOngoing} />
            <Route exact path="/report" component={Report} />
            {/* <Route exact path="/quiz" component={AddQuiz}/> */}
            <Route exact path="/question" component={Question1} />
            <Route exact path="/ongoingQuiz" component={OngoingQuiz} />
            <Route exact path="/swipe" component={Swipe} />
            <Route exact path="/swipeIn" component={SwipeIn} />
            <Route exact path="/swipeInLibrary/:quizId" component={SwipeInLibrary} />
            <Route exact path="/quizLibrary" component={QuizLibrary} />









            {/* <PrivateRoute path="/" component={MainApp} /> */}

          </Switch>
          {/* </Router> */}
        </Suspense>
      </div>

    );
  }
}

const mapStateToProps = ({ auth }) => ({
  fetchingUserDetails: auth.fetchingUserDetails,
});
export default connect(mapStateToProps)(App);

