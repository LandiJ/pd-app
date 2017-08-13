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

class AnnouncementDetail extends Component {
  render() {
    const { title, body, createdAt } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Container>
          <Content>
            <Card>
              <CardItem header>
                <Text>{title}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    {body}
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

export default AnnouncementDetail;
