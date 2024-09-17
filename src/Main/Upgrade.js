import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { handleQuizStripeModal, handleSuscrptionModal, getSuscrption } from "../Container/Quiz/QuizAction";
import { Button } from "antd";
import PaymentQuizModal from "./PaymentQuizModal";
import MainSuscriptionModal from "./MainSuscriptionModal";
import { base_url } from "../Config/Auth";
import Swal from 'sweetalert2'

const Upgrade = (props) => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [editedName, setEditedName] = useState({});
    const [originalSubscription, setOriginalSubscription] = useState({});

   
    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                console.log("Fetching subscriptions...");
                await props.getSuscrption(); // Fetch subscription data from the server
                console.log("Subscription data fetched.");
            } catch (error) {
                console.error("Error fetching subscriptions:", error);
            }
        };

        fetchSubscriptions();
    }, []); // Empty dependency array ensures this runs only once after initial render

    useEffect(() => {
        console.log("props.suscrptionData updated:", props.suscrptionData);
        if (props.suscrptionData) {
            setSubscriptions(props.suscrptionData);
        }
    }, [props.suscrptionData]); // Update local state whenever `props.suscrptionData` changes



    const handleEdit = (subscriptionId, newName) => {
        setEditedName((prev) => ({ ...prev, [subscriptionId]: newName }));
    };

    const handleStartEdit = (subscriptionId) => {
        const subscriptionToEdit = subscriptions.find(sub => sub.subscriptionId === subscriptionId);
        setOriginalSubscription(subscriptionToEdit); // Save original data for cancellation
        setEditedName({ [subscriptionId]: subscriptionToEdit.subscriptionName });
        setEditingId(subscriptionId);
        setIsEditing(true);
    };

    const handleSave = async (subscriptionId) => {
        const subscriptionToUpdate = subscriptions.find(sub => sub.subscriptionId === subscriptionId);
        const data = {
            ...subscriptionToUpdate,
            subscriptionName: editedName[subscriptionId] || subscriptionToUpdate.subscriptionName,
        };

        try {
            const response = await axios.put(`${base_url}/subscription/create`, data);

            if (response.status === 200) {
                const updatedSubscriptions = subscriptions.map((sub) =>
                    sub.subscriptionId === subscriptionId ? { ...sub, subscriptionName: editedName[subscriptionId] || sub.subscriptionName } : sub
                );
                setSubscriptions(updatedSubscriptions);
                Swal.fire({
                    icon: "success",
                    title: "Subscription updated successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                setIsEditing(false);
                setEditingId(null);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Failed to update subscription.",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while updating the subscription.");
        }
    };

    const handleCancel = () => {
        setSubscriptions((prevSubscriptions) =>
            prevSubscriptions.map((sub) =>
                sub.subscriptionId === editingId ? originalSubscription : sub
            )
        );
        setIsEditing(false);
        setEditingId(null);
    };
    const handleDelete = async (subscriptionId) => {
        try {
            const response = await axios.delete(`${base_url}/subscription/delete/${subscriptionId}/${props.userId}`);

            if (response.status === 200) {
                const updatedSubscriptions = subscriptions.filter(sub => sub.subscriptionId !== subscriptionId);
                setSubscriptions(updatedSubscriptions);
                // alert("Subscription deleted successfully!");
                Swal.fire({
                    icon: "success",
                    title: "Subscription deleted successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Failed to delete subscription.",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while deleting the subscription.");
        }
    };
    return (
        <div>
            <div className="flex items-center flex-col">
                <Button
                    type="primary"
                    onClick={() => props.handleQuizStripeModal(true)}
                >
                    Checkout
                </Button>

                <div className="flex items-center">
                    <Button
                        type="primary"
                        onClick={() => props.handleSuscrptionModal(true)}
                    >
                        Add
                    </Button>
                </div>

                <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                    <div className="max-w-6xl mx-auto py-16">
                        <h1 className="text-4xl font-bold text-center mb-10">Quizprompter Plans</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {subscriptions.map((item, i) => (
                                <div key={i} className={`bg-white shadow-md rounded-2xl p-4 w-[17rem] h-[20rem] text-center ${item.isMostPopular ? 'border-2 border-purple-600' : ''}`}>
                                    {isEditing && editingId === item.subscriptionId ? (
                                        <div className="flex items-center">
                                            <input
                                                type="text"
                                                // value={editedName[item.subscriptionId] || item.subscriptionName}
                                                value={editedName[item.subscriptionId] }
                                                onChange={(e) => handleEdit(item.subscriptionId, e.target.value)}
                                                className="text-2xl h-8 w-20 font-bold text-center border-b-2 border-gray-300 focus:outline-none"
                                            />
                                            <div className="ml-1">
                                                <button
                                                    onClick={() => handleSave(item.subscriptionId)}
                                                    className="bg-green-500 text-white py-2 px-4 rounded-lg"
                                                >
                                                    Save 
                                                </button>
                                                <button
                                                    onClick={handleCancel}
                                                    className="ml-2 bg-red-500 text-white py-2 px-4 rounded-lg"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center">
                                            <h2 className="text-2xl font-bold">{item.subscriptionName}</h2>
                                            <button onClick={() => handleStartEdit(item.subscriptionId)} className="ml-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-gray-600"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15.232 5.232l3.536 3.536M9 13h3v3m-7.828-4.828a4 4 0 105.656 5.656L21 10.828a4 4 0 10-5.656-5.656L7.172 13z"
                                                    />
                                                </svg>
                                            </button>
                                            <button onClick={() => handleDelete(item.subscriptionId)} className="ml-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-red-600"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                    <p className="text-4xl font-bold flex">${item.price}<span className="text-lg">/month</span></p>
                                    <button
                                        className={`mt-6 ${item.isActive ? 'bg-gray-300 text-gray-700' : 'bg-[#3B16B7] text-white'} py-2 px-4 rounded-lg w-wk`}
                                        disabled={item.isActive}>
                                        {item.isActive ? 'Active Plan' : 'Select This'}
                                    </button>
                                    <ul className="text-left mt-4">
                                        <li>✓ {item.noOfQuestion} Question</li>
                                        <li>✓ {item.noOfQuiz} Quiz</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <MainSuscriptionModal
                handleSuscrptionModal={props.handleSuscrptionModal}
                addingSuscrpitionModal={props.addingSuscrpitionModal}
            />
            <PaymentQuizModal
                addiNVEStripeModal={props.addiNVEStripeModal}
                handleQuizStripeModal={props.handleQuizStripeModal}
            />
        </div>
    );
};

const mapStateToProps = ({ quiz, auth }) => ({
    addiNVEStripeModal: quiz.addiNVEStripeModal,
    userId: auth.userDetails.userId,
    suscrptionData: quiz.suscrptionData,
    addingSuscrpitionModal: quiz.addingSuscrpitionModal
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            handleQuizStripeModal,
            handleSuscrptionModal,
            getSuscrption
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Upgrade);
