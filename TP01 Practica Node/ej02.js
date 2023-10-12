import { suma, resta, dividir, multiplicar } from './src/modules/matematica.js'


console.clear();
Ejemplo()

function Ejemplo()
{
    let total;
    let num1 = 8;
    let num2 = 2;
    console.log("Hello world");
    
    total = suma(num1,num2)
    console.log(`la suma entre ${num1} y ${num2} es:  + ${total}`)
    
    total = resta(num1,num2)
    console.log(`la resta entre ${num1} y ${num2} es:  + ${total}`)
    
    total = dividir(num1,num2)
    console.log(`la division entre ${num1} y ${num2} es:  + ${total}`)
    
    total = multiplicar(num1,num2)
    console.log(`la multiplicacion entre ${num1} y ${num2} es:  + ${total}`)
}

