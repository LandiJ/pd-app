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
import { Button, Content, Text, Thumbnail, Body, Container } from "native-base";
import { SideMenu, List, ListItem } from "react-native-elements";

import Contacts from "./Contacts";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  handlePress = person => {
    const { navigate } = this.props.navigation;
    navigate("ContactDetail", person);
  };
  render() {
    let contact = Contacts.map(person => {
      return (
        <ListItem
          roundAvatar
          onPress={() => this.handlePress(person)}
          avatar={person.image}
          key={person.name}
          title={person.name}
          subtitle={person.title}
        />
      );
    });
    return <Container><Content><List>{contact}</List></Content></Container>;
  }
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontWeight: "bold"
  }
});
