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
  ScrollView,
  RefreshControl
} from "react-native";
import { Content, Thumbnail, Body, Spinner, Button } from "native-base";

class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: [],
      refreshing: false
    };
  }

  updateList = e => {
    e.preventDefault();
    // axios
    //   .get("https://produffersdatabase.herokuapp.com/announcements")
    //   .then(response => {
    //     let announcements = response.data;
    //     this.setState({ announcements });
    //   });
  };

  _onRefresh() {
    this.setState({ refreshing: true });
    axios
      .get("https://produffersdatabase.herokuapp.com/announcements")
      .then(response => {
        let announcements = response.data;
        this.setState({ announcements: announcements, refreshing: false });
      });
  }

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
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
        <AnnouncementList
          announcements={this.state.announcements}
          navigation={this.props.navigation}
        />

      </ScrollView>
    );
  }
}

export default Announcements;
