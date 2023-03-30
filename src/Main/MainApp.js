


import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import { Route, Routes, Switch ,Link} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Layout,
  Menu,
  Icon,
  Badge,
  Tag,
  Tooltip,
  message,
  Popconfirm,
} from "antd";
import { ThemeProvider } from "styled-components";
import {
  ApplicationWrapper,
  LayoutWrapper,
  MainWrapper,
  NavbarWrapper,
  FlexContainer,
} from "../Components/UI/Layout";
import { BundleLoader } from "../Components/Placeholder";

//import AppErrorBoundary from "../Helpers/ErrorBoundary/AppErrorBoundary";
import NavMenu from "./NavMenu";


import { MultiAvatar } from "../Components/UI/Elements";
import { Select } from "antd";
// import { updateCustomerById,updateCustomerLanguage,updateServiceLanguage,getServiceDetails} from "../Auth/AuthAction";
// import { setLanguage } from "../../Language/LanguageAction";
import {MenuUnfoldOutlined, WhatsAppOutlined} from "@ant-design/icons";
import { Button } from "reactstrap";
import JobReport from "../Container/JobReport/JobReport"
// import Privacy from "../Privacy";
//import "./MainApp.css";


const { Option } = Select;

const { Header, Sider, Content } = Layout;
const Courses=lazy(()=>import ('../Container/Courses/Courses'))
const Planner = lazy(() => import("../Container/Auth/Planner/Planner"));





function MainApp(props) {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
const [placement,setPlacement] =useState("left");

 

 function showDrawer () {
    setVisible(true)
  };

  function onClose () {
    setVisible(false)
  };

  function onChange (e) {
   setPlacement(e.target.value)
  };

  useEffect(()=>{
    //props.getOpportunityRecord();
    // props.getRequirementRecord();
  //props.getServiceDetails(props.serviceId)
  },[])
  const { serviceUser, customerUser } = props;
  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };


  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState("light");

  function toggle() {
    setCollapsed(!collapsed);
  }

  function toggleTheme(value) {
    setTheme(value ? "light" : "light");
  }
  function handleLanguageSelect(data) {
    props.updateCustomerLanguage(props.customerId,{
      language: data,
    });
    message.success(`Language sucessfully changed to ${data} `);
  }
  function handleLanguageSelectService(data) {
    props.updateServiceLanguage(props.serviceId,{
      language: data,
    });
    message.success(`Language sucessfully changed to ${data} `);
  }
  // render() {
  const background = theme === "light" ? "#fff" : null;
  const { organization, user, imageId, orgImageId, organizationName } = props;
  console.log("Done", props.imageId);
  console.log(user);
  let path = window.location.href.split("/")[3];
  console.log("paaaaaaaath", path);

  const organizationLogo = (
    <MultiAvatar
      imageId={imageId}
      //marginLeft="30px"
      // primaryTitle={organizationName}
    />
  );
  return (
    
      <LayoutWrapper className="max-sm:w-wk flex justify-center items-center md:items-start">
      {/* <Sider className="sider"
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{ minHeight: "100vh", background }}
          > */}
     
          {/* <div
            className="logo"
            style={{
              justifyContent: !collapsed ? "flex-start" : "center",
              height: 50,
            }}
          >
           
           </div> */}
          {/* <NavMenu
            collapsed={collapsed}
            toggleCollapsed={toggle}
            toggleTheme={toggleTheme}
            theme={theme}
          /> */}
         
        {/* </Sider> */}
        <LayoutWrapper>
          <NavbarWrapper style={{ padding: 0, height: 50,width:"96rem" }}>
            {/* <Header> */}
      
         
          <diV>


          <span  style={{ paddingLeft: "1em" }}>
            Dashboard
            </span>
          <Link to="/planner">
          <span  style={{ paddingLeft: "1em" }}>
            Hours
            </span>
            </Link>
          

            <span  style={{ paddingLeft: "1em" }}>
          Profile
          </span>
          

          <span  style={{ paddingLeft: "1em" }}>
            Assessment
            </span>
            <Link to="/courses">
            <span  style={{ paddingLeft: "1em" }}>
            Courses
            </span>
            </Link>

            <span  style={{ paddingLeft: "1em" }}>
            Program
            </span>
            <span  style={{ paddingLeft: "1em" }}>
            Test
            </span>
            <Link to="/jobreport">
            <span  style={{ paddingLeft: "1em" }}>
            Jobs
            </span>
            </Link>
          </diV>
            
                {/* {serviceUser.userType === "Service Provider" ? ( */}
                <div style={{ }}>
                  <Select
                    //value={props.languageService}
                  
                    //onChange={(value) => handleLanguageSelectService(value)}
                  >
                    <Option value="English">English</Option>
                    <Option value="Dutch">Dutch</Option>
                  </Select>
                </div>
           
             
              

  
              <div class="flex items-center"  >
              
                <div
                style={{
                  backgroundColor: "tomato",
                  color: "white",
                  // borderColor: "rgb(251, 133, 0)",
                  border: "1px solid tomato",
                  borderRadius: "5px",
                  position: "relative",
                  height: "27px",
                  textAlign: "center",
                  lineHeight: "24px",
                  padding: "0px 10px",
                  marginLeft: "auto",
                  marginRight: "20px",
                }}
              >
               {props.fullName}
              
              
              </div>
               
             
                
                <Link to="/">
              <Button
                  className="abtnn text-white "
                  style={{
                    backgroundColor: "tomato",
                    color: "white",
                    // borderColor: "rgb(251, 133, 0)",
                    border: "1px solid tomato",
                    borderRadius: "5px",
                    position: "relative",
                    height: "27px",
                    textAlign: "center",
                    lineHeight: "24px",
                    padding: "0px 10px",
                    marginLeft: "auto",
                    marginRight: "20px",
                  }}
                >SignOUt</Button>
                </Link>
                {/* <ProfileDropdown /> */}
                </div>
            {/* </Header> */}
          </NavbarWrapper>
          <ApplicationWrapper>
            {/* <AppErrorBoundary> */}
              <Content>
                <Suspense maxDuration={6000} fallback={<BundleLoader />}>
                  <Switch>
                   
                    <Route exact path="/planner" component={Planner} />
                    <Route exact path="/Courses" component={Courses} />
                    <Route exact path="/jobreport" component={JobReport} />
                  
                  </Switch>
                </Suspense>
              </Content>
            {/* </AppErrorBoundary> */}
          </ApplicationWrapper>
        </LayoutWrapper>
      </LayoutWrapper>
  );
}
// }

const mapStateToProps = ({ auth, theme, language }) => ({
  fullName:auth.userDetails.fullName
  // serviceDetails: auth.serviceDetails,
  // customerUser: auth.userDetails,
  // serviceUser: auth.serviceDetails,
  // serviceId:auth.serviceDetails.serviceId,
  // customerId:auth.userDetails.customerId,
  // language: language.language,
  // user: auth.userDetails,
  // userDetails: auth.userDetails,
  // name: auth.userDetails.name,
  // status:auth.serviceDetails.status,
  // // employeeId: auth.userDetails.employeeId,
  // userId: auth.userDetails.employeeId,
  // theme: theme.theme,
  // organization:
  //   auth.userDetails &&
  //   auth.userDetails.metaData &&
  //   auth.userDetails.metaData.organization,
  // department: auth.userDetails && auth.userDetails.department,
  // role: auth.userDetails && auth.userDetails.role,
  // // orgImageId:auth.userDetails.orgImageId,

  // imageId:
  //   (auth.userDetails &&
  //     auth.userDetails.metaData && 
  //     auth.userDetails.metaData.orgImageId) ||
  //   "",
  // organizationName:
  //   (auth.userDetails &&
  //     auth.userDetails.metaData &&
  //     auth.userDetails.metaData.organization &&
  //     auth.userDetails.metaData.organization.organizationName) ||
  //   "",

  // language: auth.userDetails.language,
  // languageService: auth.serviceDetails.language,
  // organizationDetails: auth.organizationDetails,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // getPresentNotifications,
      // updateCustomerById,
      // setLanguage,
      // getServiceDetails,
      // updateServiceLanguage,
      // updateCustomerLanguage
      // getOpportunityRecord,
      // getRequirementRecord,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(MainApp);







