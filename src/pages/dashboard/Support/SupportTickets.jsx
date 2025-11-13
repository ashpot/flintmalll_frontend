// import React from 'react';
// import { LuSearch } from 'react-icons/lu';

// export default function SupportTickets() {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]">
      
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h3 className="text-2xl text-[#1E1E1E] font-semibold">User Complaints & Support Tickets</h3>
//           <p className="text-lg font-medium text-[#666666]">Manage user-reported issues and support requests</p>
//         </div>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search here"
//               className="pl-4 pr-4 py-3 w-60 rounded-xl font-medium text-base text-[#666666] placeholder:text-[#666666] placeholder:text-base placeholder:font-medium border border-[#E5E5E5] bg-[#F7F7F7] focus:outline-none"
//             />
//             <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B7B7B7]">
//               <LuSearch size={20} />
//             </span>
//           </div>
//           <select className="px-4 py-3 rounded-xl border text-[#1E1E1E] text-base font-medium border-[#E5E5E5] bg-[#F7F7F7]">
//             <option>All Status</option>
//             <option>Open</option>
//             <option>In Progress</option>
//             <option>Resolved</option>
//           </select>
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full">
//           <thead>
//             <tr className="border-b border-[#B7B7B7]">
//               <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">Ticket ID</th>
//               <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">User</th>
//               <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">Type</th>
//               <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">Subject</th>
//               <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">Priority</th>
//               <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">Status</th>
//               <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">Assigned to</th>
//               <th className="py-3 px-2 text-left text-base font-semibold text-[#1E1E1E]">Actions</th>
//             </tr>
//           </thead>
          
//           <tbody>
//             {transactionData.map((item) => (
//               <tr key={item.id} className="border-b border-[#B7B7B7]">
//                 <td className="py-3 px-2 text-base font-semibold text-[#1E1E1E]">{item.id}</td>
//                 <td className="py-3 px-2 text-base font-semibold text-[#1E1E1E]">
//                   {item.date} <br/> 
//                   <span className="text-gray-500 text-sm">{item.time}</span>
//                 </td>
//                 <td className="py-3 px-2 text-base font-semibold text-[#1E1E1E]">
//                   {item.user} <br/> 
//                   <span className="text-[#666666] text-sm">{item.item}</span>
//                 </td>
//                 <td className="py-3 px-2 text-base font-semibold text-[#1E1E1E]">{item.type}</td>
//                 <td className="py-3 px-2 text-base font-semibold text-[#285386]">{item.amount}</td>
//                 <td className="py-3 px-2 text-base font-semibold text-[#1E1E1E]">{item.method}</td>
//                 <td className="py-3 px-2">
//                   <span className={getStatusClasses(item.status)}>
//                     {item.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { LuSearch } from 'react-icons/lu';

const supportTicketsData = [
  {
    id: 'COMP001',
    user: 'Adebayo Johnson',
    userType: 'Fraud',
    type: 'Scam Report',
    subject: 'Fake iPhone seller - took payment but...',
    priority: 'High',
    status: 'Open',
    assignedTo: 'Sarah',
  },
  {
    id: 'COMP002',
    user: 'Fatima Hassan',
    userType: 'Content',
    type: 'Ad Violation',
    subject: 'Inappropriate content in fashion category',
    priority: 'Medium',
    status: 'In Progress',
    assignedTo: 'Travis',
  },
  {
    id: 'COMP003',
    user: 'Chukwu Motors',
    userType: 'Technical',
    type: 'Account Issue',
    subject: 'Cannot post ads - verification problem...',
    priority: 'Medium',
    status: 'Resolved',
    assignedTo: 'John',
  },
];

export default function SupportTickets() {

  const getPriorityClasses = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-[#FFEAEA] border border-[#FF9797] text-[#FF3030]';
      case 'medium':
        return 'bg-[#FDF4E1] border border-[#FEEAB8] text-[#C99507]';
      case 'low':
        return 'bg-[#E9FAF1] border border-[#7EE4A8] text-[#0DAC4F]';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusClasses = (status) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'bg-[#FFEAEA] border border-[#FF9797] text-[#FF3030]';
      case 'in progress':
        return 'bg-[#FDF4E1] border border-[#FEEAB8] text-[#C99507]';
      case 'resolved':
        return 'bg-[#E9FAF1] border border-[#7EE4A8] text-[#0DAC4F]';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };


  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]">
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl text-[#1E1E1E] font-semibold">User Complaints & Support Tickets</h3>
          <p className="text-lg font-medium text-[#666666]">Manage user-reported issues and support requests</p>
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
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-[#B7B7B7]">
              <th className="py-3 px-2 text-left text-sm font-semibold text-[#1E1E1E]">Ticket ID</th>
              <th className="py-3 px-2 text-left text-sm font-semibold text-[#1E1E1E]">User</th>
              <th className="py-3 px-2 text-left text-sm font-semibold text-[#1E1E1E]">Type</th>
              <th className="py-3 px-2 text-left text-sm font-semibold text-[#1E1E1E]">Subject</th>
              <th className="py-3 px-2 text-left text-sm font-semibold text-[#1E1E1E]">Priority</th>
              <th className="py-3 px-2 text-left text-sm font-semibold text-[#1E1E1E]">Status</th>
              <th className="py-3 px-2 text-left text-sm font-semibold text-[#1E1E1E]">Assigned to</th>
              <th className="py-3 px-2 text-left text-sm font-semibold text-[#1E1E1E]">Actions</th>
            </tr>
          </thead>
          
          <tbody>
            {supportTicketsData.map((item) => (
              <tr key={item.id} className="border-b border-[#B7B7B7]">
                <td className="py-4 px-2 text-sm font-semibold text-[#1E1E1E]">{item.id}</td>
                <td className="py-4 px-2 text-sm font-semibold text-[#1E1E1E]">
                  {item.user} <br/> 
                  <span className="text-[#666666] text-sm font-medium">{item.userType}</span>
                </td>
                <td className="py-4 px-2 text-sm font-medium text-[#1E1E1E]">{item.type}</td>
                <td className="py-4 px-2 w-40 text-sm font-medium text-[#1E1E1E]">{item.subject}</td>
                <td className="py-4 px-2">
                  <span className={`text-xs px-2 py-1 rounded-lg font-medium ${getPriorityClasses(item.priority)}`}>
                    {item.priority}
                  </span>
                </td>
                <td className="py-4 px-2">
                  <span className={`text-xs px-2 py-1 rounded-lg font-medium ${getStatusClasses(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-2 text-sm font-medium text-[#1E1E1E]">{item.assignedTo}</td>
                <td className="py-4 px-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-base font-semibold hover:bg-gray-100">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}