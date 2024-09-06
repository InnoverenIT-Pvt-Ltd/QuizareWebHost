import React, { useState,useEffect,useRef } from "react"; 
import FWLogo from "../../../src/images/Vector.png";
import FWLogo2 from "../../../src/images/Group (1).png";
import FWLogo1 from "../../../src/images/QP-logo-short_500px.png";
import "./header.css";
import {getUserDetails} from "../../Container/Auth/AuthAction"
import { bindActionCreators } from 'redux'
// import { AudioOutlined } from "@ant-design/icons";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
import { connect } from 'react-redux'
 import {handleSpareProcess,getLibraySearch,ClearReducerDataOfLibrary} from "../../Container/Auth/AuthAction"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, withRouter } from "react-router-dom";
 import { Button, Select, Icon, Tag, Switch, Checkbox, Input } from "antd";
import ProcessSpareDrawer from "./ProcessSpareDrawer";
import LibrayEmptyPage from "./LibrayEmptyPage";

const Menu = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [currentData, setCurrentData] = useState("");
  const [searchOnEnter, setSearchOnEnter] = useState(false);  //Code for Search
  const [startTime, setStartTime] = useState(null);
    const [isRecording, setIsRecording] = useState(false); 
    const minRecordingTime = 3000; // 3 seconds
    const timerRef = useRef(null);
  // useEffect(() => {
  //  // props.getUserDetails(props.userId)
  // }, [props.userId]);

  // const {
  //   transcript,
  //   listening,
  //   resetTranscript,
  //   browserSupportsSpeechRecognition,
  // } = useSpeechRecognition();
  // console.log(transcript);
  // useEffect(() => {
  //   // props.getCustomerRecords();
  //   if (transcript) {
  //     console.log(">>>>>>>", transcript);
  //     setCurrentData(transcript);
  //   }
  //   }, [ transcript]);
  const handleChange = (e) => {
    setCurrentData(e.target.value);

    if (searchOnEnter && e.target.value.trim() === "") {
      // setPage(pageNo + 1);
    //  props.getInvestorsbyId(props.userId, pageNo, "creationdate");
      props.ClearReducerDataOfLibrary()
      setSearchOnEnter(false);
    }
  };

  const handleSearch = () => {
    if (currentData.trim() !== "") {
      props.getLibraySearch(props.quizHostId,currentData);
     
      setSearchOnEnter(true);  // Code for Search
    } else {
      console.error("Input is empty. Please provide a value.");
    }
  };
  // const handleStartListening = () => {
  //   setStartTime(Date.now());
  //   setIsRecording(true);
  //   SpeechRecognition.startListening();
  //   if (timerRef.current) {
  //     clearTimeout(timerRef.current);
  //   }
  //   timerRef.current = setTimeout(() => {
  //     SpeechRecognition.stopListening();
  //     setIsRecording(false);
  //   }, minRecordingTime);
  // };
  const dummy = ["cloud", "azure", "fgfdg"];
  // const suffix = (
  //   <AudioOutlined
  //     onClick={handleStartListening}
  //     style={{
  //       fontSize: 16,
  //       color: '#1890ff',
  //     }}

  //   />
  // );
  // const handleStopListening = () => {
  //   SpeechRecognition.stopListening();
  //   setIsRecording(false);
  //   if (transcript.trim() !== "") {
  //     setCurrentData(transcript);
  //    props.getLibraySearch(props.quizHostId,transcript);
  //     setSearchOnEnter(true);
  //   }
  // };
  // useEffect(() => {
  //   if (!listening && isRecording) {
  //     handleStopListening();
  //   }
  // }, [listening]);
  // useEffect(() => {
  //   if (isRecording && !listening) {
  //     // If recording was stopped but less than 5 seconds have passed, restart listening
  //     const elapsedTime = Date.now() - startTime;
  //     if (elapsedTime < minRecordingTime) {
  //       SpeechRecognition.startListening();
  //     } else {
  //       setIsRecording(false);
  //     }
  //   }
  // }, [listening, isRecording, startTime]);



  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setDropdownVisible(false);
    }, 2000); // Adjust the delay as needed
  };
  const handleRefresh = () => {
    // This function will refresh the page
    window.location.reload();
  };
  function handleCallBack (data)  {
    props.history.push(`/how1`);
  };
  console.log(props.user.noOfQuizes)
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
        {/* <Link to={props.user.noOfQuizes === 0 ? "/emptypage" : "/quizLibrary"}> */}
        <a href={props.user.noOfQuizes === 0 ? "/emptypage" : "/quizLibrary"}>
                  <div >
                  <img
                  className="big-logo"
                  src={FWLogo1}
                   style={{ width: "2.5rem"}}
                  alt="Tekorero logo"

                />
                    {/* <img
                  className="big-logo"
                  src={FWLogo}
                  style={{ width: 60}}
                  alt="Tekorero logo"

                /> */}
                  </div>
                  </a>
                {/* </Link> */}
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          {/* <li className="option" onClick={closeMobileMenu}>
          
            <a href="/how1" onClick={handleRefresh}>
                      <Button
                      
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                        
                      >
                        <h3 class="font-medium text-white text-lg">How to</h3>
                      </Button>
                      </a>
                  
          </li> */}
          {/* <li className="option  max-sm:bg-quizb" onClick={closeMobileMenu}>
           
            <a href="/how2" onClick={handleRefresh}>
                      <Button
                     
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                        <h3 class="font-medium text-white text-lg">Create Quiz</h3>
                      </Button>
                      </a>
                  
          </li> */}
          {/* <li className="option " onClick={closeMobileMenu}>
          <a href="/how3" onClick={handleRefresh}>
           
                      <Button
                     
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                         <h3 class="font-medium text-white text-lg">Quiz Library </h3>
                      </Button>
                  
                    </a>
          </li> */}
          {/* <li className="option  max-sm:bg-quizb" onClick={closeMobileMenu}>
          <Link to="/ongoingQuiz">
                      <Button
                                               htmlType="submit"
                       style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                       >
                       <h3 class="font-medium text-white text-lg">Ongoing Quizzes</h3>
                     </Button>
                   </Link>
</li> */}



          {/* <li className="option " onClick={closeMobileMenu}>
         
            <a href="/how4" onClick={handleRefresh}>
                      <Button
                       
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                        <h3 class="font-medium text-white text-lg">My Profile</h3>
                      </Button>
                 
                    </a>
          </li> */}
          {/* <li className="option  max-sm:bg-quizb " onClick={closeMobileMenu}>
             <Link to="/changepassword">
                      <Button
                      
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                         <h3 class="font-medium text-white text-lg"> Change Password </h3>
                      </Button>
                    </Link>
          </li> */}
          {/* <li className="option " onClick={closeMobileMenu}>
             <Link to="/email">
                      <Button
                      
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                         <h3 class="font-medium text-white text-lg">Sign Out </h3>
                      </Button>
                    </Link>
          </li> */}
        </ul>
        {/* <div> 
          <img
                  className="big-logo"
                  src={FWLogo2}
                  // style={{ width: 60}}
                  alt="Tekorero logo"

                /></div> */}
                <div class=" w-64 max-sm:w-24">
                <Input
            placeholder="Search Quizes"
            class="w-96"
            //suffix={suffix}
            onPressEnter={handleSearch}
            onChange={handleChange}
            value={currentData}
          />
        </div>
                <div className="flex">
                <div className="flex items-center mr-4">
<Button
 style={{  height: "2rem",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white" }}
 onClick={() => {
  props.handleSpareProcess(true);
}}
>
<h3 class="font-medium  text-lg max-sm:text-xs">Create</h3>
</Button>

</div>
<div className="flex items-center mr-4">
<Link to="/emptypage">
<Button
 style={{  height: "2rem",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white" }}

>
<h3 class="font-medium  text-lg max-sm:text-xs">Upgrade</h3>
</Button>
</Link>
</div>
               <div className="relative inline-block">
      <img
        className="big-logo cursor-pointer"
        src={FWLogo2}
        alt="Tekorero logo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isDropdownVisible && (
        <div 
          className="absolute right-0 mt-2 w-40 bg-[#3B16B7] p-2 rounded shadow-lg z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
           <a href="/how4" onClick={handleRefresh}>
                      
                        <h3 class="font-medium text-white  text-lg">My Profile</h3>
                     
                    </a>
                    <Link to="/changepassword">
                      
                      <h3 class="font-medium text-white  text-lg"> Change Password </h3>
                   
                 </Link>
          <Link to="/email">
           
              <h3 className="font-medium text-white  text-lg">Sign Out</h3>
           
          </Link>
         
        </div>
      )}
    </div>
    </div>
      </div>
     
      {/* <div className="mobile-menu md:hidden" onClick={handleClick}>
        {click ? (
          <CloseIcon className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div> */}
      <ProcessSpareDrawer              
                  processSpareModal={props.processSpareModal}
                    handleSpareProcess={props.handleSpareProcess}
                />
    </div>
  );
};
const mapStateToProps = ({ auth,  }) => ({
  processSpareModal: auth.processSpareModal,
  user: auth.userDetails,
  quizHostId: auth.userDetails.userId,

});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
          
          handleSpareProcess,
          getUserDetails,
          getLibraySearch,
          ClearReducerDataOfLibrary
      },
      dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Menu);


