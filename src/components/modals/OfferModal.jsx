import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const OfferModal = ({ onClose, onSubmit, onBack }) => {
  const [amount, setAmount] = useState("");

  const quickPrices = ["1,200,000", "1,000,000", "950,000"];

  return (
      <div className="relative bg-white rounded-3xl w-[90%] max-w-xl p-8">

        {/* Close */}
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

        <h2 className="text-2xl font-semibold text-center mb-6">
          Make Offer
        </h2>

        <hr className="mb-6" />

        {/* Quick Prices */}
        <div className="flex justify-between gap-4 mb-6">
          {quickPrices.map((price, i) => (
            <button
              key={i}
              onClick={() => setAmount(price.replace(/,/g, ""))}
              className="flex-1 bg-gray-200 rounded-full py-3 font-medium hover:bg-gray-300 transition"
            >
              {price}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-400 mb-6">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span>or enter your price below</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        {/* Input */}
        <div className="flex mb-6 border rounded-xl overflow-hidden">
          <div className="bg-gray-200 px-4 flex items-center">₦</div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="flex-1 px-4 py-3 outline-none"
          />
        </div>

        {/* Submit */}
        <button
          disabled={!amount}
          onClick={() => onSubmit(amount)}
          className={`w-full text-white py-4 rounded-2xl font-medium transition
            ${!amount ? 'bg-blue-900/60' : 'bg-blue-900 hover:bg-blue-800'}`
          }
        >
          Make Offer
        </button>
      </div>
  );
};

export default OfferModal;
