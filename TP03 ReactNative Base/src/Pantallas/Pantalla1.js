import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BotonReutilizable from '../Components/BotonReutilizable';
import MessageConstants from '../MessageConstants';
import UsuarioService from '../Services/UsuarioService';

const Pantalla1 = ({ navigation }) => {

  let usuarioService = new UsuarioService();

  const alertAsyncStorage = async () => {
    let credenciales = await usuarioService.obtenerCredenciales();
    alert(MessageConstants.MSG_MOSTRAR_CREDENCIALES + JSON.stringify(credenciales));
  }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>¡Esta es la Home!</Text>
        <BotonReutilizable event={alertAsyncStorage} text={"Ver asyncStorage"}></BotonReutilizable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
  });

export default Pantalla1;