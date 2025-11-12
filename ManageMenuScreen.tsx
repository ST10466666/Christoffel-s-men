// src/components/ManageMenuScreen.tsx

import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, ScrollView, 
  StyleSheet, Alert 
} from 'react-native';
import { CategoryType, MenuItem } from '../types/MenuItem';

interface ManageMenuScreenProps {
  menuItems: MenuItem[];
  onAddItem: (item: Omit<MenuItem, 'id'>) => void;
  onRemoveItem: (itemId: string) => void;
  onBack: () => void;
}

const ManageMenuScreen: React.FC<ManageMenuScreenProps> = ({
  menuItems,
  onAddItem,
  onRemoveItem,
  onBack
}) => {
  const [newItem, setNewItem] = useState({
    name: '',
    category: 'Starters' as CategoryType,
    price: '',
    description: ''
  });

  const handleAddItem = () => {
    if (!newItem.name.trim() || !newItem.price.trim()) {
      Alert.alert('Error', 'Please fill in Name and Price');
      return;
    }

    const price = parseFloat(newItem.price);
    if (isNaN(price) || price <= 0) {
      Alert.alert('Error', 'Please enter a valid price');
      return;
    }

    onAddItem({
      name: newItem.name.trim(),
      category: newItem.category,
      price: price,
      description: newItem.description.trim()
    });

    setNewItem({
      name: '',
      category: 'Starters',
      price: '',
      description: ''
    });
    
    Alert.alert('Success', 'Menu item added!');
  };

  const handleRemoveItem = (itemId: string, itemName: string) => {
    Alert.alert(
      'Remove Item',
      `Remove "${itemName}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Remove', 
          style: 'destructive', 
          onPress: () => onRemoveItem(itemId) 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Manage Menu</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Add Item Form */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Add New Item</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Item Name"
            value={newItem.name}
            onChangeText={(text) => setNewItem(prev => ({ ...prev, name: text }))}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={newItem.description}
            onChangeText={(text) => setNewItem(prev => ({ ...prev, description: text }))}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Price"
            keyboardType="numeric"
            value={newItem.price}
            onChangeText={(text) => setNewItem(prev => ({ ...prev, price: text }))}
          />
          
          <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
            <Text style={styles.addButtonText}>Add Item to Menu</Text>
          </TouchableOpacity>
        </View>

        {/* Current Items */}
        <View style={styles.itemsSection}>
          <Text style={styles.sectionTitle}>Current Menu Items ({menuItems.length})</Text>
          
          {menuItems.map(item => (
            <View key={item.id} style={styles.itemCard}>
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDetails}>{item.category} - ${item.price}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
              <TouchableOpacity 
                onPress={() => handleRemoveItem(item.id, item.name)}
                style={styles.removeButton}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
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
  formSection: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: 'white'
  },
  addButton: {
    backgroundColor: '#48BB78',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemsSection: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  itemDetails: {
    fontSize: 14,
    color: '#718096',
    marginTop: 2,
  },
  itemDescription: {
    fontSize: 12,
    color: '#A0AEC0',
    marginTop: 2,
  },
  removeButton: {
    backgroundColor: '#FED7D7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  removeButtonText: {
    color: '#C53030',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default ManageMenuScreen;