var DbEncuesta;
var mongoose = require('mongoose');
var db;
mongoose.connect('mongodb://useradmin:useradmin@ds153413.mlab.com:53413/encuestadb', function(error){
   if(error){
      throw error; 
   }else{
      console.log('Conectado a MongoDB');
    var database = mongoose.connection;
    database.on('error', console.error.bind(console, 'connection error:'));
        database.once('open', function() {
     // we're connected!
        });
        db=database.db;
    db.createCollection("Usuarios");
    console.log('Conectado a MongoDB');
    db.createCollection("Encuestas");
    db.createCollection("Historicos_Encuestas");
    //console.log(db.collection("Usuarios").count());
    db.collection("Usuarios").insert({ mail: "Admin", edad: 26, 
    amigos: ["usuarioJefe", "UsuarioGestor"],
    gustos: ["Videojuegos", "salud"]
   });
    db.close();
    
   }
});
