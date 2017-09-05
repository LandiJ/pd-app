import React, { Component } from "react";
import { Text, WebView } from "react-native";

class Scores extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "https://github.com/facebook/react-native" }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default Scores;
