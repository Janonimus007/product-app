import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import ProductList from '../../screens/home/products/productList/ProductListScreen';
import CustomDrawer from '../../components/navigation/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName="Home">
      <Drawer.Screen name="Home" component={ProductList} options={{ title: 'Nuestros productos' }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
