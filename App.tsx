import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store/store";
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "./src/theme/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// AsyncStorage.clear();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("theme").then((value) => {
      if (value === "dark") setIsDarkTheme(true);
    });
  }, []);

  const toggleTheme = (value: boolean) => {
    AsyncStorage.setItem("theme", value ? "dark" : "light");
    setIsDarkTheme(value);
  };

  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigator
              onToggleTheme={()=>toggleTheme(!isDarkTheme)}
              isDarkTheme={isDarkTheme}
            />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
