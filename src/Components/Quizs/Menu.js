import { Link, withRouter } from "react-router-dom";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Menu = (props) => {
  return  <div class="flex items-center flex-col bg-quizc">
     <div class="flex justify-center mt-4">
                   <h3 class="font-extrabold ">Welcome {props.user.name}</h3>
                 </div>
                <div class="  w-wk items-center flex justify-center" >
                    <Link to="/how">
                      <Button
                      
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                        <h3 class="font-medium text-white text-lg">How to</h3>
                      </Button>
                    </Link>
                  </div>
                <div class=" bg-quizb  w-wk items-center flex justify-center" >
                    <Link to="/quizzes">
                      <Button
                     
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                        <h3 class="font-medium text-white text-lg">Create Quiz</h3>
                      </Button>
                    </Link>
                  </div>
                  {/* <div class="  w-wk items-center flex justify-center" >
                    <Link to="/ongoingQuiz">
                      <Button
                      
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                        <h3 class="font-medium text-white text-lg">Ongoing Quizzes</h3>
                      </Button>
                    </Link>
                  </div> */}
                  <div class="  w-wk items-center flex justify-center" >
                    <Link to="/quizLibrary">
                      <Button
                     
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                         <h3 class="font-medium text-white text-lg">Quiz Library </h3>
                      </Button>
                    </Link>
                  </div>
                  <div class=" bg-quizb  w-wk items-center flex justify-center" >
                    <Link to="/profile">
                      <Button
                       
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                        <h3 class="font-medium text-white text-lg">My Profile</h3>
                      </Button>
                    </Link>
                  </div>
                  <div class="  w-wk items-center flex justify-center" >
                    <Link to="/email">
                      <Button
                      
                        htmlType="submit"
                        style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
                      >
                         <h3 class="font-medium text-white text-lg">Sign Out </h3>
                      </Button>
                    </Link>
                  </div>
                  
                </div> 
}
const mapStateToProps = ({ auth }) => ({
    user: auth.userDetails
  });
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Menu)
  );
