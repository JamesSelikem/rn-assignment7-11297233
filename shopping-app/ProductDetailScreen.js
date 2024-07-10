// ProductDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductDetailScreen = () => {
  const route = useRoute();
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <View style={styles.materials}>
        <Text style={styles.materialsTitle}>MATERIALS</Text>
        <Text>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
        <Text>Do not use bleach</Text>
        <Text>Do not tumble dry</Text>
        <Text>Dry clean with tetrachloroethylene</Text>
        <Text>Iron at a maximum of 110ºC/230ºF</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD TO BASKET</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#888',
    marginVertical: 10,
  },
  price: {
    fontSize: 24,
    color: '#FC8966',
    marginVertical: 10,
  },
  materials: {
    marginVertical: 20,
  },
  materialsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#000',
    padding: 16,
    alignItems: 'center',
    marginVertical: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProductDetailScreen;
