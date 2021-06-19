import React, { useState, useRef } from "react";
import { CommonActions } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import MakanpeIcon from "../assets/makanpe-icon";
import * as Authentication from "../../api/auth";

const SignupPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailTextInput = useRef();
  const passwordTextInput = useRef();

  const goBack = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    Authentication.createAccount(
      { name: username, email, password },
      (user) =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "Home",
                params: { name: user.displayName },
              },
            ],
          })
        ),
      (error) => {
        return <Alert>{error}</Alert>;
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row", paddingTop: 200 }}>
        <Text style={styles.logo}>Makan</Text>
        <MakanpeIcon color={"white"} size={90} />
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.details}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              value={username}
              placeholder="Enter Username"
              placeholderTextColor="#958686"
              onChangeText={setUsername}
              returnKeyType="next"
              onSubmitEditing={() => emailTextInput.current.focus()}
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              ref={emailTextInput}
              keyboardType="email-address"
              value={email}
              placeholder="Enter Email Here"
              placeholderTextColor="#958686"
              onChangeText={setEmail}
              returnKeyType="next"
              onSubmitEditing={() => passwordTextInput.current.focus()}
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              ref={passwordTextInput}
              placeholder="Password"
              placeholderTextColor="#958686"
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={styles.createAcc}>
            <Text style={styles.createAccText} onPress={handleRegister}>
              Create Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.goBackButton} onPress={goBack}>
              Already have an account? Sign In!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5858",
    alignItems: "center",
    justifyContent: "center",
  },
  subcontainer: {
    flex: 2,
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  details: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 70,
    color: "white",
    fontWeight: "bold",
  },

  inputView: {
    backgroundColor: "#ECECEC",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginTop: 15,
    alignItems: "flex-start",
  },

  TextInput: {
    height: 100,
    flex: 1,
    padding: 10,
  },

  createAccText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },

  createAcc: {
    width: "70%",
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: "#FF5858",
  },
  goBackButton: {
    height: 30,
    color: "grey",
    fontSize: 15,
  },
});

export default SignupPage;
