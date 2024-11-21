import { View, Text } from 'react-native'
import React from 'react'
import { Center, Skeleton, VStack } from 'native-base'

export default function CustomLoader() {
  return (
    <>
<Center w="100%">
      <VStack w="90%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
      borderColor: "coolGray.500"
    }} _light={{
      borderColor: "coolGray.200"
    }}>
        <Skeleton h="40" />
        <Skeleton h="40" />
        <Skeleton h="40" />
        <Skeleton h="40" />
        <Skeleton h="40" />
      </VStack>
    </Center>   
    </>


  )
}
