import { connect } from "react-redux";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import { bindActionCreators } from "redux";
import React, { useState } from "react";
import { addBugs } from "../../Container/Quiz/QuizAction";
import { InputComponent } from "../Forms/Formik/InputComponent";
import { Button, Card, Input } from "antd";
import MainHeader from "../Mainheader";
import { TextareaComponent } from "../Forms/Formik/TextareaComponent";

function ReportBugs(props) {
 
  return (
    <>
      <MainHeader />
      <Formik
        initialValues={{
          description: "",
          subject: "",
          quizHostId: "QH4472404666122022",
        }}
        onSubmit={(values, { resetForm }) => {
          props.addBugs({
            ...values,
              });
          resetForm();
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
          <Form>
            <div>
              <Field
                name="subject"
                isColumn
                component={InputComponent}
                placeholder="Enter Subject"
              />
              <Field
                className="border border-blue-900 w-full"
                name="description"
                component={TextareaComponent}
                isColumn
                // value={description}
                // onChange={(ev) =>{ setDescription(ev.target.value)}}
                placeholder="Enter Description"
              />
              <Button
                type="primary"
                Loading={props.addingBugs}
                htmlType="submit"
                onClick={handleSubmit}
              >
                <h3 class="font-extrabold">File Bug</h3>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
const mapStateToProps = ({ auth, quiz }) => ({
  addingBugs: quiz.addingBugs,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addBugs,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ReportBugs);
