const { Router } = require ("express");
const ctrMaterias = require ("../controllers/materias.controller");

const routeMaterias = Router ();



routeMaterias.get("/:idStu", ctrMaterias.obtenerMaterias);
routeMaterias.post("/:idStu", ctrMaterias.agregarMateria);
routeMaterias.delete("/:idStu/:idMat", ctrMaterias.eliminarMateria);
routeMaterias.put("/:idStu/:idMat", ctrMaterias.actualizar);

module.exports = routeMaterias;