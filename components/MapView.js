import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import MapboxGL from "@rnmapbox/maps";
import { LatLng, LeafletView } from "react-native-leaflet-view";
import { useState, useEffect } from "react";

/*const DEFAULT_COORDINATE: LatLng = {
  lat: 50,
  lng: 15,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MapView = () => {
  return (
    <SafeAreaView style={styles.root}>
      <LeafletView
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
        mapLayers={[
          { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" },
        ]}
      />
    </SafeAreaView>
  );
};*/

MapboxGL.setWellKnownTileServer("Mapbox");
MapboxGL.setAccessToken(
  "pk.eyJ1IjoidHJvbGxib3QiLCJhIjoiY2w5N2o5NHVvMGY1MDNwbXY4c2VkNGlrMCJ9._nH4l1aalNeFeuH-hLBghw"
);
MapboxGL.setConnected(true);
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container: {
    height: 600,
    width: 360,
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
});

export default function MapView() {
  const [camera, setCamera] = useState(null);
  /*componentDidMount() {
    MapboxGL.setTelemetryEnabled(true);
  }*/

  //render() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} zoomEnabled={true}>
          <MapboxGL.MarkerView coordinate={[60, 10]} />
        </MapboxGL.MapView>
      </View>
    </View>
  );
  //}
}
