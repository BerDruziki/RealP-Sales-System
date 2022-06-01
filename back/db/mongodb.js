const mongoose = require("mongoose");

// var str_connection = "";
var URL = 'mongodb://localhost:27017/RealPromos';

mongoose.connect(URL);
const con = mongoose.connection;

con.on('open', function(){
    console.log('Conectado ao MongoDB!');
});

con.on('error', function(){
  console.log('Erro na conexão com o MongoDB!');
});

con.on('close', function(){
  console.log('Desconetado do MongoDB!');
});