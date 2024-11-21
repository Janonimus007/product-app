// src/screens/ProductList.tsx
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, RefreshControl } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../../store/reduxHooks";
import { fetchProducts } from "../../../../store/slices/products.slice";
import { ProductCardComponent } from "../../../../components/products/ProductCardComponent";
import { styles } from "./ProductList.styles";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector((state) => state.products);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(fetchProducts());
    setRefreshing(false);
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCardComponent description={item.description} image={ item.image } price={item.price}  title={item.title}/>
      )}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing} 
          onRefresh={onRefresh} 
          colors={["#6200ee"]} 
          tintColor="#6200ee" 
        />
      }
    />
  );
};

export default ProductList;
