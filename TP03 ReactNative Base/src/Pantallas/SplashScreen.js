import { useEffect } from "react";
import {Image, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import Logo from "../../assets/Logo.png";
import UsuarioService from "../Services/UsuarioService";

const SplashScreen = ({navigation}) => { 
    let usuarioService = new UsuarioService();

    const verificarInicioSesion = async() => {
      if(await usuarioService.autoLogin()){
        navigation.navigate("PageTabs");
      }else{
        navigation.navigate("LogIn");
      }
    }
  
    useEffect(() => {
      setTimeout(verificarInicioSesion, 3000);
    }, [])
  
    return (
      <SafeAreaView style={[styles.container]}>
        <Image source={Logo} style={styles.logo}/>
        <ActivityIndicator size="large"/>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    logo: {
      width: '75%',
      height: '40%',
      marginBottom: 20
    },
    container: {
      flex: 1,
      backgroundColor: '#f9e8cc',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default SplashScreen;