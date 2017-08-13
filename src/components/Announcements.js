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
  Button,
  Alert,
  ScrollView
} from "react-native";
import { Content, Thumbnail, Body, Spinner } from "native-base";

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
      return <Spinner />;
    }
    return (
      <ScrollView>
        <Button title="Refresh" onPress={this.updateList} />

        <AnnouncementList
          announcements={this.state.announcements}
          navigation={this.props.navigation}
        />

      </ScrollView>
    );
  }
}

export default Announcements;
