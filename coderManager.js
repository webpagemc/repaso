const fs = require("fs");

class CoderManager{

    constructor(ruta){ 

        this.ruta = ruta

    }

    //FileSystem

    leerArchivo(){

        const data = fs.readFileSync(`${this.ruta}`,"utf-8")
        return JSON.parse(data)

    }

    escribirArchivo(data){

        fs.writeFileSync(`${this.ruta}`, JSON.stringify(data))

    }

    //Funcion generadora de IDs

    generarID(){

        const alumnos = this.leerArchivo()

        const ultimoID = alumnos.pop()

        if(ultimoID){ return ultimoID.id + 1  } else { return 1 }

    }

    //Ver / Ver (ID) / Crear / Actualizar / Eliminar

    verAlumnos(){

        const alumnos = this.leerArchivo()
        return alumnos

    }


    verPorID(id){

        const alumnos =  this.leerArchivo()
        const alumno =  alumnos.find( alumno => +alumno.id === +id )

        return alumno

    }

    agregarAlumno(objeto){

        const nuevoAlumno = { ...objeto, id: this.generarID() }

        const alumnos = this.leerArchivo()
        alumnos.push(nuevoAlumno)

        this.escribirArchivo(alumnos)

    }

    eliminarAlumno(id){

        const alumnos = this.leerArchivo()
        const alumnosFiltrados = alumnos.filter( alumno => +alumno.id !== +id )

        this.escribirArchivo(alumnosFiltrados)

    }

    actualizarAlumno(id,objeto){

        const alumnos = this.leerArchivo()
        alumnos.map(
            (alumno)=>{

            if(+alumno.id === +id){

                alumno.nombre = objeto.nombre || alumno.nombre ,
                alumno.apellido = objeto.apellido || alumno.apellido ,
                alumno.edad = objeto.edad || alumno.edad,
                alumno.curso = objeto.curso || alumno.curso
                alumno.id = id

            }

        })

        this.escribirArchivo(alumnos)
    }

}

const coderHouse = new CoderManager("./json/alumnos.json")

module.exports = {coderHouse}
