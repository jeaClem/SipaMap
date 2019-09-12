import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1Ijoic2lwYW9mIiwiYSI6ImNrMDJpcXZpZzA0N3UzY28yZmhsN25wcW4ifQ.QPzvW_koha_7Iru8FSYccA");
/** MOn CODE RAJOUTE/ compile (project(':mapbox-react-native-mapbox-gl')) {
  compile ('com.squareup.okhttp3:okhttp:3.6.0') {
      force = true
  }
}*/
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "red"
  },
  map: {
    flex: 1,
    padding: 10,
  }
});

export default class Map extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    );
  }
}