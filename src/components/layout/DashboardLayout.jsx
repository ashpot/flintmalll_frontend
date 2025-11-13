import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';        
import DashboardTopNav from '../dashboard/DashboardTopNav'; 

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-[#F7F7F7]"> 

      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">

        <DashboardTopNav />

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <Outlet /> 
        </main>
        
      </div>
    </div>
  );
}
export default DashboardLayout;