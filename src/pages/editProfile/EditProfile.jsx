import React, { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import SmallFooter from '../../components/layout/SmallFooter';
import EditPersonal from '../../components/layout/EditPersonal';
import EditBusiness from '../../components/layout/EditBusiness';

/*
this components renders handles rendering of either the EditPersonal or EditBusiness
 depends on the current user type info
*/

const EditProfile = () => {
  /*fetches data gotten from the backend api so we can know whether
  the user is a personal or business account */
  const currentUser = JSON.parse(localStorage.getItem("currentUser")); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='bg-[#F7F7F7]'>
      <title>Flintmall - Edit Profile</title>
      <Navbar rightContent={
        <div className='text-[#1E1E1E] text-lg font-medium space-x-6'>
					<a href="#"className='cursor-pointer hover:text-secondary'>Browse</a>
					<a href="#" className='cursor-pointer hover:text-secondary'>Help</a>
				</div>
      } />
      <main className='min-h-screen max-w-6xl mx-auto space-y-6 py-10 pt-8'>
        {currentUser.user.type === 'Individual' ? <EditPersonal user={currentUser.user} /> : <EditBusiness user={currentUser.user} />}
      </main>
      <SmallFooter />
    </div>
  )
}

export default EditProfile
