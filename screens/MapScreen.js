import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  return (
    <View className="flex-1">
      <MapView
        className="flex-1"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* Markers can be added here */}
      </MapView>
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
          {/* Additional parking options can go here */}
        </ScrollView>
      </View>
    </View>
  );
}

// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import { ScrollView } from 'react-native';

// export default function App() {
//   return (
//     <View className="flex-1">
//       <MapView
//         style={{ flex: 1 }}
//         // Your map initialization code
//         initialRegion={{
//           // The initial region should be set based on your requirements
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}>
//         {/* Markers on the map */}
//       </MapView>
//       <View className="absolute bottom-0 w-full bg-white p-5 rounded-t-xl">
//         <Text className="text-center mb-4 font-bold text-lg">Choose parking location</Text>
//         <ScrollView className="mb-5">
//           <TouchableOpacity className="flex flex-row justify-between items-center p-4 bg-gray-200 my-2 rounded-lg">
//             <View className="flex flex-row items-center">
//               <Text className="text-green-500 font-semibold">P</Text>
//               <Text className="ml-2">Street parking</Text>
//             </View>
//             <Text>Select </Text>
//           </TouchableOpacity>
//           {/* ...other parking options */}
//         </ScrollView>
//       </View>
//     </View>
//   );
// }
