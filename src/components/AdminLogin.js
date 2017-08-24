import React, { Component, AppRegistry } from "react";

import { Alert, TouchableOpacity, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Spinner
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
    this.setState({ showLoading: true });

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
        this.setState({ showLoading: false });
        this.saveItem("token", response.token), Alert.alert("Login Success!");
        const { navigate } = this.props.navigation;
        navigate("AdminHome");
      })
      .catch(err => {
        console.log(err, "boo!");
        Alert.alert("Invalid Credentials", "Please try again");
        const { navigate } = this.props.navigation;
        navigate("AdminLogin");
      });
    this.setState({
      username: "",
      password: ""
    });
  }

  render() {
    if (this.state.showLoading === true) {
      return (
        <View>
          <Spinner
            color="black"
            style={{
              marginTop: 300
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "Baskerville",
              fontSize: 15
            }}
          >
            Validating Credentials
          </Text>
        </View>
      );
    }
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
          <TouchableOpacity>
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
          </TouchableOpacity>
        </Content>

      </Container>
    );
  }
}

export default AdminLogin;
