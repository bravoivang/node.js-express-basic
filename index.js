var express = require ('express');
var app = express();
/*
var bodyParser = require ('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
*/
var coches = [{
                "puertas": "2",
                "motor": "v8",
                "modelo": "2012",
              },
              {
                "puertas": "4",
                "motor": "v8",
                "modelo": "2012",
              },
              {
                "puertas": "4",
                "motor": "v6",
                "modelo": "2015",
              },
              {
                "puertas": "8",
                "motor": "v14",
                "modelo": "2018",
              },
              {
                "puertas": "2",
                "motor": "v2",
                "modelo": "2018",
              }
];


var puerto = 3000;
var server = app.listen(puerto, function(){
    console.log("Server corriendo en: ",puerto);
})
