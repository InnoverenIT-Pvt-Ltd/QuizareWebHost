import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "antd";
import QuizDetails from "../Container/Quiz/EditQuiz/QuizDetails";
import { StyledDrawer } from "../Components/UI/Antd";



const ProcessShareDrawer = (props) => {
    const { RowData, ...formProps } = props;
    const isMobile = window.innerWidth < 768;
    return (
        <>
            <StyledDrawer
                //title={props.RowData.imei}
                width={isMobile ? "100%" : "40%"}
                height="50%"
                style={{marginTop:"5rem"}}
                visible={props.processShareModal}
                closable
                destroyOnClose
                footer={null}
                  placement="right"
                  onClose={() =>  props.handleShareProcess(false)}
            >
                <Suspense fallback={"loading..."}>
                    
                <QuizDetails />
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
)(ProcessShareDrawer);

