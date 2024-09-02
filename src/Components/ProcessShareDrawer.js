import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "antd";
import QuizDetails from "../Container/Quiz/EditQuiz/QuizDetails";



const ProcessShareDrawer = (props) => {
    const { RowData, ...formProps } = props;
    const isMobile = window.innerWidth < 768;
    return (
        <>
            <Modal
                //title={props.RowData.imei}
                width={isMobile ? "100%" : "40%"}
                height="50%"
                visible={props.processShareModal}
                closable
                destroyOnClose
                footer={null}
                  placement="right"
                  onCancel={() => props.handleShareProcess(false)}
            >
                <Suspense fallback={"loading..."}>
                    
                <QuizDetails />
                </Suspense>
            </Modal>
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

