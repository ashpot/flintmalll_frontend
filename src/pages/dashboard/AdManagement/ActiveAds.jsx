import React from 'react';

const ActiveAds = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">Active Advertisements</h3>
      
      {/* Placeholder for ads table */}
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">Ad Title</th>
              <th className="py-2 px-4 text-left">Seller</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4">MacBook Pro M2 - 512GB</td>
              <td className="py-3 px-4">Galaxy Stores</td>
              <td className="py-3 px-4">₦850,000</td>
              <td className="py-3 px-4">
                <button className="px-3 py-1 bg-red-600 text-white rounded-lg">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ActiveAds;