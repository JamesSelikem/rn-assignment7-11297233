import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CategoryList = ({ navigation }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error(error));
  }, []);

  const categories = ['Men\'s Clothing', 'Women\'s Clothing', 'Jewelery', 'Electronics'];

  const filterItemsByCategory = (category) => {
    return items.filter(item => item.category === category);
  };

  return (
    <ScrollView style={styles.container}>
      {categories.map((category, index) => (
        <View key={index}>
          <Text style={styles.categoryTitle}>{category}</Text>
          {filterItemsByCategory(category.toLowerCase()).map(item => (
            <Text key={item.id} style={styles.itemTitle}>{item.title}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#4D4D4D',
  },
  itemTitle: {
    fontSize: 16,
    marginLeft: 16,
    marginTop: 8,
    color: '#4D4D4D',
  },
});

export default CategoryList;
