import React from "react";
import { Button, Card, Input } from "antd";
import { Link, withRouter } from "react-router-dom";
import FWLogo from "../../src/images/Latest.png";
import { clearQuizNameDetails } from '../Container/Quiz/QuizAction'
import { connect } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import { bindActionCreators } from "redux";

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
        <div class=" border-solid w-w95  max-sm:m-0 md:m-auto">
          <div class="flex justify-center border">
            <div class="flex flex-row justify-between items-center w-wk">
              {/* <Link to="/create"> */}
              <div className="flex flex-row" onClick={props.clearQuizNameDetails}>
                {/* {headerName.map((item) => {
                  return (
                    <h2
                      key={item.letter}
                      style={{ color: item.color, fontSize: 35 }}
                    >
                      {item.letter}
                    </h2>
                  );
                })} */}
                <img
                  className="big-logo"
                  src={FWLogo}
                  style={{ width: 70 }}
                  alt="Tekorero logo"

                />
              </div>
              {/* </Link> */}
              {/* <Link to="/create"> */}
              {/* <div>
                <HomeIcon />
              </div> */}
              <Link to="/">
                <div>
                  <img
                    height={20}
                    width={20}
                    src="https://icon-library.com/images/logout-icon-png/logout-icon-png-8.jpg"
                  />
                </div>
              </Link>

              {/* </Link> */}
              {/* <div className="flex justify-center">
                <Link to="/create">
                  <button className="bg-blue-900 text-white px-4 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </button>
                </Link>
              </div> */}
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
      clearQuizNameDetails
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainHeader));
