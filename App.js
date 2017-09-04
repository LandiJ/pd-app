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
import AnnouncementDetail from "./src/components/AnnouncementDetail";
import AnnouncementList from "./src/components/AnnouncementList";
import AddAnnouncements from "./src/components/AddAnnouncements";
import AdminLogin from "./src/components/AdminLogin";
import AdminHome from "./src/components/AdminHome";

export default class App extends React.Component {
  render() {
    const AppStack = StackNavigator({
      Home: {
        screen: Home,

        navigationOptions: { header: null }
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
          title: "Announcements"
        }
      },
      AnnouncementDetail: {
        screen: AnnouncementDetail,

        navigationOptions: ({ navigation }) => ({
          title: `${navigation.state.params.title}`
        })
      },
      AddAnnouncements: {
        screen: AddAnnouncements,

        navigationOptions: {
          title: "Add Announcements"
        }
      },
      AdminLogin: {
        screen: AdminLogin,
        navigationOptions: {
          title: "Admin Login"
        }
      },
      AdminHome: {
        screen: AdminHome,
        navigationOptions: { header: null }
      },
      Upcoming: {
        screen: Upcoming,
        navigationOptions: { header: null }
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
