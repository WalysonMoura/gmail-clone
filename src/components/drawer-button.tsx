import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import clsx from 'clsx';
import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

export type IconNameType = keyof typeof MaterialIcons.glyphMap;

interface TabBarButtonProps extends PressableProps {
  title?: string;
  isFocused?: boolean;
  isDivider?: boolean;
  iconName: IconNameType;
  notifications?: number;
}

export function DrawerButton({
  title = '',
  iconName,
  isDivider = false,
  isFocused = false,
  notifications,
  ...rest
}: TabBarButtonProps) {
  return (
    <Pressable
      className={clsx('py-2 w-full', { 'border-b ml-10 border-gray-500': isDivider })}
      {...rest}>
      <View>
        <MaterialIcons
          name={iconName}
          size={20}
          color={isFocused ? colors.orange[300] : colors.gray[400]}
        />
        <Text
          className={clsx('text-white font-subtitle text-base flex-1', {
            'text-orange-300': isFocused,
          })}>
          {title}
        </Text>
        <Text className={clsx('text-gray-400 text-sm font-body', { 'text-orange-300': isFocused })}>
          {notifications}
        </Text>
      </View>
    </Pressable>
  );
}
