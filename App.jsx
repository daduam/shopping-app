import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import * as SecureStorage from "expo-secure-store";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Header from "./components/Header";
import AuthContext from "./contexts/AuthContext";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();
const key = "AUTH_TOKEN";

export default function App() {
  const [isLoading, setLoadingComplete] = useState(false);
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    async function prepareApp() {
      try {
        const result = await SecureStorage.getItemAsync(key);
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
        await SecureStorage.setItemAsync(key, JSON.stringify(data));
        setAuthData(data);
      },
      removeLoginToken: async () => {
        await SecureStorage.deleteItemAsync(key);
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
                <Stack.Screen name="home" component={HomeScreen} />
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
