import React from 'react';
import PersonalProfile from './PersonalProfile';
import BusinessProfile from './BusinessProfile';
import profilePhoto from '../../assets/images/profilePhoto.png';

const ProfilePage = () => {
  const currentUser = {
    // --- BASIC INFO ---
    accountType: 'business',
    name: 'Bruno Benson',
    subtitle: 'Active marketplace member',
    avatarUrl: { profilePhoto }, 
    notifications: 0,
    messages: 0,

    // --- CONTACT INFO (for personal) ---
    email: 'brunobenson@mail.com',
    phone: '+234 801 234 5678',
    address: '33 Seun Street, Lagos',

    // --- BUSINESS INFO (for business) ---
    socials: 'Instagram - @brunobenson',
    website: 'www.bruno.com',

    // --- STATS INFO ---
    stats: {
      activeAds: 4,
      totalViews: '300',
      memberSince: 2025,
    },
  };

  if (!currentUser) {
    return <div>Loading...</div>; 
  }

  if (currentUser.accountType === 'personal') {
    return <BusinessProfile user={currentUser} />;
  } else {
    return <PersonalProfile user={currentUser} />;
  }
}

export default ProfilePage;