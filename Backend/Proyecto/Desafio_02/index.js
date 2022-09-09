const fs = require('fs')


class Contenedor {
    constructor(rutaArchivo){
        this.rutaArchivo = rutaArchivo
    }

    async #leerArchivo() {
        try {
            const contenido = await fs.promises.readFile(this.rutaArchivo, 'utf-8')
            const contenidoParse = JSON.parse(contenido)
            console.log(contenidoParse)
            // return contenidoParse
        } catch (error) {
            console.log(error)
        }
    }

    async save(obj) {
        const contenidoArchivo = await this.#leerArchivo()
        if (contenidoArchivo.length !== 0) {
            await fs.promises.writeFile(this.rutaArchivo, JSON.stringify( [...contenidoArchivo, {...obj, id: contenidoArchivo[contenidoArchivo.length - 1].id + 1} ], null, 2 ), 'utf-8' ) // Guardo una copia de contenidoArchivo (...) mas un objeto nuevo // null, 2 para el guardado
        } else {
            await fs.promises.writeFile(this.rutaArchivo, JSON.stringify( [ {...obj, id: 1} ] ), 'utf-8' ) // Guardo el obj por primera vez y le asigno la id:1. (...)
        }
    }

    async getById(id) {
        const contenidoArchivo = await this.#leerArchivo()
        try {
          const objeto = contenidoArchivo.find((objeto) => objeto.id === id);
          console.log(objeto);
        } catch (error) {
          throw new Error(error, 'Error al obtener el producto por id');
        }
      }
    
      async getAll() {
        const contenidoArchivo = await this.#leerArchivo()
        console.log(contenidoArchivo);
      }
    
      async deleteById(id) {
        try {
          const content = await this.getAll();
          const deleted = content.filter((producto) => producto.id !== id);
          await fs.promises.writeFile(this.file, JSON.stringify(deleted, null, 4));
          console.log('Borrado');
        } catch (error) {
          console.log(`No se pudo eliminar el producto con id: ${id}.`);
        }
      }
    
      async deleteAll() {
        await fs.promises.writeFile(this.filePath, JSON.stringify([]), 'utf-8');
      }
    }


const contenedor = new Contenedor ('./productos.txt')

contenedor.save(
    {
        nombre: 'Eren Jager Ataque de Titanes',
        precio: '2500',
        id: 1,
      },
      {
        nombre: 'Jake Hora de Aventuras',
        precio: '850',
        id: 2,
      },
      {
        nombre: 'Tanjiro Demon Slayer',
        precio: '8000',
        id: 3,
      }
)
