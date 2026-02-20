import React, { useContext, useState } from 'react'
import ContactSellerModal from '../../components/modals/ContactSellerModal'
import OfferModal from '../../components/modals/OfferModal'
import OfferSentModal from '../../components/modals/OfferSentModal'
import { OpenModalContext } from './Context'
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from '../../services/api'
import { formatPrice } from '../../lib/formatPrice'
import MessageSellerModal from '../../components/modals/MessageSellerModal'

const ContactSellerFlow = ({info, negotiable , price, title}) => {
  const navigate = useNavigate();
  const name = {
    firstName: info.first_name,
    lastName: info.last_name
  }
  const token = localStorage.getItem("authToken");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const CURRENT_USER_ID = currentUser.user.id;
  const [step, setStep] = useState(1);
  const [loading, setIsLoading] = useState(false);
  const { setIsOpen } = useContext(OpenModalContext)
  const prevStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const handleDirectMessage = async (text) => {
  try {
    setIsLoading(true);
    const res = await fetch(API_ENDPOINTS.SEND_MESSAGE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        sender: CURRENT_USER_ID,
        receiver: info.id, // seller id
        text,
      }),
    });

    if (!res.ok) throw new Error("Failed");
    setStep(4)

    // After sending, go to chat
    // navigate("/chat", {
    //   state: { openWithUserId: info.id },
    // });

  } catch (err) {
    console.error("Error starting conversation");
  }finally{
    setIsLoading(false);
  }
};
  const renderStep = ()=>{
    switch (step) {
      case 1:
        return(
          <ContactSellerModal
            onClose={()=>setIsOpen(false)}
            onNextOffer={()=>setStep(2)}
            onNextMessage={()=>setStep(3)}
            seller={info}
            negotiable={negotiable}
          />
        )
        case 2:
        return(
          <OfferModal
            isLoading={loading}
            onClose={()=>setIsOpen(false)}
            onSubmit={(amount)=>{
              const text = `I am making an offer of ₦${formatPrice(amount, 0)} for your ad:${title}`
              handleDirectMessage(text)
            }}
            onBack={prevStep}
            price={price}
          />
        )
        case 3:
        return(
          <MessageSellerModal
            name={name}
            onClose={()=>setIsOpen(false)}
            onBack={()=>setStep(1)}
            onSubmit={(text)=>{
              handleDirectMessage(text)
            }}
            isLoading={loading}
          />
        )
        case 4:
        return(
          <OfferSentModal
            onClose={()=>setIsOpen(false)}
            onBack={prevStep}
          />
        )
        

    }
  }
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {renderStep()}
    </div>
  )
}

export default ContactSellerFlow
