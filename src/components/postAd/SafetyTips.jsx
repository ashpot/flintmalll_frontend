import React from 'react';
import { BsPersonCheck } from 'react-icons/bs';
import { FaShieldAlt } from "react-icons/fa";
import { PiMoneyWavyFill } from "react-icons/pi";
import { BiSolidPhone } from "react-icons/bi";

const SafetyTips = () => {
  return (
    <div className=" mt-12 bg-primary text-white p-8 pb-10 rounded-2xl shadow-lg">
      <h2 className="text-center text-[28px] font-bold mb-1">Safety Tips</h2>
      <p className="text-center font-medium text-lg text-[#CFD9E4] mb-9">Your safety is our priority. Follow these guidelines for secure transactions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="flex items-start space-x-4">
          <FaShieldAlt size={40} className="flex-shrink-0 mt-1 bg-primaryLight p-2 rounded-2xl" />
          <div>
            <h3 className="font-bold text-lg mb-2">Meet in Public Places</h3>
            <p className="text-base font-medium text-primaryDull">Always meet buyers in well-lit, public locations. Consider meeting at shopping centers.</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <BsPersonCheck size={40} className="flex-shrink-0 mt-1 bg-primaryLight p-2 rounded-2xl" />
          <div>
            <h3 className="font-bold text-lg mb-2">Verify Buyer Identity</h3>
            <p className="text-base font-medium text-primaryDull">Check buyer profiles and ratings. Use the chat platform before meeting in person.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <PiMoneyWavyFill size={40} className="flex-shrink-0 mt-1 bg-primaryLight p-2 rounded-2xl" />
          <div>
            <h3 className="font-bold text-lg mb-2">Cash Transactions</h3>
            <p className="text-base font-medium text-primaryDull">Use cash payments or verified bank transfers. Be wary of checks or unusual payment methods.</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <BiSolidPhone size={40} className="flex-shrink-0 mt-1 bg-primaryLight p-2 rounded-2xl" />
          <div>
            <h3 className="font-bold text-lg mb-2">Stay Connected</h3>
            <p className="text-base font-medium text-primaryDull">Keep friends or family informed about your meeting's location and details if something feels wrong.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyTips;