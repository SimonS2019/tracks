import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import Map from "../components/Map";
import { withNavigationFocus } from "react-navigation";
import "../_mockLocation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

  // console.log(isFocused);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h2}>Create a Track</Text>
      <Map />
      {err ? <Text>Please grant us location access</Text> : null}
      <TrackForm />
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

export default withNavigationFocus(TrackCreateScreen);
