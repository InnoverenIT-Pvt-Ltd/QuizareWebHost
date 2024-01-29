import { Formik, Form, FastField, Field, FieldArray } from "formik";
import React, { useState,useEffect } from "react";
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
import AddCircleIcon from '@mui/icons-material/AddCircle';
const HowtoUse = (props) => {
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (isMobileScreen) {
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
              <Form class=" max-sm:w-11/12   mt-8 m-auto h-[49vh] md:mt-12 w-2/5  ">
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
              </Form>
            )}
          </Formik>
         
         
        
          </div>
          
        </>
      );
            }

  return (
    <>
    <div class="h-screen w-full ">
    <header class="bg-white text-white py-4  border-solid border-gray-300 border-2">
    <label class="text-black text-2xl font-bold">Quizprompter</label> 
     </header>
     <div class="flex">
     <div class="w-[20%] h-screen bg-black flex flex-col">
     <div class=" h-[15%] flex items-center ">
      <label class="text-xl text-white font-medium">Create Quizzes</label>
     </div>
     <div class="bg-gray-200 border-b border-solid border-white"></div>
     <div class=" h-[60%] flex flex-col ">
     <label class="text-sm text-white font-normal">Add quiz</label>
     <label class="text-sm text-white font-normal">No name quiz WIP</label>
     <label class="text-sm text-white font-normal">Named quiz WIP</label>
     <label class="text-base text-white font-normal mt-[7.8rem]">Manage quizzes</label>
     </div>
     <div class="bg-gray-200 border-b border-solid border-white"></div>
     <div class=" h-[60%] flex items-end ">
     <label class="text-base text-white font-normal ">Settings</label>
     </div>
     <div class="bg-gray-200 border-b border-solid border-white"></div>
     <div class=" h-[60%] "></div>
     <div class="bg-gray-200 border-b border-solid border-white"></div>
    </div>
    <div class="w-[60%] h-screen bg-white flex items-center flex-col">
    <label class="text-2xl  font-bold mt-6 ">Quiz set name</label>  
    <div class="w-[22rem] h-[22rem] bg-white border-2 border-solid border-gray-300 shadow-lg mt-8 rounded-xl">
     
      </div> 
      <div class=" mt-8">
        <a href="/how2" >
      <AddCircleIcon style={{width:"5rem",height:"5rem",cursor:"pointer"}}/>
      </a>
      </div>
    </div>
    <div class="w-[20%] h-screen bg-[#D4FFE0]">
        
    </div>
    </div>
    </div>
    </>
  )

  }
export default withRouter(HowtoUse)

