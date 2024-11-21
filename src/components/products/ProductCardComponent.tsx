import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'native-base'
import { useNavigation } from '@react-navigation/native';

interface Props{
    image:string;
    title: string;
    price: number
    description:string
}

export const ProductCardComponent = ({image,title,price,description}:Props) => {

    const navigation = useNavigation()

    const gotoDetail = () => {
        navigation.navigate("ProductDetail", { image, title, price, description });
      };

  return (
    <TouchableOpacity onPress={()=>gotoDetail()} style={styles.productContainer}>
    <Image alt="Product image" source={{ uri: image }} style={styles.productImage} />
    <Text style={styles.productTitle}>{title}</Text>
    <Text style={styles.productPrice}>${price}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    errorContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    errorText: {
      color: "red",
      fontSize: 18,
    },
    productContainer: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
      flexDirection: "row",
      alignItems: "center",
    },
    productImage: {
      width: 50,
      height: 50,
      marginRight: 10,
      resizeMode:'contain'
    },
    productTitle: {
      flex: 1,
      fontSize: 16,
    },
    productPrice: {
      fontWeight: "bold",
    },
  });
  