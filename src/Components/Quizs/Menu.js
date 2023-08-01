// import { Link, withRouter } from "react-router-dom";
// import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
// import React from 'react';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// const Menu = (props) => {
//   return  <div class="flex items-center flex-col bg-quizc">
//      <div class="flex justify-center mt-4">
//                    <h3 class="font-extrabold ">Welcome {props.user.name}</h3>
//                  </div>
//                 <div class="  w-wk items-center flex justify-center" >
//                     <Link to="/how">
//                       <Button
                      
//                         htmlType="submit"
//                         style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
//                       >
//                         <h3 class="font-medium text-white text-lg">How to</h3>
//                       </Button>
//                     </Link>
//                   </div>
//                 <div class=" bg-quizb  w-wk items-center flex justify-center" >
//                     <Link to="/quizzes">
//                       <Button
                     
//                         htmlType="submit"
//                         style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
//                       >
//                         <h3 class="font-medium text-white text-lg">Create Quiz</h3>
//                       </Button>
//                     </Link>
//                   </div>
//                   {/* <div class="  w-wk items-center flex justify-center" >
//                     <Link to="/ongoingQuiz">
//                       <Button
                      
//                         htmlType="submit"
//                         style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
//                       >
//                         <h3 class="font-medium text-white text-lg">Ongoing Quizzes</h3>
//                       </Button>
//                     </Link>
//                   </div> */}
//                   <div class="  w-wk items-center flex justify-center" >
//                     <Link to="/quizLibrary">
//                       <Button
                     
//                         htmlType="submit"
//                         style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
//                       >
//                          <h3 class="font-medium text-white text-lg">Quiz Library </h3>
//                       </Button>
//                     </Link>
//                   </div>
//                   <div class=" bg-quizb  w-wk items-center flex justify-center" >
//                     <Link to="/profile">
//                       <Button
                       
//                         htmlType="submit"
//                         style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
//                       >
//                         <h3 class="font-medium text-white text-lg">My Profile</h3>
//                       </Button>
//                     </Link>
//                   </div>
//                   <div class="  w-wk items-center flex justify-center" >
//                     <Link to="/email">
//                       <Button
                      
//                         htmlType="submit"
//                         style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
//                       >
//                          <h3 class="font-medium text-white text-lg">Sign Out </h3>
//                       </Button>
//                     </Link>
//                   </div>
                  
//                 </div> 
// }
// const mapStateToProps = ({ auth }) => ({
//     user: auth.userDetails
//   });
  
//   const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
  
//   export default withRouter(
//     connect(mapStateToProps, mapDispatchToProps)(Menu)
//   );


  import React, { useState } from "react";
  import HomeIcon from '@mui/icons-material/Home';
import FWLogo from "../../../src/images/Latest.png";
import "./header.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, withRouter } from "react-router-dom";
 import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";

const Menu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
        <Link to="/how">
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
            <Link to="/how">
                      <Button
                      
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                        <h3 class="font-medium text-white text-lg">How to</h3>
                      </Button>
                    </Link>
          </li>
          <li className="option  max-sm:bg-quizb" onClick={closeMobileMenu}>
            <Link to="/quizzes">
                      <Button
                     
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                        <h3 class="font-medium text-white text-lg">Create Quiz</h3>
                      </Button>
                    </Link>
          </li>
          <li className="option " onClick={closeMobileMenu}>
            <Link to="/librayHome">
                      <Button
                     
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                         <h3 class="font-medium text-white text-lg">Quiz Library </h3>
                      </Button>
                    </Link>
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
            <Link to="/profileview">
                      <Button
                       
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                        <h3 class="font-medium text-white text-lg">My Profile</h3>
                      </Button>
                    </Link>
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

export default Menu;
