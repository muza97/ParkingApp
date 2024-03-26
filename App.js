import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MapScreen} from './screens/MapScreen'; // Make sure you have this screen created

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={MapScreen} />
        {/* Insert more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
