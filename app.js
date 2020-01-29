var express=require('express');
var app = express();
app.use(express.urlencoded());
app.use(express.json());
//conectar a mongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tareas', { useNewUrlParser: true,useUnifiedTopology: true });
/*
var tareaSchema = new mongoose.Schema({
    nombre: String,
    finalizada: Boolean
    });

var Tarea = mongoose.model('Tarea', tareaSchema);
app.get('/tareas', async function(req, res){
    var listado = await Tarea.find();
    res.json(listado);
});

//buscar
app.get('/tareas/:id', async function(req, res) {
    var obj = await Tarea.findById(req.params.id);
    res.json(obj);
  });

//dar de alta una tarea tipo api
app.post('/tareas', async function(req, res){
    var obj = new Tarea();
    obj.nombre = req.body.nombre;
    obj.finalizada = req.body.finalizada;
    await obj.save();
    res.json(obj);
})

app.put('/tareas/:id', async function(req, res) {
    var obj = await Tarea.findById(req.params.id);
    obj.nombre = req.body.nombre;
    obj.finalizada = req.body.finalizada;
    await obj.save();
    res.json(obj);
  });
  
  app.delete('/tareas/:id', async function(req, res) {
    var obj = await Tarea.findByIdAndRemove(req.params.id);
    res.send('ok');
  });
  

app.get('/', function(req, res) {
    res.send('ok');
  });*/
app.listen(3000, function(){console.log("Bienvenido...Estas escuchando en el puerto 3000");});