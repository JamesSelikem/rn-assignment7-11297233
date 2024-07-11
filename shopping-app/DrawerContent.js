import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DrawerContent = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity >
      <Text style={styles.menuItem}>Store</Text>
    </TouchableOpacity>
    <TouchableOpacity >
      <Text style={styles.menuItem}>Locations</Text>
    </TouchableOpacity>
    <TouchableOpacity >
      <Text style={styles.menuItem}>Blog</Text>
    </TouchableOpacity>
    <TouchableOpacity >
      <Text style={styles.menuItem}>Jewelry</Text>
    </TouchableOpacity>
    <TouchableOpacity >
      <Text style={styles.menuItem}>Electronic</Text>
    </TouchableOpacity>
    <TouchableOpacity >
      <Text style={styles.menuItem}>Clothing</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default DrawerContent;
