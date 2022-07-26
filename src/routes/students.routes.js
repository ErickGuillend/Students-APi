const {Router} = require ("express");
const cntStudents = require ("../controllers/student.controller");
const studentsRouter = Router ();

studentsRouter.get ('/', cntStudents.obtener );


studentsRouter.post ('/', cntStudents.agregar);


studentsRouter.put ('/:id', cntStudents.actualizar);


studentsRouter.delete ('/:id', cntStudents.eliminar);

module.exports = studentsRouter;