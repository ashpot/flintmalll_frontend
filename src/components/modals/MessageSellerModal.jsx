import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { cn } from "../../lib/Utils";

const MessageSellerModal = ({ onClose, onSubmit, onBack, isLoading, name }) => {
  const [text, setText] = useState("");
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
          Message {name.firstName} {name.lastName}
        </h2>

        <hr className="mb-6" />


        {/* textarea for message */}
        <div className="flex mb-6 overflow-hidden">
          <textarea
                rows="2"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a message"
                className={cn("w-full border border-[#CFD9E4] text-[#666666] sm:text-lg text-base font-semibold sm:rounded-2xl resize-none capitalize",
                                "outline-none rounded-xl p-3 sm:p-3 px-1.5 py-2"
                )}
            /> 
        </div>

        <button
          disabled={!text}
          onClick={() => onSubmit(text)}
          className={`w-full text-white py-4 rounded-2xl font-medium transition
            ${!text ? 'bg-blue-900/60' : 'bg-blue-900 hover:bg-blue-800'}`
          }
        >
          {isLoading ? (
            <div className="flex justify-center items-center gap-2">
              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                Sending...
            </div>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
  );
};

export default MessageSellerModal;
