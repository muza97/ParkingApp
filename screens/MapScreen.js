import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import ProfileIcon from '../components/ProfileIcon';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function MapScreen() {
  const navigation = useNavigation();
  

  // BottomSheet snap points
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // BottomSheet content
  const renderBottomSheetContent = () => (
    <View style={{ backgroundColor: 'white', padding: 16 }}>
      <Text style={{ textAlign: 'center', marginBottom: 4, fontSize: 16, fontWeight: 'bold' }}>
        Choose parking location
      </Text>
      {/* Repeating TouchableOpacity for demonstration */}
      {Array.from({ length: 3 }).map((_, index) => (
        <TouchableOpacity
          key={index}
          className="flex flex-row justify-between items-center p-4 bg-gray-200 my-2 rounded-lg"
          onPress={() => console.log('Selected parking location', index + 1)}>
          <Text>Street parking {index + 1}</Text>
          <Text>Select</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1">
        {/* Full-screen MapView */}
        <MapView
          className="absolute top-0 left-0 right-0 bottom-0"
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        {/* Profile Icon at the top right corner of the screen */}
        <View className="absolute top-0 right-0 p-4">
          <ProfileIcon onPress={() => navigation.navigate('Profile')} />
        </View>

        {/* Bottom Sheet */}
        <BottomSheet snapPoints={snapPoints} index={1}>
          {renderBottomSheetContent()}
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}
