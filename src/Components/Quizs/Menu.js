import React, { useState } from "react"; 
import FWLogo from "../../../src/images/Latest.png";
import "./header.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, withRouter } from "react-router-dom";
 import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";

const Menu = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
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
        <Link to="/how1">
                  <div style={{ marginTop: "5px" }}>
                    <img
                  className="big-logo"
                  src={FWLogo}
                  style={{ width: 60}}
                  alt="Tekorero logo"

                />
                  </div>
                </Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            {/* <Link to="/how1"> */}
            <a href="/how1" onClick={handleRefresh}>
                      <Button
                      
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                        
                      >
                        <h3 class="font-medium text-white text-lg">How to</h3>
                      </Button>
                      </a>
                    {/* </Link> */}
          </li>
          <li className="option  max-sm:bg-quizb" onClick={closeMobileMenu}>
            {/* <Link to="/how2"> */}
            <a href="/how2" onClick={handleRefresh}>
                      <Button
                     
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                        <h3 class="font-medium text-white text-lg">Create Quiz</h3>
                      </Button>
                      </a>
                    {/* </Link> */}
          </li>
          <li className="option " onClick={closeMobileMenu}>
          <a href="/how3" onClick={handleRefresh}>
            {/* <Link to="/how3"> */}
                      <Button
                     
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                         <h3 class="font-medium text-white text-lg">Quiz Library </h3>
                      </Button>
                    {/* </Link> */}
                    </a>
          </li>
          <li className="option  max-sm:bg-quizb" onClick={closeMobileMenu}>
          <Link to="/ongoingQuiz">
                      <Button
                                               htmlType="submit"
                       style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                       >
                       <h3 class="font-medium text-white text-lg">Ongoing Quizzes</h3>
                     </Button>
                   </Link>
</li>
          <li className="option " onClick={closeMobileMenu}>
            {/* <Link to="/how4"> */}
            <a href="/how4" onClick={handleRefresh}>
                      <Button
                       
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                        <h3 class="font-medium text-white text-lg">My Profile</h3>
                      </Button>
                    {/* </Link> */}
                    </a>
          </li>
          <li className="option  max-sm:bg-quizb " onClick={closeMobileMenu}>
             <Link to="/changepassword">
                      <Button
                      
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                         <h3 class="font-medium text-white text-lg"> Change Password </h3>
                      </Button>
                    </Link>
          </li>
          <li className="option " onClick={closeMobileMenu}>
             <Link to="/email">
                      <Button
                      
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                         <h3 class="font-medium text-white text-lg">Sign Out </h3>
                      </Button>
                    </Link>
          </li>
        </ul>
      </div>
     
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseIcon className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default withRouter (Menu);

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
