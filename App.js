// Import stuffs here
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import bgImage from "./assets/qqq.jpg";
import logo from "./assets/freelogo.jpg";

// Define all variables used in stylesheet here
const bgClr = "#ffffff";
const logoTextClr = "white";
const bgClrIpt = "rgba(0,0,0,0.35)";
const clrIpt = "rgba(255,255,255,0.7)";
const { width: WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: bgClr,
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50
  },
  logo: {
    width: 120,
    height: 120
  },
  logoText: {
    color: logoTextClr,
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5
  },
  input: {
    width: WIDTH - 55,
    height: 25,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: bgClrIpt,
    color: clrIpt,
    marginHorizontal: 25
  },
  inputIcon: {
    position: "absolute",
    left: 37
  },
  inputContainer: {
    marginTop: 10
  },
  btnEye: { position: "absolute", right: 37 },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#432577",
    justifyContent: "center",
    marginTop: 20
  },
  text: {
    color: clrIpt,
    fontSize: 16,
    textAlign: "center"
  }
});

export default class Example extends Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false
    };
  }

  // something wrong with this function, need to rewrite ???
  showPass = () => {
    if ((this.state.press = false)) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  };

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.bgContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>React Native</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name="md-contact"
            size={28}
            color="rgba(255,255,255,0.7)"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="rgba(255,255,255,0.7)"
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name="logo-facebook"
            size={28}
            color="rgba(255,255,255,0.7)"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={this.state.showPass}
            placeholderTextColor="rgba(255,255,255,0.7)"
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            style={styles.btnEye}
            onPress={this.showPass.bind(this)}
          >
            <Icon
              name={(this.state.press = false ? "md-eye-off" : "md-eye")}
              size={26}
              color="rgba(255,255,255,0.7)"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        {/* This compo is from react-native-elements */}
        <ThemeProvider>
          <Button title="Solid Button" />
        </ThemeProvider>
      </ImageBackground>
    );
  }
}
