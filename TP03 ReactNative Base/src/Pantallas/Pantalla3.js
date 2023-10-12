import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BotonReutilizable from '../Components/BotonReutilizable';

const Pantalla3 = ({ navigation }) => {
    const handleLogout = () => {
        navigation.navigate('Login');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡En esta pantalla esta Mi Perfil!</Text>
            <BotonReutilizable event={handleLogout} text={"Cerrar sesión"} style={styles.button}></BotonReutilizable>
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
});

export default Pantalla3;