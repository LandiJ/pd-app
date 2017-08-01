import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
  Alert
} from "react-native";
import { Content, Thumbnail, Body } from "native-base";
import { SideMenu, List, ListItem } from "react-native-elements";

class AnnouncementList extends Component {
  render() {
    let list = this.props.announcements.map((announcement, index) => (
      <ListItem key={index} title={announcement.name} />
    ));

    return (
      <List>
        {list}
      </List>
    );
  }
}

export default AnnouncementList;
