const express=require('express');
const app = express();
app.use(express.urlencoded());
app.use(express.json());

const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//app.use('/cliente', clienteController);
const cursoRouter = require('./cursoCRUD/cursoRouter');
app.use('/cursos', cursoRouter);

app.use('/', (req, res, next) => { res.status(200).json({code: 0, message: "Estás en la página de inicio"}) });

//conectar a mongoDB
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/DBlandIT";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        app.listen(port, () => { console.log('Corriendo en port ${port}') })
    })
    .catch(err => {
        console.log(err);
    });

app.listen(3000, function(){console.log("Bienvenido...Estas escuchando en el puerto 3000");});

























/*


//mongoose.connect('mongodb://localhost:27017/DBlandIT', { useNewUrlParser: true,useUnifiedTopology: true });

app.get('/', function(req, res) {
  res.send('Bienvenido... esta todo ok');
});


mongoose.connect('mongodb://localhost:27017/tareas', { useNewUrlParser: true,useUnifiedTopology: true });
var tareaSchema = new mongoose.Schema({
    nombre: String,
    finalizada: Boolean
    });

var Tarea = mongoose.model('Tarea', tareaSchema);
//listar
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