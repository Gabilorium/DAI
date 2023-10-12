let obj = SepararUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo")
console.log(obj)

function SepararUrl(url)
{
    const separar = new URL(url)
    let obj ={
        Host: separar.host,
        Pathname: separar.pathname,
        Parametros:  separar.searchParams
    }
    return obj
}