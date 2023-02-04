const express = require("express");
const router = express.Router();

const {coderHouse} = require("../coderManager");

router.get("/",(req,res)=>{

    const alumnos = coderHouse.verAlumnos()
    res.send({mensaje:"Objetos Devueltos", objetos:alumnos})

})

router.get("/:id",(req,res)=>{

    const id = req.params.id

    const alumno = coderHouse.verPorID(id)
    res.send(alumno)

})

router.post("/",(req,res)=>{

    const body = req.body

    coderHouse.agregarAlumno(body)

    res.send("Un objeto fue creado")

})

router.put("/:id",(req,res)=>{

    const id = req.params.id
    const body = req.body

    coderHouse.actualizarAlumno(id,body)

    const alumnoActualizado = coderHouse.verPorID(id)

    res.send({mensaje:`Objeto ${id} Actualizado`, objeto:alumnoActualizado})

})

router.delete("/:id",(req,res)=>{

    const id = req.params.id

    coderHouse.eliminarAlumno(id)

    res.send(`El objeto ${id}, fue eliminado`)

})

module.exports = router