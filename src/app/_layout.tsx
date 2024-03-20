import { Loading } from '@/components/loading';
import {
  useFonts,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import { Slot } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontLoaded) {
    return <Loading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Slot />
    </GestureHandlerRootView>
  );
}
