import React, { useContext, useState } from 'react'
import ContactSellerModal from '../../components/modals/ContactSellerModal'
import OfferModal from '../../components/modals/OfferModal'
import OfferSentModal from '../../components/modals/OfferSentModal'
import { OpenModalContext } from './Context'

const ContactSellerFlow = ({info}) => {
  const [step, setStep] = useState(1);
  const { setIsOpen } = useContext(OpenModalContext)
  const prevStep = () => {
    if (step > 1 && step <= 3) {
      setStep(step - 1);
    }
  };
  const renderStep = ()=>{
    switch (step) {
      case 1:
        return(
          <ContactSellerModal
            onClose={()=>setIsOpen(false)}
            onNext={()=>setStep(2)}
            seller={info}
          />
        )
        case 2:
        return(
          <OfferModal
            onClose={()=>setIsOpen(false)}
            onSubmit={()=>setStep(3)}
            onBack={prevStep}
          />
        )
        case 3:
        return(
          <OfferSentModal
            onClose={()=>setIsOpen(false)}
            onBack={prevStep}
          />
        )
    
      default:
        break;
    }
  }
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {renderStep()}
    </div>
  )
}

export default ContactSellerFlow
