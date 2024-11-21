import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import ImageCCU from '../../assets/images/ccu_logo_drawer.png'
import { HStack, Image } from 'native-base'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks'
import { logout as logoutAction } from "../../store/slices/auth.slice";

export default function CustomDrawer(props:any) {
    const { isLoggedIn } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const logout = ()=>{
        console.log('estoy cerrando sesion',isLoggedIn);
        dispatch(logoutAction())
        
    }
  return (
    <View style={styles.container}>
        <DrawerContentScrollView {...props}>
            <Image
                source={ImageCCU} 
                alt="Logo de Cencosud" 
                size="xl" 
                style={styles.imageDrawer}
            />
        <DrawerItemList {...props} />
        </DrawerContentScrollView>       
        <TouchableOpacity onPress={()=>logout()} style={styles.logout}>
            <HStack>
            <MaterialIcons name="logout" size={24} color="black" />  
                <Text style={styles.textLogout}>Cerrar Sesion</Text>
            </HStack>
        </TouchableOpacity> 
    </View>

  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageDrawer:{
        width:'80%',
        resizeMode:'contain'

    },

    logout:{
        padding:20,
        backgroundColor:'#ed8d8d',
        paddingRight:30,
        display:'flex',
        alignItems:'flex-end'
    },
    textLogout:{
        marginRight:0
    }

})