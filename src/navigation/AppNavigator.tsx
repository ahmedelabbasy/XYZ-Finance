import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import MyTransactionsScreen from "../screens/MyTransactionsScreen/MyTransactionsScreen";
import ManageTransactionScreen from "../screens/ManageTransactionScreen/ManageTransactionScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import SplashScreen from "../screens/SplashScreen/SplashScreen";

const Drawer = createDrawerNavigator();

const AppNavigator = ({ onToggleTheme, isDarkTheme }) => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.transactionItemBackground,
          },
          headerTintColor: theme.primary,
          drawerStyle: {
            backgroundColor: theme.modalCardBackground,
          },
          drawerActiveTintColor: theme.primary,
          drawerInactiveTintColor: theme.primary,
          headerRight: () => (
            <Ionicons
              name={isDarkTheme ? "sunny" : "moon"}
              size={24}
              color={theme.primary}
              onPress={onToggleTheme}
              style={{ marginRight: 20 }}
            />
          ),
        }}
      >
        <Drawer.Screen
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
          name="Splash"
          component={SplashScreen}
        />
        <Drawer.Screen
          name="Home"
          options={{
            drawerIcon: ({ color }) => (
              <Entypo name="pie-chart" size={24} color={color} />
            ),
          }}
        >
          {() => <HomeScreen />}
        </Drawer.Screen>
        <Drawer.Screen
          name="Transactions"
          component={MyTransactionsScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Entypo name="list" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="ManageTransaction"
          component={ManageTransactionScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Entypo name="add-to-list" size={24} color={color} />
            ),
            title: "Add Transaction",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
