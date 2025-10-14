import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.dishName}>{item?.dishName ?? 'No name'}</Text>
      <Text style={styles.description}>{item?.description ?? 'No description'}</Text>
      <View style={styles.details}>
        <Text style={styles.course}>{item?.course ?? 'Unknown course'}</Text>
        <Text style={styles.price}>
          R{typeof item?.price === 'number' ? item.price.toFixed(2) : '0.00'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    // Improved shadow for both platforms
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  course: {
    fontSize: 14,
    color: '#888',
    textTransform: 'capitalize',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
});