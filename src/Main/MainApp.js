


import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Layout,
} from "antd";
import {
  ApplicationWrapper,
  LayoutWrapper,
} from "../Components/UI/Layout";
import { BundleLoader } from "../Components/Placeholder";
const Question1 = lazy(() => import("../Components/Quizs/Question1"))
const CreateQuiz = lazy(() => import("../Components/Quizs/CreateQuiz"));
const QuizName = lazy(() => import("../Container/Quiz/QuizName"))
const Quiz = lazy(() => import("../Container/Quiz/Quiz"));
const QuizinLibrary = lazy(() => import("../Container/Quiz/EditQuiz/SwipeIn/QuizinLibrary"))
const FinalizeQuiz = lazy(() => import("../Container/Quiz/Child/HostQuizes/FinalizeQuiz"));
const UpdateQuizName = lazy(() => import("../Container/Quiz/EditQuiz/UpdateQuizName"))
const QuizDetails = lazy(() => import("../Container/Quiz/EditQuiz/QuizDetails"));
const UpdateQuiz = lazy(() => import("../Container/Quiz/EditQuiz/UpdateQuiz"))
const OngoingQuiz = lazy(() => import("../Components/Quizs/OngoingQuiz"));
const Report = lazy(() => import("../Components/Quizs/Report"))
const Swipe = lazy(() => import("../Container/Quiz/EditQuiz/Swipe/Swipe"));
const SwipeIn = lazy(() => import("../Container/Quiz/EditQuiz/SwipeIn/SwipeIn"))
const QuizOut = lazy(() => import("../Container/Quiz/EditQuiz/Swipe/QuizOut"));
const QuizIn = lazy(() => import("../Container/Quiz/EditQuiz/SwipeIn/QuizIn"))
const QuizLibrary = lazy(() => import("../Container/Quiz/Child/QuizLibrary/QuizLibrary"));
const SwipeInLibrary = lazy(() => import("../Container/Quiz/EditQuiz/SwipeIn/SwipelnLibrary"))
const UpdateQuizNameLibrary = lazy(() => import("../Container/Quiz/EditQuiz/UpdateQuizNameLibrary.js"));
const updateOngoing = lazy(() => import("../Components/Quizs/updateOngoing"))
const ProfileDropdown = lazy(() => import("../Container/Auth/ProfileDropdown"));
const ChangePassword = lazy(() => import("../Container/Auth/ChangePassword"));
const Test = lazy(() => import("../Container/Auth/Test"))
const UpdateQuizNameAndDuration = lazy(() => import("../Container/Quiz/Child/QuizLibrary/UpdateQuizNameAndDuration"));
const UpdateQuizInLibrary = lazy(() => import("../Container/Quiz/Child/QuizLibrary/UpdateQuizInLibrary"))

const { Content } = Layout;

function MainApp(props) {

  return (

    <LayoutWrapper>

      <ApplicationWrapper>
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
              <Route exact path="/updateQuizNameInLibrary/:quizName/:duration/:quizId" component={UpdateQuizNameAndDuration} />
              <Route exact path="/updateQuizNameLibrary/:quizName/:duration/:quizId" component={UpdateQuizNameLibrary} />
              <Route exact path="/updateQuiz" component={UpdateQuiz} />
              <Route exact path="/hostquiz" component={QuizDetails} />
              <Route exact path="/updateOngoing/:quizId" component={updateOngoing} />
              <Route exact path="/updateQuizInLibrary/:quizId" component={UpdateQuizInLibrary} />
              <Route exact path="/report" component={Report} />
              <Route exact path="/question" component={Question1} />
              <Route exact path="/ongoingQuiz" component={OngoingQuiz} />
              <Route exact path="/swipe" component={Swipe} />
              <Route exact path="/swipeIn" component={SwipeIn} />
              <Route exact path="/swipeInLibrary/:quizId" component={SwipeInLibrary} />
              <Route exact path="/quizLibrary" component={QuizLibrary} />
              <Route exact path="/addquiz" component={Quiz} />
              <Route exact path="/test" component={Test} />
            </Switch>
          </Suspense>
        </Content>
      </ApplicationWrapper>
    </LayoutWrapper>
  );
}
export default MainApp;







