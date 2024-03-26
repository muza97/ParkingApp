import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen'; // Ensure this is the correct path to your MapScreen
import ProfileScreen from './screens/ProfileScreen'; // Ensure this is the correct path to your ProfileScreen

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* Insert more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;