import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { ArrowLeftIcon } from 'react-native-heroicons/solid'; 

const ProfileScreen = () => {
  const navigation = useNavigation(); 

  return (
    <View className="flex-1 justify-center items-center">
      
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 absolute top-14 left-4"
      >
        <ArrowLeftIcon size={20} color="black" />
      </TouchableOpacity>

      {/* Page Content */}
      <Text className="text-lg font-bold">This is the Profile Page</Text>
    </View>
  );
};

export default ProfileScreen;
