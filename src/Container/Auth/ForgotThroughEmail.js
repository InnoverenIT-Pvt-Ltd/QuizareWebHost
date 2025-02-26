import React from "react";
import { Formik, Field, Form } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "antd";
import InputComponent from "../../Components/Forms/Formik/InputComponent";// Assuming this is a custom component for input fields
import { withRouter } from "react-router-dom";
import { updatePassword } from "./AuthAction";
import * as Yup from "yup";


const formSchema = Yup.object().shape({
  email: Yup.string().email("Enter a valid Email").required("Eamil required!"),
});

const ForgotThroughEmail = (props) => {

  return (
    <Formik
      enableReinitialize
      initialValues={{
        email: "",
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        props.updatePassword(
          {
            ...values,
          },
        );
      }}
    >
      {({ errors, touched, isSubmitting, values }) => (
        <Form className="max-sm:w-11/12 mt-8 m-auto h-auto md:mt-12 w-2/5">
          <div className="shadow-2xl bg-white rounded-lg border-solid flex flex-col max-sm:m-0 h-full md:m-auto">
            <div className="font-semibold text-xl text-[#666666] p-4">
              Forgot Password
            </div>
            <div className="h-[2px] bg-[#000000]"></div>
            <div className="h-full flex w-wk max-sm:w-wk flex-col p-4">
              <div className="w-wk max-sm:w-full mb-3">
                <div className="font-normal text-base text-[#666666]">Email</div>
                <Field
                  name="email"
                  type="email"
                  style={{
                    width: "100%",
                    height: "2rem",
                    borderRadius: "0.25rem",
                    color: "black",
                  }}
                  component={InputComponent}
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                )}
              </div>

            </div>

            <div className="p-4 flex justify-end w-wk">
              <div className="flex justify-end w-[8rem]">
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={values.email===""}
                  loading={props.updatingPasswordOfUser}
                  style={{ backgroundColor: "#3B16B7" }}
                >
                  Send 
                </Button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

const mapStateToProps = ({ auth }) => ({
  user: auth.userDetails,
  updatingPasswordOfUser: auth.updatingPasswordOfUser,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        updatePassword,
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotThroughEmail));
