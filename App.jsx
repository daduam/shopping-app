import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Fragment, useMemo, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Header from "./components/Header";
import AuthContext from "./contexts/AuthContext";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [authUser, setAuthUser] = useState("");

  const authContext = useMemo(() => {
    return {
      authUser,
      setAuthUser,
    };
  }, [authUser, setAuthUser]);

  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: (props) => <Header {...props} />,
            }}
          >
            {authUser ? (
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
