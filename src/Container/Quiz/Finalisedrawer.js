import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "antd";
import FinalizeQuiz from "./Child/HostQuizes/FinalizeQuiz";




const Finalisedrawer = (props) => {
    const { RowData, ...formProps } = props;

    return (
        <>
            <Modal
                title={props.showQuiz && props.showQuiz.quizName}
                width="30%"
                height="50%"
                visible={props.finalise}
                closable
                destroyOnClose
                footer={null}
                  placement="right"
                  onCancel={() => props.setFinalise(false)}
            >
                <Suspense fallback={"loading..."}>
                <FinalizeQuiz/>
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
)(Finalisedrawer);

