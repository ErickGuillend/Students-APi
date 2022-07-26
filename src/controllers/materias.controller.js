const Students  = require ("../models/Students");

exports.obtenerMaterias = async (req,res) => {

    try {
        if (req.params.idStu) {
            const  idStu = req.params.idStu;
            const students = await Students.findById(idStu);
            res.json (students.materias);
        }else {
            res.status(400).json({error: "Debe enviar el Id del estudiante"});
        }
    } catch (error) {
        res.status(500).json({error});
    }

}


exports.agregarMateria = async (req, res) => {
    try {
        if (req.params.idStu && req.body) {
            const idStu = req.params.idStu;
            const materia = req.body;
            const students = await Students.findById(idStu);

            students.materias.push(materia);
            await students.save ();

            res.json({isOk: true});
        }else {
            res.status(400).json({errror: "Datos insuficientes"});
        }

    } catch (error) {
        res.status(500).json({error});
    }
}

exports.eliminarMateria = async (req, res) => {

    try {
        
        if (req.params.idStu && req.params.idMat) {
            
            const idStu = req.params.idStu;
            const idMat = req.params.idMat;
            const students = await Students.findById(idStu);
            res.json({isOk: true});


            for (let index = 0; index < students.materias.length; index++) {
             //console.log(students.materias[index]);
             
                if (students.materias[index]._id == idMat) {
                    students.materias[index].splice (index, 1);
                }
            }
          await  students.save ();
          res.json({isOk: true});


        }else {
            res.status(400).json({error: "Incluya ID del Estudiante y Materia a eliminar"});
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

exports.actualizar = async (req, res) => {
    try {
        
        if (req.params.idStu && req.params.idMat && req.body) {
            const idStu = req.params.idStu;
            const idMat = req.params.idMat;
            const data = req.body;
            const students = await Students.findById(idStu);

            for (let index = 0; index < students.materias.length; index++) {
                //console.log(students.materias[index]);

                if (students.materias[index]._id == idMat) {
                    
                    Object.assign(students.materias[index], data);
                }
                
            }
            await students.save ();
            res.json({isOk: true});

        } else {
            res.status(400).json({error: "Debe enviar todos los datos"});

        }

    } catch (error) {
        res.status(500).json({error, isOk: false});
    }
}

