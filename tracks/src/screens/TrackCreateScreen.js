import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h2}>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  h2: {
    fontSize: 48,
  },
});

export default TrackCreateScreen;
