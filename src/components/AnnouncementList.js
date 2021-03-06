import React, { Component } from "react";
import {
  AppRegistry,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  Image,
  StyleSheet,
  Container
} from "react-native";
import moment from "moment";
import { Button, Content, Text, Thumbnail, Body, Spinner } from "native-base";
import { SideMenu, List, ListItem } from "react-native-elements";
import Timestamp from "react-timestamp";

import Announcements from "./Announcements";

export default class AnnouncementList extends Component {
  constructor(props) {
    super(props);
  }

  handlePress = announcement => {
    const { navigate } = this.props.navigation;
    navigate("AnnouncementDetail", announcement);
  };
  render() {
    let list = this.props.announcements.reverse().map(announcement => {
      return (
        <ListItem
          roundAvatar
          onPress={() => this.handlePress(announcement)}
          key={announcement.createdAt}
          title={announcement.title}
          subtitle={moment(new Date(announcement.createdAt)).format(
            "ddd, DD MMM YYYY hh:mm a"
          )}
        />
      );
    });
    return <List>{list}</List>;
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
