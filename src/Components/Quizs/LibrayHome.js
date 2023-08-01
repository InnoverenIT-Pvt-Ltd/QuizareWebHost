import { Formik, Form, FastField, Field, FieldArray } from "formik";
import React from 'react'
import Mainheader from "../Mainheader";
import FWLogo from "../../../src/images/book-square.png";
import CreateQuiz from "./CreateQuiz";
import { Link, withRouter } from "react-router-dom";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
const LibrayHome = () => {
    return (
        <>
        <div class="bg-quizbg">
          <CreateQuiz />
          <Formik>
            {({
              values,
              errors,
              touched,
              isSubmitting,
              setFieldValue,
              setFieldTouched,
            }) => (
              <Form class=" max-sm:w-11/12   mt-4 m-auto h-h28 md:mt-12 w-2/5  ">
                <div class="shadow-2xl bg-white rounded-rounded3 border-solid flex justify-center flex-col   max-sm:m-0 h-full  md:m-auto">
                  <div class="flex justify-center">
                    <h3 class="font-medium text-2xl ">My quiz library </h3>
                    </div>
                    <div class="flex justify-center">
                    <img
                    className="big-logo"
                    src={FWLogo}
                    
                    alt="Tekorero logo"

                  />
                  </div>
                    <div class="flex justify-center p-1">
                    <h2 class="p-8 text-base">Your quiz library contains holds all your  quizzes and questions. Browse to explore, edit and reuse your old content. </h2>
                    </div>
                
                </div>
              </Form>
            )}
          </Formik>
          <Link to ="/quizLibrary">
          <div class="rounded-rounded2.8  mt-2  items-center flex justify-center" >
                   
                   <Button
                     htmlType="submit"
                     style={{  height: "5em",backgroundColor:"black",borderRadius:'3rem',display:"flex",justifyContent:"center",alignItems:"center" }}
                   > <h3 class="font-medium text-white text-3xl">Browse</h3></Button>
                 </div>
                 </Link>
          </div>
        </>
      );
}

export default LibrayHome
