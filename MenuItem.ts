// src/types/MenuItem.ts

export type CategoryType = 'Starters' | 'Mains' | 'Desserts' | 'Drinks' | 'Specials';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryType;
  price: number;
  description: string;
}

export interface CategoryConfig {
  id: string;
  name: CategoryType;
  displayName: string;
  description: string;
  icon: string;
  color: string;
}

export const CATEGORY_CONFIG: CategoryConfig[] = [
  {
    id: '1',
    name: 'Starters',
    displayName: 'Starters',
    description: 'Appetizers and small plates',
    icon: 'restaurant',
    color: '#FF6B6B'
  },
  {
    id: '2',
    name: 'Mains',
    displayName: 'Main Courses',
    description: 'Hearty main dishes',
    icon: 'dinner-dining',
    color: '#4ECDC4'
  },
  {
    id: '3',
    name: 'Desserts',
    displayName: 'Desserts',
    description: 'Sweet treats and desserts',
    icon: 'cake',
    color: '#45B7D1'
  },
  {
    id: '4',
    name: 'Drinks',
    displayName: 'Drinks',
    description: 'Beverages and cocktails',
    icon: 'local-bar',
    color: '#96CEB4'
  },
  {
    id: '5',
    name: 'Specials',
    displayName: 'Special Offers',
    description: 'Today\'s specials',
    icon: 'star',
    color: '#FFBE0B'
  }
];