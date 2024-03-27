import React, { useRef, useMemo, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import ProfileIcon from '../components/ProfileIcon';
import BottomSheet, { BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function MapScreen() {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const snapPoints = useMemo(() => ['15%', '50%'], []);

  const renderHeader = useCallback(() => (
    <View className="items-center justify-center p-4">
      <Text className="text-lg font-bold">Choose Parking Location</Text>
    </View>
  ), []);

  const renderHandle = useCallback(
    (props) => (
      <TouchableOpacity
        {...props}
        className="items-center justify-center p-4"
        onPress={() => {
          if (expanded) {
            bottomSheetRef.current?.snapToIndex(0); 
          } else {
            bottomSheetRef.current?.snapToIndex(1); 
          }
          setExpanded(!expanded);
        }}
      >
        <Ionicons name={expanded ? 'chevron-down' : 'chevron-up'} size={24} color="black" />
      </TouchableOpacity>
    ),
    [expanded]
  );

 const handleSheetChanges = useCallback((index) => {
  setExpanded(index === 1); 
}, []);


  const renderBottomSheetContent = useCallback(() => (
    <BottomSheetScrollView className="bg-white">
      {expanded && renderHeader()}
      {/* List of parking options */}
      {Array.from({ length: 3 }).map((_, index) => (
        <TouchableOpacity
          key={index}
          className="flex flex-row justify-between items-center p-4 border-b border-gray-200"
          onPress={() => console.log('Parking option', index + 1)}
        >
          <Text className="text-lg">Street parking {index + 1}</Text>
          <Text className="text-blue-600">Select</Text>
        </TouchableOpacity>
      ))}
    </BottomSheetScrollView>
  ), [expanded]);

  const handleMapPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(1); //open-full
    setExpanded(true);
  }, []);

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1">
        <MapView
          className="absolute top-0 left-0 right-0 bottom-0"
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={handleMapPress}
          style={{ flex: 1 }}
        />

        <View className="absolute top-4 right-4 z-10">
          <ProfileIcon onPress={() => navigation.navigate('Profile')} />
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          handleComponent={renderHandle}
          onChange={handleSheetChanges}
          backdropComponent={BottomSheetBackdrop}
        >
          {renderBottomSheetContent()}
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}
