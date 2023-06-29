


import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import { Route, Routes, Switch, Link } from "react-router-dom";
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
} from "../Components/UI/Layout";
import Quiz from "../Container/Quiz/Quiz";
import { BundleLoader } from "../Components/Placeholder";
import { MultiAvatar } from "../Components/UI/Elements";
import { Select } from "antd";
import { MenuUnfoldOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";
import JobReport from "../Container/JobReport/JobReport"

const { Option } = Select;

const { Header, Sider, Content } = Layout;

function MainApp(props) {

  return (

    // <LayoutWrapper className="max-sm:w-wk flex justify-center items-center md:items-start">
    <LayoutWrapper>

      <ApplicationWrapper>
        {/* <AppErrorBoundary> */}
        <Content>
          <Suspense maxDuration={6000} fallback={<BundleLoader />}>
            <Switch>

              <Route exact path="/addquiz" component={Quiz} />
            </Switch>
          </Suspense>
        </Content>
        {/* </AppErrorBoundary> */}
      </ApplicationWrapper>
    </LayoutWrapper>
    // </LayoutWrapper>
  );
}
// }

const mapStateToProps = ({ auth, theme, language }) => ({
  // fullName:auth.userDetails.fullName



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







