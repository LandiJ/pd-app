import React, { Component } from "react";
import {
  AppRegistry,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  Image,
  StyleSheet
} from "react-native";
import { Button, Text, Container } from "native-base";
var yourPicture = require("./kmassy.jpg");

export default class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onAddAnnouncementPress = this.onAddAnnouncementPress.bind(this);
    this.onHomePress = this.onHomePress.bind(this);
  }

  onAddAnnouncementPress() {
    const { navigate } = this.props.navigation;
    navigate("AddAnnouncements");
  }
  onHomePress() {
    const { navigate } = this.props.navigation;
    navigate("Home");
  }
  render() {
    return (
      <Image
        source={require("./golf-sunset-sport-golfer.jpg")}
        style={styles.container}
      >

        <Text
          style={{
            fontSize: 60,
            position: "relative",
            bottom: 160,
            fontFamily: "Baskerville-SemiBoldItalic",
            color: "burlywood",
            textShadowColor: "black",
            textShadowOffset: { width: 5, height: 5 },
            textAlign: "center"
          }}
        >
          Pro-Duffers Admin
        </Text>

        <Button
          full
          style={{ backgroundColor: "black", margin: 20 }}
          onPress={this.onAddAnnouncementPress}
        >
          <Text
            style={{
              color: "burlywood",
              fontWeight: "bold",
              fontFamily: "Baskerville",
              fontSize: 20
            }}
          >
            {" "}Add Announcements{" "}
          </Text>
        </Button>
        <Button
          full
          style={{ backgroundColor: "black", margin: 20 }}
          onPress={this.onHomePress}
        >
          <Text
            style={{
              color: "burlywood",
              fontWeight: "bold",
              fontFamily: "Baskerville",
              fontSize: 20
            }}
          >
            {" "}Back Home{" "}
          </Text>
        </Button>

      </Image>
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
