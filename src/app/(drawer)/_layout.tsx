import { DrawerContent } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="open"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '75%',
        },
      }}>
      <Drawer.Screen name="(tabs)" options={{ title: '' }} />
    </Drawer>
  );
}
