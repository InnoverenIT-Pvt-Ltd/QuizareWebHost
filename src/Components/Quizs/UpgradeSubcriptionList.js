import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import axios from 'axios';
import FWLogo1 from "../../../src/images/QP-logo-short_500px.png";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {getUserDetails} from "../../Container/Auth/AuthAction"
import {  getUpgradeSuscrption, handleQuizStripeModal, } from "../../Container/Quiz/QuizAction";
import Swal from 'sweetalert2';
import { base_url } from "../../Config/Auth";
import PaymentQuizModal from "../../Main/PaymentQuizModal";

const UpgradeSubcriptionList = (props) => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [editedName, setEditedName] = useState({});
    const [originalSubscription, setOriginalSubscription] = useState({});
    const [selectedPlanId, setSelectedPlanId] = useState(null); // New state to track the selected plan
    const history = useHistory();
    const dispatch = useDispatch(); 
    const [eachSub, setEachSub] = useState({});

    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                await props.getUpgradeSuscrption(props.userId); // Fetch subscription data from the server
            } catch (error) {
                console.error("Error fetching subscriptions:", error);
            }
        };
        fetchSubscriptions();
    }, []); // Empty dependency array ensures this runs only once after initial render

    useEffect(() => {
        if (props.suscrptionUpgradeData) {
            setSubscriptions(props.suscrptionUpgradeData);
        }
    }, [props.suscrptionUpgradeData]); // Update local state whenever `props.suscrptionUpgradeData` changes


    const handleSelectPlan = async (subscriptionId) => {
        try {
            const response = await axios.post(`${base_url}/userDetails/addSubscription`, {
                subscriptionId,
                userId: props.userId
            });

            if (response.status === 200) {
                setSelectedPlanId(subscriptionId); // Update state to track selected plan
                Swal.fire({
                    icon: "success",
                    title: `Plan ${subscriptions.find(sub => sub.subscriptionId === subscriptionId).subscriptionName} selected successfully!`,
                    showConfirmButton: false,
                    timer: 1500
                });
                dispatch(getUpgradeSuscrption(props.userId));
                dispatch(getUserDetails(props.userId));
               // history.push("/emptypage");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Failed to select plan.",
                    showConfirmButton: false,
                    timer: 1500
                });
               
            }
        } catch (error) {
            console.error("Error selecting plan:", error);
            alert("An error occurred while selecting the plan.");
        }
    };
  
      if (props.fetchingUpgradeSuscrption) {
        return  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-loader">
        <div className="loader"><img src={FWLogo1}  width={10000}  style={{ borderRadius:"0.75rem"}} alt="Loading..."  /></div>
      </div>
      }
    return (
        <>
        <div>
            <div className="flex items-center flex-col">
                

            <div className="bg-[#3B16B7]  shadow-2xl border-solid flex md:justify-center mt-3  flex-col max-sm:w-wk max-sm:h-[79vh] max-sm:overflow-x-auto h-[96vh] md:w-wk max-sm:mt-0  ">
                    <div className="max-w-6xl mx-auto py-16">
                        <h1 className="text-4xl font-bold text-center mb-10 font-[Poppins] text-white">Quizprompter Plans</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {subscriptions.map((item, i) => (
                                <div key={i} className={`bg-white shadow-md rounded-2xl p-4 w-[17rem] h-[20rem] text-center ${item.recommendInd ? 'border-t-[10px] border-purple-600' : ''}`}>
                                      <div className="bg-purple-300 w-32 text-purple-600 font-semibold">{item.recommendInd ? "MOST POPULAR" : ''}</div>
                                    <div className="flex items-center">
                                        <h2 className="text-2xl font-bold font-[Poppins]">{item.subscriptionName}</h2>
                                    </div>
                                    <p className="text-4xl font-bold flex font-[Poppins]">${item.pricePerMonth}<span className="text-lg">/month</span></p>
                                    <button
                                        className={`mt-6 ${item.activePlanInd || item.subscriptionId === selectedPlanId ? 'bg-gray-300 text-gray-700' : 'bg-[#3B16B7] text-white'} py-2 px-4 rounded-lg w-full`}
                                        onClick={() =>{ handleSelectPlan(item.subscriptionId);
                                            props.handleQuizStripeModal(true);
                                            setEachSub(item)
                                        }}
                                        disabled={item.activePlanInd || item.subscriptionId === selectedPlanId}
                                    >
                                        <div className="font-[Poppins] font-medium">
        {item.activePlanInd ? 'Active Plan' : (item.subscriptionId === selectedPlanId ? 'Plan Selected' : 'Select Plan')}
    </div>
                                    </button>
                                    <ul className="text-left mt-4">
                                        <li className="font-[Poppins]">✓ {item.noOfQuestion} Question</li>
                                        {/* <li className="font-[Poppins]">✓ {item.description} </li> */}
                                        <li className=" font-normal ml-5  font-[Poppins] " dangerouslySetInnerHTML={{ __html:item.description  }} />
                                    </ul>
                                    {item.recommendInd && <div className="absolute top-[-2.5rem] left-[8rem] bg-purple-500 text-white py-1 px-4 text-sm rounded-xl">Most Popular</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

        <PaymentQuizModal
        eachSub={eachSub}
        addiNVEStripeModal={props.addiNVEStripeModal}
        handleQuizStripeModal={props.handleQuizStripeModal}
    />

    </>
    );
};

const mapStateToProps = ({ quiz, auth }) => ({
    addiNVEStripeModal: quiz.addiNVEStripeModal,
    userId: auth.userDetails.userId,
    suscrptionUpgradeData: quiz.suscrptionUpgradeData,
    addingSuscrpitionModal: quiz.addingSuscrpitionModal,
    fetchingUpgradeSuscrption: quiz.fetchingUpgradeSuscrption,
   addiNVEStripeModal: quiz.addiNVEStripeModal,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUpgradeSuscrption,
    handleQuizStripeModal,
    getUserDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UpgradeSubcriptionList);
