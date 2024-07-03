// HomescreenCell.tsx is a component that displays a cell with an image,
// title, tagline, and estimated time of arrival (ETA) for a restaurant on the home screen.

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Cell } from "react-native-tableview-simple";
import { HomeScreenCellProps } from "../types";

const HomescreenCell: React.FC<HomeScreenCellProps> = ({ ...props }) => {
  const { key, imgUri, eta, title, tagline, height, onPress } = props;
  return (
    <Cell
      key={key}
      contentContainerStyle={styles.contentContainer}
      backgroundColor={"transparent"}
      highlightUnderlayColor="#ccc"
      hideSeparator={true}
      withSafeAreaView={true}
      onPress={onPress}
    >
      <View style={{ height: height, paddingHorizontal: 10 }}>
        <Image source={imgUri} style={styles.image} />
        <View style={styles.etaContainer}>
          <Text style={styles.eta}>{eta} mins</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.tagline}>{tagline}</Text>
        </View>
      </View>
    </Cell>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    alignSelf: "flex-start",
    height: 230,
    borderRadius: 10,
  },
  etaContainer: {
    position: "absolute",
    bottom: "12%",
    right: "10%",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 80,
    borderWidth: 1,
    borderColor: "#d3d3d3",

    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Shadow properties for Android
    elevation: 5,
  },
  eta: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: "wrap",
  },
  textContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tagline: {
    fontSize: 14,
    color: "#888",
  },
});

export default HomescreenCell;
