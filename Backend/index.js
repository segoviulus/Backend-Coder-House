class User {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    addMascotas(nombre) {
        this.mascotas.push(nombre)
    }
    countMascotas() {
        return `${this.getFullName()} tiene ${this.mascotas.length} Mascotas`
    }
    addBook(nombre, autor) {
        let book = { nombre: nombre, autor: autor }
        return this.libros.push(book)
    }
    getBookNames() {
        let bookNames = this.libros.map((libro) => {
            return libro.nombre
        })
        return `Los libros de ${this.getFullName()} son: ${bookNames}`
    }
}

const usuario01 = new User("Ariel", "Segovia")

usuario01.addMascotas("Matilde")
usuario01.addMascotas("Teo")
usuario01.addBook("Ami, el niño de las estrellas", "Todo Quino")
usuario01.addBook("Asterix y Obelix", "Mafalda")
console.log(usuario01)
console.log(usuario01.countMascotas());
console.log(usuario01.getBookNames());