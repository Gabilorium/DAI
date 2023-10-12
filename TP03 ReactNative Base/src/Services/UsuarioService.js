import AsyncStorage from "@react-native-async-storage/async-storage";

const USERNAME_KEY='LOGIN_Usuario';
const PASSWORD_KEY='LOGIN_Password';

class UsuarioService{

    login = async(username,password) => {
        let isValid = false;
        if ((username != null) && (password != null)) {
            isValid = ((username.toLowerCase() === 'gabi') && (password.toLowerCase()=== 'chedar'))
        }
        console.log('UsuarioService.login', isValid);
        return isValid;
    }

    autoLogin = async() => {
        let isValid = false;
        const storedCredentials = await this.obtenerCredenciales();
        isValid = await this.login(storedCredentials.username, storedCredentials.password);
        console.log('UsuarioService.autoLogin', isValid);
        return isValid;
    }

    obtenerCredenciales = async() => {
        let storedUserName = null;
        let storedPassword = null;

        try{
            storedUserName = await AsyncStorage.getItem(USERNAME_KEY);
            storedPassword = await AsyncStorage.getItem(PASSWORD_KEY);
        }catch(error){
            console.log('Error al almacenar en el AsyncStorage.', error);
        }
        const returnValue = {'username': storedUserName, 'password' : storedPassword};

        console.log('UsuarioService.obtenerCredenciales', returnValue);
        return returnValue;
    }

    eliminarCredenciales = async() => {
        console.log('UsuarioService.eliminarCredenciales');
        try{
            await AsyncStorage.removeItem(USERNAME_KEY);
            await AsyncStorage.removeItem(PASSWORD_KEY);
        }catch(error){
            console.log('Error al eliminar en el AsyncStorage.', error);
        }
    }

    almacenarCredenciales = async(username,password) => {
        console.log('UsuarioService.almacenarCredenciales');
        try{
            await AsyncStorage.setItem(USERNAME_KEY, username);
            await AsyncStorage.setItem(PASSWORD_KEY, password);
        }catch(error){
            console.log('Error al almacenar en el AsyncStorage.', error);
        }
    }
}
export default UsuarioService;