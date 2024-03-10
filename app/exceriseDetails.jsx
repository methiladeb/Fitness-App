import { View, Text } from 'react-native'
import React from 'react'

export default function exceriseDetails() {
    const item = useLocalSearchParams();
    console.log('got item: ', item);
  return (
    <View>
      <Text>exceriseDetails</Text>
    </View>
  )
}
