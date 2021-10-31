import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

const key = "AUTH_TOKEN";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAuthData() {
      try {
        const result = await SecureStore.getItemAsync(key);
        if (result) {
          setAuthData(JSON.parse(result));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadAuthData();
  }, []);

  const setLoginToken = async (token, username) => {
    const data = { token, username };
    setAuthData(data);
    await SecureStore.setItemAsync(key, JSON.stringify(data));
  };

  const removeLoginToken = async () => {
    setAuthData(undefined);
    await SecureStore.deleteItemAsync(key);
  };

  return (
    <AuthContext.Provider
      value={{
        authData,
        loading,
        setLoginToken,
        removeLoginToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
