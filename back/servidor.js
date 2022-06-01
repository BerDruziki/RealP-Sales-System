require('./db/mongodb.js');
const ProdutoRouter = require('./routes/produtoRoutes');
const express = require("express");
const morgan = require('morgan');

const srv = express();
srv.use(morgan('dev'));
srv.use(express.urlencoded({'extended' : true}));
srv.use(express.json());

srv.use('/produtos' , ProdutoRouter)

const get = (req , res) => res.send("Servidor Express (GET");
const log = console.log("Servidor Express rodando em http://localhost:3000 ...");
srv.get('/' , get);
srv.listen(3000, log);










