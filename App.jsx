import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import * as SecureStorage from "expo-secure-store";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { Platform } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Header from "./components/Header";
import AuthContext from "./contexts/AuthContext";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";

const Stack = createNativeStackNavigator();
const key = "AUTH_TOKEN";

export default function App() {
  const [isLoading, setLoadingComplete] = useState(false);
  const [authData, setAuthData] = useState(null);
  const isWeb = Platform.OS === "web";

  useEffect(() => {
    async function prepareApp() {
      try {
        const result = isWeb
          ? await AsyncStorage.getItem(key)
          : await SecureStorage.getItemAsync(key);
        if (result) {
          setAuthData(JSON.parse(result));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingComplete(true);
      }
    }

    prepareApp();
  }, []);

  const authContext = useMemo(() => {
    return {
      setLoginToken: async (token, username) => {
        const data = { token, username };
        isWeb
          ? await AsyncStorage.setItem(key, JSON.stringify(data))
          : await SecureStorage.setItemAsync(key, JSON.stringify(data));
        setAuthData(data);
      },
      removeLoginToken: async () => {
        isWeb
          ? await AsyncStorage.removeItem(key)
          : await SecureStorage.deleteItemAsync(key);
        setAuthData(undefined);
      },
    };
  }, []);

  if (!isLoading) {
    return <AppLoading />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: (props) => <Header {...props} />,
            }}
          >
            {authData ? (
              <Fragment>
                <Stack.Screen
                  name="home"
                  component={HomeScreen}
                  options={{ title: "Browse modern furniture" }}
                />
                <Stack.Screen
                  name="product"
                  component={ProductScreen}
                  options={{ title: "Product" }}
                />
              </Fragment>
            ) : (
              <Fragment>
                <Stack.Screen
                  name="login"
                  component={LoginScreen}
                  options={{ title: "Log in to continue" }}
                />
              </Fragment>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
}
