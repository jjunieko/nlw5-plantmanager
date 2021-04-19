import React , {useState} from "react";

import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
} from "react-native";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";

import { Button } from '../components/Button';


export function Welcome() {

 /*    const[visible, setVisible]= useState(false);

    function handleVisbility() {
        setVisible(true)
        
    } */


    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>
          Gerencie suas plantas de forma fácil
          </Text>
          <Image source={wateringImg} style={styles.image} />
          <Text style={styles.subtitle}>
            Não esqueça mais de regar suas plantas. 
            Nós cuidamos de lembrar você sempre que precisar.
          </Text>
          <Button title=">" onPress={() => console.log('clicou')} />
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 20,
      },
    
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
      },
    
      image: {
        width:292,
        height: 284,
      },
      subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.heading,
        paddingHorizontal: 20,
      },
    
      button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginTop: 10,
        marginBottom: 10,
        height: 56,
        width: 56,
      },
    
      textbutton: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.white,
        paddingHorizontal: 20,
      }
});
