let urlIngresada = "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"
try
{
    let obj = SepararUrl(urlIngresada)
    console.log(obj)
}
catch(error)
{
    console.log("No se encontró la url")
}

function SepararUrl(url)
{
    const separar = new URL(url)
    let obj ={
        Host:separar.host,
        Pathname:separar.pathname,
        Parametros: separar.searchParams
    }
    return obj
}