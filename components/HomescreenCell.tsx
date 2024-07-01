import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import { Cell } from "react-native-tableview-simple";
import { HomeScreenCellProps } from "../types"; // Import the HomeScreenCellProps interface from types.ts

const HomescreenCell: React.FC<HomeScreenCellProps> = ({ ...props }) => {
  return (
    <Cell
      key={props.key}
      contentContainerStyle={{ flex: 1 }} // Ensure content stretches to fill the cell
      backgroundColor={"transparent"}
      highlightUnderlayColor="#ccc"
      hideSeparator={true}
      withSafeAreaView={true}
      onPress={props.action} // If interaction is needed, you can still add onPress here
    >
      <View style={{ height: props.height, paddingHorizontal: 10 }}>
        <Image source={props.imgUri} style={styles.image} />
        <View style={styles.etaContainer}>
          <Text style={styles.eta}>{props.eta} mins</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.tagline}>{props.tagline}</Text>
        </View>
      </View>
    </Cell>
  );
};

const styles = StyleSheet.create({
  cellContentView: {
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
    backgroundColor: "#fff", // Set the highlight color
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 80,
    borderWidth: 1, // Set the border width
    borderColor: "#d3d3d3", // Set the border color to light grey

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
    flexWrap: "wrap", // Allow text wrapping
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
