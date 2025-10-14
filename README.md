## RESTAURANT MENU MANAGEMENT APP
## Documentation & Assignment Submission
## Course: React Native Mobile Development
## Student: Christoffel
## Date: 2025

# TABLE OF CONTENTS
Project Overview

Features Implemented

Technical Specifications

Installation Guide

Usage Instructions

Code Structure

Testing & Demonstration



# 1. PROJECT OVERVIEW
The Restaurant Menu Management App is a React Native mobile application designed for restaurant chefs to efficiently manage their menu items. Built using Expo and TypeScript, this application provides an intuitive interface for adding, viewing, and managing restaurant dishes across different course categories.
<img width="1837" height="970" alt="1" src="https://github.com/user-attachments/assets/8ef6b541-82c7-4a30-ac9e-fd428f60a4b1" />

Project Type: Mobile Application
Framework: React Native with Expo
Programming Language: TypeScript
Platform: iOS and Android Compatible

# 2. FEATURES IMPLEMENTED
Core Functionality:
Add New Menu Items – Comprehensive form for dish details

Course Categorization – Predefined categories: Starter, Main Course, Dessert

Menu Display – Organized viewing of all menu items

Statistical Overview – Real-time calculations and totals

Item Management – Remove functionality for menu items

User Interface:
Home Screen – Dashboard with key statistics and navigation

Add Dish Screen – User-friendly form with validation

Menu List Screen – Clean card-based item display

Bottom Navigation – Easy screen switching

Data Management:
State Management – React useState for data persistence

Form Validation – Input validation and error handling

Real-time Updates – Instant statistical calculations

# 3. TECHNICAL SPECIFICATIONS
Technology Stack:
Frontend Framework: React Native

Development Platform: Expo

Programming Language: TypeScript

Navigation: Custom state-based navigation

Styling: React Native StyleSheet

State Management: React Hooks (useState)

Dependencies:
@react-navigation/native

@react-navigation/native-stack

react-native-screens

react-native-safe-area-context

Expo SDK

Compatibility:
iOS: Version 12.0 and above

Android: API level 21 and above

Devices: Phones and tablets

# 4. INSTALLATION GUIDE
Prerequisites:
Node.js (version 14 or higher)

Expo CLI (latest version)

Android Studio (for emulator) OR Xcode (for iOS simulator)

Expo Go mobile app (for physical device testing)
# 5. USAGE INSTRUCTIONS
Adding Menu Items:
Navigate to "Add Dish" screen

Complete all required fields:

Dish Name (text input)

Description (multi-line text area)

Course Type (Starter/Main/Dessert selection)

Price (numeric input with validation)

Tap "Add to Menu" to save

Success confirmation appears

Viewing Menu Statistics:
Home screen displays:

Total number of menu items

Average price for Starters

Average price for Main courses

Average price for Desserts

Managing Menu Items:
Navigate to "Menu List" screen

View all items in card format

Remove items using "Remove" button

Confirm deletion in confirmation dialog
App.tsx (Root Component)

Manages global state

Handles screen navigation

Provides data to child components

Homepage.tsx

Displays statistics

Shows total item count

Calculates average prices

Provides navigation buttons

Additems.tsx

Form handling with validation

Course selection interface

Price input with validation

Success/error messaging

Menupage.tsx

List display of menu items

Remove functionality

Empty state handling

Card-based layout

## CONCLUSION
This Restaurant Menu Management App successfully fulfills all Part 2 requirements while demonstrating professional mobile development practices. The application provides a solid foundation for future enhancements and showcases comprehensive understanding of React Native development principles.

The code is production-ready, well-documented, and follows industry best practices for mobile application development.

## Github link


## Youtube link
https://youtu.be/g6VAN25KYS4?si=B4lDe-5oQUR3AcZ6


## Reference 
Academic and Technical Sources
Expo. (2025). Expo Documentation. Available at: https://docs.expo.dev/ (Accessed: 15 October 2025).

Facebook Open Source. (2025). React Native Documentation. Available at: https://reactnative.dev/docs/getting-started (Accessed: 15 October 2025).

React Navigation. (2025). Getting Started with React Navigation. Available at: https://reactnavigation.org/docs/getting-started/ (Accessed: 15 October 2025).

TypeScript. (2025). TypeScript Documentation. Available at: https://www.typescriptlang.org/docs/ (Accessed: 15 October 2025).

Programming Guides and Tutorials
React Native Community. (2025). React Native Elements. Available at: https://reactnativeelements.com/ (Accessed: 15 October 2025).

Wix Engineering. (2025). React Native Best Practices. Available at: https://wix.github.io/react-native-ui-lib/ (Accessed: 15 October 2025).

Mobile Development Principles
Apple Inc. (2025). Human Interface Guidelines. Available at: https://developer.apple.com/design/human-interface-guidelines/ (Accessed: 15 October 2025).

Google. (2025). Material Design Guidelines. Available at: https://material.io/design (Accessed: 15 October 2025).

Educational Resources
Independent Institute of Education. (2025). React Native Mobile Development Course Materials. Unpublished.

MDN Web Docs. (2025). JavaScript Guide. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide (Accessed: 15 October 2025).

Development Tools and Libraries
Metro. (2025). Metro Bundler Documentation. Available at: https://facebook.github.io/metro/ (Accessed: 15 October 2025).

Node.js. (2025). Node.js Documentation. Available at: https://nodejs.org/docs/latest/api/ (Accessed: 15 October 2025).

Coding Standards
Airbnb. (2025). JavaScript Style Guide. Available at: https://github.com/airbnb/javascript (Accessed: 15 October 2025).

Additional Technical References
ECMA International. (2025). ECMAScript® 2025 Language Specification. Available at: https://www.ecma-international.org/publications-and-standards/standards/ecma-262/ (Accessed: 15 October 2025).

World Wide Web Consortium. (2025). Web Standards. Available at: https://www.w3.org/standards/ (Accessed: 15 October 2025).

Note: All online references were accessed during the development period of October 2025. URLs were verified and functional at the time of access.



