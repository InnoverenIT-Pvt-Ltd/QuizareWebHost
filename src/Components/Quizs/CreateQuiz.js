import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import MainHeader from "../Mainheader";

// import SkillsLoadMore from "./CandidateTable/SkillsLoadMore";
const { Option } = Select;
/**
 * yup validation scheme for creating a contact
 */

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const CandidateSchema = Yup.object().shape({
  // contactOwner: Yup.string().required("Please Select contact owner"),
  emailId: Yup.string().email("Enter a valid Email").required("Input needed!"),
  firstName: Yup.string().required("Input needed!"),
});

class CreateQuiz extends Component {
  componentDidMount() { }

  render() {

    return (
      <>
        <MainHeader />
        <Formik>
          {({
            values,
            errors,
            touched,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
          }) => (
            <Form class=" max-sm:w-4/5 mt-8 m-auto h-h31 md:mt-12 w-2/5  ">
              <div class="shadow-2xl border-solid w-w95 flex justify-center flex-col  p-1 max-sm:m-0 h-full rounded-xl md:m-auto">
                <div class="flex justify-center">
                  <h3 class="font-extrabold ">Welcome {this.props.user.name}</h3>
                </div>
                <div class="flex items-center flex-col">
                  <div class="mt-8">
                    <Link to="/quizzes">
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          width: "15rem",
                          height: "2rem",
                          backgroundColor: "white",
                          borderBlockColor: "blue",
                          borderRadius: "0",
                        }}
                      >
                        <h3 class="font-extrabold">Create a new Quiz</h3>
                      </Button>
                    </Link>
                  </div>
                  <div class="mt-4">
                    <Link to="/ongoingQuiz">
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          width: "15rem",
                          height: "2rem",
                          backgroundColor: "white",
                          borderBlockColor: "#126c5e",
                          borderRadius: "0",
                        }}
                      >
                        <h3 class="font-extrabold">Ongoing Quizzes</h3>
                      </Button>
                    </Link>
                  </div>
                  <div class="mt-4">
                    <Link to="/quizLibrary">
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          width: "15rem",
                          height: "2rem",
                          backgroundColor: "white",
                          borderBlockColor: "#126c5e",
                          borderRadius: "0",
                        }}
                      >
                        <h3 class="font-extrabold">My Quiz Library </h3>
                      </Button>
                    </Link>
                  </div>
                  <div className="flex flex-row mt-4">
                    <Link to="/report">
                      <button className="bg-blue-900 flex text-white px-4 rounded-sm h-8 justify-center items-center w-60">
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
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                        Report
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.userDetails
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateQuiz)
);
