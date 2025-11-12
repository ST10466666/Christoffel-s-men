// src/components/CategoryPage.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { CategoryType, MenuItem } from '../types/MenuItem';

interface CategoryPageProps {
  category: CategoryType;
  menuItems: MenuItem[];
  onBack: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, menuItems, onBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{category}</Text>
        <Text style={styles.itemCount}>{menuItems.length} items</Text>
      </View>
      
      <ScrollView style={styles.content}>
        {menuItems.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No items in this category</Text>
          </View>
        ) : (
          <View style={styles.itemsContainer}>
            {menuItems.map((item) => (
              <View key={item.id} style={styles.itemCard}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>${item.price}</Text>
                </View>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: '#4299E1',
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
    flex: 1,
  },
  itemCount: {
    fontSize: 14,
    color: '#718096',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: '#718096',
  },
  itemsContainer: {
    gap: 12,
  },
  itemCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    flex: 1,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#48BB78',
  },
  itemDescription: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 20,
  },
});

export default CategoryPage;