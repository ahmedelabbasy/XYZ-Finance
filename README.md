### XYZ Finance

XYZ Finance is a robust and user-friendly personal finance management app built with React Native and Expo. It helps users track their income, expenses, and overall financial health with a beautiful interface and seamless navigation.

## Overview

You can see a simulation for using my XYZ Finance App throw this video :

https://drive.google.com/file/d/1vRMPqIyypwe4qP1aonWaIn1lYkG3MyUa/view?usp=sharing

## 🌟 Features

- Income & Expense Tracking: Add, edit, and delete transactions with ease.
- Visual Insights: View pie charts for income and expenses categorized by type.
- Dark and Light Themes: Toggle between themes for a personalized experience.
- Customizable Date Picker: Select transaction dates using an intuitive date picker.
- Persistent Storage: Save data locally with redux-persist and @react-native-async-storage.
- Responsive Navigation: Navigate effortlessly with drawer navigation.
- Real-Time Animations: Enjoy smooth animations throughout the app.

## 📂 Project Structure

The project is organized for scalability and maintainability:

`src/`

`assets/          # Static assets like images and fonts`

`components/      # Reusable React Native components`

`constants/       # Global constants and configurations`

`hooks/           # Custom hooks for app-specific logic`

`navigation/      # Navigation setup (e.g., Drawer, Stack)`

`screens/         # App screens (e.g., Home, Transactions, Add Transaction)`

`store/           # Redux Toolkit slices and store configuration`

`theme/           # Light and Dark themes using styled-components`

`types/           # TypeScript types and interfaces`



## 🛠️ Technologies & Tools

# Core
- React Native: Framework for building mobile apps.
- Expo: Development toolchain for React Native apps.
- TypeScript: Strongly typed JavaScript.

# State Management
- Redux Toolkit: State management made simple.
- redux-persist: Persist state across sessions.

# Navigation
- React Navigation: Drawer and stack navigation.

# UI/Styling
- Styled Components: Dynamic styling for React Native.
- react-native-svg: SVG support for charts and graphics.

# Utilities
- moment: Date manipulation library.
- react-native-actions-sheet: Elegant modal solutions.



## 🚀 Getting Started

# Prerequisites

Ensure you have the following installed:

- Node.js: v16 or later
- Yarn: Package manager
- Expo CLI: Install globally using npm install -g expo-cli

# Installation

1. Clone the repository:
`
git clone https://github.com/your-username/xyz-finance.git
cd xyz-finance
`
2. Install dependencies:
`
yarn install
`
3. Start the development server:
`yarn start`
4. Run on a specific platform:
- Android: `yarn android`
- iOS: `yarn ios`
- Web: `yarn web`

## 🤝 Acknowledgments

Special thanks to the developers and libraries that made this project possible:

- React Native
- Expo
- Redux Toolkit
- Styled Components
