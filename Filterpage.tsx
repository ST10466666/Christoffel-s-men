// src/components/FilterPage.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { CategoryType, MenuItem, CATEGORY_CONFIG } from '../types/MenuItem';

interface FilterPageProps {
  menuItems: MenuItem[];
  onSelectCategory: (category: CategoryType) => void;
  onBack: () => void;
}

const FilterPage: React.FC<FilterPageProps> = ({ menuItems, onSelectCategory, onBack }) => {
  const categories = CATEGORY_CONFIG;

  const getCategoryStats = (category: CategoryType) => {
    const categoryItems = menuItems.filter(item => item.category === category);
    const count = categoryItems.length;
    const averagePrice = count > 0 
      ? Number((categoryItems.reduce((sum, item) => sum + item.price, 0) / count).toFixed(2))
      : 0;
    
    return { count, averagePrice };
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Filter by Category</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.description}>
          Select a category to view filtered menu items
        </Text>

        <View style={styles.statsOverview}>
          <Text style={styles.statsTitle}>Menu Overview</Text>
          <Text style={styles.totalItems}>Total Items: {menuItems.length}</Text>
        </View>

        <View style={styles.categoriesContainer}>
          {categories.map((category) => {
            const stats = getCategoryStats(category.name);
            return (
              <TouchableOpacity
                key={category.id}
                style={[styles.categoryButton, { backgroundColor: category.color }]}
                onPress={() => onSelectCategory(category.name)}
              >
                <View style={styles.categoryInfo}>
                  <Text style={styles.categoryName}>{category.displayName}</Text>
                  <Text style={styles.categoryDescription}>{category.description}</Text>
                  <View style={styles.categoryStats}>
                    <Text style={styles.stat}>{stats.count} items</Text>
                    <Text style={styles.stat}>Avg: ${stats.averagePrice}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
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
  },
  content: {
    flex: 1,
    padding: 16,
  },
  description: {
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
    marginBottom: 24,
  },
  statsOverview: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 8,
  },
  totalItems: {
    fontSize: 14,
    color: '#718096',
  },
  categoriesContainer: {
    gap: 12,
  },
  categoryButton: {
    padding: 20,
    borderRadius: 8,
  },
  categoryInfo: {},
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 8,
  },
  categoryStats: {
    flexDirection: 'row',
    gap: 16,
  },
  stat: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
});

export default FilterPage;