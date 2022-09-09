const fs = require ('fs')
// console.log (fs)


/* Funcionalidades de fs SINCRONICAS (manejop de errores a travez de try / catch) ////////////////////

//Crear el  archivo data.txt
fs.writeFileSync ('./data.txt', 'Hola contenido FileSync \n', 'utf-8')  // \n es enter

//Agrega contenido al archivo creado, si el archivo no existe lo crea
fs.appendFileSync ('./data.txt', 'Contenido Agregado', 'utf-8')

//Leer el archivo creado
try {
    //data
    const data = fs.readFileSync ('./data.txt', 'utf-8')
console.log (data)
} catch (error) {
    console.log(error)
}

// Borra el archivo especificado
fs.unlinkSync ('./data.txt')
*/

/* Funcionalidades de fs ASINCRONICAS con CALLBACKS (cb) ////////////////////////

fs.writeFile ('./data.txt', 'Crear contenido y archivo FileASync \n', 'utf-8', err =>{ // solo el err ya que estoy modificando datos
    if (err) {
        console.log(err)
    } else {
        console.log ('Archivo creado')
    }
})

fs.appendFile ('./data.txt', 'Agregar este contenido', 'utf-8', err =>{ // solo el err ya que estoy agregando datos
    if (err) {
        console.log(err)
    } else {
        console.log ('Contenido agregado correctamente!')
    }
})


fs.readFile ('./datas.txt', 'utf-8', (err, texto) => {
    if (err) {
        console.log(err)
    } else {
        console.log (texto)
    }
} )

fs.unlink ('./data.txt', err =>{ // solo el err ya que estamos eliminando
    if (err) {
        console.log(err)
    } else {
        console.log ('Archivo eliminado correctamente!')
    }
})

//Crea una nueva carpeta
fs.mkdir ('./carpeta_nueva', err => {
    if (err){
        console.log(err)
    } else {
        console.log('Carpeta creada!')
    }
})


// Lee el directorio, devuelve un array
fs.readdir ('./carpeta_nueva', (err, contenidoArchivo) => {
    if (err) {
        console.log(err)
    } else {
        console.log(contenidoArchivo)
    }
})

*/

// Manejo de archivos con promesas ////////////////////////

/* LEER UN ARCHIVO con .promise

fs.promises.readFile ('./data.txt', 'utf-8') // No uso la cb ()=>{} como tercer parametro pq estoy usando .promises
.then(contenidoArchivo => {
    console.log(contenidoArchivo)
})
.catch( err => console.log(err) )
*/


//LEER UN ARCHIVO con asyn await
// Reemplazo then/catch por try/catch

const leerArchivo = async ()=>{

    try {
        await fs.promises.writeFile('./data.txt', 'Creando contenido' ,'utf-8')
        console.log('Archivo creado!')

        await fs.promises.appendFile('./data.txt', 'Agregando contenido' ,'utf-8')
        console.log('Contenido agregado!')

        const contenidoArchivo = await fs.promises.readFile ('./data.txt', 'utf-8') // sin await el console.log(contenidoArchivo) se ejecutaria antes del fs.promise y nos daria Promise { <pending> }
        console.log(contenidoArchivo)

        await fs.promises.rename('./data.txt', './datarename.txt')
        console.log('Nombre del archivo cambiado!')


    } catch (error) {
        console.log(error)
    }

}

leerArchivo()