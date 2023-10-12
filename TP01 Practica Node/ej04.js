import fs from 'fs'

const ARCHIVO_ENTRADA_INVALIDO = "./entradaXXXX.txt";
const ARCHIVO_ENTRADA = "./entrada.txt";
const ARCHIVO_SALIDA = "./salida.txt";

console.clear();
//El Primero es para comprobar el cambio
test_Read_Archive();
test_Coppy_Archive()
test_Read_Archive();

function test_Read_Archive()
{
    let text1 = fs.readFileSync(ARCHIVO_ENTRADA, "utf8");
    console.log(text1);
    
    let text2 = fs.readFileSync(ARCHIVO_SALIDA, "utf8")
    console.log(text2);
}


function test_Coppy_Archive(){
    coppy(ARCHIVO_ENTRADA,ARCHIVO_SALIDA)
}

function coppy(archivoOriginal,archivoDestino){

    const contenido = fs.readFileSync(archivoOriginal, 'utf8');
    fs.writeFileSync(archivoDestino, contenido);

}
