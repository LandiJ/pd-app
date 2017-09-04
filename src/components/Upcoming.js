import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Image,
  Container,
  StyleSheet,
  ScrollView
} from "react-native";

export default class Upcoming extends Component {
  render() {
    return (
      <ScrollView minimumZoomScale={0.95} maximumZoomScale={2}>

        <Image
          source={require("./iten-page-006.jpg")}
          style={{
            resizeMode: "contain",
            aspectRatio: 0.5,
            width: 130 + "%",
            height: 80 + "%"
          }}
        />

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  }
});
