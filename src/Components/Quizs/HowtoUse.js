import { Formik, Form, FastField, Field, FieldArray } from "formik";
import React from 'react'
import Mainheader from "../Mainheader";
import FWLogo from "../../../src/images/note-2.png";

const HowtoUse = () => {
    return (
        <>
          <Mainheader />
          <Formik>
            {({
              values,
              errors,
              touched,
              isSubmitting,
              setFieldValue,
              setFieldTouched,
            }) => (
              <Form class=" max-sm:w-11/12 mt-8 m-auto h-h31 md:mt-12 w-2/5  ">
                <div class="shadow-2xl rounded-rounded3 border-solid flex justify-center flex-col   max-sm:m-0 h-full  md:m-auto">
                  <div class="flex justify-center">
                    <h3 class="font-medium text-2xl ">How to use quizledge </h3>
                    </div>
                    <div class="flex justify-center">
                    <img
                    className="big-logo"
                    src={FWLogo}
                    
                    alt="Tekorero logo"

                  />
                  </div>
                    <div class="flex justify-center p-1">
                    <h2 class="p-8 text-base">Quizledge is built like a deck of cards. Navigate our app by either swiping left or right or  pressing the the buttons at the bottom of card.</h2>
                    </div>
                
                </div>
              </Form>
            )}
          </Formik>
        </>
      );
}

export default HowtoUse
