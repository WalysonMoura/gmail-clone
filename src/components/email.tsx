import { EmailDataProps } from '@/utils/emails';
import { Text, View } from 'react-native';
import { Avatar } from './avatar'
import React = require('react');
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';

type EmailProps = {
  data: EmailDataProps;
};

export function Email({ data }: EmailProps) {
  return (
    <View className="w-full flex-row gap-4">
      <Avatar source={{ uri: data.avatar }} />

      <View className="flex-1">
        <View  className="flex-row items-center gap-1">
          <MaterialIcons name='label-important' size={16}
            color={colors.yellow[600]}/>
            <Text className="text-lg font-subtitle text-gray-400 flex-1">
            {data.name}
            <Text className="text-sm font-body text-gray-400">{data.date}</Text>
          </Text>
        </View>

        <Text
          className="text-base font-body text-gray-400"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {data.subject}
        </Text>
        <View className="flex-row items-center gap-4">
          <Text
            className="text-base font-body text-gray-400 flex-1"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {data.message}
          </Text>

          <MaterialIcons
            name={data.start ? "star" : "star-outline"}
            size={22}
            color={data.start ? colors.blue[600] : colors.gray[400]}
          />
        </View>
      </View>



    </View>
  );
}
