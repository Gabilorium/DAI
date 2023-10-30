import AsyncStorage from "@react-native-async-storage/async-storage"; 

//npm i @react-native-async-storage/async-storage 
//Definicionesdeconstantes. 
const PHONE_KEY='PHONE';
const VIDEO_KEY='VIDEO';
const MUSIC_KEY='MUSIC';
const BACKGROUND_KEY='BACKGROUND';

export default class DataService{ 
    //Elimina las credenciales almacenadas al cerrar sesión 
    deleteData = async() => { 
        try{
            await AsyncStorage.removeItem(PHONE_KEY); 
            await AsyncStorage.removeItem(VIDEO_KEY); 
            await AsyncStorage.removeItem(MUSIC_KEY); 
        }catch(e){
            console.log(e);
        }
    }; 

    saveData = async(phone, video, music) => { 
        //Almacena las credenciales en el asyncStorage
        try {    
            await AsyncStorage.setItem(PHONE_KEY, phone);  
            await AsyncStorage.setItem(VIDEO_KEY, video); 
            await AsyncStorage.setItem(MUSIC_KEY, music); 
            return true;
        } catch(e) {    
            console.log(e);
            return false;
        }
    }; 

    saveBackground = async(background) => { 
        //Almacena las credenciales en el asyncStorage
        try {    
            await AsyncStorage.setItem(BACKGROUND_KEY, background);  
            return true;
        } catch(e) {    
            console.log(e);
            return false;
        }
    }; 

    getBackground = async() => { 
        let storedBackground = await AsyncStorage.getItem(BACKGROUND_KEY);
        const returnValue = storedBackground; 
        return returnValue; 
    }; 

    getData = async() => { 
        let storedPhone = await AsyncStorage.getItem(PHONE_KEY);
        let storedVideo = await AsyncStorage.getItem(VIDEO_KEY);
        let storedMusic = await AsyncStorage.getItem(MUSIC_KEY);
        const returnValue = {'PHONE':storedPhone, 'VIDEO':storedVideo, 'MUSIC':storedMusic}; 
        return returnValue; 
    }; 
} 