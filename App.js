import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppBar, Button, HStack } from "@react-native-material/core";
import MapView from "./components/MapView";

export default function App() {
  const [mapView, setMapView] = useState(true);
  return (
    <View>
      <AppBar title="Main menu">
        <HStack m={4} spacing={6}>
          <Button
            title="Map"
            onPress={() => setMapView(true)}
            trailing
            style={{ marginEnd: 4 }}
          />{" "}
          <Button
            title="Table"
            onPress={() => setMapView(false)}
            trailing
            style={{ marginEnd: 4 }}
          />
        </HStack>
      </AppBar>
      <Text>{mapView ? <MapView /> : "TABLE"}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 13,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});*/
