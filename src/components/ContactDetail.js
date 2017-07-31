import React, { Component } from "react";

import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  StyleSheet,
  ScrollView
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
          <ListItem title="Email" rightTitle={email} hideChevron />
        </List>

      </ScrollView>
    );
  }
}

export default ContactDetail;
