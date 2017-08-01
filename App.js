import React from "react";
import Expo from "expo";
import { StyleSheet, Text, View } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";

import Home from "./src/components/Home";
import AboutPage from "./src/components/AboutPage";
import Announcements from "./src/components/Announcements";
import Upcoming from "./src/components/Upcoming";
import Schedule from "./src/components/Schedule";
import Contact from "./src/components/Contact";
import ContactDetail from "./src/components/ContactDetail";

export default class App extends React.Component {
  render() {
    const AppStack = StackNavigator({
      Home: {
        screen: Home
        // navigationOptions: {
        //   title: "PRO-DUFFERS HOME"
        // }
      },
      About: {
        screen: AboutPage,
        navigationOptions: {
          title: "ABOUT US",
          headerTitleStyle: {
            color: "white"
          }
        }
      },
      Announcements: {
        screen: Announcements,
        navigationOptions: {
          title: "ANNOUNCEMENTS"
        }
      },
      Upcoming: {
        screen: Upcoming,
        navigationOptions: {
          title: "UPCOMING EVENTS"
        }
      },
      Schedule: {
        screen: Schedule,
        navigationOptions: {
          title: "Schedule"
        }
      },
      Contact: {
        screen: Contact,
        navigationOptions: {
          title: "Contact Us"
        }
      },
      ContactDetail: {
        screen: ContactDetail,
        navigationOptions: ({ navigation }) => ({
          title: `${navigation.state.params.name.toUpperCase()}`
        })
      }
    });
    return <AppStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  },
  textStyle: {
    fontSize: 40
  }
});
