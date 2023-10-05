import { Formik, Form, FastField, Field, FieldArray } from "formik";
import React from 'react'
import Mainheader from "../Mainheader";
import FWLogo from "../../../src/images/note-2.png";
import CreateQuiz from "./CreateQuiz";
import "swiper/css";
import { Link, withRouter } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Button, Modal } from "antd";
import FWLogo1 from "../../../src/images/prev.png";
import FWLogo2 from "../../../src/images/forw.png";
const HowtoUse = (props) => {
    return (
        <>
        <div class="bg-quizbg min-h-screen">
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
              <Form class=" max-sm:w-11/12   mt-8 m-auto h-h26 md:mt-12 w-2/5  ">
                <div class="shadow-2xl bg-white rounded-rounded3 border-solid flex justify-center flex-col   max-sm:m-0 h-full  md:m-auto">
                  <div class="flex justify-center mt-8">
                    <h3 class="font-medium text-2xl ">How to use Quizledge </h3>
                    </div>
                    <div class="flex justify-center ">
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
         
          <div class="flex justify-around mt-4 md:justify-center" >
                    <img
                  className="big-logo"
                  src={FWLogo1}
                 
                  alt="Tekorero logo"
                  onClick={props.goToPreviousCard}

                />
            
      <h3 class="text-4xl flex items-center">Navigate</h3>
      <img
                  className="big-logo"
                  src={FWLogo2}
                 
                  alt="Tekorero logo"
                  onClick={props.goToNextCard}

                />
     
                </div>
        
          </div>
          
        </>
      );
}

export default withRouter(HowtoUse)
