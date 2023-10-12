import { getCountry } from 'currency-map-country';


let monedaDelPais, pais, abrPais; 

try{
    pais = 'Argentina';
    monedaDelPais = obtenerMoneda(pais); 
    abrPais = obtenerAbrebiacion(pais)
    console.log(`La abrebiación del país ${pais} es: ${abrPais} y su moneda es: ${monedaDelPais}`); 
    
    pais = 'UZA';
    monedaDelPais = obtenerMoneda(pais); 
    abrPais = obtenerAbrebiacion(pais)
    console.log(`La abrebiación del país ${pais} es: ${abrPais} y su moneda es: ${monedaDelPais}`); 
}
catch(error){
    console.log("No existe ese pais")
}



function obtenerMoneda(pais)
{
    let codigoPais
    codigoPais = getCountry(pais); 
    return codigoPais.cur
}

function obtenerAbrebiacion(pais)
{
    let codigoPais
    codigoPais = getCountry(pais); 
    return codigoPais.abbr
}