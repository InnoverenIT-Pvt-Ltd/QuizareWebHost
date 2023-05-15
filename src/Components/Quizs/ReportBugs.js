import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import { bindActionCreators } from "redux";
// import { withRouter} from "react-router-dom";
import * as Yup from "yup";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";
import { addBugs } from "../../Container/Quiz/QuizAction";
import { Button, Card, Input } from "antd";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import MainHeader from "../../Components/Mainheader";
import ReportBugList from "./ReportBugList";

function ReportBugs(props) {
  const history = useHistory();

  return (
    <>
      <MainHeader />
      <Formik
        initialValues={{
          quizHostId: "QH4472404666122022",
        }}

        onSubmit={(values, { resetForm }) => {

          props.addBugs(
            {
              ...values
            },
          );

        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          errors,
          values,
        }) => (
          <Form class="flex justify-center  max-sm:w-11/12 mt-8 m-auto md:mt-12  w-1/5 ">
            <div class="shadow-2xl border-solid w-11/12 flex justify-center items-center  p-1 max-sm:m-0 h-h34 rounded-xl md:m-auto">
              <div class="flex flex-col items-center">
                <div>
                  <div>
                    
                    <textarea
                    className="border border-blue-900  w-full"
                      name="bug"
                      isColumn
                    
                      placeholder="Bug Description"
                    />
                  </div>
                  <div class="mt-8 flex">
                    <Button
                      type="primary"
                      htmlType="submit"
                      onClick={handleSubmit}
                      style={{
                        width: "16.5rem",
                        backgroundColor: "white",
                        borderBlockColor: "black",
                        borderRadius: "0",
                        height: "2rem",
                      }}
                    >
                      <h3 class="font-extrabold">Add quiz</h3>
                    </Button>
                  </div>
                </div>
                <div>
                <ReportBugList />
              </div>
              </div>
              
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
const mapStateToProps = ({ auth, quiz }) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({addBugs}, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReportBugs)
);
