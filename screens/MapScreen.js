import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import ProfileIcon from '../components/ProfileIcon'; // Correct import with capital 'P'

export default function MapScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      {/* Full-screen MapView */}
      <MapView
        className="absolute top-0 left-0 right-0 bottom-0"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* Markers can be added here */}
      </MapView>

      {/* Profile Icon at the top right corner of the screen */}
      <View className="absolute top-0 right-0 p-4">
        <ProfileIcon onPress={() => navigation.navigate('Profile')} />
      </View>

      {/* Bottom Sheet */}
      <View className="absolute bottom-0 w-full bg-white p-5 rounded-t-xl">
        <Text className="text-center mb-4 font-bold text-lg">Choose parking location</Text>
        <ScrollView className="mb-5">
          <TouchableOpacity className="flex flex-row justify-between items-center p-4 bg-gray-200 my-2 rounded-lg">
            <View className="flex flex-row items-center">
              <Text className="text-green-500 font-semibold">P</Text>
              <Text className="ml-2">Street parking</Text>
            </View>
            <Text>Select</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row justify-between items-center p-4 bg-gray-200 my-2 rounded-lg">
            <View className="flex flex-row items-center">
              <Text className="text-green-500 font-semibold">P</Text>
              <Text className="ml-2">Street parking</Text>
            </View>
            <Text>Select</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row justify-between items-center p-4 bg-gray-200 my-2 rounded-lg">
            <View className="flex flex-row items-center">
              <Text className="text-green-500 font-semibold">P</Text>
              <Text className="ml-2">Street parking</Text>
            </View>
            <Text>Select</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity className="flex flex-row justify-between items-center p-4 bg-gray-200 my-2 rounded-lg">
            <View className="flex flex-row items-center">
              <Text className="text-green-500 font-semibold">P</Text>
              <Text className="ml-2">Street parking</Text>
            </View>
            <Text>Select</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity className="flex flex-row justify-between items-center p-4 bg-gray-200 my-2 rounded-lg">
            <View className="flex flex-row items-center">
              <Text className="text-green-500 font-semibold">P</Text>
              <Text className="ml-2">Street parking</Text>
            </View>
            <Text>Select</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row justify-between items-center p-4 bg-gray-200 my-2 rounded-lg">
            <View className="flex flex-row items-center">
              <Text className="text-green-500 font-semibold">P</Text>
              <Text className="ml-2">Street parking</Text>
            </View>
            <Text>Select</Text>
          </TouchableOpacity> */}
          
        </ScrollView>
      </View>
    </View>
  );
}
