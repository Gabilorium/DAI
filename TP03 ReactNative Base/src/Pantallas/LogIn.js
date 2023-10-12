import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import BotonReutilizable from '../Components/BotonReutilizable';
import MessageConstants from '../MessageConstants';
import UsuarioService from '../Services/UsuarioService';

const LogIn = ({navigation}) => {
  let service = new UsuarioService();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
  const staticImage = require('../../assets/Logo_Login.png')

  const handleLogin = async() => {
    if (username !== "" && password !== "") {    
      if (await service.login(username.toLowerCase(),password.toLowerCase())){
        
        await service.almacenarCredenciales(username.toLowerCase(),password.toLowerCase());
        alert(MessageConstants.MSG_USUARIO_CREADO)
        navigation.navigate('PageTabs');
      }
      else{
        alert(MessageConstants.MSG_USUARIO_O_CLAVE_INVALIDO)
      }
    }else{
      alert(MessageConstants.MSG_COMPLETAR_CAMPOS)
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <Image source={staticImage} style={styles.image}/>
      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput 
        style={styles.input}
        editable
        maxLength={12} 
        placeholder="IngreseelUsuario('gabi')" 
        onChangeText={(text)=>setUsername(text)} 
        value={username} 
        returnKeyType='next' 
        onSubmitEditing={() => { passwordRef.current.focus(); }} 
        blurOnSubmit={false}
        />
        
      <TextInput  
        textAlignVertical=''
        editable
        style={styles.input} 
        placeholder="Ingreselaclave('chedar')"
        onChangeText={(text)=>setPassword(text)} 
        value={password}
        ref={passwordRef} 
        secureTextEntry
      />
      <BotonReutilizable event={handleLogin} text={"Iniciar sesión"}></BotonReutilizable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9e8cc',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  div: {
    width: '25%',
    height: '25%',
  },
  image: {
    width: '50%',
    height: '25%',
    resizeMode: 'contain',
    borderRadius: 1000,
  },
});

export default LogIn;