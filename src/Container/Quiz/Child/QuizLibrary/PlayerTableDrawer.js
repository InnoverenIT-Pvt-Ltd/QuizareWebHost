import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "antd";
import { StyledDrawer } from "../../../../Components/UI/Antd";
import QuizDetailsPlayerTable from "../../../../Components/Quizs/QuizDetailsPlayerTable";
import PlayerTable from "./PlayerTable";



const PlayerTableDrawer = (props) => {
    const { RowData, ...formProps } = props;
    const isMobile = window.innerWidth < 768;
    return (
        <>
            <StyledDrawer
                title={props.currentItem.quizName}
                width={isMobile ? "100%" : "40%"}
                height="50%"
                style={{marginTop:"5rem"}}
                visible={props.open}
                closable
                destroyOnClose
                footer={null}
                  placement="right"
                  onClose={() => props.setOpen(false)}
            >
                <Suspense fallback={"loading..."}>
                    
                <PlayerTable data={props.currentItem} />
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
)(PlayerTableDrawer);

