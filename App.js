import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';

import Home from './src/Pages/Home/indexHome';
import Login from './src/Pages/Login/indexLogin';
import ChatSappy from './src/Pages/SappyChat/Chat/indexChat';
import ChatGroup from './src/Pages/SappyChat/ChatGroup/indexGroupChat';
import Setup from './src/Pages/Setup/indexSetup';
import Profile from './src/Pages/Setup/Profile/Profile';

const Stack = createStackNavigator();

export default function App() {

  // Ignorando logs
  useEffect(() => {
    let isMounted = true

    if (Platform.OS != "web" && isMounted == true) {
      LogBox.ignoreAllLogs(true)
      LogBox.ignoreLogs(['Setting a timer'])
    }
    return () => { isMounted = false }
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Setup"
          component={Setup}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ChatGroup"
          component={ChatGroup}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000710',
              height: 90,
            },
            headerTintColor: '#f5f5f5',
            headerTitleStyle: {
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 4,
              flexWrap: 'nowrap'
            },
          }}
        />

        <Stack.Screen
          name="ChatSappy"
          component={ChatSappy}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000710',
              height: 90,
            },
            headerTintColor: '#f5f5f5',
            headerTitleStyle: {
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 4,
              flexWrap: 'nowrap'
            },
          }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000710',
              height: 90,
            },
            headerTitle: "Editar perfil",
            headerTintColor: '#f5f5f5',
            headerTitleStyle: {
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 4,
              flexWrap: 'nowrap'
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


