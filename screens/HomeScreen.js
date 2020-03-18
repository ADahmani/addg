import React, { useState, Component } from "react";
import { Alert, TextInput, View, StyleSheet, Image } from "react-native";
import Modal from "react-native-modal";
import {
  Input,
  Text,
  CheckBox,
  Button,
  Icon
} from "react-native-elements";
import DatePicker from "react-native-datepicker";
import SignaturePad from "react-native-signature-pad";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  onLogin() {
    const { username, password } = this.state;

    Alert.alert("Credentials", `${username} + ${password}`);
  }

  signaturePadChange = ({ base64DataUrl }) => {
    console.log("Got new signature: " + base64DataUrl);
    this.setState({ signature: base64DataUrl });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ position: "absolute", top: "-38%", left: "-20%" }}
          source={require("../assets/images/header-bg.png")}
        />
        <View style={styles.header}>
          <Text style={{ fontSize: 20, color: "#fff" }} h1>
            Je suis..
          </Text>
        </View>

        <Text style={styles.inputs}>Mme / M.</Text>
        <Input
          // onChangeText={username => this.setState({ username })}
          placeholder={"Alexandre François"}
        />
        <Text style={styles.inputs}>Né(e) le</Text>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date}
          mode="date"
          placeholder="23-04-1993"
          format="DD-MM-YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2020"
          confirmBtnText="Confirmer"
          cancelBtnText="Annuler"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36,
              borderWidth: 0,
              padding: 10,
              width: "100%",
              borderBottomWidth: 1.3
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={date => {
            this.setState({ date: date });
          }}
        />
        <Text style={styles.inputs}>Adresse</Text>
        <Input
          // onChangeText={username => this.setState({ username })}
          placeholder={"3 Olivier de montalent"}
        />
        <Text style={styles.inputs}>Ville</Text>
        <Input
          // onChangeText={username => this.setState({ username })}
          placeholder={"Lille, Paris.."}
        />
        <Text style={styles.inputs}>Signature</Text>

        <View
          style={{
            borderWidth: 2,
            borderRadius: 20,
            borderColor: "orange",
            flex: 1,
            width: "100%"
          }}
        >
          <SignaturePad
            onChange={this.signaturePadChange}
            style={{
              flex: 1,
              backgroundColor: "white",
              borderRadius: 20
            }}
          />
        </View>
        <Button
          color="#D64E2C"
          linearGradientProps={{
            colors: ["#F66E2C", "#F65E3C"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 }
          }}
          style={{ paddingTop: 30, width: '100%'}}
          title="Entregister"
        />
        <View style={{ marginTop: 30, width: 320, height: 50, borderWidth: 1}}>
          <Text>Ads</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10
  },
  input: {
    width: 400,
    height: 44,
    padding: 10,
    margin: 5
  },
  header: {
    // textAlign: "left",
    width: "100%",
    paddingLeft: 40,
    margin: 20
    // flex: 1
  },
  inputs: {
    textAlign: "center",
    width: "100%",
    marginTop: 40,
    fontSize: 20,
    borderColor: "orange",
    borderBottomWidth: 4
  },
  horizontal: {
    width: "100%",
    flexDirection: "row"
  }
});
