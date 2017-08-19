import React, { Component } from "react";
import axios from "axios";
import AnnouncementList from "./AnnouncementList";
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  ScrollView
} from "react-native";
import { Content, Thumbnail, Body, Spinner, Button } from "native-base";

class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: []
    };
  }

  updateList = e => {
    e.preventDefault();
    axios
      .get("https://produffersdatabase.herokuapp.com/announcements")
      .then(response => {
        let announcements = response.data;
        this.setState({ announcements });
      });
  };

  componentWillMount() {
    this.getAnnouncements();
  }

  getAnnouncements() {
    axios
      .get("https://produffersdatabase.herokuapp.com/announcements")
      .then(response => {
        let announcements = response.data;
        this.setState({ announcements });
      });
  }

  render() {
    if (this.state.announcements.length === 0) {
      return (
        <View>
          <Spinner
            color="black"
            style={{
              marginTop: 300
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "Baskerville",
              fontSize: 15
            }}
          >
            Announements are Loading
          </Text>
        </View>
      );
    }
    return (
      <ScrollView>
        <Button
          full
          style={{
            backgroundColor: "black",
            marginBottom: 5,
            marginTop: 20
          }}
        >
          <Text
            style={{
              color: "burlywood",
              fontWeight: "bold",
              fontFamily: "Baskerville",
              fontSize: 20
            }}
          >
            {" "}Back To Home{" "}
          </Text>
        </Button>
        <Button
          full
          style={{ backgroundColor: "black" }}
          onPress={this.updateList}
        >
          <Text
            style={{
              color: "burlywood",
              fontWeight: "bold",
              fontFamily: "Baskerville",
              fontSize: 20
            }}
          >
            {" "}Refresh{" "}
          </Text>
        </Button>
        <AnnouncementList
          announcements={this.state.announcements}
          navigation={this.props.navigation}
        />

      </ScrollView>
    );
  }
}

export default Announcements;
