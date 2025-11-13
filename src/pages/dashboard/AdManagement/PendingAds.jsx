import React from 'react';

const PendingAds = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">Pending Approval</h3>
      <p className="text-gray-600">Ads waiting for moderation approval</p>
      
      {/* Placeholder for ad card */}
      <div className="mt-6 border p-4 rounded-lg">
        <h4 className="font-semibold">iPhone 14 Pro Max - 256GB Space Black</h4>
        <p className="text-sm text-gray-500">Submitted: 21/09/2025 | Seller: Chidi Okafor</p>
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg">Approve</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg">Reject</button>
        </div>
      </div>
    </div>
  );
}
export default PendingAds;