import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Separator
} from "native-base";
export default class Schedule extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Separator bordered>
            <Text>WEDNESDAY SEPTEMBER 27, 2017</Text>
          </Separator>
          <ListItem>
            <Text>REGISTRATION 3:00P.M. – 10:00 P.M. (HOTEL LOBBY)</Text>
          </ListItem>
          <Separator bordered>
            <Text>THURSDAY SEPTEMBER 28, 2017</Text>
          </Separator>
          <ListItem>
            <Text>REGISTRATION 8:00 A.M. -1:00 P.M. (HOTEL LOBBY)</Text>
          </ListItem>
          <ListItem>
            <Text>GOLF 1:00 P.M. SHOTGUN START ON CANYON COURSE</Text>
            <Text> 1:00 P.M. SHOTGUN START ON OAKS COURSE</Text>
          </ListItem>
          <ListItem>
            <Text>
              NON-GOLFERS MEET 2:00 P.M. EXHIBIT HALL “MEET AND GREET”
              (HOSTED BY HOUSTON WIVES)
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              RECEPTION 7:00P.M. – 8:30 P.M. EXHIBIT HALL
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              HOSPITALITY SUITE 9:00P.M. – 10:30 P.M.{" "}
            </Text>
          </ListItem>
          <Separator bordered>
            <Text>FRIDAY SEPTEMBER 30, 2017</Text>
          </Separator>
          <ListItem>
            <Text>BREAKFAST 6:15A.M. - 9:30A.M. EXHIBIT HALL</Text>
          </ListItem>
          <ListItem>
            <Text>GOLF 8:00A.M. SHOTGUN START ON CANYON COURSE</Text>
          </ListItem>
          <ListItem>
            <Text>
              SAN ANTONIO TOUR –NON GOLFERS 10:00A.M. – 3:00P.M. (LUNCH INCLUDED)
              (HOSTED BY HOUSTON WIVES)
            </Text>
          </ListItem>
          <ListItem>
            <Text>GOLFERS LUNCH 1:00P.M. – 2:00P.M</Text>
          </ListItem>
          <ListItem>
            <Text>BUSINESS MEETING 3:00P.M. – 4:30P.M.</Text>
          </ListItem>
          <ListItem>
            <Text>HOSPITALITY SUITE 9:00P.M. – 10:30P.M.</Text>
          </ListItem>
          <Separator bordered>
            <Text>SATURDAY SEPTEMBER 31, 2017</Text>
          </Separator>
          <ListItem>
            <Text>BREAKFAST 6:15A.M. – 9:30A.M. EXHIBIT HALL</Text>
          </ListItem>
          <ListItem>
            <Text>GOLF 8:00A.M. SHOTGUN START ON CANYON COURSE</Text>
          </ListItem>
          <ListItem>
            <Text>GOLF 8:00A.M. SHOTGUN START ON OAKS COURSE</Text>
          </ListItem>
          <ListItem>
            <Text>
              FASHION SHOW and TEA-NON GOLFERS 12:30P.M. – 2:30P.M. (LUNCH INCLUDED)
              (HOSTED BY HOUSTON WIVES)
            </Text>
          </ListItem>
          <ListItem>
            <Text>GOLFERS LUNCH 1:00P.M. - 2:00P.M.</Text>
          </ListItem>
          <ListItem>
            <Text>ANNUAL BANQUET 7:00P.M. – 9:30P.M. EXHIBIT HALL</Text>
          </ListItem>
          <ListItem>
            <Text>HOSPITALITY SUITE 9:30P.M. – MIDNIGHT</Text>
          </ListItem>
          <Separator bordered>
            <Text>SUNDAY OCTOBER 1, 2017</Text>
          </Separator>
          <ListItem>
            <Text>
              2017 ANNUAL CONFERENCE AND TOURNAMENT ENDS – NO PLANNED ACTIVITIES
            </Text>
          </ListItem>

        </Content>
      </Container>
    );
  }
}
