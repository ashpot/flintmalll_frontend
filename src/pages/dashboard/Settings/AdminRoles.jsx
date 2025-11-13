// import React from 'react';
// import { LuPlus, LuCheck } from 'react-icons/lu';

// const PermissionCard = ({ role, permissions, count, color }) => (
//   <div className="bg-white p-6 rounded-lg shadow-sm border">
//     <div className="flex justify-between items-center mb-4">
//       <h4 className="text-xl font-semibold">{role}</h4>
//       <span className={`text-sm font-medium px-3 py-1 rounded-full ${color.bg} ${color.text} border ${color.border}`}>
//         {count} Permissions
//       </span>
//     </div>
//     <ul className="space-y-2 mb-6">
//       {permissions.map((perm, i) => (
//         <li key={i} className="flex items-center gap-2 text-gray-700">
//           <LuCheck size={18} className="text-green-500" />
//           <span>{perm}</span>
//         </li>
//       ))}
//     </ul>
//     <button className="w-full py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100">
//       Edit Permissions
//     </button>
//   </div>
// );

// export default function AdminRoles() {
//   const roles = [
//     { name: "Super Admin", perms: "8", color: { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-200"} },
//     { name: "Moderator", perms: "5", color: { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200"} },
//     { name: "Support", perms: "4", color: { bg: "bg-green-100", text: "text-green-700", border: "border-green-200"} },
//     { name: "Finance", perms: "5", color: { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-200"} },
//   ];
//   const permData = {
//     "Super Admin": ["Dashboard Access", "User Management", "Ad Management", "Payments & Promotions", "Reports & Analytics", "Support & Safety", "Settings & Roles", "System Configuration"],
//     "Moderator": ["Dashboard Access", "User Management", "Ad Management", "Support & Safety", "Reports & Analytics (View Only)"],
//     "Support": ["Dashboard Access", "Support & Safety", "User Management (View Only)", "Reports & Analytics (View Only)"],
//     "Finance": ["Dashboard Access", "Payments & Promotions", "Reports & Analytics", "User Management (View Only)"]
//   };

//   return (
//     <div className="space-y-8">
      
//       <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5] ">
//         <div className="flex justify-between items-center mb-4">
//           <div>
//             <h3 className="text-2xl text-[#1E1E1E] font-semibold">Role Management</h3>
//             <p className="text-[#666666] font-medium text-base">Configure admin roles and permissions</p>
//           </div>
//           <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondaryLight text-white rounded-lg">
//             <LuPlus size={18} />
//             Add Admin
//           </button>
//         </div>
        
//         <div className="overflow-x-auto">
//           <table className="min-w-full">
//             <thead className="bg-gray-50">
//               <tr className="border-b">
//                 <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">Admin</th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">Role</th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">Permissions</th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">Last Login</th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b">
//                 <td className="py-3 px-4">John Ade<br/><span className="text-xs text-gray-500">john@flintmall.com</span></td>
//                 <td className="py-3 px-4"><span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700">Super Admin</span></td>
//                 <td className="py-3 px-4">All Permissions</td>
//                 <td className="py-3 px-4"><span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">Active</span></td>
//                 <td className="py-3 px-4">6/20/2025<br/><span className="text-xs text-gray-500">2:30:00 PM</span></td>
//                 <td className="py-3 px-4"><button className="px-4 py-1 border rounded-lg">Edit</button></td>
//               </tr>
//               <tr className="border-b">
//                 <td className="py-3 px-4">Sarah Wilson<br/><span className="text-xs text-gray-500">sarah@flintmall.com</span></td>
//                 <td className="py-3 px-4"><span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">Moderator</span></td>
//                 <td className="py-3 px-4">Ad Management, User Management, Support</td>
//                 <td className="py-3 px-4"><span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">Active</span></td>
//                 <td className="py-3 px-4">6/20/2025<br/><span className="text-xs text-gray-500">2:30:00 PM</span></td>
//                 <td className="py-3 px-4 flex gap-2"><button className="px-4 py-1 border rounded-lg">Edit</button><button className="px-4 py-1 bg-red-600 text-white rounded-lg">Remove</button></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       <div className='bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]'>
//         <h3 className="text-2xl text-[#1E1E1E] font-semibold">Role Permissions</h3>
//         <p className="text-[#666666] font-medium text-base mb-5">Define what each role can access and modify</p>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <PermissionCard 
//             role="Super Admin" 
//             permissions={permData["Super Admin"]}
//             count="8"
//             color={roles[0].color}
//           />
//           <PermissionCard 
//             role="Moderator" 
//             permissions={permData["Moderator"]}
//             count="5"
//             color={roles[1].color}
//           />
//           <PermissionCard 
//             role="Support" 
//             permissions={permData["Support"]}
//             count="4"
//             color={roles[2].color}
//           />
//           <PermissionCard 
//             role="Finance" 
//             permissions={permData["Finance"]}
//             count="5"
//             color={roles[3].color}
//           />
//         </div>
//       </div>
      
//     </div>
//   );
// }


import React from 'react';
import { LuPlus, LuDot } from 'react-icons/lu';

const PermissionCard = ({ role, permissions, count, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]">
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-lg font-bold text-[#1E1E1E]">{role}</h4>
      <span className={`text-sm font-medium px-3 py-1 rounded-lg ${color.bg} ${color.text} border ${color.border}`}>
        {count} Permissions
      </span>
    </div>
    <ul className="space-y-2 mb-6">
      {permissions.map((perm, i) => (
        <li key={i} className="flex items-center gap-1 text-[#1E1E1E] text-base font-medium">
          <LuDot size={38} className="text-[#0DAC4F]" />
          <span>{perm}</span>
        </li>
      ))}
    </ul>
    <button className="w-full py-2 px-4 rounded-lg border border-[#B7B7B7] text-[#1E1E1E] font-medium text-base hover:bg-gray-100">
      Edit Permissions
    </button>
  </div>
);

export default function AdminRoles() {
  const roles = [
    { name: "Super Admin", perms: "8", color: { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-200"} },
    { name: "Moderator", perms: "5", color: { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200"} },
    { name: "Support", perms: "4", color: { bg: "bg-green-100", text: "text-green-700", border: "border-green-200"} },
    { name: "Finance", perms: "5", color: { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-200"} },
  ];
  
  // Permission details
  const permData = {
    "Super Admin": ["Dashboard Access", "User Management", "Ad Management", "Payments & Promotions", "Reports & Analytics", "Support & Safety", "Settings & Roles", "System Configuration"],
    "Moderator": ["Dashboard Access", "User Management", "Ad Management", "Support & Safety", "Reports & Analytics (View Only)"],
    "Support": ["Dashboard Access", "Support & Safety", "User Management (View Only)", "Reports &Analytics (View Only)"],
    "Finance": ["Dashboard Access", "Payments & Promotions", "Reports & Analytics", "User Management (View Only)"]
  };

  return (
    <div className="space-y-8">
      
      {/* Role Management Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-2xl text-[#1E1E1E] font-semibold">Role Management</h3>
            <p className="text-[#666666] font-medium text-base">Configure admin roles and permissions</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondaryLight text-white rounded-lg">
            <LuPlus size={18} />
            Add Admin
          </button>
        </div>
        
        {/* Admin Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-[#B7B7B7]">
                <th className="py-3 px-4 text-left text-base font-semibold text-[#1E1E1E]">Admin</th>
                <th className="py-3 px-4 text-left text-base font-semibold text-[#1E1E1E]">Role</th>
                <th className="py-3 px-4 text-left text-base font-semibold text-[#1E1E1E]">Permissions</th>
                <th className="py-3 px-4 text-left text-base font-semibold text-[#1E1E1E]">Status</th>
                <th className="py-3 px-4 text-left text-base font-semibold text-[#1E1E1E]">Last Login</th>
                <th className="py-3 px-4 text-left text-base font-semibold text-[#1E1E1E]">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#B7B7B7] hover:bg-gray-50">
                <td className="py-3 px-4">
                  <p className="text-base font-semibold text-[#1E1E1E] mb-1">John Ade</p>
                  <span className="text-base font-medium text-[#666666]">john@flintmall.com</span>
                </td>
                <td className="py-3 ">
                  <span className="text-xs px-2 py-1 rounded-lg bg-purple-100 text-purple-700 border border-purple-200">Super Admin</span>
                </td>
                <td className="py-3 px-4 w-48 text-base font-medium text-[#1E1E1E]">All Permissions</td>
                <td className="py-3 px-4">
                  <span className="text-xs px-2 py-1 rounded-lg bg-[#E9FAF1] text-[#0DAC4F] border border-[#7EE4A8]">Active</span>
                </td>
                <td className="py-3 px-4 w-36">
                  <p className="text-base font-medium text-[#1E1E1E] mb-1">6/20/2025</p>
                  <span className="text-base font-medium text-[#666666]">2:30:00 PM</span>
                </td>
                <td className="py-3 px-4">
                  <button className="px-4 py-1 border border-[#B7B7B7] rounded-lg text-[#1E1E1E] font-medium text-base hover:bg-gray-100">Edit</button>
                </td>
              </tr>
              
              <tr className="border-b border-[#B7B7B7] hover:bg-gray-50">
                <td className="py-3 px-4">
                  <p className="text-base font-semibold text-[#1E1E1E] mb-1">Sarah Wilson</p>
                  <span className="text-base font-medium text-[#666666]">sarah@flintmall.com</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-xs px-2 py-1 rounded-lg bg-blue-100 text-blue-700 border border-blue-200">Moderator</span>
                </td>
                <td className="py-3 px-4 text-base font-medium text-[#1E1E1E]">Ad Management, User Management...</td>
                <td className="py-3 px-4">
                  <span className="text-xs px-2 py-1 rounded-lg bg-[#E9FAF1] text-[#0DAC4F] border border-[#7EE4A8]">Active</span>
                </td>
                <td className="py-3 px-4">
                  <p className="text-base font-medium text-[#1E1E1E] mb-1">6/20/2025</p>
                  <span className="text-base font-medium text-[#666666]">2:30:00 PM</span>
                </td>
                <td className="py-3 px-4 flex gap-2">
                  <button className="px-4 py-1 border border-[#B7B7B7] rounded-lg text-[#1E1E1E] font-medium text-base hover:bg-gray-100">Edit</button>
                 
                  <button className="px-4 py-1 border border-[#FF9797] rounded-lg bg-[#FFEAEA] text-[#FF3030] font-medium text-base hover:bg-red-100">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Role Permissions Card */}
      <div className='bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]'>
        <h3 className="text-2xl text-[#1E1E1E] font-semibold">Role Permissions</h3>
        <p className="text-[#666666] font-medium text-base mb-5">Define what each role can access and modify</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PermissionCard 
            role="Super Admin" 
            permissions={permData["Super Admin"]}
            count="8"
            color={roles[0].color}
          />
          <PermissionCard 
            role="Moderator" 
            permissions={permData["Moderator"]}
            count="5"
            color={roles[1].color}
          />
          <PermissionCard 
            role="Support" 
            permissions={permData["Support"]}
            count="4"
            color={roles[2].color}
          />
          <PermissionCard 
            role="Finance" 
            permissions={permData["Finance"]}
            count="5"
            color={roles[3].color}
          />
        </div>
      </div>
      
    </div>
  );
}