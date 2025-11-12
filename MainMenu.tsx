// src/components/MainMenu.tsx

import React from 'react';
import { 
  View, Text, TouchableOpacity, StyleSheet, ScrollView,
  StatusBar 
} from 'react-native';
import { CategoryType, MenuItem, CATEGORY_CONFIG } from '../types/MenuItem';

interface MainMenuProps {
  onSelectCategory: (category: CategoryType) => void;
  onManageMenu: () => void;
  onFilterMenu: () => void;
  menuItems: MenuItem[];
  averagePrices: Record<CategoryType, number>;
}

const MainMenu: React.FC<MainMenuProps> = ({ 
  onSelectCategory, 
  onManageMenu, 
  onFilterMenu,
  menuItems,
  averagePrices 
}) => {
  const categories = CATEGORY_CONFIG;

  const itemCounts: Record<CategoryType, number> = {
    'Starters': 0,
    'Mains': 0,
    'Desserts': 0,
    'Drinks': 0,
    'Specials': 0
  };

  menuItems.forEach(item => {
    itemCounts[item.category]++;
  });

  const CategoryCard = ({ category }: { category: typeof categories[0] }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: category.color }]}
      onPress={() => onSelectCategory(category.name)}
    >
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{category.displayName}</Text>
        <Text style={styles.cardDescription}>{category.description}</Text>
        <Text style={styles.itemCount}>
          {itemCounts[category.name]} items available
        </Text>
        <Text style={styles.averagePrice}>
          Average: ${averagePrices[category.name]}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const totalItems = menuItems.length;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome to</Text>
        <Text style={styles.appTitle}>Chris MenuApp</Text>
        <Text style={styles.subtitle}>Professional Restaurant Management</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton} onPress={onManageMenu}>
          <Text style={styles.actionButtonText}>Manage Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.filterButton]} onPress={onFilterMenu}>
          <Text style={styles.actionButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.statsBar}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{categories.length}</Text>
            <Text style={styles.statLabel}>Categories</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{totalItems}</Text>
            <Text style={styles.statLabel}>Total Items</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Menu Categories</Text>

        <View style={styles.cardsContainer}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
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
    backgroundColor: '#FFFFFF',
    padding: 24,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 16,
    color: '#718096',
    fontWeight: '600',
    textAlign: 'center',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D3748',
    textAlign: 'center',
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#48BB78',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  filterButton: {
    backgroundColor: '#4299E1',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  statsBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 16,
    padding: 20,
    borderRadius: 16,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  statLabel: {
    fontSize: 12,
    color: '#718096',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E2E8F0',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
    margin: 16,
    marginBottom: 8,
  },
  cardsContainer: {
    padding: 16,
    gap: 12,
  },
  card: {
    borderRadius: 12,
    padding: 20,
  },
  cardContent: {},
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 8,
  },
  itemCount: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  averagePrice: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 'bold',
    marginTop: 4,
  },
});

export default MainMenu;