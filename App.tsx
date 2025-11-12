// App.tsx

import React, { useState, useRef, useEffect } from 'react';
import { View, Animated, StatusBar, BackHandler, Alert } from 'react-native';
import SplashScreen from './src/components/SplashScreen';
import MainMenu from './src/components/MainMenu';
import CategoryPage from './src/components/CategoryPage';
import ManageMenuScreen from './src/components/ManageMenuScreen';
import FilterPage from './src/components/Filterpage';
import { CategoryType, MenuItem } from './src/types/MenuItem';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
  const [currentScreen, setCurrentScreen] = useState<'main' | 'category' | 'manage' | 'filter'>('main');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: '1',
      name: 'Garlic Bread',
      category: 'Starters',
      price: 50.99,
      description: 'Fresh baked bread with garlic butter'
    },
    {
      id: '2',
      name: 'Bruschetta',
      category: 'Starters',
      price: 70.99,
      description: 'Toasted bread with tomato and basil'
    },
    {
      id: '3',
      name: 'Steak',
      category: 'Mains',
      price: 240.99,
      description: 'Grilled steak with vegetables'
    },
    {
      id: '4',
      name: 'Pasta',
      category: 'Mains',
      price: 316.99,
      description: 'Fresh pasta with choice of sauce'
    },
    {
      id: '5',
      name: 'Salmon',
      category: 'Mains',
      price: 450.99,
      description: 'Pan-seared salmon with herbs'
    },
    {
      id: '6',
      name: 'Chocolate Cake',
      category: 'Desserts',
      price: 180.99,
      description: 'Rich chocolate cake'
    },
    {
      id: '7',
      name: 'Ice Cream',
      category: 'Desserts',
      price: 60.99,
      description: 'Vanilla bean ice cream'
    },
    {
      id: '8',
      name: 'Coffee',
      category: 'Drinks',
      price: 35.99,
      description: 'Fresh brewed coffee'
    },
    {
      id: '9',
      name: 'Wine',
      category: 'Drinks',
      price: 190.99,
      description: 'House wine selection'
    },
    {
      id: '10',
      name: 'Chef Special',
      category: 'Specials',
      price: 1119.99,
      description: 'Daily chef special'
    }
  ]);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const calculateAveragePrices = () => {
    const categories: CategoryType[] = ['Starters', 'Mains', 'Desserts', 'Drinks', 'Specials'];
    const averages: Record<CategoryType, number> = {
      'Starters': 0,
      'Mains': 0,
      'Desserts': 0,
      'Drinks': 0,
      'Specials': 0
    };

    categories.forEach(category => {
      const categoryItems = menuItems.filter(item => item.category === category);
      if (categoryItems.length > 0) {
        const total = categoryItems.reduce((sum, item) => sum + item.price, 0);
        averages[category] = Number((total / categoryItems.length).toFixed(2));
      }
    });

    return averages;
  };

  const handleAddMenuItem = (newItem: Omit<MenuItem, 'id'>) => {
    const itemWithId: MenuItem = {
      ...newItem,
      id: Date.now().toString()
    };
    setMenuItems(prev => [...prev, itemWithId]);
  };

  const handleRemoveMenuItem = (itemId: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== itemId));
  };

  const navigateToScreen = (screen: 'main' | 'category' | 'manage' | 'filter', category?: CategoryType) => {
    if (category) {
      setSelectedCategory(category);
    }
    setCurrentScreen(screen);
  };

  const handleBackToMain = () => {
    setCurrentScreen('main');
    setSelectedCategory(null);
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (currentScreen !== 'main') {
        handleBackToMain();
        return true;
      }
      return false;
    });

    return () => backHandler.remove();
  }, [currentScreen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const renderCurrentScreen = () => {
    if (showSplash) {
      return <SplashScreen onFinish={() => setShowSplash(false)} />;
    }

    switch (currentScreen) {
      case 'manage':
        return (
          <ManageMenuScreen
            menuItems={menuItems}
            onAddItem={handleAddMenuItem}
            onRemoveItem={handleRemoveMenuItem}
            onBack={handleBackToMain}
          />
        );
      case 'filter':
        return (
          <FilterPage
            menuItems={menuItems}
            onSelectCategory={(category) => navigateToScreen('category', category)}
            onBack={handleBackToMain}
          />
        );
      case 'category':
        return (
          <CategoryPage 
            category={selectedCategory!}
            menuItems={menuItems.filter(item => item.category === selectedCategory)}
            onBack={handleBackToMain}
          />
        );
      default:
        return (
          <MainMenu 
            onSelectCategory={(category) => navigateToScreen('category', category)}
            onManageMenu={() => navigateToScreen('manage')}
            onFilterMenu={() => navigateToScreen('filter')}
            menuItems={menuItems}
            averagePrices={calculateAveragePrices()}
          />
        );
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F8FAFC' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      {renderCurrentScreen()}
    </View>
  );
};

export default App;