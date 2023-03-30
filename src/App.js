// import React, { Component, lazy, Suspense } from "react";
// import { connect } from "react-redux";
// import {Route,Routes} from "react-router-dom"

// import './App.css';
//  import Login from "./Container/Auth/Login";
//  import PrivateRoute from "./Helpers/Auth/PrivateRoute"
//  import { BundleLoader } from "./Components/Placeholder";
// import Job from './Jobsite/Job';
// import JobCard from "./Jobsite/JobCard";
// import JobTalent from "./Jobsite/JobTalent";
// import JobVendor from "./Jobsite/JobVendor";
// import MainApp from "./Main/MainApp";


// function App(props) {
//   return (
//     <React.Fragment>
//       {/* <Suspense fallback={<></>}> */}
//       <Routes>
//       <Route exact path="/login" element={<Login />}/>
//         <Route exact path="/" element={<Job />}/>
//         <Route exact path="/jobCard" element={<JobCard />}/>
//         <Route exact path="/jobVendor" element={<JobVendor />}/>
//         <Route exact path="/jobTalent" element={<JobTalent/>}/>

      


// {props.fetchingUserDetails ? (
//   <BundleLoader />
// ) : (
  
//   <Route exact path="/" element={MainApp} />
// )}
// </Routes>
        
//       {/* </Suspense> */}
//     </React.Fragment>
//   );
// }

// const mapStateToProps = ({ auth }) => ({
//   fetchingUserDetails: auth.fetchingUserDetails,
// });
// export default connect(mapStateToProps)(App);



import React, { Component, lazy, Suspense } from "react";
import 'antd/dist/reset.css';
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Job from './Jobsite/Job';
import JobCard from "./Jobsite/JobCard";
import JobTalent from "./Jobsite/JobTalent";
import JobVendor from "./Jobsite/JobVendor";
import MainApp from "./Main/MainApp";
import Login from "./Container/Auth/Login";
import axios from "axios";
import "./App.css";
import { BundleLoader } from "./Components/Placeholder";
import PrivateRoute from "./Helpers/Auth/PrivateRoute";
// import AppErrorBoundary from "./Helpers/ErrorBoundary/AppErrorBoundary";




/**
 * lazy loaded compenents
 */


class App extends Component {
  render() {
    const { fetchingUserDetails } = this.props;
    return (
      <div>
        {/* <Offline>
          <div className="wrapper">
            <p>You're offline right now. Check your connection.</p>
          </div>
        </Offline>
        <Online> */}
        {/* <AppErrorBoundary> */}
          <Suspense fallback={<BundleLoader />}>
            <Switch>

            <Route exact path="/login" component={Login }/>
       <Route exact path="/" component={Job}/>
       <Route  exact path="/jobCard" component={JobCard}/>
        <Route  exact path="/jobVendor" component={JobVendor}/>
       <Route  exact path="/jobTalent" component={JobTalent}/>
            
              {/* {fetchingUserDetails ? (
                <BundleLoader />
              ) : ( */}
                <PrivateRoute path="/" component={MainApp} />
              {/* )} */}
            </Switch>
          </Suspense>
        {/* </AppErrorBoundary> */}
        {/* </Online> */}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  fetchingUserDetails: auth.fetchingUserDetails,
});
export default connect(mapStateToProps)(App);

