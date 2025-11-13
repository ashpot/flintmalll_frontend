import React from 'react';
import { useNavigate } from 'react-router-dom';
import submitIcon from '../../assets/images/submitIcon.png';

const Step_SubmissionSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white max-w-xl mx-auto my-10 p-6 sm:p-10 rounded-2xl shadow-lg text-center">
      
      <div className="mb-6 flex items-center justify-center">
        <img src={submitIcon} alt="Submission Successful" className="" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-primary mb-3">
        Your Ad Has Been Submitted!
      </h2>

      {/* Subtext */}
      <p className="text-[#666666] w-[90%] mx-auto font-medium text-lg mb-6">
        Your ad is currently under review and will be live within{' '}
        <span className="font-bold">30–60 minutes</span> once approved.
      </p>

      {/* Info Box */}
      <div className="bg-[#F7F7F7] p-4 rounded-xl text-left space-y-2 mb-8">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-primaryDull rounded-full mt-1.5 flex-shrink-0"></span>
          <p className="text-lg font-medium text-[#666666]">You’ll get a notification once your ad is published.</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-primaryDull rounded-full mt-1.5 flex-shrink-0"></span>
          <p className="text-lg font-medium text-[#666666]">If any issues are found, we’ll reach out to you.</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <button
          onClick={() => navigate('/adverts')} // Navigate to My Ads page
          className="w-full bg-secondary text-white text-lg border font-bold py-3 rounded-xl hover:bg-secondaryLight transition-colors"
        >
          View My Ads
        </button>
        <button
          onClick={() => navigate('/post-ad')} // Navigate back to start a new ad
          className="w-full bg-[#E7ECF2] border border-[#CFD9E4] text-primary text-lg font-bold py-3 rounded-xl hover:bg-[#CFD9E4] transition-colors"
        >
          Post Another Ad
        </button>
      </div>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate('/')} // Navigate to Home page
        className="w-full bg-white border border-[#285386] text-primary text-lg font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-colors"
      >
        Back to Home
      </button>

    </div>
  );
};

export default Step_SubmissionSuccess;