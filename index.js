var express = require ('express');
var app = express();
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

app.get('/frases', function (req,res) {
    res.sendFile('C:/Users/Ivan/Documents/Learning/express/node.js-express-basic/index.html');
});



var puerto = 3000;
var server = app.listen(puerto, function(){
    console.log("Server corriendo en: ",puerto);
})
