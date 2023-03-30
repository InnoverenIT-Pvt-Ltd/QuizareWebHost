import React, { useEffect,Suspense} from "react";
import { bindActionCreators } from 'redux';
import { FormattedMessage } from "react-intl";
import { connect } from 'react-redux';
import { BundleLoader } from '../Components/Placeholder';
import JobVendorContent from "./JobVendorContent";
import { FlexContainer } from "../Components/UI/Layout";
import JobUploadForm from "./JobUploadForm";
import JobTalentContent from "./JobTalentContent";
import FWLogo from "../images/Picture.jpg";

function JobTalent(props) {
  useEffect(() => {
    
  }, [])
  const {
    setJobViewType,
    viewType,
  } = props;

  return (
    
    <React.Fragment>
        {/* <FlexContainer  style={{justifyContent:"space-evenly"}} >
        
        <JobTalentContent/>
        <JobUploadForm/>
 
        </FlexContainer> */}
   
   <div class="w-wk h-18 max-sm:h-96">
<img
 class=" h-4/5"
src={FWLogo}
alt="Tekorero logo"
            />
            </div>
            <div class=" max-sm:flex flex-wrap flex-col xl:flex-row flex justify-between  mt-6  h-auto">
            <div class="flex-col max-sm:w-wk  -mt-80 md:-mt-margin31 ml-20 flex w-1/2  ">
            <h2 class="text-white max-sm: text-sm md:text-5xl">
              {/* LOOKING FOR TALENT */}
              <FormattedMessage
                  id="app.lookingfortalent"
                  defaultMessage="lookingfortalent"
                />
              </h2>
            <hr class=" max-sm:h-0 mt-0 md:mt-4 w-w47 ml-0 h-1 mx-auto  bg-gray-100 border-0 rounded "/>
            
            <h4 class=" text-slate-400  max-sm:mt-4 text-xs md:text-4xl mt-margin2 ">
{/* Fill in our form to join our */}
<FormattedMessage
                  id="app.fillinourformtojoinour"
                  defaultMessage="fillinourformtojoinour"
                />
<br/>
{/* big network of talents! */}
<FormattedMessage
                  id="app.bignetworkoftalents"
                  defaultMessage="bignetworkoftalents"
                />
</h4>
</div>
</div>
<div class=" grid grid-cols-2 gap-4 max-sm:flex flex-col-reverse mt-0 md:-mt-96">
        <div class="flex-col justify-center">
            <JobTalentContent/>
        </div>
        <div class="flex flex-col justify-center max-sm:mt-0 md:mt-36">
        <div class=" max-sm:  md:border-l-border-l-5 h-h8 ml-margin18 -mt-margin5.6 md:w-2/3"></div>
            <JobUploadForm/>
        </div>
    </div>
    <hr class=" mt-28 w-auto ml-0 h-1 mx-auto  bg-black border-0 rounded "/>
    <div class="text-sm flex justify-center mt-3 mb-8 text-gray-700" >
          Copyright © {new Date().getFullYear()} {` `} AXiS DIGITAAL B.V.. All Rights Reserved.
        </div>
    </React.Fragment>
  )
}
const mapStateToProps = ({job }) => ({
  
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
       
      },
      dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(JobTalent);