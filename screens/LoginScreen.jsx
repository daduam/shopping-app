import React, { useState } from "react";
import { View } from "react-native";
import { Button, Caption, TextInput } from "react-native-paper";
import { Form } from "../components/Form";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      header="Login"
      subheader="Welcome, enter your login details to continue"
    >
      <TextInput
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={{ marginBottom: 28 }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
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
        <Caption>Forgot password</Caption>
      </View>
      <Button
        mode="contained"
        onPress={() => {
          console.log(`Logging in as ${username}`);
          // TODO navigate to homepage
        }}
      >
        Login
      </Button>
    </Form>
  );
};
