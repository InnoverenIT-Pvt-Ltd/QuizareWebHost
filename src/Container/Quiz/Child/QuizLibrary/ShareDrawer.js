import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "antd";
import ShareQuizDetails from "./ShareQuizDetails";
import { StyledDrawer } from "../../../../Components/UI/Antd";



const ShareDrawer = (props) => {
    const { currentItem, ...formProps } = props;
    const isMobile = window.innerWidth < 768;
    return (
        <>
            <StyledDrawer
                title={currentItem.quizName}
                width={isMobile ? "100%" : "40%"}
                height="50%"
                style={{marginTop:"5rem"}}
                visible={props.copyReduce}
                closable
                destroyOnClose
                footer={null}
                  placement="right"
                  onClose={() => props.handleCopy(false)}
            >
                <Suspense fallback={"loading..."}>
                    
                <ShareQuizDetails 
                currentItem={props.currentItem}
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
)(ShareDrawer);

