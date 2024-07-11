// CheckoutScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useCart } from './CartContext';
import { useNavigation } from '@react-navigation/native';
import removeIcon from './assets/remove.png';
import Logo from './assets/Logo.png';

const CheckoutScreen = () => {
  const { cart, removeFromCart } = useCart();
  const navigation = useNavigation();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.titleContainer}>
          <Image source={Logo} style={styles.logoTitle} />
        </View>
        
        {cart.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.cartItemImage} />
            <View style={styles.cartItemDetails}>
              <Text style={styles.cartItemTitle}>{item.title}</Text>
              <Text style={styles.cartItemDescription}>{item.description}</Text>
              <Text style={styles.cartItemPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item)}>
              <Image source={removeIcon} style={styles.removeIcon} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.totalText}>EST. TOTAL</Text>
        <Text style={styles.totalPrice}>${totalPrice}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  logoTitle: {
    marginLeft: 125,
    marginBottom: 30,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cartItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  cartItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemDescription: {
    fontSize: 14,
    color: '#888',
  },
  cartItemPrice: {
    fontSize: 18,
    color: '#FC8966',
  },
  removeIcon: {
    width: 24,
    height: 24,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 24,
    color: '#FC8966',
  },
  checkoutButton: {
    backgroundColor: '#000',
    padding: 16,
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 4,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CheckoutScreen;
