

import { View, Text, StyleSheet, SafeAreaView, TextInput, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react';
import MessageConstants from '../Constants/MessageConstants'
import ReusableButton from '../Components/ReusableButton';
import DataService from '../Services/DataService';
import ModalMessage from '../Components/ModalMessage';

let dataService = new DataService();

const Configuration = () => {
    const [phone, setPhone] = useState();
    const [urlVideo, setUrlVideo] = useState();
    const [urlMusic, setUrlMusic] = useState();
    const [visibleModal, setVisibleModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async () => {
        if (phone && urlMusic && urlVideo) {
            if (await dataService.saveData(phone, urlVideo, urlMusic)) 
            {
                setModalMessage(MessageConstants.MSG_SAVED_DATA);
                setSuccess(true)
            } else {
                setModalMessage(MessageConstants.MSG_SAVED_FAILED);
                setSuccess(false)
            }
        } else {
            setModalMessage(MessageConstants.MSG_INCOMPLETE_FIELDS);
            setSuccess(false)
        }
        setVisibleModal(true)
    }

    const loadBackground = async () => {
        if (JSON.parse(await dataService.getBackground())) {
          let backgroundImage = JSON.parse(await dataService.getBackground());
          setImage(backgroundImage.uri);
        }
    }

    useEffect(() => {
        loadBackground();
      }, []);


    return(
        <SafeAreaView style={[styles.container]}>
            <ImageBackground source={{ uri: image }} style={styles.image}>
                <Text style={[styles.textLabel]}>Telefono</Text>
                <TextInput
                editable
                style={styles.input}
                placeholder="Enter emergency phone number"
                keyboardType="numeric"
                onChangeText={input => setPhone(input)}
                />
                <Text style={[styles.textLabel]}>Video URL</Text>
                <TextInput
                editable
                style={styles.input}
                value={urlVideo}
                placeholder="Enter a video URL"
                onChangeText={input => setUrlVideo(input)}
                />
                <Text style={[styles.textLabel]}>Music URL</Text>
                <TextInput
                editable
                style={styles.input}
                value={urlMusic}
                placeholder="Enter a music URL"
                onChangeText={input => setUrlMusic(input)}
                />
                <ReusableButton event={handleSubmit} style={styles.button}  text='enter data'/>
            </ImageBackground>
            <ModalMessage msg={modalMessage} modalVisible={visibleModal} setVisibleModal={setVisibleModal} success={success} />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      backgroundColor: '#fff'
    },
    button: {
      marginTop: 20,
      width: 300,
      height: 60,
      backgroundColor: 'black',
      borderRadius: 10
    },
    input: {
      height: 40,
      width: '90%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white'
    },
    textLabel: {
      alignSelf: 'flex-start',
      marginLeft: '5%',
      marginTop: 5,
      fontWeight: 'bold'
    },
    image: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Configuration;