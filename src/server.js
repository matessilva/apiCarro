require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors'); //permite acessos para trabalhar com API's
const bodyParser = require('body-parser'); //Modulo capaz de converter Body de requisição para vários outros formatos

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));

server.use('/api', routes);

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
})