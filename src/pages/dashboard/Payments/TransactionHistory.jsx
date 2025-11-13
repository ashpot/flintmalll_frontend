import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LuSearch } from 'react-icons/lu';

const transactionData = [
  {
    id: 'TXN001',
    date: '27/09/2025',
    time: '12:15 PM',
    user: 'Chidi Okafor',
    item: 'iPhone 14 Pro Max',
    type: 'Enhanced (14 days)',
    amount: '₦4,000',
    method: 'Bank TRF',
    status: 'Completed',
  },
  {
    id: 'TXN003',
    date: '27/09/2025',
    time: '12:03 PM',
    user: 'Fashion Forward',
    item: 'Designer Handbag',
    type: 'Enhanced (30 days)',
    amount: '₦7,000',
    method: 'Debit Card',
    status: 'Failed',
  },
  {
    id: 'TXN004',
    date: '27/09/2025',
    time: '11:41 AM',
    user: 'Galaxy Stored',
    item: 'MacBook Pro M2',
    type: 'Premium (14 days)',
    amount: '₦15,000',
    method: 'Bank TRF',
    status: 'Pending',
  },
];

export default function TransactionHistory() {
  const navigate = useNavigate();
  
  const handleViewAll = () => {
    navigate('/dashboard'); 
  };

  const getStatusClasses = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-[#E9FAF1] text-[#0DAC4F] border border-[#7EE4A8] p-2 rounded-lg text-xs';
      case 'pending':
        return 'bg-[#FDF4E1] text-[#C99507] border border-[#FEEAB8] p-2 rounded-lg text-xs';
      case 'failed':
        return 'bg-[#FFEAEA] text-[#FF3030] border border-[#FF9797] p-2 rounded-lg text-xs';
      default:
        return 'bg-gray-100 text-gray-700 border border-[#666666] p-2 rounded-lg text-xs';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-[#E5E5E5] shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-2xl text-[#1E1E1E] font-semibold">Transaction History</h3>
          <p className='text-lg font-medium text-[#666666]'>All payment transactions and promotional purchases</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              className="pl-4 pr-4 py-3 w-60 rounded-xl font-medium text-base text-[#666666] placeholder:text-[#666666] placeholder:text-base placeholder:font-medium border border-[#E5E5E5] bg-[#F7F7F7] focus:outline-none"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B7B7B7]">
              <LuSearch size={20} />
            </span>
          </div>
          <select className="px-4 py-3 rounded-xl border text-[#1E1E1E] text-base font-medium border-[#E5E5E5] bg-[#F7F7F7]">
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
        </div>
      </div>
      
      {/* Transaction Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className='border-b border-[#B7B7B7]'>
              <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">TXN ID</th>
              <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">Date & Time</th>
              <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">User</th>
              <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">Type</th>
              <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">Amount</th>
              <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">Method</th>
              <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">Status</th>
            </tr>
          </thead>
  
          <tbody>
            {transactionData.map((item) => (
              <tr key={item.id} className="border-b border-[#B7B7B7]">
                <td className="py-3 px-2 text-base font-semibold text-[#1E1E1E]">{item.id}</td>
                <td className="py-3 px-2 text-base font-semibold text-[#1E1E1E]">
                  {item.date} <br/> 
                  <span className="text-[#666666] text-sm">{item.time}</span>
                </td>
                <td className="py-3 px-2 text-base font-semibold text-[#1E1E1E]">
                  {item.user} <br/> 
                  <span className="text-[#666666] text-sm">{item.item}</span>
                </td>
                <td className="py-3 px-2 text-base font-semibold text-[#1E1E1E]">{item.type}</td>
                <td className="py-3 px-2 text-base font-semibold text-[#285386]">{item.amount}</td>
                <td className="py-3 px-2 text-base font-semibold text-[#1E1E1E]">{item.method}</td>
                <td className="py-3 px-2">
                  <span className={getStatusClasses(item.status)}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
      <div className="p-4 text-center mt-5">
        <button onClick={handleViewAll} className="text-primaryLight font-medium text-lg border border-primaryInput p-3 rounded-xl hover:bg-[#E7ECF2]">View all Transactions</button>
      </div>
    </div>
  );
}