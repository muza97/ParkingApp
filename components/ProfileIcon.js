//components/ProfileIcon.js
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const ProfileIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/profile-user.png')} 
        style={{ width: 40, height: 40, borderRadius: 20 }} 
      />
    </TouchableOpacity>
  );
};

export default ProfileIcon;
