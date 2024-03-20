import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.orange[500],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          minHeight: 74,
        },
        tabBarItemStyle: {
          paddingBottom: 34,
          paddingTop: 14,
        },
        tabBarShowLabel: false,
      }}
      initialRouteName="index">
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="email" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat-bubble" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="meeting"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="videocam" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
