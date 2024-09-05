// import React from "react";
// import { Button, Card, Input } from "antd";
// import { Link, withRouter } from "react-router-dom";
// import FWLogo from "../../src/images/Latest.png";
// import { clearQuizNameDetails } from '../Container/Quiz/QuizAction'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import ProfileDropdown from "../Container/Auth/ProfileDropdown";
// import Subheader from "../Components/Quizs/Subheader";

// function MainHeader(props) {
//   const headerName = [
//     { letter: "Q", color: "blue" },
//     { letter: "u", color: "red" },
//     { letter: "i", color: "blue" },
//     { letter: "z", color: "red" },
//     { letter: "m", color: "blue" },
//     { letter: "a", color: "red" },
//     { letter: "k", color: "blue" },
//     { letter: "e", color: "red" },
//     { letter: "r", color: "blue" },
//   ];

//   return (
//     <>
//       <div className=" bg-ShopBlue w-full  ">
//         <div class=" border-solid w-full h-20  max-sm:m-0 md:m-auto">
//           <div class="flex justify-between border">
//             <div class="flex flex-row items-center h-20 w-wk ml-1">
//               {/* <Link to="/create"> */}
//               <div className="flex flex-row" onClick={props.clearQuizNameDetails}>
//                 {/* {headerName.map((item) => {
//                   return (
//                     <h2
//                       key={item.letter}
//                       style={{ color: item.color, fontSize: 35 }}
//                     >
//                       {item.letter}
//                     </h2>
//                   );
//                 })} */}
//                 {/* <img
//                   className="big-logo"
//                   src={FWLogo}
//                   style={{ width: 70 }}
//                   alt="Tekorero logo"

//                 /> */}
//               </div>
//               {/* </Link> */}
//               <Link to="/how1">
//                   <div style={{ marginTop: "5px" }}>
//                     <img
//                   className="big-logo"
//                   src={FWLogo}
//                   style={{ width: 60}}
//                   alt="Tekorero logo"

//                 />
//                   </div>
//                 </Link>
            

//               {/* <Link to="/">
//                 <div>
//                   <img
//                     height={20}
//                     width={20}
//                     src="https://icon-library.com/images/logout-icon-png/logout-icon-png-8.jpg"
//                   />
//                 </div>
//               </Link> */}

//               {/* </Link> */}
//               {/* <div className="flex justify-center">
//                 <Link to="/create">
//                   <button className="bg-blue-900 text-white px-4 rounded-md">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       className="w-6 h-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//                       />
//                     </svg>
//                   </button>
//                 </Link>
//               </div> */}
//             </div>
//             <div class="flex items-center mr-2">
               
//                {/* <ProfileDropdown /> */}
//                <Subheader/>
//              </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// const mapStateToProps = ({ auth, quiz }) => ({

// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       clearQuizNameDetails
//     },
//     dispatch
//   );

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainHeader));
import React, { useState } from "react"; 
import FWLogo from "../../src/images/Vector.png";
import FWLogo2 from "../../src/images/Group (1).png";
import FWLogo1 from "../../src/images/QP-logo-short_500px.png";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
 import {handleShareProcess} from "../Container/Auth/AuthAction"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, withRouter } from "react-router-dom";
 import { Button,  } from "antd";
import ProcessShareDrawer from "./ProcessShareDrawer";

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
        {/* <Link to={props.user.noOfQuizes === 0 ? "/emptypage" : "/quizLibrary"}> */}
        <Link to="/quizLibrary">
                  <div >
                  <img
                  className="big-logo"
                  src={FWLogo1}
                  style={{ width: "2.5rem"}}
                  alt="Tekorero logo"

                />
                   
                  </div>
                </Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
         
        </ul>
       
                
                <div className="flex">
                <div className="flex items-center mr-4">
<Button
 style={{  height: "2rem",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white" }}
 onClick={() => {
  props.handleShareProcess(true);
}}
>
<h3 class="font-medium  text-lg max-sm:text-xs">Share</h3>
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
      <ProcessShareDrawer             
                  processShareModal={props.processShareModal}
                    handleShareProcess={props.handleShareProcess}
                />
    </div>
  );
};
const mapStateToProps = ({ auth,  }) => ({
  processShareModal: auth.processShareModal,
  user: auth.userDetails
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
          
          handleShareProcess
      },
      dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Menu);



