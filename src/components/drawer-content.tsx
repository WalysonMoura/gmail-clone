import React from 'react';
import { Image, ScrollView, View } from 'react-native';

export function DrawerContent() {
  return (
    <View>
      <View>
        <Image
          source={require('@/assets/images/logo.png')}
          resizeMode="contain"
          className="w-28 ml-5"
        />
      </View>
      <ScrollView>
        
      </ScrollView>
    </View>
  );
}
