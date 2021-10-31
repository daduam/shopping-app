import React from "react";
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";

export default ({ navigation, options, route, back }) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
