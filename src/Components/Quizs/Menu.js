import React, { useState } from "react"; 
import FWLogo from "../../../src/images/Vector.png";
import FWLogo2 from "../../../src/images/Group (1).png";
import FWLogo1 from "../../../src/images/Group.png";
import "./header.css";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
 import {handleSpareProcess} from "../../Container/Auth/AuthAction"
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
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
        <Link to={props.user.noOfQuizes === 0 ? "/emptypage" : "/quizLibrary"}>
                  <div style={{ marginTop: "5px" }}>
                  <img
                  className="big-logo"
                  src={FWLogo1}
                  // style={{ width: 60}}
                  alt="Tekorero logo"

                />
                    {/* <img
                  className="big-logo"
                  src={FWLogo}
                  style={{ width: 60}}
                  alt="Tekorero logo"

                /> */}
                  </div>
                </Link>
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
          placeholder="Search quizzes"
          width={"100%"}
         // suffix={suffix}
          //onPressEnter={handleSearch}
          //onChange={handleChange}
       // value={currentData}
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
  user: auth.userDetails
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
          
          handleSpareProcess
      },
      dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Menu);


// import React from "react";

// const Menu = () => {
//   const handleRefresh = () => {
//     // This function will refresh the page
//     window.location.reload();
//   };

//   return (
//     <div className="header">
//       <ul>
//         <li>
//           <a href="/how1" onClick={handleRefresh}>
//             How to
//           </a>
//         </li>
//         <li>
//           <a href="/how2" onClick={handleRefresh}>
//             Create Quiz
//           </a>
//         </li>
//         <li>
//           <a href="/how3" onClick={handleRefresh}>
//             Quiz Library
//           </a>
//         </li>
//         <li>
//           <a href="/ongoingQuiz" onClick={handleRefresh}>
//             Ongoing Quizzes
//           </a>
//         </li>
//         <li>
//           <a href="/how4" onClick={handleRefresh}>
//             My Profile
//           </a>
//         </li>
//         <li>
//           <a href="/changepassword" onClick={handleRefresh}>
//             Change Password
//           </a>
//         </li>
//         <li>
//           <a href="/email" onClick={handleRefresh}>
//             Sign Out
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Menu;
