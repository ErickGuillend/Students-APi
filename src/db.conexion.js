const mongoose = require('mongoose');

const conexionDB = async () =>{

   try {
   const DB = await mongoose.connect('mongodb://localhost:27017/test-students');
   console.log("La conexión se ha establecido de forma satisfactoria: ", DB.connection.name);
   } catch (error) {
        console.log(error);
   }

}

module.exports = conexionDB;
