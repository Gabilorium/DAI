import React from 'react';
import { ToastAndroid } from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';
import BotonReutilizable from '../Components/BotonReutilizable';
import MessageConstants from '../MessageConstants';
import UsuarioService from '../Services/UsuarioService';

const Pantalla2 = ({ navigation }) => {

    const usuarioService = new UsuarioService();
    const eliminarAsyncStorage = async () => {
      await usuarioService.eliminarCredenciales();
      ToastAndroid.show(MessageConstants.MSG_ELIMINAR_CREDENCIALES, ToastAndroid.SHORT);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Esta es pantalla de informacion!</Text>
            <BotonReutilizable event={eliminarAsyncStorage} text={"Eliminar asyncStorage"} style={styles.button}></BotonReutilizable>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button:{
        backgroundColor: 'rgb(255,0,0)',
    }
});

export default Pantalla2;