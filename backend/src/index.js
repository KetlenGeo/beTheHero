const express = require('express');

const routes = require('./routes')

const app = express();

app.use(express.json())

// rota = '/' = recurso 

// MÉTODOS HTTP BACK-END
// * GET = buscar/listar uma informção do 
// * POST = Cria uma informação
// * PUT = alterar uma informação 
// * Delet = Deletar uma informação




// TIPOS DE PARAMETRO 
// Querry = parametros nomeados enviados a rota após "?" (filtros, paginação
// Route = identifica recursos
// Requeste body = corpo da requisição utiizado para criar / alterar recursos

app.use(routes);

app.listen(3333);


