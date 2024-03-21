import { EmailDataProps } from '@/utils/emails';
import { View } from 'react-native';
import { Avatar } from './avatart';
import React from 'react';

type EmailProps = {
  data: EmailDataProps;
};

export function Email({ data }: EmailProps) {
  return (
    <View>
      <Avatar source={{ uri: data.avatar }} />

      <View>
        <View></View>
      </View>
    </View>
  );
}
