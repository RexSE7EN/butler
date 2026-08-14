import {View, Text} from 'react-native'
import React from 'react'
import {Link, useLocalSearchParams} from "expo-router";

const Media = () => {
  const { id } = useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text>Media {id}</Text>
      <Link href="/">Home</Link>
    </View>
  )
}
  export default Media
