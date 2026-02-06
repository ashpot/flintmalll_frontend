import React from 'react';
import PersonalProfile from './PersonalProfile';
import BusinessProfile from './BusinessProfile';
import profilePhoto from '../../assets/images/profilePhoto.png';

const ProfilePage = () => {
  const data = JSON.parse(localStorage.getItem("currentUser"));
  const currentUser = data.user

  if (!data) {
    return <div>Loading...</div>; 
  }

  if (currentUser.type === 'Business') {
    return <BusinessProfile user={currentUser} />;
  } else {
    return <PersonalProfile user={currentUser} />;
  }
}

export default ProfilePage;