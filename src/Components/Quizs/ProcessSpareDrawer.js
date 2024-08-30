import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "antd";
import CreatModal from "./CreatModal";



const ProcessSpareDrawer = (props) => {
    const { RowData, ...formProps } = props;

    return (
        <>
            <Modal
                //title={props.RowData.imei}
                width="35%"
                height="50%"
                visible={props.processSpareModal}
                closable
                destroyOnClose
                footer={null}
                  placement="right"
                  onCancel={() => props.handleSpareProcess(false)}
            >
                <Suspense fallback={"loading..."}>
                <CreatModal />
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
)(ProcessSpareDrawer);

