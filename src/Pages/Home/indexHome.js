import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useEffect } from 'react';
import { Dimensions, LogBox } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Header from '../../Components/Header';
import SappyChat from '../SappyChat/Chat/Chat';
import GroupChat from '../SappyChat/ChatGroup/GroupChat';
import Setup from '../Setup/indexSetup';

const Tab = createMaterialBottomTabNavigator();

export default function Home() {

  useEffect(() => {
    if (Platform.OS != "web") {
      LogBox.ignoreAllLogs(true)
      LogBox.ignoreLogs(['Setting a timer'])
    }
  })

  return (
    <>
      <Header></Header>

      <Tab.Navigator
        initialRouteName="SappyGroupChat"
        activeColor="#ccad00"
        inactiveColor="#f5f5f5"
        barStyle={{
          backgroundColor: "#000710",
          borderTopWidth: 0.5,
          borderTopColor: "#ffffff",
          width: Dimensions.get('window').width,
          height: 54,
          zIndex: 9
        }}

      >
        <Tab.Screen
          name="Grupos"
          options={{
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="bubbles" color={color} size={22} />
            ),
          }}
          component={GroupChat}
        />

        <Tab.Screen
          name="Profissionais"
          options={{
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="people" color={color} size={22} />
            ),
          }}
          component={SappyChat}
        />

        <Tab.Screen
          name="Configurações"
          options={{
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="settings" color={color} size={22} />
            ),
          }}
          component={Setup}
        />

      </Tab.Navigator>
    </>
  );

}