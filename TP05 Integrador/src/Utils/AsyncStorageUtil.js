import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageConstants from "../Constants/MessageConstants";

class AsyncStorageUtil{

    /**
    * @param {*} key
    * @param {*} value
    * @returns
    */
    setString = async (key, value) =>{
        let returnValue = false;
        try{
            await AsyncStorage.setItem(key,value);
            returnValue = true;
        }catch(e){
            
        }
        return returnValue;
    }

    /**
    * @param {*} key
    * @param {*} value
    * @returns
    */
    setObject = async (key, object) =>{
        let returnValue = false;
        try{
            const jsonString = JSON.stringify(object)
            returnValue=await AsyncStorage.setItem(key,jsonString);
        }catch(e){
            console.error(MessageConstants.MSG_INCOMPLETE_FIELDS, e)
        }
        return returnValue;
    }

    /**
    * @param {*} key
    * @param {*} value
    * @returns
    */
    getString = async (key, defaultValue) =>{
        let returnValue = defaultValue;
        try{
            returnValue= await AsyncStorage.getItem(key);
        }catch(e){
            
        }
        return returnValue;
    }

    /**
    * @param {*} key
    * @param {*} value
    * @returns
    */
    getObject = async (key, defaultValue) =>{
        let returnValue = defaultValue;
        try{
            const jsonString = AsyncStorageUtil.getString(key,null)
            returnValue= ((jsonString != null) ? JSON.parse(jsonString) : defaultValue);
        }catch(e){
            console.error(MessageConstants.MSG_INCOMPLETE_FIELDS, e)
        }
        return returnValue;
    }

    /**
    * @param {*} key
    * @param {*} value
    * @returns
    */
    removeKey = async (key) =>{
        let returnValue = true;
        try{
            await AsyncStorage.removeItem(key);
            returnValue = true;
        }catch(e){
            
        }
        return returnValue;
    }
}
export default AsyncStorageUtil;