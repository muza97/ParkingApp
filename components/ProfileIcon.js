//components/ProfileIcon.js
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const ProfileIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/profile-user.png')} // Make sure to place your icon in the assets folder and update the path accordingly
        style={{ width: 40, height: 40, borderRadius: 20 }} // Adjust size as needed
      />
    </TouchableOpacity>
  );
};

export default ProfileIcon;
