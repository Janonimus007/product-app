import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from '../../screens/home/products/productList/ProductListScreen';
import ProductDetailScreen from '../../screens/home/products/productDetail/ProductDetailScreen';
import DrawerNavigator from '../drawer/Drawer';

const Stack = createStackNavigator();

export default function ProductStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ProductList" 
          component={DrawerNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ProductDetail" 
          component={ProductDetailScreen} 
          options={{ title: 'Detalle del Producto' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}