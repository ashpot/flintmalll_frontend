import React from 'react';

const ReportedAds = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">Reported Advertisements</h3>
      <p className="text-gray-600">Ads flagged by users for review</p>
      
      {/* Placeholder for reported card */}
      <div className="mt-6 border border-red-300 bg-red-50 p-4 rounded-lg">
        <h4 className="font-semibold">iPhone 13 - Great Deal!</h4>
        <p className="text-sm text-red-700">Report Reason: Suspected Scam</p>
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 bg-gray-700 text-white rounded-lg">Review</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg">Remove Ad</button>
        </div>
      </div>
    </div>
  );
}
export default ReportedAds;