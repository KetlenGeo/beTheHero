const express = require ('express')

const routes = express.Router()


routes.post('/users', (request, response) => {
    return response.json({ 
        message: "Helo Wold!" });
     });
 
 
module.exports = routes

