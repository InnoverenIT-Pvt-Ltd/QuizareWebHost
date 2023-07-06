


import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import { Route, Routes, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Layout,
  Menu,
  Icon,
  Badge,
  Tag,
  Tooltip,
  message,
  Popconfirm,
} from "antd";
import { ThemeProvider } from "styled-components";
import {
  ApplicationWrapper,
  LayoutWrapper,
} from "../Components/UI/Layout";
import { BundleLoader } from "../Components/Placeholder";
import { MultiAvatar } from "../Components/UI/Elements";
import { Select } from "antd";
import Question1 from "../Components/Quizs/Question1";
import SelectQuizname from "../Components/Quizs/SelectQuizname";
import CreateQuiz from "../Components/Quizs/CreateQuiz";
import QuizName from "../Container/Quiz/QuizName";
import Quiz from "../Container/Quiz/Quiz";
import QuizinLibrary from "../Container/Quiz/EditQuiz/SwipeIn/QuizinLibrary"
import FinalizeQuiz from "../Container/Quiz/Child/HostQuizes/FinalizeQuiz";
import UpdateQuizName from "../Container/Quiz/EditQuiz/UpdateQuizName";
import QuizDetails from "../Container/Quiz/EditQuiz/QuizDetails";
import UpdateQuiz from "../Container/Quiz/EditQuiz/UpdateQuiz";
import OngoingQuiz from "../Components/Quizs/OngoingQuiz";
import ReportBugs from "../Components/Quizs/ReportBugs";
import Report from "../Components/Quizs/Report";
import Swipe from "../Container/Quiz/EditQuiz/Swipe/Swipe";
import SwipeIn from "../Container/Quiz/EditQuiz/SwipeIn/SwipeIn";
import QuizOut from "../Container/Quiz/EditQuiz/Swipe/QuizOut";
import QuizIn from "../Container/Quiz/EditQuiz/SwipeIn/QuizIn";
import QuizLibrary from "../Container/Quiz/Child/QuizLibrary/QuizLibrary"
import SwipeInLibrary from "../Container/Quiz/EditQuiz/SwipeIn/SwipelnLibrary"
import UpdateQuizNameLibrary from "../Container/Quiz/EditQuiz/UpdateQuizNameLibrary.js"
import updateOngoing from "../Components/Quizs/updateOngoing";
import ProfileDropdown from "../Container/Auth/ProfileDropdown";
import ChangePassword from "../Container/Auth/ChangePassword";
const { Option } = Select;

const { Header, Sider, Content } = Layout;

function MainApp(props) {

  return (

    // <LayoutWrapper className="max-sm:w-wk flex justify-center items-center md:items-start">
    <LayoutWrapper>

      <ApplicationWrapper>
        {/* <AppErrorBoundary> */}
        <Content>
          <Suspense maxDuration={6000} fallback={<BundleLoader />}>
            <Switch>

              <Route exact path="/" component={CreateQuiz} />
              <Route exact path="/profile" component={ProfileDropdown} />
              <Route exact path="/changepassword" component={ChangePassword} />
              <Route exact path="/quizzes" component={QuizName} />
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
              <Route exact path="/addquiz" component={Quiz} />
            </Switch>
          </Suspense>
        </Content>
        {/* </AppErrorBoundary> */}
      </ApplicationWrapper>
    </LayoutWrapper>
    // </LayoutWrapper>
  );
}
// }

const mapStateToProps = ({ auth, theme, language }) => ({
  // fullName:auth.userDetails.fullName



});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // getPresentNotifications,
      // updateCustomerById,
      // setLanguage,
      // getServiceDetails,
      // updateServiceLanguage,
      // updateCustomerLanguage
      // getOpportunityRecord,
      // getRequirementRecord,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(MainApp);







