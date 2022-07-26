const { Schema, model } = require ("mongoose");

const studentSchema = new Schema ({
    nombre: {
        type: String,
        required: true
    },    
    correo: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    materias: [
        {
            nombre: String,
            calificacion: Number,
            comentario: String
        }
    ]

});

module.exports = model ("Student", studentSchema);