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

class AdminLogin extends Component {
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
    this.setState({ title });
  }
  handlePasswordInput(e) {
    var body = this.state.body;
    body = e.target.value;
    this.setState({ body });
  }
  handleAdminPress(e) {
    const { navigate } = this.props.navigation;
    navigate("AdminHome");
  }

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
