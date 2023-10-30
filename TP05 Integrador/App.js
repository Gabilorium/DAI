import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Configuration from './src/Screens/Configuration';
import ChangeBgImage from './src/Screens/ChangeBgImage';
import IdApp from './src/Screens/IdApp';
import EmergencyCall from './src/Screens/EmergencyCall';
import FavoriteVideoMusic from './src/Screens/FavoriteVideoMusic';
import UserMsj from './src/Screens/UserMsg';


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
              else if (route.name === 'Msg') {
                iconName = focused ? 'logo-whatsapp' : 'logo-whatsapp';
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
          <Tab.Screen name="BgImage" component={ChangeBgImage}/>
          <Tab.Screen name="Barcode" component={IdApp}/>
          <Tab.Screen name="Call" component={EmergencyCall} />
          <Tab.Screen name="Video" component={FavoriteVideoMusic}/>
          <Tab.Screen name="Msg" component={UserMsj }/>
        </Tab.Navigator>
  </NavigationContainer>

  );
};


export default App;
