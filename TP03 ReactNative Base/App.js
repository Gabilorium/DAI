import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogIn from './src/Pantallas/LogIn.js';
import Pantalla1 from './src/Pantallas/Pantalla1.js';
import Pantalla2 from './src/Pantallas/Pantalla2.js';
import Pantalla3 from './src/Pantallas/Pantalla3.js';
import SplashScreen from './src/Pantallas/SplashScreen.js';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">        
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LogIn} options={{ headerShown: false }}/>
        <Stack.Screen name="PageTabs" component={PageTabs} options={{ headerShown: false }}/>
      </Stack.Navigator>
  </NavigationContainer>

  );
};
const PageTabs = () => {
    return (
      
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Information') {
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              } else if (route.name === 'Home') {
                iconName = focused ? 'md-home' : 'md-home-outline';
              }
              else if(route.name === 'Profile'){
                iconName = focused ? 'ios-person' : 'ios-person-outline'
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Pantalla1} />
          <Stack.Screen name="Information" component={Pantalla2}/>
          <Stack.Screen name="Profile" component={Pantalla3}/>
        </Tab.Navigator>
      
    );
};

export default App;