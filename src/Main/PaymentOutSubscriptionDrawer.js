import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { BundleLoader } from "../Components/Placeholder";
import { StyledModal } from "../Components/UI/Antd";
import "./MainApp.scss";
import PaymentOutStripeCheckout from "./PaymentOutStripeCheckout";

const PaymentOutSubscriptionDrawer = (props) => {
  const { ...formProps } = props;
  
  return (
    <>
      <StyledModal
        title="Stripe"
        //  width="40%"
        className="modal"
        visible={props.stripeModalVisible}
        maskClosable={false}
        destroyOnClose
        onCancel={props.closeStripeModal}
        maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
        style={{ top: 40 }}
        footer={null}
      >
        <Suspense fallback={<BundleLoader />}>

        <PaymentOutStripeCheckout
          eachSub={props.eachSub}
closeStripeModal={props.closeStripeModal}
stripeModalVisible={props.stripeModalVisible}
        />
         
        </Suspense>
      </StyledModal>
    </>
  );
};
const mapStateToProps = ({ customer, auth }) => ({

});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaymentOutSubscriptionDrawer));
