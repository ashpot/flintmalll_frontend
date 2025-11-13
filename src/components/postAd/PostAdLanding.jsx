import React from 'react';
import Step1_Category from './Step1Category';
import SellingTips from './SellingTips';
import SafetyTips from './SafetyTips';
import Faq from './Faq';
import NeedHelp from './NeedHelp';

// This component just assembles all the parts for Step 1
// It receives the `onNext` prop and passes it down to the form
const PostAdLanding = ({ onNext }) => {
  return (
    <div>
      {/* The form is in its own white box */}
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg">
        <Step1_Category onNext={onNext} />
      </div>

      {/* The rest of the content appears below */}
      <SellingTips />
      <SafetyTips />
      <Faq />
      <NeedHelp />
    </div>
  );
};

export default PostAdLanding;