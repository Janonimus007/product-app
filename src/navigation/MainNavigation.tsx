import { View, Text } from 'react-native'
import React from 'react'
import { LoginScreen } from '../screens/auth'
import ProductStack from './stacks/ProductStack'
import { useAppSelector } from '../store/reduxHooks'

export const  MainNavigation = ( ) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return isLoggedIn ? <ProductStack /> : <LoginScreen />;
}