class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;

    }


    getFUllName(){
        return ${this.nombre} ${this.apellido};
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(bkname,bkautor){
        this.libros.push({nombre:bkname,autor:bkautor});
    }

    getBookNames(){
        return this.libros.map(({ nombre }) => nombre);
    }
}


let usuario = new Usuario('Alvaro','Garcia',[{nombre:'Libro1',autor:'Autor1'}],['Papagallo','Ornitorrinco']);

console.log(usuario.getFUllName());

console.log(usuario.countMascotas());

usuario.addMascota('Mono');
usuario.addMascota('Perro');
usuario.addMascota('Gato');

console.log(usuario.countMascotas());


console.log(usuario.getBookNames());

usuario.addBook('Libro2','Autor2');
usuario.addBook('Libro3','Autor3');

console.log(usuario.getBookNames());
