import React from 'react'
import ProfileHeader from '../../components/common/profileHeader'
import AccountOverview from '../../components/common/AccountOverview'
import QuickActions from '../../components/common/QuickActions'
import Navbar from '../../components/layout/Navbar'
import ContactDetails from '../../components/common/ContactDetails'

const PersonalProfile = ({ user }) => {
  return (
    <div className='bg-[#F7F7F7] min-h-screen'>
      <Navbar rightContent={
				<div className='text-[#1E1E1E] text-lg font-medium space-x-6 '>
					<a href=""className='cursor-pointer hover:text-secondary'>Browse</a>
					<a href="" className='cursor-pointer hover:text-secondary'>Help</a>
				</div>
			}/>

      <main className="p-8">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* 3. Pass the user prop down */}
          <ProfileHeader user={user} />

          {/* 4. ADD THE CONTACTDETAILS COMPONENT HERE */}
          <ContactDetails 
            email={user.email}
            phone={user.phone}
            address={user.address}
          />
          
          {/* 5. Pass the stats prop down */}
          <AccountOverview stats={user.stats} />
          
          <QuickActions />

        </div>
      </main>

      <footer className='w-[80%] md:max-w-5xl mx-auto pt-9 pb-6 md:flex md:justify-between '>
        <p className='font-medium md:text-lg text-sm mt-5'>&copy; 2025 Flintmall. <span className='ml-2'>All Rights Reserved</span></p>
        <div className='font-medium md:text-lg text-sm mt-5 space-x-5'>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>
      </footer>
      
    </div>
  )
}

export default PersonalProfile
