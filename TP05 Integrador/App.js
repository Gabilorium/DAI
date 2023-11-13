import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Configuration from './src/Screens/Configuration';
import ChangeBgScreen from './src/Screens/ChangeBgScreen';
import AboutScreen from './src/Screens/AboutScreen';
import EmergencyCall from './src/Screens/EmergencyCall';
import MultimediaScreen from './src/Screens/MultimediaScreen';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Config') {
                iconName = focused ? 'cog' : 'cog-outline';
              } 
              else if (route.name === 'BgImage') {
                iconName = focused ? 'image' : 'image-outline';
              }
              else if(route.name === 'Video'){
                iconName = focused ? 'play-circle' : 'play-circle-outline'
              }
              else if (route.name === 'Call') {
                iconName = focused ? 'call' : 'call-outline';
              } 
              else if(route.name === 'Barcode'){
                iconName = focused ? 'md-barcode' : 'md-barcode-outline'
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Config" component={Configuration} />
          <Tab.Screen name="BgImage" component={ChangeBgScreen}/>
          <Tab.Screen name="Barcode" component={AboutScreen}/>
          <Tab.Screen name="Call" component={EmergencyCall} />
          <Tab.Screen name="Video" component={MultimediaScreen}/>
        </Tab.Navigator>
  </NavigationContainer>

  );
};


export default App;
