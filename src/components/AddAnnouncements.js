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

class AddAnnouncements extends Component {
  constructor(props) {
    super(props);

    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleBodyInput = this.handleBodyInput.bind(this);
    this.handleHomePress = this.handleHomePress.bind(this);

    this.state = {
      title: "",
      body: ""
    };
  }
  handleTitleInput(e) {
    var title = this.state.title;
    title = e.target.value;
    this.setState({ title });
  }
  handleBodyInput(e) {
    var body = this.state.body;
    body = e.target.value;
    this.setState({ body });
  }
  handleHomePress(e) {
    const { navigate } = this.props.navigation;
    navigate("AdminHome");
  }

  addToList = e => {
    this.setState({
      title: this.state.title,
      body: this.state.body
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
              <Label>Announcement Title</Label>
              <Input
                onChangeText={title => {
                  this.setState({ title });
                }}
                value={this.state.title}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Announcement Text</Label>
              <Input
                name="body"
                onChangeText={body => {
                  this.setState({ body });
                }}
                value={this.state.body}
              />
            </Item>
          </Form>
          <Button
            full
            style={{ backgroundColor: "black", margin: 20 }}
            onPress={this.addToList}
          >
            <Text
              style={{
                color: "burlywood",
                fontWeight: "bold",
                fontFamily: "Baskerville",
                fontSize: 20
              }}
            >
              {" "}Add Announcement{" "}
            </Text>
          </Button>
        </Content>

      </Container>
    );
  }
}

export default AddAnnouncements;
