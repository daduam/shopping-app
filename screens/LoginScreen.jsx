import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Button, Subheading, TextInput } from "react-native-paper";
import AuthContext from "../contexts/AuthContext";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setLoginToken } = useContext(AuthContext);

  return (
    <View
      style={{
        paddingTop: 28,
        paddingHorizontal: 20,
      }}
    >
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={{ marginBottom: 28 }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 28 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginBottom: 28,
        }}
      >
        {/* TODO make link that navigates to forgot password screen */}
        <Subheading>Forgot password</Subheading>
      </View>
      <Button
        mode="contained"
        onPress={() => {
          setLoginToken("some-token-from-server", username);
        }}
      >
        Log in
      </Button>
    </View>
  );
};
