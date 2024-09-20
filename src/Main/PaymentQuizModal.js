import React, { lazy, Suspense } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { BundleLoader } from "../Components/Placeholder";
import { StyledModal } from "../Components/UI/Antd";
import QuizStripeCheckout from "./QuizStripeCheckout";


const PaymentQuizModal = (props) => {
  const { ...formProps } = props;

  
  return (
    <>
      <StyledModal
        title="Stripe"
        //  width="40%"
        className="modal"
        visible={props.addiNVEStripeModal}
        maskClosable={false}
        destroyOnClose
        onCancel={() => props.handleQuizStripeModal(false)}
        maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
        style={{ top: 40 }}
        footer={null}
      >
        <Suspense fallback={<BundleLoader />}>
        <QuizStripeCheckout
         handleQuizStripeModal={props.handleQuizStripeModal}
         total={props.eachSub.pricePerMonth}
           currency={"EUR"}
        eachSub={props.eachSub}
        />
        </Suspense>
      </StyledModal>
    </>
  );
};
const mapStateToProps = ({ customer, auth }) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaymentQuizModal)
);
