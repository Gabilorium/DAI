let textoEntrada01 = "Escuela";
let textoEntrada02 = "ORT";
let textoSalida;

textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear();
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert(texto1,texto2){

    let chain = texto1+texto2;
    let separateChain = chain.split("")
    let invertChain = separateChain.reverse()
    let joinChain = invertChain.join("")
    console.log(joinChain);

    return joinChain;
}