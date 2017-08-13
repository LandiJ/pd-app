import React, { Component } from "react";
import Autolink from "react-native-autolink";

import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  StyleSheet,
  ScrollView,
  Link
} from "react-native";
import { Button } from "native-base";
import { Tile, List, ListItem } from "react-native-elements";

class ContactDetail extends Component {
  render() {
    const {
      name,
      email,
      title,
      chapter,
      image
    } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={image}
          featured
          title={`${name.toUpperCase()}`}
          caption={email}
        />

        <List>
          <ListItem title={<Autolink text={email} />} hideChevron />
        </List>

      </ScrollView>
    );
  }
}

export default ContactDetail;
