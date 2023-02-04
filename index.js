const express = require("express") //requerimos express
const port = 8080

const rutaAlumnos = require("./rutas/alumnos")

const app = express();

app.use(express.json()); //para aceptar json
app.use(express.urlencoded()); //para aceptar datos de un formulario HMTL

app.use("/alumnos",rutaAlumnos)

app.listen(port , ()=>{console.log("Aplicacion funcionando")} )
