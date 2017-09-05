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
  ScrollView,
  WebView
} from "react-native";

import { Spinner } from "native-base";

export default class Upcoming extends Component {
  constructor() {
    super();
    this.state = {
      layoutChanged: false
    };
  }

  renderPDF = () => (
    <WebView
      source={{
        uri: "http://www.produffersusa.org/2017%20National/SA%202017%20National%20-%20Copy.pdf"
      }}
    />
  );

  render() {
    return (
      <View
        style={styles.container}
        onLayout={() => this.setState({ layoutChanged: true })}
      >

        {this.state.layoutChanged ? this.renderPDF() : <View />}

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});
