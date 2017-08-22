import React, { Component } from "react";
import Autolink from "react-native-autolink";
import moment from "moment";

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
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Button,
  Body
} from "native-base";
import { Tile, List, ListItem } from "react-native-elements";

export default class AnnouncementDetail extends Component {
  render() {
    const { title, body, createdAt } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Container>
          <Content>
            <Card>
              <CardItem header>
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 30
                  }}
                >
                  {title}
                </Text>
              </CardItem>
              <CardItem header>
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20
                  }}
                >
                  {body}
                </Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    {moment(new Date(createdAt)).format(
                      "ddd, DD MMM YYYY hh:mm a"
                    )}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: undefined,
    height: undefined,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  }
});
