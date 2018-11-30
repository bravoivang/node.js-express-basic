var express = require ('express');

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

/*
var bodyParser = require ('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
*/
var frases = ["Sos una excelente persona",
            "Es culpa tuya",
            "Jupiter esta retornando a su casa",
            "Un mal día lo tiene cualquiera",
            "Macri = Macron",
            "La vida es bella con plata",
            "Te pasa por haberlo votado",
            "Agarra la pala"];

app.get('/', function (req,res) {
    res.sendFile('C:/Users/Ivan/Documents/Learning/express/node.js-express-basic/index.html');
});

app.get('/consulta', function (req, res) {
    res.send(selector());
});

app.put('/edicion', function (req, res){
    var indice = req.body.id;
    var texto = req.body.text;
    editor(indice,texto,function (statusCode){
        res.sendStatus(statusCode);
    });
    
});

app.post('/agregar', function (req, res){
    var texto = req.query.texto;
    agregador(texto,function (statusCode){
        res.sendStatus(statusCode);
    });
});

app.delete('/elimnar', function (req, res){
    var indice = req.query.id;
    eliminador(indice,function(statusCode){
        res.sendStatus(statusCode);
    });
});

function selector (){
    var ext = frases.length-1;
    var rnd = Math.ceil(Math.random()*ext%ext);
    return frases[rnd];
}
function editor (indice, contenido, callback){
    if (indice >= frases.length ){
        callback(400);
    }     
    frases[indice] = contenido ;
    callback(200);
}

function eliminador (indice, callback){
    frases.splice(indice,1);
    callback(200);
}

function agregador (contenido, callback){
    frases.push(contenido);
    callback(200);
}

var puerto = 3000;
var server = app.listen(puerto, function(){
    console.log("Server corriendo en: ",puerto);
})
