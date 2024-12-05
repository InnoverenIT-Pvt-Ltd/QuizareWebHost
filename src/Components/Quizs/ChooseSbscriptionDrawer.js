import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "antd";
import { StyledDrawer } from "../UI/Antd";
import UpgradeSubcriptionList from "./UpgradeSubcriptionList";


const ChooseSbscriptionDrawer = (props) => {
    const { RowData, ...formProps } = props;
    const isMobile = window.innerWidth < 768;

    return (
        <>
            <StyledDrawer
                //title={props.RowData.imei}
                 width={isMobile ? "100%" : "80%"}
                height="50%"
                visible={props.chooseSubOpen}
                closable
                destroyOnClose
                footer={null}
                  placement="right"
                  onClose={() => props.setchooseSubOpen(false)}
            >
                <Suspense fallback={"loading..."}>
                <UpgradeSubcriptionList/>
                </Suspense>
            </StyledDrawer>
        </>
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
)(ChooseSbscriptionDrawer);

