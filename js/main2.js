class Libro {

    constructor(titulo, autor, anio, genero, valoracion, id){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = parseInt(anio);
        this.genero = genero;
        this.valoracion = parseInt(valoracion);
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }
}

const libros = [

    new Libro("American Gods" , "Neil Gaiman" , 2001 , "Fantasia" , 6 , 1),
    new Libro("Némesis" , "Agatha Christie" , "1971" , "Misterio" , 8 , 2),
    new Libro("Los elefantes pueden recordar" , "Agatha Christie" , 1972 , "Misterio" , 7 , 3),
    new Libro("David Copperfield" , "Charles Dickens" , 1950 , "Novela" , 8 , 4),
    new Libro("Narciso y Golmundo" , "Herman Hesse" , 1930 , "Novela" , 9 , 5),
    new Libro("los borgia" , "mario Puzo" , 2001 , "Novela histórica" , 9 , 6),
    new Libro("El Hobbit" , "J.R.R. Tolkien" , 1937 , "Novela fantástica" , 10 , 7)
]

console.log(libros);

let continuar  = true;

while(continuar){
    let ingreso = prompt("Ingresa los datos del libro: titulo, autor, año, genero, puntaje del 1 al 10, separados por una barra diagonal (/). Ingresa X para finalizar");

    if (ingreso.toUpperCase() == "X") {
        continuar = false;
        break
    }

    const datos = ingreso.split("/");

    const libro = new Libro(datos[0],datos[1],datos[2],datos[3],datos[4]);

    libros.push(libro);
    libro.asignarId(libros);
    console.log(libros);
}

let criterio = prompt("Elegí el criterio deseado \n1 - Título (A a Z) \n2 - Título (Z a A) \n3 - Mejor a peor puntuado \n4 - Fecha de publicación (Más viejo a más nuevo)");

function ordenar(criterio , array) {
    let arrayOrdenado = array.slice(0);

    switch (criterio) {
        case "1":
            let nombreAscendente = arrayOrdenado.sort((a,b)=>a.titulo.localeCompare(b.titulo));
            return nombreAscendente;

        case "2":
            let nombreDescendente = arrayOrdenado.sort((b,a)=>b.titulo.localeCompare(a.titulo));
            return nombreDescendente;
        
        case "3":
            return arrayOrdenado.sort((a,b)=>b.valoracion - a.valoracion);

        case "4":
            return arrayOrdenado.sort((a,b)=>a.anio - b.anio);

        default:
            alert("No es un criterio válido");
            break;
    }
}

function crearStringResultado(array){
    let info="";

    array.forEach(elemento => {
        info+= "Título: "+elemento.titulo +"\nAutor: "+elemento.autor +"\nAño de publicación:" +elemento.anio +"\nValoración: " +elemento.valoracion +"puntis.\n\n"
    });

    return info;
}
alert(crearStringResultado(ordenar(criterio,libros)));