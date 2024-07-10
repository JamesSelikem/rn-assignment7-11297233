// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from './CartContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { cart, addToCart, removeFromCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="bars" size={24} color="#4D4D4D" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Open</Text>
          <Text style={styles.title}>Fashion</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="search" size={24} color="#4D4D4D" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Checkout')}>
            <FontAwesome name="shopping-cart" size={24} color="#4D4D4D" />
            {cart.length > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cart.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.storyRow}>
        <Text style={styles.storyText}>OUR STORY</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.roundIconButton}>
            <FontAwesome name="list" size={20} color="#4D4D4D" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundIconButton}>
            <FontAwesome name="filter" size={20} color="#FC8966" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itemsContainer}>
        {products.map(product => (
          <TouchableOpacity
            key={product.id}
            style={styles.item}
            onPress={() => navigation.navigate('ProductDetail', { product })}
          >
            <Image source={{ uri: product.image }} style={styles.itemImage} />
            <Text style={styles.itemTitle}>{product.title}</Text>
            <Text style={styles.itemDescription}>{product.description}</Text>
            <Text style={styles.itemPrice}>${product.price}</Text>
            <View style={styles.iconRow}>
              <TouchableOpacity style={styles.actionButton} onPress={() => addToCart(product)}>
                <Image source={require('./assets/add.png')} style={styles.actionIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => removeFromCart(product)}>
                <Image source={require('./assets/remove.png')} style={styles.actionIcon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  titleContainer: {
    alignItems: 'center',
  },
  logoTitle: {
    marginLeft: 30,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 8,
  },
  cartBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
  },
  storyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  storyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
  roundIconButton: {
    marginHorizontal: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EFEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 8,
  },
  item: {
    width: '45%',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 1,
  },
  itemImage: {
    width: '100%',
    height: 220,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8,
    marginTop: -38,
  },
  actionButton: {
    marginHorizontal: 4,
  },
  actionIcon: {
    width: 24,
    height: 24,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  itemDescription: {
    fontSize: 12,
    color: '#888',
    marginHorizontal: 8,
  },
  itemPrice: {
    fontSize: 16,
    color: '#FC8966',
    margin: 8,
  },
});

export default HomeScreen;


