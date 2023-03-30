import { Tooltip } from 'antd'
import React, { useEffect, useState } from "react";
import { FlexContainer } from '../Components/UI/Layout'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FormattedMessage } from "react-intl";
import FWLogo from "../images/stwlogo.png";
import { MenuUnfoldOutlined } from "@ant-design/icons";
const JobHeaderLeft = (props) => {
const [open, setOpen] =useState(false);
    return (
      // <FlexContainer style={{lineHeight:"0.125em", alignItems:"center"}}>
       <div class=" flex flex-row items-center  max-sm:leading-3 justify-evenly " >
        <div>
        <img
              className="big-logo"
              src={FWLogo}
              style={{ width: 100 }}
              alt="Tekorero logo"
            />
            </div>
{/* <img
              className="big-logo"
              src={FWLogo}
              style={{ width: 100 }}
              alt="Tekorero logo"
            /> */}
          
        {/* <Tooltip
      // title="Distributor"
      >
        <span
          onClick={() => props.setJobViewType("jobcard")}
          style={{
            // marginRight: "0.5rem",
            cursor:"pointer",
            color: props.viewType === "jobcard" && "#1890ff",
          }}
        > 
        Vacancy
        </span>
      </Tooltip> */}
     
      <MenuUnfoldOutlined className="block md:hidden  " onClick={() => setOpen(!open)} />
      <div className={`${open ?"block":"hidden"} `}>
        {/* <a href='/jobVendor' class="p-3 flex flex-col">Vendor</a>
        <a href='/jobTalent' class="p-3">Upload Profile</a> */}
          <div >
          <Tooltip
      //title="Customer"
      >
        <span
          onClick={() => props.setJobViewType("jobtalent")}
          style={{
            
            // marginRight: "0.5rem",
            cursor:"pointer",
            color: props.viewType === "jobtalent" && "#1890ff",
          }}
        >
         Talent
        </span>
      </Tooltip>
      &nbsp;&nbsp;
      <Tooltip>
        <span
          onClick={() => props.setJobViewType("jobvendor")}
          style={{
            // marginRight: "0.5rem",
            cursor:"pointer",
            color: props.viewType === "jobvendor" && "#1890ff",
          }}
        > 
       {/* Partner */}

       <FormattedMessage
                  id="app.partner"
                  defaultMessage="Partner"
                />
        </span>
      </Tooltip>
      </div>
      </div>
      <div class="max-sm:hidden md:ml-margin38">
     
     
      <Tooltip
      //title="Customer"
      >
        <span
          onClick={() => props.setJobViewType("jobtalent")}
          style={{
            
            // marginRight: "0.5rem",
            cursor:"pointer",
            color: props.viewType === "jobtalent" && "#1890ff",
          }}
        >
          Talent
        </span>
      </Tooltip>
      &nbsp;&nbsp;
      <Tooltip>
        <span
          onClick={() => props.setJobViewType("jobvendor")}
          style={{
            // marginRight: "0.5rem",
            cursor:"pointer",
            color: props.viewType === "jobvendor" && "#1890ff",
          }}
        > 

<FormattedMessage
                  id="app.partner"
                  defaultMessage="Partner"
                />
        {/* Partner */}
        </span>
      </Tooltip>
      </div>

      {/* <Tooltip>
        <span
          onClick={() => props.setJobViewType("jobhire")}
          style={{
            // marginRight: "0.5rem",
            cursor:"pointer",
            color: props.viewType === "jobhire" && "#1890ff",
          }}
        > 
        Hire a team
        </span>
      </Tooltip> */}
    </div>
        );
}
const mapStateToProps = ({ }) => ({
 
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      
      
    },
    dispatch
  );
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(JobHeaderLeft);