import React, { Component, AppRegistry } from "react";

import { Alert } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from "native-base";

import { AsyncStorage } from "react-native";

class AdminLogin extends Component {
  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error("AsyncStorage error: " + error.message);
    }
  }
  constructor(props) {
    super(props);

    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleAdminPress = this.handleAdminPress.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }
  handleUsernameInput(e) {
    var title = this.state.title;
    title = e.target.value;
    this.setState({ username });
  }
  handlePasswordInput(e) {
    var body = this.state.body;
    body = e.target.value;
    this.setState({ password });
  }
  handleAdminPress(e) {
    fetch("https://produffersdatabase.herokuapp.com/users/login", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        this.saveItem("token", response.token), Alert.alert("Login Success!");
        const { navigate } = this.props.navigation;
        navigate("AdminHome");
      })
      .catch(err => {
        console.log(err, "boo!");
        Alert.alert("Invalid Credentials", "Please try again");
      });
    this.setState({
      username: "",
      password: ""
    });

    addToList = e => {
      this.setState({
        username: this.state.title,
        password: this.state.body
      });

      fetch("https://produffersdatabase.herokuapp.com/announcements", {
        method: "POST",
        body: JSON.stringify({
          title: this.state.title,
          body: this.state.body
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          console.log(response, "yay");
        })
        .catch(err => {
          console.log(err, "boo!");
        });
      this.setState({
        title: "",
        body: ""
      });
      this.handleHomePress();
      Alert.alert("Success!", "Announcement Added");
    };
  }

  render() {
    return (
      <Container>

        <Content>

          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={username => {
                  this.setState({ username });
                }}
                value={this.state.username}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                onChangeText={password => {
                  this.setState({ password });
                }}
                value={this.state.password}
              />
            </Item>
          </Form>
          <Button
            full
            style={{ backgroundColor: "black", margin: 20 }}
            onPress={this.handleAdminPress}
          >
            <Text
              style={{
                color: "burlywood",
                fontWeight: "bold",
                fontFamily: "Baskerville",
                fontSize: 20
              }}
            >
              {" "}Login{" "}
            </Text>
          </Button>
        </Content>

      </Container>
    );
  }
}

export default AdminLogin;
