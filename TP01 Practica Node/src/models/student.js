export default class Student{
    constructor(username, dni) {
        this.username = username;
        this.dni = dni;
    }

    getUsername(){
        return this.username;
    }

    getDNI(){
        return this.dni;
    }

    toString(){
        return `Username: ${this.getUsername()}, DNI: ${this.getDNI()}`
    }

    
}

