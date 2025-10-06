# Christoffel-s-menu
A React Native application called Christoffel's Menu enables cooks to design and oversee a menu for their eatery.  The chef can add new menu items to the app, such as the name of the dish, its description, its cost, and the type of course (desserts, main courses, or appetizers).  The home screen lists every item that has been added along with the total number of menu items.

# Features
Add Menu Items: The chef can choose a course type (starters, main courses, or desserts) and enter information such as the dish's name, description, and cost.

 predetermined Course Types: When adding menu items, a predetermined list of courses (starters, main dishes, and desserts) can be chosen from.

 Menu Display: The home screen shows every menu item that has been added.

 Total Menu Count: Shows how many menu items have been added so far.

 # Installation
 Installation
Prerequisites

Make sure you have Node.js installed. You can check if it's installed by running:

node -v


If not installed, download and install from Node.js website
.

Install Expo CLI to easily run the app in development:

npm install -g expo-cli


Install Git if not already installed. You can verify this by running:

git --version


If not installed, follow the installation steps from the previous response.

1. Clone the Repository

Clone this project to your local machine:

git clone https://github.com/st10466666@rcconnet.edu.za/christoffels-menu.git

2. Install Dependencies

Navigate to the project folder and install the required dependencies:

cd christoffels-menu
npm install

3. Start the App

Once dependencies are installed, you can start the app with the following command:

npm start


This will open Expo in your browser, and you can scan the QR code with your mobile device (using the Expo Go app) or use an emulator to view the app.

# Usage
Including Items on the Menu:

 Enter the price, description, and dish name in the appropriate fields.

 To choose from starters, main courses, or desserts, use the dropdown menu.

 To include the item in the list, tap the Add Menu Item button.

 Looking at the Menu:

 All newly added menu items, such as the dish name, description, course, and price, will be shown on the home screen.

 As new items are added, the total number of menu items will be updated dynamically.

 # Technology Stack
 React Native: Framework used for building the app.

TypeScript: A superset of JavaScript for better development experience with static types.

Expo: Framework used to quickly run and build React Native apps.

React Navigation: For managing the navigation between different screens (future use).

# Overall Design
The app will have a clean, modern, and minimalistic design. The user interface will prioritize clarity and ease of use. There will be a combination of text inputs, buttons, and lists. The app will be laid out vertically, with each section clearly separated. The background will be light, with subtle colors to maintain focus on the content.

<img width="1239" height="683" alt="code" src="https://github.com/user-attachments/assets/09b8d24f-2a53-4339-8465-c97480f56cce" />

# App Layout Overview:

Header: A bold, centered title saying "Welcome to Christoffel's Menu."

Dish Input Section: Three input fields for entering Dish Name, Description, and Price, each with placeholder text.

Course Selector: A dropdown (Picker) to choose between Starters, Mains, or Desserts.

Add Menu Item Button: A button to add the dish to the list, placed below the course selector.

Total Menu Count: A label displaying the total number of menu items added.

Menu Items List: A dynamic list that shows added dishes, including their name, description, course, and price, each item separated by a clean, bordered box.

# Design Style:

Light background, dark text for readability.

Simple, modern, and user-friendly with rounded corners and subtle borders around inputs and buttons.

Clean layout with plenty of spacing for easy navigation and interaction.

# License

This project is licensed under the MIT License


