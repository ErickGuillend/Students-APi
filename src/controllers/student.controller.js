const Students = require("../models/Students");


exports.obtener = async (req,res) =>{
   
    try {
        const student = await Students.find({activo: true});
        res.json (student);
    } catch (error) {
        res.json(error);
    }
}


exports.agregar = async (req,res) =>{
    try { 
    const {nombre, correo, materias} = req.body;
    console.log(nombre);

    if (nombre && correo) {
        const newStudent = new Students ({nombre, correo, materias});
        await newStudent.save ();
        res.json ({message: "Datos recibidos satisfactoriamente", id: newStudent._id});
    } else { 
        res.json({isOk: false, msj: "Los datos son requiridos"});
    }
        
    } catch (error) {
      res.json (error); 
    }   
};


exports.actualizar = async (req,res) =>{
    try {
    const id  = req.params.id;
    const data = req.body;

    if (id && data) {
        await Students.findByIdAndUpdate (id, data);
    res.json ("Registro actualizado");
    }else{
        res.json ({msj: "Datos insuficientes"});
    }

    
    } catch (error) {
        res.status(500).json();
    }
}


exports.eliminar = async (req,res) =>{
    try {
    const id = req.params.id;
    console.log(id);
    const eliminado = await Students.findByIdAndUpdate(id, {activo: false});
    res.status(200).json ({msj:"Dato borrado de forma exitosa", isOk: true});
    } catch (error) {
    res.status(500).json({error});    
    }
}