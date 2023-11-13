import MessageConstants from "../Constants/MessageConstants";
import Profile from "../models/Profile";
import AsyncStorageUtil from "../Utils/AsyncStorageUtil";

//npm i @react-native-async-storage/async-storage 
//Definicionesdeconstantes. 
const USER_PROFILE = "USER_PROFILE";

export default class DataService{ 
    //Elimina las credenciales almacenadas al cerrar sesión 
    deleteData = async() => { 
        try{
            await AsyncStorageUtil.removeKey(USER_PROFILE)
        }catch(e){

        }
    }; 

    saveData = async(profile) => { 
        //Almacena las credenciales en el asyncStorage
        try {    
            await AsyncStorageUtil.setObject(USER_PROFILE, profile)
        } catch(e) {    

        }
    }; 

    /*saveBackground = async(background) => { 
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
    }; */

    getData = async () => { 
        let profile = new Profile()
        //let returnValue;
        try{
            profile = await AsyncStorageUtil.getObject(USER_PROFILE, profile)
        }catch{
            //console.error(MessageConstants.MSG_INCOMPLETE_FIELDS)
        }
        return profile; 
    }; 
} 