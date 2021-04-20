import React, { useState } from "react";

import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";

import fonts from "../styles/fonts";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas de {"\n"}
        forma fácil
      </Text>
      <Image source={wateringImg} style={styles.image} resizeMode="contain" />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}  onPress={handleStart}>
        <Feather name="chevron-right" style={styles.buttonIcon}></Feather>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 38,
  },

  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: colors.heading,
    paddingHorizontal: 20,
    fontFamily: fonts.text,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 10,
    height: 56,
    width: 56,
  },

  textbutton: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white,
    paddingHorizontal: 20,
  },
  buttonIcon: {
    fontSize: 18,
    color: colors.white,
  },
});
