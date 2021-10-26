import React from "react";
import { StyleSheet, View } from "react-native";
import { Headline, Subheading } from "react-native-paper";
import colors from "../../constants/colors";

export default ({ header, subheader, children }) => {
  return (
    <View style={styles.container}>
      {(header || subheader) && (
        <View style={styles.headingContainer}>
          {header && <Headline style={styles.headerText}>{header}</Headline>}
          {subheader && (
            <Subheading style={styles.subheaderText}>{subheader}</Subheading>
          )}
        </View>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    marginBottom: 28,
  },
  headerText: {
    color: colors.primary,
    marginBottom: 12,
  },
  subheaderText: {
    color: colors.gray,
    marginBottom: 12,
  },
});
