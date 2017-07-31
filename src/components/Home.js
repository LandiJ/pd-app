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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onAboutPress = this.onAboutPress.bind(this);
    this.onAnnouncePress = this.onAnnouncePress.bind(this);
    this.onUpcomingPress = this.onUpcomingPress.bind(this);
    this.onSchedulePress = this.onSchedulePress.bind(this);
    this.onContactPress = this.onContactPress.bind(this);
  }
  onAboutPress() {
    const { navigate } = this.props.navigation;
    navigate("About");
  }
  onAnnouncePress() {
    const { navigate } = this.props.navigation;
    navigate("Announcements");
  }
  onUpcomingPress() {
    const { navigate } = this.props.navigation;
    navigate("Upcoming");
  }
  onSchedulePress() {
    const { navigate } = this.props.navigation;
    navigate("Schedule");
  }
  onContactPress() {
    const { navigate } = this.props.navigation;
    navigate("Contact");
  }
  render() {
    return (
      <Image
        source={require("./golf-sunset-sport-golfer.jpg")}
        style={styles.container}
      >
        <Button full bordered style={{}} onPress={this.onAboutPress}>
          <Text> About Us </Text>
        </Button>
        <Button full style={{}} bordered onPress={this.onAnnouncePress}>
          <Text> Announcements </Text>
        </Button>
        <Button block style={{}} bordered onPress={this.onUpcomingPress}>
          <Text> Upcoming Events </Text>
        </Button>
        <Button block style={{}} bordered onPress={this.onSchedulePress}>
          <Text> Schedule </Text>
        </Button>
        <Button block style={{}} bordered onPress={this.onContactPress}>
          <Text> Contact Us </Text>
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
