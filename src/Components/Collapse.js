import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProfileDropdown from "../Container/Auth/ProfileDropdown";


function MainHeader(props) {
  const headerName = [
    { letter: "Q", color: "blue" },
    { letter: "u", color: "red" },
    { letter: "i", color: "blue" },
    { letter: "z", color: "red" },
    { letter: "m", color: "blue" },
    { letter: "a", color: "red" },
    { letter: "k", color: "blue" },
    { letter: "e", color: "red" },
    { letter: "r", color: "blue" },
  ];

  return (
    <>
      <div className=" bg-ShopBlue w-full  ">
        <div class=" border-solid w-w95 h-20  max-sm:m-0 md:m-auto">
          <div class="flex justify-center border">
            <div class="flex flex-row justify-between items-center h-20 w-wk">
             
              <div className="flex flex-row" onClick={props.clearQuizNameDetails}>
             
              </div>
           
              <Link to="/">
                  <div style={{ marginTop: "5px" }}>
                  <h2 class="text-2xl text-white">Collapse</h2>
                  </div>
                </Link>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
               
                <ProfileDropdown />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = ({ auth, quiz }) => ({

});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      //clearQuizNameDetails
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainHeader));
