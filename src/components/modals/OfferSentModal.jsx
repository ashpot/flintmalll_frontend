import React from 'react'
import { IoClose } from 'react-icons/io5'
import offer_sent from "../../assets/images/offer_sent.png"
import { IoIosArrowBack } from 'react-icons/io'

{/* todo: add button to navigate to chat page of the recent sent offer */}
const OfferSentModal = ({onClose, onBack}) => {
  return (
    <div className="relative bg-white rounded-3xl w-[90%] max-w-2xl p-10 text-center">

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-300 hover:text-gray-500"
        >
          <IoClose size={28} />
        </button>
        <button
          onClick={onBack}
          className="absolute top-6 left-6 text-gray-300 hover:text-gray-500"
        >
          <IoIosArrowBack size={28} />
        </button>

        <div className="w-60 mx-auto">
          <img src={offer_sent} alt="smiley face" />
        </div>

        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Message Sent
        </h2>

        <p className="text-lg text-gray-500">
          Vendor will reach out to you soon.
        </p>
      </div>
  )
}

export default OfferSentModal
