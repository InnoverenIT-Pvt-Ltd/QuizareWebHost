import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "antd";
import FinalizeQuiz from "./Child/HostQuizes/FinalizeQuiz";
import { StyledDrawer } from "../../Components/UI/Antd";




const Finalisedrawer = (props) => {
    const { RowData, ...formProps } = props;

    return (
        <>
            <StyledDrawer
                title={props.showQuiz && props.showQuiz.quizName}
                width="30%"
                height="50%"
                visible={props.finalise}
                closable
                destroyOnClose
                footer={null}
                  placement="right"
                  onClose={() => props.setFinalise(false)}
            >
                <Suspense fallback={"loading..."}>
                <FinalizeQuiz
                setFinalise={props.setFinalise}
                />
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
)(Finalisedrawer);

