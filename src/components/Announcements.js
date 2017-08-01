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
      .get(
        "https://api.mlab.com/api/1/databases/announcements/collections/announcements?apiKey=rhDZW14oggcuOuAHH4SWq5llxkO_M_og"
      )
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
      .get(
        "https://api.mlab.com/api/1/databases/announcements/collections/announcements?apiKey=rhDZW14oggcuOuAHH4SWq5llxkO_M_og"
      )
      .then(response => {
        let announcements = response.data;
        this.setState({ announcements });
      });
  }

  render() {
    return (
      <ScrollView>
        <Button title="Refresh" onPress={this.updateList} />
        <AnnouncementList announcements={this.state.announcements} />

      </ScrollView>
    );
  }
}

export default Announcements;
