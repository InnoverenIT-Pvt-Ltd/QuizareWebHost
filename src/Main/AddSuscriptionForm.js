import React, {Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Switch,Select } from "antd";
import dayjs from "dayjs";
import { Formik, Form, Field, } from "formik";
import {addSuscrptions} from "../Container/Quiz/QuizAction";
import { InputComponent } from "../Components/Forms/Formik/InputComponent";
import TextArea from "antd/es/input/TextArea";
import { TextareaComponent } from "../Components/Forms/Formik/TextareaComponent";

// const FormSchema = Yup.object().shape({
//   name: Yup.string().required("Input required!"),
//   management: Yup.string().required("Input required!"),
//   locationtypeId: Yup.string().required("Input required!"),
// });
const { Option } = Select;

class AddSuscriptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
call: false,
      translatedMenuItems: []
    };
  
  }
  handleCall = (checked) => {
    this.setState({ call: checked });
  };
  handleInventory = (checked) => {
    this.setState({ inventory: checked });
  };
  handleMaterial = (checked) => {
    this.setState({ material: checked });
  };
  render() {
  

    const {
      startDate,
      endDate,
    } = this.props;
  
    return (
  
      <>
        <Formik
          initialValues={{
            subscriptionName:"",
            noOfQuestion:"",
            noOfQuiz:"",
            subscriptionId:"",
            description:"",
            userId:this.props.quizHostId
          }}
          // validationSchema={FormSchema}
          onSubmit={(values, { resetForm }) => {
            let timeZoneFirst = "GMT+05:30";
            let mytimeZone = timeZoneFirst.substring(4, 10);
            var a = mytimeZone.split(":");
            var timeZoneminutes = +a[0] * 60 + +a[1];
            if (!values.startDate) {
              values.startDate = values.startDate;
            }
            if (!values.endDate) {
              values.endDate = values.endDate;
            }
  
            let newStartDate = dayjs(values.startDate).format("YYYY-MM-DD");
            let newEndDate = dayjs(values.endDate).format("YYYY-MM-DD");
  
            let newStartTime = dayjs(values.startTime).format("HH:mm:ss.SSS[Z]");
            let firstStartHours = newStartTime.substring(0, 5);
            let timeEndPart = newStartTime.substring(5, 13);
            var firstStartTimeSplit = firstStartHours.split(":");
            var minutes = +firstStartTimeSplit[0] * 60 + +firstStartTimeSplit[1];
            var firstStartTimeminutes = minutes - timeZoneminutes;
            let h = Math.floor(firstStartTimeminutes / 60);
            let m = firstStartTimeminutes % 60;
            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            let finalStartTime = `${h}:${m}`;
            let newFormattedStartTime = `${finalStartTime}${timeEndPart}`;
  
            this.props.addSuscrptions(
              {
                ...values,
               
                
                  
                
              },
            );
          }}
        >
          {({
            errors,
            touched,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
            values,
            ...rest
          }) => (
            <div class="overflow-y-auto h-[30rem] overflow-x-hidden">
            <Form class="form-background">
              <div class="flex justify-between max-sm:flex-col">
                <div class="h-full w-[45%] max-sm:w-wk">
                  <div>
                    <Field
                      name="subscriptionName"
                      // label="Name"
                      label="Subscription name "
                      type="text"
                      width={"100%"}
                      component={InputComponent}
                      isColumn
                      inlineLabel
                      isRequired
                    />
                  </div>
                  <div class=" flex justify-between w-wk mt-3 max-sm:w-[30%]">
                    <div>
                  <Field
                      name="noOfQuestion"
                      // label="Name"
                      label="No Of Question"
                      type="text"
                      width={"100%"}
                      component={InputComponent}
                      isColumn
                      inlineLabel
                      isRequired
                    />
                    </div>
                   
                    </div>
                   
                    <div class=" flex justify-between w-wk mt-3 max-sm:w-[30%]">
                    <div>
                  <Field
                      name="noOfQuiz"
                      // label="Name"
                      label="Number Of Quiz"
                      type="text"
                      width={"100%"}
                      component={InputComponent}
                      isColumn
                      inlineLabel
                      isRequired
                    />
                    </div>
                   
                    </div>
                    <div class=" flex justify-between w-wk mt-3 max-sm:w-[30%]">
                    <div>
                  <Field
                      name="description"
                      // label="Name"
                      label="Description"
                      type="text"
                      width={"100%"}
                      component={TextareaComponent}
                      isColumn
                      inlineLabel
                      isRequired
                    />
                    </div>
                   
                    </div>
                 
                
     
                </div>
                
              </div>
              <div class="flex justify-end w-wk bottom-2 mr-2 md:absolute ">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={this.props.updatingSuscrption}
                >
                 Create
                </Button>
              </div>
            </Form>
            </div>
          )}
        </Formik>
      </>
    );
  }
}
const mapStateToProps = ({ quiz, auth,}) => ({
  updatingSuscrption: quiz.updatingSuscrption,
  timeZone: auth.timeZone,
  quizHostId: auth.userDetails.userId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
     addSuscrptions,
   
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AddSuscriptionForm);