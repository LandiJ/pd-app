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
    this.onAddPress = this.onAddPress.bind(this);
    this.onScoresPress = this.onScoresPress.bind(this);
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
  onAddPress() {
    const { navigate } = this.props.navigation;
    navigate("AdminLogin");
  }
  onScoresPress() {
    const { navigate } = this.props.navigation;
    navigate("Scores");
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
            top: 0,
            marginBottom: 60,
            fontFamily: "Baskerville-SemiBoldItalic",
            color: "burlywood",
            textShadowColor: "black",
            textShadowOffset: { width: 5, height: 5 },
            textAlign: "center"
          }}
        >
          Pro-Duffers USA Inc.
        </Text>

        {/*<Button
          full
          style={{ backgroundColor: "black", margin: 20 }}
          onPress={this.onAboutPress}
        >
          <Text
            style={{
              color: "burlywood",
              fontWeight: "bold",
              fontFamily: "Baskerville",
              fontSize: 20
            }}
          >
            {" "}About Us{" "}
          </Text>
        </Button>*/}
        <Button
          full
          style={{ backgroundColor: "black", margin: 7 }}
          onPress={this.onAnnouncePress}
        >
          <Text
            style={{
              color: "burlywood",
              fontWeight: "bold",
              fontFamily: "Baskerville",
              fontSize: 20
            }}
          >
            {" "}Announcements{" "}
          </Text>
        </Button>
        <Button
          full
          style={{ backgroundColor: "black", margin: 7 }}
          onPress={this.onSchedulePress}
        >
          <Text
            style={{
              color: "burlywood",
              fontWeight: "bold",
              fontFamily: "Baskerville",
              fontSize: 20
            }}
          >
            {" "}Schedule{" "}
          </Text>
        </Button>
        <Button
          full
          style={{ backgroundColor: "black", margin: 7 }}
          onPress={this.onContactPress}
        >
          <Text
            style={{
              color: "burlywood",
              fontWeight: "bold",
              fontFamily: "Baskerville",
              fontSize: 20
            }}
          >
            {" "}Contact Us{" "}
          </Text>
        </Button>
        <Button
          full
          style={{ backgroundColor: "black", margin: 7 }}
          onPress={this.onScoresPress}
        >
          <Text
            style={{
              color: "burlywood",
              fontWeight: "bold",
              fontFamily: "Baskerville",
              fontSize: 20
            }}
          >
            {" "}Scores{" "}
          </Text>
        </Button>
        <Button
          full
          style={{ backgroundColor: "black", margin: 7 }}
          onPress={this.onUpcomingPress}
        >
          <Text
            style={{
              color: "burlywood",
              fontWeight: "bold",
              fontFamily: "Baskerville",
              fontSize: 20
            }}
          >
            {" "}Souvenir Booklet{" "}
          </Text>
        </Button>
        <Button
          full
          style={{ backgroundColor: "black", margin: 7 }}
          onPress={this.onAddPress}
        >
          <Text
            style={{
              color: "burlywood",
              fontWeight: "bold",
              fontFamily: "Baskerville",
              fontSize: 20
            }}
          >
            {" "}Admin{" "}
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
    alignItems: "center",
    resizeMode: "stretch"
  }
});
