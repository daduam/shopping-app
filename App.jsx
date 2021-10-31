import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Fragment } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Header from "./components/Header";
import useAuth, { AuthProvider } from "./hooks/useAuth";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const { authData } = useAuth();

  return (
    <AuthProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: (props) => <Header {...props} />,
            }}
          >
            {authData?.token ? (
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
    </AuthProvider>
  );
}
