import { CustomOptions } from '@/types/navigation';
import { DrawerContent } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="open"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '75%',
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="index"
        options={
          {
            title: 'Entrada',
            iconName: 'inbox',
            notifications: 3,
            isDivider: true,
          } as CustomOptions
        }
      />
    </Drawer>
  );
}
