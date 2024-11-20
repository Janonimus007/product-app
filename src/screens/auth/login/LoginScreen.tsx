import { View, Text } from 'react-native'
import React from 'react'
import { LoginForm } from '../../../components/auth'
import { styles } from './Login.styles'
import { Box, Image } from 'native-base'
import imageCenco from '../../../assets/images/logoccu.png'

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <Image 
            source={imageCenco} 
            alt="Logo de Cencosud" 
            size="xl" 
            style={styles.imageLogin}
        />
      <LoginForm/>
      <Box></Box>
    </View>
  )
}