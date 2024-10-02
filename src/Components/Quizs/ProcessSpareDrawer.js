import React, { lazy, Suspense, useEffect,useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "antd";
import CreatModal from "./CreatModal";



const ProcessSpareDrawer = (props) => {
    const { RowData, ...formProps } = props;
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        // Update the isMobile state when the window resizes
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <Modal
                //title={props.RowData.imei}
                 width={isMobile ? "100%" : "48%"}
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

