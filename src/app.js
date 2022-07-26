const express = require ("express");
const morgan = require ("morgan");
const conexionDb = require ("./db.conexion");
const studentsRouter = require ("./routes/students.routes");
const routeMaterias = require ("./routes/materias.routes");
const app = express ();

//Llamando a la conexión con Base de datos
conexionDb();


//Settings
app.set ("name", "rest-api-nodejs");
app.set ("port", process.env.port || 3500);

//Middleware
app.use (express.json());
app.use(morgan("dev"));


//Llamado de Rutas



app.use (express.static("public"));  
app.use ("/api/students", studentsRouter);
app.use("/api/materias", routeMaterias);


module.exports = app;