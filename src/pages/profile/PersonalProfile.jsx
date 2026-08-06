import React from 'react'
import ProfileHeader from "../../components/common/ProfileHeader";
import AccountOverview from '../../components/common/AccountOverview'
import QuickActions from '../../components/common/QuickActions'
import Navbar from '../../components/layout/Navbar'
import ContactDetails from '../../components/common/ContactDetails'
import SmallFooter from '../../components/layout/SmallFooter';



const PersonalProfile = ({user}) => {

  return (
    <div className='bg-[#F7F7F7] min-h-screen'>
      <title>Flintmall - Account Settings</title>
      <Navbar rightContent={
				<div className='text-[#1E1E1E] text-lg font-medium space-x-6 '>
					<a href=""className='cursor-pointer hover:text-secondary'>Browse</a>
					<a href="" className='cursor-pointer hover:text-secondary'>Help</a>
				</div>
			}/>

      <main className="p-8 px-4">
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
          <AccountOverview /*stats={user.stats}*/ />
          
          
          <QuickActions />

        </div>
      </main>

      <SmallFooter />
      
    </div>
  )
}

export default PersonalProfile
