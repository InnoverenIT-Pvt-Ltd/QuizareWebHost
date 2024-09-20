import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Button, Select, Icon, Tag, Switch, Checkbox, Upload } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import FWLogo from "../../../src/images/user-square.png";
import FWLogo1 from "../../../src/images/prev.png";
import FWLogo2 from "../../../src/images/forw.png";
import Menu from "./Menu";
import InputComponent from "../Forms/Formik/InputComponent";
import { StyledUpload } from "../UI/Antd";
import DragableUpload from "../Forms/Formik/DragableUpload";

const { Option } = Select;


 function profileView (props) {
  
console.log(props.user.name)
    return (
      <>
        <Menu />
       
        <Formik
           enableReinitialize
          initialValues={{
            name: props.user.name || "",
            emailId: props.user.emailId || "",      
            
          }}
         // validationSchema={UpdateLeadsSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            // updateLeads(
            //   {
            //     ...values,
               
            //   },
            //   props.leadsId,
            // );
          //handleReset(resetForm)
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
            <div class="overflow-y-auto h-screen overflow-x-hidden max-sm:h-[30rem]">
           <Form class=" max-sm:w-11/12   mt-8 m-auto h-h31 md:mt-12 w-2/5 md:h-[36rem]  ">
           <div class="shadow-2xl bg-white rounded-lg border-solid flex justify-center flex-col   max-sm:m-0 h-96  md:m-auto">
           <div class="font-semibold text-xl text-[#666666] p-4">User information</div>
           <div class="h-[2px] bg-[#000000]"></div>
                <div class=" h-full flex w-wk max-sm:w-wk"   >
                {/* <FastField name="imageId" component={DragableUpload} />    */}
                    <div class=" w-[60%] mt-3">
                      <div class=" flex justify-between flex-col">
                      <div class=" w-wk max-sm:w-full ml-2">
                          <div class="font-normal text-base  text-[#666666]">Email address</div>
                          <FastField
                            isRequired
                            name="emailId"
                            // label="First Name"                    
                            type="text"
                            width={"100%"}
                            isColumn
                            component={InputComponent}
                            style={{ width: "100%", height: "2rem",borderRadius:"0.25rem" }}
                            inlineLabel
                          />
                        </div>
                        <div class=" w-wk max-sm:w-full ml-2 mt-3">
                          <div class="font-normal  text-base text-[#666666]">Username</div>
                          <FastField
                            isRequired
                            name="name"
                            // label="First Name"                    
                            type="text"
                            width={"100%"}
                            isColumn
                            component={InputComponent}
                            style={{ width: "100%", height: "2rem",borderRadius:"0.25rem" }}
                            inlineLabel
                          />
                        </div>
                        <div class=" w-wk max-sm:w-full ml-2 mt-3">
                          <div class="font-normal  text-base text-[#666666]">Name</div>
                          <FastField
                            isRequired
                            name="name"
                            // label="First Name"                    
                            type="text"
                            width={"100%"}
                            isColumn
                            component={InputComponent}
                            style={{ width: "100%", height: "2rem",borderRadius:"0.25rem" }}
                            inlineLabel
                          />
                        </div>
                        
                      </div>                  
                     
                   
                  </div>
                 
                  
               
               
              
                
          
                 
                 </div>
<div className="p-4 flex justify-end w-wk">
                 <div className=" flex justify-end w-[8rem]">
                        <Button
                  type="primary"
                  htmlType="submit"
                  //loading={updateLeadsById}
                  style={{backgroundColor:"#3B16B7"}}
                >
               
                 Save
                </Button>
                </div>
                </div>
              </div>
             
             
            </Form>
            </div>
          )}
        </Formik>
      </>
    );


  
}

  


const mapStateToProps = ({ auth }) => ({
  user: auth.userDetails
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(profileView)
);


